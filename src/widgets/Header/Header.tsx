import { Button } from "@/shared/ui/Button";
import css from "./style.module.scss";
interface IProps {
  type: "private" | "public";
}
export const Header = ({ type }: IProps) => {
  return (
    <header className={css.headerRoot}>
      {type === "public" ? <Button className={css.link}>Log in</Button> : null}
    </header>
  );
};
