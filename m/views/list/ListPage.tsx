import * as React from 'react';
import Box from '@samoyed/box';
import Page from '@samoyed/page';

interface PageProps {
}

export default function ListPage(props: PageProps) {
  const { ...others } = props;
  return <Page>
    <Box {...others}>列表</Box>
  </Page>;
}
