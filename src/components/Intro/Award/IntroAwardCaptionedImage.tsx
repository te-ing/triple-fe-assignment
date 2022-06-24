import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  height: fit-content;
`

const Image = styled.img`
  width: 400px;
`

const Caption = styled.div`
  position: absolute;
  bottom: 40px;
  color: rgba(58, 58, 58, 0.7);
  font-size: 14px;
  left: 50%;
  transform: translate(-50%);
`

const IntroAwardCaptionedImage = () => {
  return (
    <Container>
      <Image alt="triple logo" src="images/triple2x.png" />
      <Caption>2021년 12월 기준</Caption>
    </Container>
  )
}

export default IntroAwardCaptionedImage
