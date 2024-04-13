import jsonServer from 'json-server'

const server = jsonServer.create()
const router = jsonServer.router('db/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.get('/posts', (_req, res) => {
  const posts = router.db.getState().posts

  res
    .status(200)
    .json(posts.map(post => ({ id: post.id, title: post.title, createdAt: post.createdAt, tags: post.tags })))
})

server.get('/posts/:uuid', (req, res) => {
  const uuid = req.params.uuid
  const findedPost = router.db.getState().posts.find(post => post.id === uuid)
  let resData = { status: 201, data: null }

  if (!findedPost) {
    resData = { status: 404, data: null }
  } else {
    resData = { status: 200, data: findedPost }
  }

  res.status(resData.status).json(resData.data)
})

server.use(router)

server.listen(3000, () => {
  console.log(`\nRunning a server on localhost:3000\n`)
})
