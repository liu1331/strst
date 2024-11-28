import clsx from "clsx";
import css from "./style.module.scss";
interface ISwitchTrackProps {
  className?: string;
}
export const SwitchTrack = ({ className }: ISwitchTrackProps) => {
  return <span className={clsx(css.switchTrack, className)} />;
};
