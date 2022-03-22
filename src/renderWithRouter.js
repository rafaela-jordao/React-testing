import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';

function renderWithRouter(component) {
  const newHistory = createMemoryHistory();

  const returnFromRender = render(
    <Router history={newHistory}>{component}</Router>
  );

  return { history: newHistory, ...returnFromRender };
}

export default renderWithRouter;
