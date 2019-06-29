import * as React from 'react';
import * as H from 'history';
import app from '@samoyed/app';
import Box from '@samoyed/box';
import Viewport from '@samoyed/viewport';
import { Router, Switch, Route, Redirect } from '@samoyed/router';
import { connect } from 'react-redux';
import { StoreState, PagesState } from '@samoyed/redux';
import DynamicPage from '@samoyed/dynamic-page';
import { Page } from 'alaska-page/types';
import components from './components';
import PageList from './page-config';

interface AppProps {
  pages: PagesState;
}

interface AppState {
}

const history = H.createBrowserHistory({
  // @ts-ignore
  basename: window.BASENAME || '/m'
});

export interface Tab {
  route: string;
  name?: string;
  icon?: string;
  activeIcon?: string;
}

class App extends React.Component<AppProps, AppState> {
  renderTabs(pages: Page[]) {
    const TabBar = components.TabBar;
    let tabs: Tab[] = [];
    let el: any[] = pages.map((page, index) => {
      tabs.push({
        route: page.route,
        name: page.tabName,
        icon: page.tabIcon,
        activeIcon: page.tabActiveIcon
      });
      return <Route key={page.id} path={page.route} exact render={(props) => {
        let View: any = DynamicPage;
        if (page.component) {
          View = components[page.component];
          if (!View) return `Page component not found ${page.component}`;
        }
        return React.createElement(View, Object.assign({ pageRecord: page, components }, props));
      }} />;
    });
    return (
      <Route path="/index/" render={(props) => <Box layout="vertical">
        <Box layout="fit" flex>
          <Switch>
            {el}
          </Switch>
        </Box>
        <TabBar tabs={tabs} {...props} />
      </Box>}></Route>
    );
  }

  renderRoutes() {
    const pages: Page[] = [];
    const tabs: Page[] = [];
    // @ts-ignore
    let homePage: Page = this.props.pages.list[0];
    this.props.pages.list.forEach((p) => {
      // @ts-ignore
      if (p.route.startsWith('/index/')) {
        // @ts-ignore
        tabs.push(p);
      } else {
        // @ts-ignore
        pages.push(p);
      }
    });
    //本地页面组件
    PageList.forEach((p) => {
      // @ts-ignore
      if (p.route.startsWith('/index/')) {
        // @ts-ignore
        tabs.push(p);
      } else {
        // @ts-ignore
        pages.push(p);
      }
    });
    return (
      <Switch animation={{ type: 'slide', direction: 'horizontal' }}>
        {tabs.length ? this.renderTabs(tabs) : null}
        {pages.map((page) => <Route key={page.id} path={page.route} exact render={(props) => {
          let View: any = DynamicPage;
          if (page.component) {
            View = components[page.component];
            if (!View) return `Page component not found ${page.component}`;
          }
          return React.createElement(View, Object.assign({ pageRecord: page, components }, props));
        }} />)}
        {homePage && <Redirect to={homePage.route} />}
      </Switch>
    );
  }

  render() {
    const { pages } = this.props;

    return (
      <Router history={history}>
        <Viewport layout="fit">
          {pages.map ? this.renderRoutes() : <div className="loading-page">Loading...</div>}
        </Viewport>
      </Router>
    );
  }
}

export default connect(({ pages }: StoreState) => ({ pages }))(App);
