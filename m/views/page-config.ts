
import HomePage from './home/HomePage';
import ListPage from './list/ListPage';
import UserPage from './user/UserPage';
export default [{
  route: '/index/home',
  tabName: '首页',
  tabIcon: '',
  tabActiveIcon: '',
  component: HomePage
},
  {
    route: '/index/list',
    tabName: '列表',
    tabIcon: '',
    tabActiveIcon: '',
    component: ListPage
  },
  {
    route: '/index/user',
    tabName: '我的',
    tabIcon: '',
    tabActiveIcon: '',
    component: UserPage
  }];
