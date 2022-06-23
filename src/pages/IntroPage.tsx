import styled from 'styled-components'

import IntroAwardSection from '@/components/Intro/IntroAwardSection'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const IntroPage = () => {
  return (
    <Container>
      <IntroAwardSection />
    </Container>
  )
}

export default IntroPage
