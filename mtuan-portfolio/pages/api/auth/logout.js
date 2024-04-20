import { handleLogout } from '@auth0/nextjs-auth0'

export default async function logout(req, res) {
  try {
    await handleLogout(req, res, {
      redirectAfterLogout: '/', // Redirect to your app's home page after logout
    })
  } catch (error) {
    console.error('Error during logout:', error)
    res.status(error.status || 500).json({ message: 'Logout failed' })
  }
}
