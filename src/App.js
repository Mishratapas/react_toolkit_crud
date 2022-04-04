import { Routes, Route } from 'react-router-dom';

import { CreatePost, Posts } from './components';

const App = () => {
  return (
    <>
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<Posts />} />
          <Route exact path='createpost' element={<CreatePost />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
