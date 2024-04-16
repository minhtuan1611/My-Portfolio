'use client'
import BaseLayout from '../../components/layouts/BaseLayout'
import BasePage from '../../components/BasePage'
import { useGetPostById } from '../../actions'
import { usePathname } from 'next/navigation'

const Portfolio = () => {
  const pathname = usePathname()
  const urlParts = pathname.split('/')
  const id = urlParts[urlParts.length - 1]
  const { data: portfolio, error, loading } = useGetPostById(id)

  return (
    <BaseLayout>
      <BasePage>
        {loading && <p>Loading Data...</p>}

        {error && <div className="alert alert-danger">{error.message}</div>}
        {portfolio && (
          <>
            <h1>I am Portfolio page</h1>
            <h1>{portfolio.title}</h1>
            <p>BODY: {portfolio.body}</p>
            <p>ID: {portfolio.id}</p>
          </>
        )}
      </BasePage>
    </BaseLayout>
  )
}

export default Portfolio
