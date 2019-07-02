import * as React from 'react';
import { RecordList } from '@samoyed/redux';

export interface LoadMoreProps {
  list: RecordList;
}

declare const LoadMore: React.FunctionComponent<LoadMoreProps>;

export default LoadMore;
