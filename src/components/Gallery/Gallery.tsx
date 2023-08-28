/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { IImage } from '../../types';
import styles from './Gallery.module.scss';

interface GalleryProps {
  setActive: (value: boolean) => void;
  setId: (value: string) => void;
  imageList: IImage[];
}

function Gallery({ setActive, setId, imageList }: GalleryProps) {
  const onClickSetImageList = (id: string) => {
    setActive(true);
    setId(id);
  };

  console.log(imageList);


  return (
    <div className={styles.photoWrapper} data-testid='gallery'>
      {imageList.map((photo) => (
        <img
          key={photo.id}
          src={photo.urls.small}
          alt={photo.alt_description}
          className={styles.image}
          onClick={() => onClickSetImageList(photo.id)}
        />
      ))}
    </div>
  );
}

export default Gallery;
