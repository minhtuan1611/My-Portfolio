// PostList.js
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        )
        setPosts(response.data)
      } catch (e) {
        console.error(e)
      }
    }

    fetchData()
  }, [])

  return <div>{posts}</div>
}

export default PostList
