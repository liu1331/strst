import clsx from "clsx";
import { ChangeEvent, forwardRef, useState } from "react";
import css from "./style.module.scss";
interface ISwitchBaseProps {
  defaultChecked?: boolean;
  classes?: {
    className?: string;
    checked?: string;
    disabled?: string;
  };
  icons: {
    default: any;
    checked: any;
  };
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: boolean) => void;
  ref: React.ForwardedRef<HTMLInputElement>;
}
export const SwitchBase = forwardRef<HTMLInputElement, ISwitchBaseProps>(
  function SwitchBase(props, ref) {
    const { classes, onChange, defaultChecked, icons, disabled } = props;
    const [checked, setCheckedState] = useState(!!defaultChecked);
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newChecked = event.target.checked;

      setCheckedState(newChecked);

      if (onChange) {
        onChange(event, newChecked);
      }
    };

    const modes = [
      checked && clsx(css.checked, classes?.checked),
      disabled && clsx(css.disabled, classes?.disabled),
    ];


    return (
      <span className={clsx(css.switchBase, classes?.className, modes)}>
        <input
          ref={ref}
          disabled={disabled}
          onChange={handleInputChange}
          className={css.switchBaseInput}
          type="checkbox"
          checked={checked}
        />
        {checked ? icons.checked : icons.default}
      </span>
    );
  },
);
