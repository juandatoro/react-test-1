import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { Category } from './Category';

describe('Category component', () => {
  const renderCategory = (ref) =>
    render(
      <Category
        ref={ref}
        id='category-id'
        title='category-title'
        items={[
          {
            id: 'item-id',
            title: 'item-title',
            photoUrL: 'item-item',
          },
        ]}
      />
    );

  test('To render the category title and submit btn', () => {
    renderCategory();

    const title = screen.getByText(/category-title/i);

    expect(title).toBeInTheDocument();
  });

  test('To clear the url hash when selecting a movie', async () => {
    window.history.pushState = jest.fn();
    renderCategory();
    const btn = screen.getByRole('button');
    await userEvent.click(btn);

    expect(window.history.pushState).toBeCalledWith('', '', '/');
  });

  test('To deselect a movie', async () => {
    let selected = '';
    const categoryRef = createRef();
    renderCategory(categoryRef);

    const btn = screen.getByRole('button');
    await userEvent.click(btn);
    act(() => {
      selected = categoryRef.current.getSelected();
    });
    expect(selected).toEqual({ id: 'item-id', title: 'item-title' });

    await userEvent.click(btn);
    act(() => {
      selected = categoryRef.current.getSelected();
    });
    expect(selected).toEqual({ id: '', title: '' });
  });

  test('To set and clear the selected movie', async () => {
    let selected = '';
    const categoryRef = createRef();
    renderCategory(categoryRef);

    act(() => {
      selected = categoryRef.current.getSelected();
    });
    expect(selected).toEqual({ id: '', title: '' });

    const btn = screen.getByRole('button');
    await userEvent.click(btn);
    act(() => {
      selected = categoryRef.current.getSelected();
    });
    expect(selected).toEqual({ id: 'item-id', title: 'item-title' });

    act(() => {
      categoryRef.current.clearSelected();
    });
    act(() => {
      selected = categoryRef.current.getSelected();
    });
    expect(selected).toEqual({ id: '', title: '' });
  });
});
