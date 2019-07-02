import * as React from 'react';
import { PullRefreshStatus } from '@samoyed/box';

export interface PullRefreshProps {
  status: PullRefreshStatus;
}

declare const PullRefresh: React.FunctionComponent<PullRefreshProps>;

export default PullRefresh;
