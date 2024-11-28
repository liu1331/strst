import { HTMLAttributes } from "react";

export const switchConfig = {
  root: {
    width: 42,
    height: 22,
    padding: 1,
    margin: 0,
  },
  base: {
    padding: 1.25,
  },
  track: {
    color: {
      default: "rgba($color: #ffffff, $alpha: 0.1)",
      checked: "#1976d2",
    },
  },
  thumb: {
    width: 18,
    height: 18,
    color: {
      default: "#fff",
      checked: "#fff",
    },
  },
};

type SwitchVatiableNames =
  | "--switch-root-w"
  | "--switch-root-h"
  | "--switch-root-padding"
  | "--switch-base-padding"
  | "--switch-base-translate"
  | "--switch-thumb-w"
  | "--switch-thumb-h"
  | "--switch-thumb-color"
  | "--switch-thumb-color-checked"
  | "--switch-track-br"
  | "--switch-track-bg"
  | "--switch-track-bg-checked";
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
export type SwitchSettingsType = DeepPartial<typeof switchConfig>;

export const createSwitchVars = (
  newConfig: SwitchSettingsType,
): HTMLAttributes<HTMLSpanElement>["style"] => {
  const currentConfig: typeof switchConfig = JSON.parse(
    JSON.stringify(switchConfig),
  );

  function deepMerge(target: any, source: any) {
    for (const k in source) {
      const key = k as keyof SwitchSettingsType;
      if (source[key] && typeof source[key] === "object") {
        if (!target[key]) {
          target[key] = {};
        }
        deepMerge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
    return target;
  }
  deepMerge(currentConfig, newConfig);
  const { base, root, thumb, track } = currentConfig;

  const trackWidth = root.width - root.padding * 2;

  const paddingX = root.padding;
  let paddingY = root.padding;
  if (thumb.height > root.height) {
    const additionalPadding = (thumb.height - root.height) / 2;
    root.height = thumb.height;
    paddingY += additionalPadding;
  }
  const vars: Record<SwitchVatiableNames, string | number> = {
    "--switch-root-w": root.width,
    "--switch-root-h": root.height,
    "--switch-root-padding": `${paddingY}px ${paddingX}px`,
    "--switch-base-padding": base.padding + root.padding,
    "--switch-base-translate": trackWidth - thumb.width - base.padding * 2,
    "--switch-thumb-w": thumb.width,
    "--switch-thumb-h": thumb.height,
    "--switch-thumb-color": thumb.width,
    "--switch-thumb-color-checked": thumb.height,
    "--switch-track-br": (root.height - root.padding * 2) / 2,
    "--switch-track-bg": track.color.default,
    "--switch-track-bg-checked": track.color.checked,
  };
  for (const k in vars) {
    const key = k as keyof typeof vars;
    if (typeof vars[key] === "number") {
      vars[key] = vars[key] + "px";
    }
  }

  return vars as HTMLAttributes<HTMLSpanElement>["style"];
};
