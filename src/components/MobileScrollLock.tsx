'use client';

import { useEffect } from 'react';

export default function MobileScrollLock() {
    useEffect(() => {
        // Функция для блокировки скролла
        const lockScroll = () => {
            document.body.style.overflow = 'hidden';
        };

        // Функция для разблокировки скролла
        const unlockScroll = () => {
            document.body.style.overflow = 'unset';
        };

        // Функция для проверки состояния мобильного меню
        const checkMobileMenuState = () => {
            const mobileMenuOverlay = document.querySelector('.lg\\:hidden.fixed.inset-0');
            if (mobileMenuOverlay && mobileMenuOverlay.style.display !== 'none') {
                lockScroll();
            } else {
                unlockScroll();
            }
        };

        // Наблюдатель за изменениями в DOM
        const observer = new MutationObserver(() => {
            checkMobileMenuState();
        });

        // Начинаем наблюдение
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['style', 'class']
        });

        // Проверяем состояние при загрузке
        checkMobileMenuState();

        // Очистка при размонтировании
        return () => {
            observer.disconnect();
            unlockScroll();
        };
    }, []);

    return null;
}
