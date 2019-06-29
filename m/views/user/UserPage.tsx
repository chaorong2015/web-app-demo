import * as React from 'react';
import Box from '@samoyed/box';

interface PageProps {
}

export default function UserPage(props: PageProps) {
  const { ...others } = props;
  return <Box {...others}>个人中心</Box>;
}
