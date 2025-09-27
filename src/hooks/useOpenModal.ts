import { useState, useRef, useEffect } from 'react';

export const usePhoneModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Pequeño delay para asegurar que el modal esté en el DOM antes de enfocar
      setTimeout(() => closeButtonRef.current?.focus(), 60);
    }
  }, [isOpen]);

  return {
    isModalOpen: isOpen,
    openModal: () => setIsOpen(true),
    closeModal: () => setIsOpen(false),
    modalCloseRef: closeButtonRef,
  };
};