import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import { useUser } from '@auth0/nextjs-auth0/client'

const Cv = () => {
  const { user, isLoading } = useUser()

  return (
    <BaseLayout user={user} loading={isLoading}>
      <BasePage>
        {user.nickname}
        <h1>I am Cv Page</h1>
      </BasePage>
    </BaseLayout>
  )
}

export default Cv
