import { memo } from "react";
import cls from "./Overlay.module.scss";
import clsx from "clsx";

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

export const Overlay = (props: OverlayProps) => {
  const { className, onClick } = props;

  return (
    <div onClick={onClick} className={clsx(cls.overlay,className)} />
  );
};
