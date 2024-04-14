import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import React from 'react'
import Link from 'next/link'

const Portfolios = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 10 },
  })
  const allPosts = await res.json()
  const posts = allPosts.slice(0, 10)

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
