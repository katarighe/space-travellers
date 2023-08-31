import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import DragonsProfile from '../components/DragonsProfile';

test('Check if dragons profile component is rendered correctly', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <DragonsProfile />
      </BrowserRouter>
    </Provider>,
  );

  expect(tree).toMatchSnapshot();
});
