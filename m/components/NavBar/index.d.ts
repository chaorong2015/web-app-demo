import * as React from 'react';
import * as EventEmitter from 'events';
import { ToolbarProps } from '@samoyed/toolbar';
import { RouterChildContext } from '@samoyed/router';
import { LayoutsState, Record, RecordList } from '@samoyed/redux';
import { Page } from 'alaska-page/types';
import { Layout } from 'alaska-layout/types';

export interface NavBarProps extends ToolbarProps {
  list: RecordList;
  detail: Record | null;
  scrollEvents: EventEmitter;
  layoutRecord: Layout;
  pageRecord: Page;
  router: RouterChildContext<any>;
}

declare const NavBar: React.FunctionComponent<NavBarProps>;

export default NavBar;
