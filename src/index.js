import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';

// vendor css
import 'flexboxgrid/dist/flexboxgrid.min.css';

// authored scss
import './index.scss';

render(
  <Root />,
  document.getElementById('root')
);
