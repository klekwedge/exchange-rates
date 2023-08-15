/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState } from 'react';
import style from './Modal.module.scss';
import { IComment, IImage } from '../../types';

const API_URL = '';

interface ModalProps {
  active: boolean;
  id: string;
  imageList: IImage[];
  setActive: (value: boolean) => void;
}

function Modal({ active, imageList, id, setActive }: ModalProps) {
  const [modalContentData, setModalContentData] = useState<IImage | null>(null);
  const [comments, setComments] = useState<IComment[]>([]);

  const [authorName, setAuthorName] = useState('');
  const [authorComment, setAuthorComment] = useState('');

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      setActive(false);
    }
  };

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (authorComment && authorName) {
      setComments((pastValue) => [
        ...pastValue,
        {
          author: authorName,
          date: new Date(),
          body: authorComment,
          id,
        },
      ]);

      setAuthorName('');
      setAuthorComment('');
    }
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
  }, [id]);

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
          {comments
            .filter((comment) => comment.id === id)
            .map((comment) => (
              <div key={comment.id} className={style.commentBody}>
                <p className={style.commentData}>{comment.author}</p>
                <p className={style.commentData}>{comment.date.toLocaleDateString()}</p>
                <p className={style.commentText}>{comment.body}</p>
              </div>
            ))}
        </div>
        <div className={style.modalContentForm}>
          <form>
            <input
              placeholder="Ваше имя"
              name="name"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
            />
            <input
              placeholder="Ваш комментарий"
              name="comment"
              value={authorComment}
              onChange={(e) => setAuthorComment(e.target.value)}
            />
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
