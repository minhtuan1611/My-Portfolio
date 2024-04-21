import useSWR from 'swr'
import { useUser } from '@auth0/nextjs-auth0/client'

export const useGetUser = () => {
  const { user, error: userError } = useUser()
  const { user: roleData, error: roleError } = useSWR(
    user ? `/api/auth/roles?email=${user.email}` : null
  )

  const loading = !user

  let roles = []
  if (roleData && !roleError) {
    roles = roleData['https://portfolio-jerga.com/roles']
  }

  return { user, roles, loading, userError, roleError }
}
