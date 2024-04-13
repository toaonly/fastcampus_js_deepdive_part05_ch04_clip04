import { Link } from 'react-router-dom'
import { format } from '../utils/date'

export default function PostRow({ id, title, createdAt, tags }) {
  return (
    <div className="w-[640px] px-4 py-8 flex flex-col gap-1">
      <div className="text-xs text-slate-600">{id}</div>
      <Link data-testid="title" to={`/${id}`} className="text-2xl hover:text-pink-500 hover:underline mb-2">
        {title}
      </Link>
      <div className="flex items-center justify-between">
        <div data-testid="createdAt" className="text-sm text-gray-400">
          {format(createdAt)}
        </div>
        <div data-testid="tags" className="flex gap-2 text-xs">
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
