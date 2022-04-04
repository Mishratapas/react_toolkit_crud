import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../redux/postSlice';
import Loading from './Loading';

const CreatePost = () => {
  const [values, setValues] = useState({ title: '', body: '' });
  const [showPost, setShowPost] = useState(false);
  const { loading, post } = useSelector((state) => ({ ...state.post }));

  const { title, body } = values;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ values }));
    setValues({ title: '', body: '' });
    setShowPost(true);
  };

  const showNewPost = () => {
    return (
      <>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className='card mt-4'>
              <div className='card-body'>
                <h5 className='card-title'>{post[0].title}</h5>
                <p className='card-text'>{post[0].body}</p>
              </div>
            </div>
          </>
        )}
      </>
    );
  };

  return (
    <div className='container'>
      <h1 className='text-center bg-dark text-white p-3'>Create Post</h1>
      <form action=''>
        <div className='mb-3 mt-4'>
          <input
            type='text'
            value={title}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
            placeholder='Enter Post Title'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
          />
        </div>
        <div className='form-floating'>
          <textarea
            className='form-control'
            placeholder='add post description'
            value={body}
            onChange={(e) => setValues({ ...values, body: e.target.value })}
            id='floatingTextarea'
          />
          <label htmlFor='floatingTextarea'>Comments</label>
        </div>
        <div className='d-flex align-items-end justify-content-end'>
          <button className='btn btn-primary' onClick={() => navigate('/')}>
            Go Home
          </button>
          <button
            type='submit'
            className='btn btn-danger ms-4'
            onClick={() => handleSubmit()}
          >
            Submit
          </button>
        </div>
      </form>
      <div className='mt-4'>{showPost && <div>{showNewPost()}</div>}</div>
    </div>
  );
};

export default CreatePost;
