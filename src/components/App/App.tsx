import { useEffect, useState } from 'react';
import Gallery from '../Gallery/Gallery';
import Modal from '../Modal/Modal';
import { IComment, IImage } from '../../types';

const API_URL = 'https://api.unsplash.com/photos';
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [imgId, setImageId] = useState('');
  const [imageList, setImageList] = useState<IImage[]>([]);
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    fetch(`${API_URL}?client_id=${API_KEY}&page=1`)
      .then((response) => response.json())
      .then((data) => data)
      .then((data) => setImageList(data));
  }, []);

  return (
    <div className="App">
      <Gallery imageList={imageList} setActive={setModalActive} setId={setImageId} />
      {modalActive && <Modal comments={comments} setComments={setComments} imageList={imageList} setActive={setModalActive} active={modalActive} imageId={imgId} />}
    </div>
  );
}

export default App;
