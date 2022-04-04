import { configureStore } from '@reduxjs/toolkit';

import postSlice from './postSlice';

export default configureStore({ reducer: { post: postSlice } });
