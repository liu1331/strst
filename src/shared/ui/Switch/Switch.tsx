import { forwardRef, useMemo } from "react";
import { SwitchBase, SwitchRoot, SwitchThumb, SwitchTrack } from "./components";
import { createSwitchVars, SwitchSettingsType } from "./config";

interface ISwitchProps {
  defaultChecked?: boolean;
  settings: SwitchSettingsType;
  classes?: {
    root?: string;
    base?: string;
    track?: string;
    thumb?: string;
    checked?: string;
    disabled?: string;
  };
  disabled?: boolean;
  onChange?: (event: any, value: boolean) => void;
}
export const Switch = forwardRef<HTMLInputElement, ISwitchProps>(
  function Switch({ classes, settings, ...baseProps }, ref) {
    const icon = <SwitchThumb className={classes?.thumb} />;

    const style = useMemo(() => {
      return createSwitchVars(settings);
    }, []);
    return (
      <SwitchRoot className={classes?.root} style={style}>
        <SwitchBase
          icons={{
            checked: icon,
            default: icon,
          }}
          classes={{
            className: classes?.base,
            checked: classes?.checked,
            disabled: classes?.disabled,
          }}
          ref={ref}
          {...baseProps}
        />
        <SwitchTrack className={classes?.track} />
      </SwitchRoot>
    );
  },
);
