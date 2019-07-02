import * as React from 'react';
import Box from '@samoyed/box';
import { HtmlViewProps } from '../HtmlView';

export default function HtmlView(props: HtmlViewProps) {
  const { html, ...others } = props;
  return <Box {...others}><div dangerouslySetInnerHTML={{ __html: html }} /></Box>;
}
