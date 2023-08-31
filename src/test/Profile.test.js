import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Profile from '../components/Profile';

test('Check if profile component is rendered correctly', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    </Provider>,
  );

  expect(tree).toMatchSnapshot();
});
