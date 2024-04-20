import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import { useUser } from '@auth0/nextjs-auth0/client'

const Blogs = () => {
  const { user, isLoading } = useUser()

  return (
    <BaseLayout user={user} loading={isLoading}>
      <BasePage>
        <h1>I am Blog Page</h1>
      </BasePage>
    </BaseLayout>
  )
}

export default Blogs
