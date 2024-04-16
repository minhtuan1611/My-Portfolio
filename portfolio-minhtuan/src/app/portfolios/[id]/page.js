'use client'
import BaseLayout from '../../components/layouts/BaseLayout'
import BasePage from '../../components/BasePage'
import { useGetData } from '../../actions'
import { usePathname } from 'next/navigation'

const Portfolio = () => {
  const pathname = usePathname()
  const urlParts = pathname.split('/')
  const id = urlParts[urlParts.length - 1]
  const {
    data: portfolio,
    error,
    loading,
  } = useGetData(id ? `/api/v1/post/${id}` : null)

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
