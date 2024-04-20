import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import withAuth from '@/hoc/withAuth'

const Secret = ({ user, isLoading }) => {
  return (
    <BaseLayout user={user} loading={isLoading}>
      <BasePage>
        <h1>I am Secret Page - Hello {user.name}</h1>
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(Secret)
