import { render } from '@testing-library/react';
import Spinner from './Spinner';

describe('Spinner component', () => {
  it('Spinner должен рендериться без ошибок', () => {
    render(<Spinner />);
  });

  it('Spinner должен иметь класс "container"', () => {
    const { container } = render(<Spinner />);
    expect(container.firstChild).toHaveClass('container');
  });

  it('Spinner должен иметь дочерний элемент с классом "loader"', () => {
    const { container } = render(<Spinner />);
    const loaderElement = container.querySelector('.loader');
    expect(loaderElement).toBeInTheDocument();
  });
});
