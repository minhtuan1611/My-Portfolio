import { useUser } from '@auth0/nextjs-auth0/client'
import Redirect from '@/components/shared/Redirect'
import { isAuthorized } from '@/utils/auth0'

const withAuth = (Component) => (role) => {
  return (props) => {
    const { user, isLoading } = useUser()
    if (isLoading) {
      return <p>Loading...</p>
    }

    if (!user) {
      return <Redirect ssr to="/api/auth/login" />
    } else {
      if (isAuthorized(user, role)) {
        return <Component user={user} loading={isLoading} {...props} />
      } else {
        return <Redirect ssr to="/api/auth/login" />
      }
    }
  }
}

export default withAuth
