import * as React from 'react';
import Box from '@samoyed/box';
import Page from '@samoyed/page';

interface PageProps {
}

export default function UserPage(props: PageProps) {
  const { ...others } = props;
  return <Page>
    <Box {...others}>个人中心</Box>
  </Page>;
}
