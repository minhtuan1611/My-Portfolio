import { NextResponse } from 'next/server'
import axios from 'axios'

export async function GET(req, context) {
  console.log(context.params.id)
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  )
  const postData = response.data
  return NextResponse.json(postData)
}
