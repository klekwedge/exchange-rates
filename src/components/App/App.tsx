import { useEffect, useState } from 'react';
import Gallery from '../Gallery/Gallery';
import Modal from '../Modal/Modal';
import { IComment, IImage } from '../../types';
import Spinner from '../Spinner/Spinner';

const API_URL = 'https://api.unsplash.com/search/photos';
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [imgId, setImageId] = useState('');
  const [imageList, setImageList] = useState<IImage[]>([]);
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_URL}?client_id=${API_KEY}&query=city&page=1&orientation=landscape&per_page=30`)
      .then((response) => response.json())
      .then((data) => data.results)
      .then((data) => setImageList(data))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    // return null;
  }

  return (
    <div className="App">
      <Gallery imageList={imageList} setActive={setModalActive} setId={setImageId} />
      {modalActive && (
        <Modal
          comments={comments}
          setComments={setComments}
          imageList={imageList}
          setActive={setModalActive}
          active={modalActive}
          imageId={imgId}
        />
      )}
    </div>
  );
}

export default App;
