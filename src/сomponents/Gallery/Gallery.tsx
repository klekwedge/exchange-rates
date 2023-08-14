/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useState } from 'react';
import styles from './Gallery.module.scss';

function Gallery(props: any) {
  const [imageList, setImageList] = useState([]);

  const onClickSetImageList = (id: any) => {
    props.setActive(true);
    props.setId(id);
  };

  useEffect(() => {
    fetch(`${API_URL}`)
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
            src={photo.url}
            alt=""
            className={styles.image}
            onClick={() => onClickSetImageList(photo.id)}
          />
        ))}
      </div>
      <div className={styles.separator} />
      <footer>
        <div className={styles.footerText}>© 2023</div>
      </footer>
    </div>
  );
}

export default Gallery;
