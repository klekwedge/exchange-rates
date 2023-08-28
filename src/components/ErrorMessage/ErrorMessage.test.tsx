import { render } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';
import styles from './ErrorMessage.module.scss';

describe('ErrorMessage компонент', () => {
  it('должен рендериться без ошибок', () => {
    const { container } = render(<ErrorMessage />);
    expect(container).toBeInTheDocument();
  });

  it('должен содержать текст ошибки и сообщение', () => {
    const { getByText } = render(<ErrorMessage />);
    const errorText = getByText('Error!');
    const errorMessage = getByText('Oh no, something went wrong.');

    expect(errorText).toBeInTheDocument();
    expect(errorMessage).toBeInTheDocument();
  });

  it('должен иметь необходимые CSS классы', () => {
    const { container } = render(<ErrorMessage />);
    const containerElement = container.querySelector(`#${styles.container}`);
    const errorBoxElement = container.querySelector(`#${styles.errorBox}`);
    const faceElement = container.querySelector(`.${styles.face}`);
    const eyeElements = container.querySelectorAll(`.${styles.eye}`);
    const mouthElement = container.querySelector(`.${styles.mouth}`);
    const shadowElement = container.querySelector(`.${styles.shadow}`);
    const scaleElement = container.querySelector(`.${styles.scale}`);
    const messageElement = container.querySelector(`.${styles.message}`);
    const alertElement = container.querySelector(`.${styles.alert}`);

    expect(containerElement).toBeInTheDocument();
    expect(errorBoxElement).toBeInTheDocument();
    expect(faceElement).toBeInTheDocument();
    expect(eyeElements.length).toBe(2);
    expect(mouthElement).toBeInTheDocument();
    expect(shadowElement).toBeInTheDocument();
    expect(scaleElement).toBeInTheDocument();
    expect(messageElement).toBeInTheDocument();
    expect(alertElement).toBeInTheDocument();
  });
});
