import { getSession } from '@auth0/nextjs-auth0'

export const isAuthorized = async (user, role) => {
  const url = `/api/auth/roles?email=${user.name}`
  const response = await fetch(url)
  const data = await response.json()
  const userRoles = data['https://portfolio-jerga.com/roles']
  // console.log(typeof userRoles.includes(role))
  // console.log(role, userRoles)
  return userRoles.includes(role)
}

export const authorizeUser = async (req, res) => {
  const session = await getSession(req, res)
  if (!session || !session.user) {
    res.writeHead(302, {
      Location: '/api/auth/login',
    })
    res.end()
    return null
  }

  return session.user
}

export const withAuth =
  (getData) =>
  (role) =>
  async ({ req, res }) => {
    const session = await getSession(req, res)
    const roleRes = await fetch(
      `http://localhost:3000/api/auth/roles?email=${session?.user?.name}`
    )
    const roles = await roleRes.json()
    const user = { ...session?.user, ...roles }

    if (!session || !session.user || (role && !isAuthorized(user, role))) {
      res.writeHead(302, {
        Location: '/api/auth/login',
      })
      res.end()
      return { props: {} }
    }

    const data = getData ? await getData({ req, res }, user) : {}

    return { props: { user, ...data } }
  }
