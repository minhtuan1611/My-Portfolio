import { useUser } from '@auth0/nextjs-auth0/client'
import Redirect from '@/components/shared/Redirect'

const withAuth = (Component) => {
  return (props) => {
    const { user, isLoading } = useUser()

    if (isLoading) {
      return <p>Loading...</p>
    }

    if (!user) {
      return <Redirect ssr to="/api/auth/login" />
    } else {
      return <Component user={user} loading={isLoading} {...props} />
    }
  }
}
export default withAuth
