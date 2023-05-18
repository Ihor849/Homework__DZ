import { getMovieCast } from '../../Fetch/Fetch';
import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import defaultImgCast from '../../img/default-image.jpg';


const pageStatus = {
  INIT: 'init',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState(pageStatus.INIT);

  const params = useParams();
  const id = params.movieId;

  useEffect(() => {
    setStatus(pageStatus.LOADING);
    async function getData() {
      try {
        const data = await getMovieCast(id);
        setCast(data);
        setStatus(pageStatus.SUCCESS);
      } catch (error) {
        setStatus(pageStatus.ERROR);
      }
    }
    getData();
  }, [id]);

  return (
    <>
      {status === pageStatus.LOADING && <Loader />}

      {status === pageStatus.ERROR && (
        <p >ERROR, CAST NOT FOUND</p>
      )}

      {status === pageStatus.SUCCESS && cast.length === 0 && (
        <p >CAST NOT FOUND</p>
      )}

      {status === pageStatus.SUCCESS && (
        <ul >
          {cast?.map((item, index) => (
            <li key={index}>
              <img
                
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w200${item.profile_path}`
                    : defaultImgCast
                }
                alt=""
              />
              <h3 >{item.original_name}</h3>
              <p >
                {item.character ? item.character : 'role'}
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};