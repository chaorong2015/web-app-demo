import * as React from 'react';
import Box from '@samoyed/box';

interface PageProps {
}

export default function HomePage(props: PageProps) {
  const { ...others } = props;
  return <Box {...others}>首页</Box>;
}
