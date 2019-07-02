import * as React from 'react';
import { RouteComponentProps } from '@samoyed/router';
import { Page } from 'alaska-page/types';
import { BoxProps } from '@samoyed/box';

export interface Tab {
  route: string;
  name?: string;
  icon?: string;
  activeIcon?: string;
}

export interface TabBarProps extends RouteComponentProps, BoxProps {
  tabs: Tab[];
  activeItem?: number | null;
}

declare const TabBar: React.FunctionComponent<TabBarProps>;

export default TabBar;
