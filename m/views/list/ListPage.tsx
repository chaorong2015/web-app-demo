import * as React from 'react';
import Box from '@samoyed/box';

interface PageProps {
}

export default function ListPage(props: PageProps) {
  const { ...others } = props;
  return <Box {...others}>列表</Box>;
}
