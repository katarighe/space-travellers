import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Dragons from '../components/Dragons';

test('Check if dragon component is rendered correctly', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <Dragons />
      </BrowserRouter>
    </Provider>,
  );

  expect(tree).toMatchSnapshot();
});
