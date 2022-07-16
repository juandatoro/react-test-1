import { getAllByRole, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

jest.mock('focus-trap-react', () => ({ children }) => <>{children}</>);

jest.mock('hooks', () => ({
  useFetch: () => ({
    data: {
      items: [
        {
          id: 'cat1',
          title: 'cat-title1',
          items: [
            {
              id: 'movie1id',
              title: 'movie1title',
              photoUrL: 'movie1url',
            },
          ],
        },
      ],
    },
    loading: false,
    error: false,
  }),
}));

describe('Main view', () => {
  const renderApp = () => render(<App />);

  test('to render main title and submit btn', () => {
    const { getByText } = renderApp();
    const title = getByText(/awards 2022/i);
    const submitBtn = getByText(/submit/i);

    expect(title).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

  test('to select, submit the winners and close modal', async () => {
    const { getByText, getAllByRole, queryByText } = renderApp();
    expect(getByText(/cat-title1/i)).toBeInTheDocument();

    await userEvent.click(getByText(/select movie/i));
    await userEvent.click(getByText(/submit/i));
    await userEvent.click(getAllByRole('button')[1]);

    expect(queryByText(/The winners are/i)).toBeNull();
  });

  test('to select scroll to place when there is a missing selection', async () => {
    window.location = {};
    const { getByText } = renderApp();

    await userEvent.click(getByText(/submit/i));

    expect(window.location.hash).toBe(`#cat1`);
  });
});
