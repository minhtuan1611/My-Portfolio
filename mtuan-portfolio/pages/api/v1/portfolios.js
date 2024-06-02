import PortfolioApi from '@/lib/api/portfolios'

export default async function createPortfolio(req, res) {
  try {
    const data = req.body
    console.log(data) // Log the request body
    await new PortfolioApi().createPortfolio(data)
    return res.json({ message: 'Portfolio was created!' })
  } catch (e) {
    console.error('Error creating portfolio:', e) // Log the error
    return res.status(e.status || 500).end(e.message || 'Internal Server Error')
  }
}
