import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import { useUser } from '@auth0/nextjs-auth0/client'
import Redirect from '@/components/shared/Redirect'
import withAuth from '@/hoc/withAuth'

const Secret = ({ title }) => {
  const { user, isLoading } = useUser()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (!user) {
    return <Redirect to="/api/auth/login" />
  } else {
    return (
      <BaseLayout user={user} loading={isLoading}>
        <BasePage>
          <h1>I am Secret Page - {title}</h1>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth(Secret)
