import PortfolioApi from '@/lib/api/portfolios'

export default async function createPortfolio(req, res) {
  try {
    const data = req.body
    console.log('Received data:', data)

    const portfolioApi = new PortfolioApi()
    const result = await portfolioApi.createPortfolio(data)

    return res.json({ message: 'Portfolio was created!', result: result.data })
  } catch (e) {
    console.error(
      'Error creating portfolio:',
      e.response ? e.response.data : e.message
    )
    return res
      .status(e.response?.status || 500)
      .end(e.message || 'Internal Server Error')
  }
}
