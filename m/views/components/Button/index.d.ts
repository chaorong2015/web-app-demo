import * as React from 'react';
import { BoxProps } from '@samoyed/box';

export interface ButtonProps extends BoxProps {
  text?: string;
  link?: string;
}

declare const Button: React.FunctionComponent<ButtonProps>;

export default Button;
