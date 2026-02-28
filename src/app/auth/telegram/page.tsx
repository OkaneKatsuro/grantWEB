"use client";

import { useEffect, useState } from "react";

type Status = "loading" | "success" | "error";

export default function TelegramAuthPage() {
  const [status, setStatus] = useState<Status>("loading");
  const [error, setError] = useState("");

  const verify = async () => {
    setStatus("loading");
    setError("");

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
          body: JSON.stringify({ tgAuthResult }),
        }
      );

      if (!res.ok) {
        const body = await res.text();
        throw new Error(body || `Ошибка сервера: ${res.status}`);
      }

      const tokens = await res.json();

      localStorage.setItem("accessToken", tokens.accessToken);
      localStorage.setItem("refreshToken", tokens.refreshToken);

      setStatus("success");
      window.location.href = "/";
    } catch (e) {
      setError(e instanceof Error ? e.message : "Неизвестная ошибка");
      setStatus("error");
    }
  };

  useEffect(() => {
    verify();
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm text-center">
        {status === "loading" && (
          <>
            <div
              className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-grey border-t-orange"
            />
            <p className="text-foreground font-[family-name:var(--font-ru)]">
              Авторизация через Telegram...
            </p>
          </>
        )}

        {status === "error" && (
          <>
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 text-xl">
              !
            </div>
            <p className="mb-2 text-lg font-semibold text-foreground font-[family-name:var(--font-ru)]">
              Не удалось войти
            </p>
            <p className="mb-6 text-sm text-dark-grey font-[family-name:var(--font-ru)]">
              {error}
            </p>
            <button
              onClick={verify}
              className="rounded-lg bg-orange px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-deep-orange font-[family-name:var(--font-ru)]"
            >
              Попробовать снова
            </button>
          </>
        )}
      </div>
    </div>
  );
}
