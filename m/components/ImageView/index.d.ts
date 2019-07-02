import * as React from 'react';
import { BoxProps } from '@samoyed/box';

export interface ImageViewProps extends BoxProps {
  url: string;
  /**
   * 图片模式
   */
  mode?: 'cover' | 'contain';
}

declare const ImageView: React.FunctionComponent<ImageViewProps>;

export default ImageView;
