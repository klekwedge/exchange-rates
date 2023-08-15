/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState } from 'react';
import style from './Modal.module.scss';
import { IImage } from '../../types';

const API_URL = '';

interface ModalProps {
  active: boolean;
  id: string;
  imageList: IImage[];
  setActive: (value: boolean) => void;
}

function Modal({ active, imageList, id, setActive }: ModalProps) {
  const [modalContentData, setModalContentData] = useState<IImage | null>(null);
  const [comments, setComments] = useState<IImage | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    comment: '',
  });

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      setActive(false);
    }
  };

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    const date = new Date();
    event.preventDefault();
    // fetch(`${API_URL}/${id}/comments`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/JSON',
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .then(
    //     setModalContentData({
    //       ...modalContentData,
    //       comments: [...modalContentData.comments, { id: null, text: formData.comment, date }],
    //     }),
    //   );
  }
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const currentImage = imageList.find((item) => item.id === id);
    if (currentImage) {
      setModalContentData(currentImage);
    } else {
      setModalContentData(null);
    }

    // fetch(`${API_URL}/${id}`)
    //   .then((response) => response.json())
    //   .then((data) => setModalContentData(data))
    //   .then(() => setIsLoading(false));
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
          <img src={modalContentData.urls.small} alt="Gallery item" />
        </div>
        <div className={style.comments}>
          <div className={style.commentBody}>
            <p className={style.commentData}>12.04.2021</p>
            <p className={style.commentText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat impedit reiciendis enim atque neque
              porro perferendis ullam officiis natus, eligendi incidunt, vitae totam magnam dolore quam aliquid
              veritatis consequuntur quo.
            </p>
          </div>
          {/* {modalContentData.comments.map((comment) => (
            <div key={comment.id} className={style.commentBody}>
              <p className={style.commentData}>{dateFormatter(comment.date)}</p>
              <p className={style.commentText}>{comment.text}</p>
            </div>
          ))} */}
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
