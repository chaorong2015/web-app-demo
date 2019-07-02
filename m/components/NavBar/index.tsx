import * as React from 'react';
import Toolbar from '@samoyed/toolbar';
import Icon from '@samoyed/icon';
import { NavBarProps } from '../NavBar';

export default function NavBar(props: NavBarProps) {
  let {
    router, list, detail, scrollEvents, layoutRecord, pageRecord, title,
    ...others
  } = props;
  if (!title) {
    if (detail && detail.title) {
      title = detail.title;
    } else {
      title = pageRecord.title;
    }
  }

  let tools;
  if (!pageRecord.route.startsWith('/index/')) {
    tools = [{
      icon: 'back',
      placement: 'left',
      onClick: () => {
        if (router.globalEntries.length > 1) {
          router.history.goBack();
        } else {
          router.history.replace('/');
        }
      }
    }];
  }

  console.log(router);
  return (<Toolbar
    title={title}
    tools={tools}
    {...others}
  />);
}
