import * as React from 'react';
import { BoxProps } from '@samoyed/box';

export interface HtmlViewProps extends BoxProps {
  html: string;
}

declare const HtmlView: React.FunctionComponent<HtmlViewProps>;

export default HtmlView;
