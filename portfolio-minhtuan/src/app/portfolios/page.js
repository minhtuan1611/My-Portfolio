'use client'
import BaseLayout from '../components/layouts/BaseLayout'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Portfolios = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        )
        setPosts(response.data.slice(0, 10))
      } catch (e) {
        console.error(e)
      }
    }
    fetchPosts()
  }, [])

  const renderPosts = () => {
    return posts.map((post) => (
      <li key={post.id}>
        <Link href={`/portfolios/${post.id}`}>{post.title}</Link>
      </li>
    ))
  }

  return (
    <BaseLayout>
      <h1>I am portfolios page</h1>
      <ul>{renderPosts()}</ul>
    </BaseLayout>
  )
}

export default Portfolios
