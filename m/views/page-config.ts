
import HomePage from './home/HomePage';
import ListPage from './list/ListPage';
import UserPage from './user/UserPage';
import AboutPage from './other/AboutPage';
export default [
  {
    id: '1',
    route: '/index/home',
    tabName: '首页',
    tabIcon: '',
    tabActiveIcon: '',
    component: HomePage
  },
  {
    id: '2',
    route: '/index/list',
    tabName: '列表',
    tabIcon: '',
    tabActiveIcon: '',
    component: ListPage
  },
  {
    id: '3',
    route: '/index/user',
    tabName: '我的',
    tabIcon: '',
    tabActiveIcon: '',
    component: UserPage
  },
  {
    id: '4',
    route: '/about',
    tabName: '关于我们',
    component: AboutPage
  }
];
