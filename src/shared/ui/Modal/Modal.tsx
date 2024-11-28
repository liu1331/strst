'use client'
import React, { ReactNode } from "react";
import { useModal } from "@/shared/lib/hooks/useModal";
import { Overlay } from "../Overlay";
import { Portal } from "../Portal";
import cls from "./Modal.module.scss";
import clsx from "clsx";
// import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props;

  const { close, isClosing, isMounted } = useModal({
    animationDelay: ANIMATION_DELAY,
    onClose,
    isOpen,
  });

  // const { theme } = useTheme();
  const theme = "light";
  const mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal element={document.getElementById("app") ?? document.body}>
      <div className={clsx(cls.Modal, mods, [className, theme, "app_modal"])}>
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};
