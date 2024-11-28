import { HTMLAttributes, PropsWithChildren } from "react";
import css from "./style.module.scss";
import clsx from "clsx";
interface ISwitchRootProps extends PropsWithChildren {
  className?: string;
  style?: HTMLAttributes<HTMLSpanElement>["style"];
}
export const SwitchRoot = ({
  children,
  className,
  style,
}: ISwitchRootProps) => {
  return (
    <span style={style} className={clsx(css.switchRoot, className)}>
      {children}
    </span>
  );
};
