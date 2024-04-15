import axios from 'axios'
import { NextResponse } from 'next/server'

export async function GET(req, res) {
  const axiosRes = await axios.get('https://jsonplaceholder.typicode.com/posts')
  const posts = axiosRes.data
  return NextResponse.json(posts.slice(0, 10))
}
