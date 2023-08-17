import { useEffect, useState } from 'react';
import Gallery from '../Gallery/Gallery';
import Modal from '../Modal/Modal';
import { IComment, IImage } from '../../types';

const API_URL = 'https://api.unsplash.com/search/photos';
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [imgId, setImageId] = useState('');
  const [imageList, setImageList] = useState<IImage[]>([]);
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    fetch(`${API_URL}?client_id=${API_KEY}&query=city&page=1&orientation=landscape&per_page=30`)
      .then((response) => response.json())
      .then((data) => data.results)
      .then((data) => setImageList(data));
  }, []);

  console.log(imageList);

  return (
    <div className="App">
      <Gallery imageList={imageList} setActive={setModalActive} setId={setImageId} />
      {modalActive && <Modal comments={comments} setComments={setComments} imageList={imageList} setActive={setModalActive} active={modalActive} imageId={imgId} />}
    </div>
  );
}

export default App;
