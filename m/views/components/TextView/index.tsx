import * as React from 'react';
import Box from '@samoyed/box';
import { TextViewProps } from '../TextView';

export default function TextView(props: TextViewProps) {
  const { text, ...others } = props;
  return <Box {...others}>{text}</Box>;
}
