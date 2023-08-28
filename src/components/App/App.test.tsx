import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import App from './App';


describe('App component', () => {
  it('должен рендериться без ошибок', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  it('должен начать загрузку и отображать Spinner', async () => {
    const { getByTestId } = render(<App />);
    const spinner = getByTestId('spinner');
    expect(spinner).toBeInTheDocument();

    await waitFor(() => {
      expect(spinner).not.toBeInTheDocument();
    });
  });

  it('должен отобразить галерею изображений после загрузки', async () => {
    const { getByTestId } = render(<App />);
    await waitFor(() => {
      const gallery = getByTestId('gallery');
      expect(gallery).toBeInTheDocument();
    });
  });
});
