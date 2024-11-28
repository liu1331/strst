
import css from "./style.module.scss";
interface IThumbProps {
    className?:string;
    
}
export const SwitchThumb = ({}: IThumbProps) => {
  return <span className={css.thumb} />;
};
