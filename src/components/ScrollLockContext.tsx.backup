'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ScrollLockContextType {
    isLocked: boolean;
    lockScroll: () => void;
    unlockScroll: () => void;
}

const ScrollLockContext = createContext<ScrollLockContextType | undefined>(undefined);

export function ScrollLockProvider({ children }: { children: ReactNode }) {
    const [isLocked, setIsLocked] = useState(false);

    const lockScroll = () => {
        if (window.innerWidth < 1024) {
            setIsLocked(true);
        }
    };

    const unlockScroll = () => {
        setIsLocked(false);
    };

    useEffect(() => {
        if (isLocked) {
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.position = 'unset';
            document.body.style.width = 'unset';
        }

        // Очистка при размонтировании
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.position = 'unset';
            document.body.style.width = 'unset';
        };
    }, [isLocked]);

    return (
        <ScrollLockContext.Provider value={{ isLocked, lockScroll, unlockScroll }}>
            {children}
        </ScrollLockContext.Provider>
    );
}

export function useScrollLock() {
    const context = useContext(ScrollLockContext);
    if (context === undefined) {
        throw new Error('useScrollLock must be used within a ScrollLockProvider');
    }
    return context;
}
