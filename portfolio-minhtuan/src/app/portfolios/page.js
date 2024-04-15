'use client'
import { useEffect, useState } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import React from 'react'
import Link from 'next/link'

const Portfolios = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const res = await fetch('/api/v1/posts')
      const data = await res.json()
      setPosts(data)
    }

    getPosts()
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
      <BasePage>
        <h1>I am portfolios page</h1>
        <ul>{renderPosts()}</ul>
      </BasePage>
    </BaseLayout>
  )
}

export default Portfolios
