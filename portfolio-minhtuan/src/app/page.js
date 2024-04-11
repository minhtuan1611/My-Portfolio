'use client'
import BaseLayout from './components/layouts/BaseLayout'
import { Container, Button } from 'reactstrap'

export default function Home() {
  return (
    <BaseLayout>
      <Container>
        <h2>I'm an index page</h2>

        <Button color="primary">Click Me</Button>
      </Container>
    </BaseLayout>
  )
}
