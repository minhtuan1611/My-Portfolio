import BaseLayout from '../../components/layouts/BaseLayout'

const Portfolio = async ({ params }) => {
  const id = params.id

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const portfolio = await res.json()

  return (
    <BaseLayout>
      <h2>Hi bro, this is single portfolio</h2>
      <h2>{portfolio.title}</h2>
      <p>{portfolio.body}</p>
      <p>{portfolio.id}</p>
    </BaseLayout>
  )
}

export default Portfolio
