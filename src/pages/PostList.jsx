import { useEffect, useState } from 'react'
import api from '../api'
import { Link } from 'react-router-dom'

const MONTH_MAP = {
  1: 'JAN',
  2: 'FEB',
  3: 'MAR',
  4: 'APR',
  5: 'MAY',
  6: 'JUN',
  7: 'JUL',
  8: 'AUG',
  9: 'SEP',
  10: 'OCT',
  11: 'NOV',
  12: 'DEC',
}

function PostRow({ id, title, createdAt, tags }) {
  const createdDate = new Date(createdAt)
  const [year, month, date, hour, min] = [
    createdDate.getFullYear(),
    createdDate.getMonth() + 1,
    createdDate.getDate(),
    `${createdDate.getHours()}`.padStart(2, '0'),
    `${createdDate.getMinutes()}`.padStart(2, '0'),
  ]

  return (
    <div className="w-[640px] px-4 py-8 flex flex-col gap-1">
      <div className="text-xs text-slate-600">{id}</div>
      <Link to={`/${id}`} className="text-2xl hover:text-pink-500 hover:underline mb-2">
        {title}
      </Link>
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-400">{`${MONTH_MAP[month]}. ${date}. ${year} ${hour}:${min}`}</div>
        <div className="flex gap-2 text-xs">
          {tags.map((tag, i) => (
            <div
              className="px-2 py-1 rounded-full border border-slate-500 text-slate-400 hover:border-pink-500 hover:text-pink-500"
              key={i}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

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
