import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Layout } from '../../common/layout.jsx';
import { catsApi } from '../../lib/utils.jsx';

export const Cats = () => {
  const initialImgUrl: any = useLoaderData();
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

        <img src={initialImgUrl} alt="" className="h-80 mx-auto shadow-md rounded-md" />

        {imgUrl && <img src={imgUrl} alt="" className="h-80 mx-auto shadow-md rounded-md mt-4" />}
      </div>
    </Layout>
  );
};

export const catsLoader = async _args => catsApi.getRandomCat();
