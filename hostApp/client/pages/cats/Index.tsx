import axios from 'axios';
import { useEffect, useState } from 'react';
import { Layout } from '../../common/layout.jsx';
import { catsApi } from '../../lib/utils.jsx';

export const Cats = () => {
  const [imgUrl, setImgUrl] = useState<any>(null);
  const [catSays, setCatSays] = useState('');

  const onRandomCat = async () => {
    const url = await catsApi.getRandomCat();
    setImgUrl(url);
  };

  const onCatWithText = async () => {
    const url = await catsApi.getCatWithText(catSays);
    setImgUrl(url);
  };

  useEffect(() => {
    catsApi.getRandomCat().then(url => setImgUrl(url));
  }, []);

  return (
    <Layout>
      <div>
        <div className="text-indigo-600">Hi from Cats!</div>

        <div className="flex mb-4">
          <div className="btn" onClick={onRandomCat}>
            Give me another one {'<'}3
          </div>
          <div className="btn ml-3" onClick={onCatWithText}>
            Cat with text?
          </div>
          <div>
            <input type="text" className="input ml-3" onChange={e => setCatSays(e.target.value)} />
          </div>
        </div>

        {imgUrl && <img src={imgUrl} alt="" className="h-96 mx-auto shadow-md rounded-md" />}
      </div>
    </Layout>
  );
};

