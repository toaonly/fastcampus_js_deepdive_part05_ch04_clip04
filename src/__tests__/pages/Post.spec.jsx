import { act, render } from '@testing-library/react'
import { MemoryRouter, Navigate, Route, Routes } from 'react-router-dom'
import { beforeAll, describe, expect, vi } from 'vitest'
import Post from '../../pages/Post'
import { format } from '../../utils/date'
import db from '../../../db/db.json'

describe('Post 테스트', () => {
  const post = db.posts[0]

  beforeAll(() => {
    vi.mock('../../api.js', () => {
      return {
        default: {
          getPost({ uuid }) {
            return Promise.resolve(db.posts.find(p => p.id == uuid))
          },
        },
      }
    })
  })

  it('렌더링 테스트', async () => {
    let result

    await act(() => {
      result = render(
        <MemoryRouter>
          <Routes>
            <Route path="/" element={<Navigate to={`/${post.id}`} replace />} />
            <Route path="/:uuid" element={<Post />} />
          </Routes>
        </MemoryRouter>
      )
    })

    expect(result.getByTestId('title').textContent).toBe(post.title)
    expect(result.getByTestId('createdAt').textContent).toBe(format(post.createdAt))
    expect(result.getByTestId('content').textContent).toBe(post.content)

    Array.from(result.getByTestId('tags').children).forEach(el => {
      expect(post.tags.find(tag => el.textContent === tag)).toBeTruthy()
    })
  })
})
