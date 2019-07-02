import * as React from 'react';
import { BoxProps } from '@samoyed/box';

export interface TextViewProps extends BoxProps {
  text: string;
}

declare const TextView: React.FunctionComponent<TextViewProps>;

export default TextView;
