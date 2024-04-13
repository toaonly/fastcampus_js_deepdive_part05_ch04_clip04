import { useEffect, useState } from 'react'
import api from '../api'
import PostRow from '../components/PostRow'

export default function PostList() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    api.getPosts().then(setPosts)
  }, [])

  return (
    <div className="flex flex-col py-16 divide-y divide-slate-700">
      {posts.map(post => (
        <PostRow key={post.id} {...post} />
      ))}
    </div>
  )
}
