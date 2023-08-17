/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import style from './Modal.module.scss';
import { IComment, IImage } from '../../types';

interface ModalProps {
  active: boolean;
  imageId: string;
  imageList: IImage[];
  comments: IComment[];
  setActive: (value: boolean) => void;
  setComments: (value: IComment[]) => void;
}

function Modal({ active, imageList, imageId, comments, setActive, setComments }: ModalProps) {
  const [modalContentData, setModalContentData] = useState<IImage | null>(null);

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
      setComments([
        ...comments,
        {
          author: authorName,
          date: new Date(),
          body: authorComment,
          imageId,
          id: v4(),
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
    const currentImage = imageList.find((image) => image.id === imageId);
    if (currentImage) {
      setModalContentData(currentImage);
    } else {
      setModalContentData(null);
    }
  }, [imageId]);

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
            .filter((comment) => comment.imageId === imageId)
            .map((comment) => (
              <div key={comment.id} className={style.commentBody}>
                <div className={style.commentHeader}>
                  <p className={style.commentAuthor}>{comment.author}</p>
                  <p className={style.commentDate}>{comment.date.toLocaleDateString()}</p>
                </div>
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
