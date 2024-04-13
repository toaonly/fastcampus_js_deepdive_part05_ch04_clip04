const api = {
  getPosts() {
    return fetch(`http://localhost:3000/posts`).then(res => res.json())
  },
  getPost({ uuid }) {
    return fetch(`http://localhost:3000/posts/${uuid}`).then(res => res.json())
  },
}

export default api
