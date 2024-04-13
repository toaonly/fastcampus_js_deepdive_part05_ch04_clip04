import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import PostList from './pages/PostList'
import Post from './pages/Post'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PostList />,
  },
  {
    path: '/:uuid',
    element: <Post />,
  },
])

export default router
