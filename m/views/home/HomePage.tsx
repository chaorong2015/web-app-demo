import * as React from 'react';
import Box from '@samoyed/box';
import Page from '@samoyed/page';
import { Link } from '@samoyed/router';

interface PageProps {
}

export default function HomePage(props: PageProps) {
  const { ...others } = props;
  return <Page layout="vertical">
    <Box {...others}>
      <div>首页</div>
      <Link to="/about">关于我们</Link>
    </Box>
  </Page>
}
