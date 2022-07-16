import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from './Modal';

jest.mock('focus-trap-react', () => ({ children }) => <>{children}</>);

describe('Modal component', () => {
  const closeModalMock = jest.fn();

  const renderModal = () =>
    render(
      <Modal closeModal={closeModalMock}>
        <div>children</div>
      </Modal>
    );

  test('To render the children element amd close the modal', async () => {
    const { getByText, getByRole } = renderModal();
    expect(getByText('children')).toBeTruthy();

    await userEvent.click(getByRole('button'));
    expect(closeModalMock).toHaveBeenCalledTimes(1);
  });
});
