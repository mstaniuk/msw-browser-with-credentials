import { rest } from 'msw'

export const handlers = [
  rest.post('/user', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    )
  }),
]
