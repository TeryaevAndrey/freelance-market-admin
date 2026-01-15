import type { JSX } from "react";

export interface ParameterProps {
  icon?: JSX.Element;
  name: string;
  valueText?: string | JSX.Element;
}
