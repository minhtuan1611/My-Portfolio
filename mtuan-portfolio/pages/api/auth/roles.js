const NAMESPACE = 'https://portfolio-jerga.com'
const ROLES = {
  'tuan.mn51@gmail.com': ['admin'],
}

export default function getRole(req, res) {
  try {
    const email = req.query?.email
    const role = ROLES[email]

    if (email && role) {
      return res.json({ [NAMESPACE + '/roles']: role })
    }
    return res.json({ [NAMESPACE + '/roles']: ['guest'] })
  } catch (e) {
    return res.status(e.status || 422).json(e.response.data)
  }
}
