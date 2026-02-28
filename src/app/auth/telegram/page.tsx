"use client";

import { useEffect, useRef, useState } from "react";

type Status = "loading" | "waiting_bot" | "error";

const POLL_INTERVAL = 3000;
const POLL_TIMEOUT = 120000;

export default function TelegramAuthPage() {
  const [status, setStatus] = useState<Status>("loading");
  const [error, setError] = useState("");
  const [botUrl, setBotUrl] = useState("");
  const pollingRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopPolling = () => {
    if (pollingRef.current) {
      clearInterval(pollingRef.current);
      pollingRef.current = null;
    }
  };

  const storeAndRedirect = (result: { accessToken: string }) => {
    localStorage.setItem("accessToken", result.accessToken);
    window.location.href = "/";
  };

  const pollFinalize = (sessionId: string) => {
    const start = Date.now();

    pollingRef.current = setInterval(async () => {
      if (Date.now() - start > POLL_TIMEOUT) {
        stopPolling();
        setError("Время ожидания истекло. Попробуйте снова");
        setStatus("error");
        return;
      }

      try {
        const res = await fetch(
          "https://api.rentflow.tech/auth/telegram/finalize",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ sessionId }),
          }
        );

        if (res.status === 404) return;

        if (!res.ok) {
          const body = await res.text();
          throw new Error(body || `Ошибка сервера: ${res.status}`);
        }

        stopPolling();
        const tokens = await res.json();
        storeAndRedirect(tokens);
      } catch (e) {
        stopPolling();
        setError(e instanceof Error ? e.message : "Неизвестная ошибка");
        setStatus("error");
      }
    }, POLL_INTERVAL);
  };

  const verify = async () => {
    stopPolling();
    setStatus("loading");
    setError("");
    setBotUrl("");

    try {
      const hash = window.location.hash;
      const match = hash.match(/tgAuthResult=([^&]+)/);

      if (!match) {
        throw new Error("Параметр tgAuthResult не найден в URL");
      }

      const tgAuthResult = match[1];

      const res = await fetch(
        "https://api.rentflow.tech/auth/telegram/verify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ tgAuthResult }),
        }
      );

      if (!res.ok) {
        const body = await res.text();
        throw new Error(body || `Ошибка сервера: ${res.status}`);
      }

      const result = await res.json();

      if (result.accessToken) {
        storeAndRedirect(result);
        return;
      }

      if (result.url) {
        const url = new URL(result.url);
        const sessionId = url.searchParams.get("start");

        if (!sessionId) {
          throw new Error("Не удалось получить sessionId");
        }

        setBotUrl(result.url);
        setStatus("waiting_bot");
        window.open(result.url, "_blank");
        pollFinalize(sessionId);
        return;
      }

      throw new Error("Неожиданный ответ сервера");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Неизвестная ошибка");
      setStatus("error");
    }
  };

  useEffect(() => {
    verify();
    return stopPolling;
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm text-center font-[family-name:var(--font-ru)]">
        {status === "loading" && (
          <>
            <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-grey border-t-orange" />
            <p className="text-foreground">Авторизация через Telegram...</p>
          </>
        )}

        {status === "waiting_bot" && (
          <>
            <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-grey border-t-orange" />
            <p className="mb-2 text-foreground">
              Отправьте номер телефона боту
            </p>
            <a
              href={botUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange hover:text-deep-orange font-medium transition-colors"
            >
              @rentflowtestbot
            </a>
          </>
        )}

        {status === "error" && (
          <>
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 text-xl">
              !
            </div>
            <p className="mb-2 text-lg font-semibold text-foreground">
              Не удалось войти
            </p>
            <p className="mb-6 text-sm text-dark-grey">{error}</p>
            <button
              onClick={verify}
              className="rounded-lg bg-orange px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-deep-orange"
            >
              Попробовать снова
            </button>
          </>
        )}
      </div>
    </div>
  );
}
