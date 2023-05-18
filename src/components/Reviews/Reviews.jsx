import { getMovieReviews } from '../../Fetch/Fetch';
import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const pageStatus = {
  INIT: 'init',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(pageStatus.INIT);

  const params = useParams();
  const id = params.movieId;

  useEffect(() => {
    setStatus(pageStatus.LOADING);
    async function getData() {
      try {
        const data = await getMovieReviews(id);
        setReviews(data);
        setStatus(pageStatus.SUCCESS);
      } catch (error) {
        setStatus(pageStatus.ERROR);
      }
    }
    getData();
  }, [id]);

  const getPostDate = date => {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      timezone: 'UTC',
    };

    return new Date(date).toLocaleString('en', options);
  };

  return (
    <>
      {status === pageStatus.ERROR && (
        <path>ERROR, REVIEWS NOT FOUND</path>
      )}

      {(status === pageStatus.LOADING || status === pageStatus.INIT) && (
        <Loader />
      )}

      {status === pageStatus.SUCCESS && reviews.length === 0 && (
        <p>REVIEWS NOT FOUND</p>
      )}

      {status === pageStatus.SUCCESS && (
        <ul >
          {reviews?.map(item => (
            <li  key={item.id}>
              <h3 >{item.author}</h3>
              <p >{item.content}</p>
              <span >{getPostDate(item.updated_at)}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};