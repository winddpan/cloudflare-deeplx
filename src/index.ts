import { Hono } from "hono"
import { query } from "@ifyour/deeplx"
import { RequestParams } from "@ifyour/deeplx/dist/types"

const app = new Hono()

app.get("/", (c) => {
  return c.text("Hello Hono!")
})

app.post("/query", async (c) => {
  const body = await c.req.json()
  console.log(body)
  const ret = await query(body as RequestParams, {
    proxyEndpoint: "https://ideepl.vercel.app/jsonrpc",
  })
  return c.json(ret)
})

export default app
