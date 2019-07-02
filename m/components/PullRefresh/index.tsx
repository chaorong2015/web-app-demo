import { PullRefreshProps } from '../PullRefresh';

export default function PullRefresh(props: PullRefreshProps | string) {
  let status = typeof props === 'string' ? props : props.status;
  switch (status) {
    case 'release':
      return '释放后刷新';
    case 'loading':
      return '正在刷新';
    case 'loaded':
      return '刷新完成';
    default:
      return '下拉刷新';
  }
}
