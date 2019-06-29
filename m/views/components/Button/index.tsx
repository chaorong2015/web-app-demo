import * as React from 'react';
import Box from '@samoyed/box';
import { RouterContext } from '@samoyed/router';
import { ButtonProps } from '../Button';

export default function Button(props: ButtonProps) {
  const { text, link, color, ...others } = props;
  const context = React.useContext(RouterContext);
  const onClick = link ? () => { context.history.push(link); } : null;
  return <Box {...others} onClick={onClick} bodyClassName={`btn btn-${color || 'light'}`}>{text}</Box>;
}
