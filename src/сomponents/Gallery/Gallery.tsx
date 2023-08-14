/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useState } from 'react';
import styles from './Gallery.module.scss';
import { IImage } from '../../types';

const API_URL = 'https://api.unsplash.com/photos';
const API_KEY = import.meta.env.VITE_API_KEY


function Gallery(props: any) {
  const [imageList, setImageList] = useState<IImage[]>([]);

  const onClickSetImageList = (id: any) => {
    props.setActive(true);
    props.setId(id);
  };

  useEffect(() => {
    fetch(`${API_URL}?client_id=${API_KEY}&page=1`)
      .then((response) => response.json())
      .then((data) => data)
      .then((data) => setImageList(data));
  }, []);

  if (!imageList.length) {
    return <h1>Loading data, please wait</h1>;
  }

  return (
    <div>
      <div className={styles.photoWrapper}>
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
    </div>
  );
}

export default Gallery;
