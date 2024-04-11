'use client'
import BaseLayout from './components/layouts/BaseLayout'
import { Container, Button } from 'reactstrap'

export default function Home() {
  return (
    <BaseLayout>
      <Container>
        <Button color="danger">Danger</Button>
        <div className="parent-class sibling-class">
          <h1> Hi there student!</h1>
          <div className="child-class"> Hello world</div>
        </div>
      </Container>
    </BaseLayout>
  )
}
