"use client";

import { useEffect, useState } from "react";

type Status = "loading" | "error" | "expired";

export default function TgFinalizePage() {
  const [status, setStatus] = useState<Status>("loading");
  const [error, setError] = useState("");

  const finalize = async () => {
    setStatus("loading");
    setError("");

    try {
      const params = new URLSearchParams(window.location.search);
      const sessionId = params.get("sessionId");

      if (!sessionId) {
        throw new Error("Параметр sessionId не найден в URL");
      }

      const res = await fetch(
        "https://api.rentflow.tech/auth/telegram/finalize",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ sessionId }),
        }
      );

      if (res.status === 404) {
        setStatus("expired");
        return;
      }

      if (!res.ok) {
        const body = await res.text();
        throw new Error(body || `Ошибка сервера: ${res.status}`);
      }

      const result = await res.json();

      if (result.accessToken) {
        localStorage.setItem("accessToken", result.accessToken);
      }

      window.location.href = "/";
    } catch (e) {
      setError(e instanceof Error ? e.message : "Неизвестная ошибка");
      setStatus("error");
    }
  };

  useEffect(() => {
    finalize();
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm text-center font-[family-name:var(--font-ru)]">
        {status === "loading" && (
          <>
            <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-grey border-t-orange" />
            <p className="text-foreground">Завершаем авторизацию...</p>
          </>
        )}

        {status === "expired" && (
          <>
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 text-xl">
              !
            </div>
            <p className="mb-2 text-lg font-semibold text-foreground">
              Сессия истекла
            </p>
            <p className="mb-6 text-sm text-dark-grey">
              Попробуйте авторизоваться заново
            </p>
            <a
              href="/auth/telegram"
              className="inline-block rounded-lg bg-orange px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-deep-orange"
            >
              Войти снова
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
              onClick={finalize}
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
