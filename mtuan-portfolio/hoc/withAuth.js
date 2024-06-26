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
      if (role && !isAuthorized(user, role)) {
        return <Redirect ssr to="/api/auth/login" />
      }
      console.log(isAuthorized(user, role))

      return <Component user={user} loading={isLoading} {...props} />
    }
  }
}

export default withAuth
