import * as React from 'react';
import Box from '@samoyed/box';
import Image from '@samoyed/image';
import { ImageViewProps } from '../ImageView';

export default function ImageView(props: ImageViewProps) {
  const { url, mode, height, width, ...others } = props;
  return <Box height={height} width={width} {...others}><Image url={url} mode={mode} height={height} width={width} /></Box>;
}
