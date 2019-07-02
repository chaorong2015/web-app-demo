import * as _ from 'lodash';
import * as React from 'react';
import * as classnames from 'classnames';
import Box from '@samoyed/box';
import { TabBarProps } from '../TabBar';

export default function TabBar(props: TabBarProps) {
  const { tabs, history, location, className, activeItem, ...others } = props;
  return (
    <Box className={classnames('tabbar', className)} layout="horizontal" {...others}>
      {
        _.map(tabs, (tab, index) => {
          let active = index === activeItem;
          if (location && !active && (typeof activeItem === 'undefined' || activeItem === null)) {
            active = location.pathname === tab.route;
          }
          let icon = tab.icon;
          if (active && icon && tab.activeIcon) {
            icon = tab.activeIcon;
          }
          if (icon && typeof icon === 'object') {
            // @ts-ignore Image object
            icon = icon.url;
          }
          return (
            <Box
              key={index}
              className={classnames('tabbar-item', {
                active,
                's-no-icon': !icon,
                's-no-text': !tab.name,
                's-has-icon': icon,
                's-has-text': tab.name
              })}
              onClick={() => history && history.push(tab.route)}
            >
              {icon && <img className="s-icon" src={icon} />}
              {tab.name && <div className="s-text">{tab.name}</div>}
            </Box>
          );
        })
      }
    </Box>
  );
}
