import { render } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, expect } from 'vitest'
import PostRow from '../../components/PostRow'
import { format } from '../../utils/date'
import db from '../../../db/db.json'

describe('PostRow 테스트', () => {
  const post = db.posts[0]

  it('렌더링 테스트', () => {
    const result = render(
      <MemoryRouter>
        <Routes>
          <Route path="" element={<PostRow {...post} />} />
        </Routes>
      </MemoryRouter>
    )

    expect(result.getByTestId('title').textContent).toBe(post.title)
    expect(result.getByTestId('createdAt').textContent).toBe(format(post.createdAt))

    Array.from(result.getByTestId('tags').children).forEach(el => {
      expect(post.tags.find(tag => el.textContent === tag)).toBeTruthy()
    })
  })
})
