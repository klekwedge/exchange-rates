/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState } from 'react';
import style from './Modal.module.scss';

const API_URL = '';

interface ModalProps {
  active: boolean;
  setActive: (value: boolean) => void;
  id: string;
}

function Modal({ active, setActive, id }: ModalProps) {
  const [modalContentData, setModalContentData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    comment: '',
  });

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('!');
    // e.currentTarget === e.target && setActive(false);
  };

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    const date = new Date();
    event.preventDefault();

    fetch(`${API_URL}/${id}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(
        setModalContentData({
          ...modalContentData,
          comments: [...modalContentData.comments, { id: null, text: formData.comment, date }],
        }),
      );
  }
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((response) => response.json())
      .then((data) => setModalContentData(data))
      .then(() => setIsLoading(false));
  }, [id]);

  const handleChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!modalContentData) {
    return null;
  }

  return (
    <div onClick={(e) => closeModal(e)} className={active ? style.modalActive : style.modal}>
      <div className={style.modalContent}>
        <div className={style.modalContentImage}>
          {isLoading ? 'Loading' : <img src={modalContentData.url} alt="Gallery item" />}
        </div>
        <div className={style.comments}>
          {isLoading
            ? 'Loading'
            : modalContentData.comments.map((comment) => (
                <div key={comment.id} className={style.commentBody}>
                  {/* <p className={style.commentData}>{dateFormatter(comment.date)}</p> */}
                  <p className={style.commentText}>{comment.text}</p>
                </div>
              ))}
        </div>
        <div className={style.modalContentForm}>
          <form>
            <input placeholder="Ваше имя" name="name" value={formData.name} onChange={handleChangeField} />
            <input placeholder="Ваш комментарий" name="comment" value={formData.comment} onChange={handleChangeField} />

            <button type="button" onClick={handleSubmit}>
              Оставить комментарий
            </button>
          </form>
        </div>
        <button type="button" className={style.closeButton} onClick={() => setActive(false)} />
      </div>
    </div>
  );
}

export default Modal;
