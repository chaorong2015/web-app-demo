import * as React from 'react';
import Box from '@samoyed/box';
import Page from '@samoyed/page';
import components from '../components';

interface PageProps {
}

export default function AboutPage(props: PageProps) {
  const { ...others } = props;
  const NavBar = components.NavBar;
  return <Page layout="vertical">
    <NavBar
      title="关于我们"
      icon="back"
      key="navbar"
      {...others}
      // list={list}
      // detail={props.detail}
      // scrollEvents={scrollEvents}
      // layoutRecord={layoutRecord}
      // pageRecord={pageRecord}
      // router={props.router}
    />
    <Box
      flex
      className="page-content"
      layout="vertical"
      // scrollable="vertical"
      // onPullRefresh={onPullRefresh}
      // pullRefreshTexts={pullRefreshTexts}
      // onReachBottom={onReachBottom}
      // reachBottomBorder={50}
      // bodyStyle={bodyStyle}
      // onBodyScroll={(data) => scrollEvents.emit('scroll', data)}
    >
      <i className={`s-icon fa fa-user`} />
      关于我们
    </Box>
  </Page>
}
