import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../api'
import { format } from '../utils/date'

export default function Post() {
  const { uuid } = useParams()
  const [post, setPost] = useState({})

  useEffect(() => {
    api.getPost({ uuid }).then(setPost)
  }, [])

  return (
    <div className="flex flex-col gap-4 w-[640px] py-16">
      <div data-testid="title" className="text-3xl">
        {post.title}
      </div>
      <div className="flex items-center justify-between">
        <div data-testid="tags" className="flex gap-2 text-xs">
          {post.tags?.map((tag, i) => (
            <div
              className="px-2 py-1 rounded-full border border-slate-500 text-slate-400 hover:border-pink-500 hover:text-pink-500"
              key={i}
            >
              {tag}
            </div>
          ))}
        </div>
        <div data-testid="createdAt" className="text-sm text-gray-400">
          {format(post.createdAt)}
        </div>
      </div>
      <div data-testid="content" className="pt-8 text-lg text-gray-200 whitespace-pre-line leading-[2]">
        {post.content}
      </div>
    </div>
  )
}
