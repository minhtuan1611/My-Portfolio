import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import Link from 'next/link'
import { useGetPosts } from '@/actions'
import { useUser } from '@auth0/nextjs-auth0/client'

const Portfolios = () => {
  const { user, isLoading } = useUser()

  const { data, error, loading } = useGetPosts()

  const renderPosts = (posts) => {
    return posts.map((post) => (
      <li key={post.id} style={{ fontSize: '20px' }}>
        <Link as={`/portfolios/${post.id}`} href="/portfolios/[id]">
          {post.title}
        </Link>
      </li>
    ))
  }

  return (
    <BaseLayout user={user} loading={isLoading}>
      <BasePage>
        <h1>I am Portfolio Page</h1>
        {loading && <p>Loading data...</p>}
        {data && <ul>{renderPosts(data)}</ul>}
        {error && <div className="alert alert-danger">{error.message}</div>}
      </BasePage>
    </BaseLayout>
  )
}

export default Portfolios
