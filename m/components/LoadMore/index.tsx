import * as React from 'react';
import { RecordList } from '@samoyed/redux';
import { LoadMoreProps } from '../LoadMore';

export default function LoadMore(props: LoadMoreProps | RecordList) {
  // @ts-ignore
  let list: RecordList = props.list || props;
  let text = '加载更多';
  if (!list.next) {
    text = '没有更多了';
  } else if (list.fetching) {
    text = '正在加载';
  }
  return (
    <div className="load-more">{text}</div>
  );
}
