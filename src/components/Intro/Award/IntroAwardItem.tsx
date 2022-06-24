import styled from 'styled-components'

const Container = styled.div<{ height?: string }>`
  display: flex;
  height: ${({ height }) => height};
  padding: 5px 0;
  gap: 8px;
`

const Image = styled.img`
  height: 100%;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

interface IntroAwardItemProps {
  src: string
  height?: string
  alt?: string
  children?: JSX.Element
}

const IntroAwardItem = ({
  src,
  height,
  alt,
  children,
}: IntroAwardItemProps) => {
  return (
    <Container height={height}>
      <Image alt={alt || 'AwardItem'} src={src} />
      <ContentContainer>{children}</ContentContainer>
    </Container>
  )
}

export default IntroAwardItem
