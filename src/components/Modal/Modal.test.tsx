import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

const mockImageList = [
  {
    id: 'image1',
    urls: { small: 'mockImageUrl1' },
  },
  {
    id: 'image2',
    urls: { small: 'mockImageUrl2' },
  },
];

const mockComments = [
  {
    id: 'comment1',
    author: 'John',
    date: new Date('2023-08-15'),
    body: 'Great image!',
    imageId: 'image1',
  },
];

test('renders modal with image and comments when active is true', () => {
  render(
    <Modal
      active={true}
      imageId="image1"
      imageList={mockImageList}
      comments={mockComments}
      setActive={() => {}}
      setComments={() => {}}
    />,
  );

  const modalContent = screen.getByTestId('modal-content');
  expect(modalContent).toBeInTheDocument();

  const image = screen.getByAltText('Gallery item');
  expect(image).toBeInTheDocument();

  const comment = screen.getByText('Great image!');
  expect(comment).toBeInTheDocument();
});

test('does not render modal when active is false', () => {
  render(
    <Modal
      active={false}
      imageId="image1"
      imageList={mockImageList}
      comments={mockComments}
      setActive={() => {}}
      setComments={() => {}}
    />,
  );

  const modalContent = screen.queryByTestId('modal-content');
  expect(modalContent).not.toBeInTheDocument();
});

test('closes modal when close button is clicked', () => {
  const setActiveMock = jest.fn();
  render(
    <Modal
      active={true}
      imageId="image1"
      imageList={mockImageList}
      comments={mockComments}
      setActive={setActiveMock}
      setComments={() => {}}
    />,
  );

  const closeButton = screen.getByRole('button', { name: 'Close' });
  fireEvent.click(closeButton);

  expect(setActiveMock).toHaveBeenCalledWith(false);
});

// You can add more tests for other interactions and behaviors as needed
