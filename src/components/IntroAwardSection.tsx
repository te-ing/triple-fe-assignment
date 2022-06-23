import styled from 'styled-components'

import IntroAwardItem from './Intro/Award/IntroAwardItem'
import IntroAwardCaptionedImage from './Intro/Award/IntroAwardCaptionedImage'
import IntroAwardStatistic from './Intro/Award/IntroAwardStatistic'

const Container = styled.section`
  display: flex;
  justify-content: space-around;
  width: 1200px;
`
const IntroContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`
const IntroAwardItemContent = styled.span`
  color: #3a3a3acc;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
`
const AwardContainer = styled.div`
  display: flex;
  gap: 40px;
`

const IntroAwardSection = () => {
  return (
    <Container>
      <IntroAwardCaptionedImage />
      <IntroContentsContainer>
        <IntroAwardStatistic />
        <AwardContainer>
          <IntroAwardItem src="images/play-store2x.png" height="64px">
            <IntroAwardItemContent>
              2018 구글 플레이스토어 <br />
              올해의 앱 최우수상 수상
            </IntroAwardItemContent>
          </IntroAwardItem>
          <IntroAwardItem src="images/badge-apple4x.png" height="64px">
            <IntroAwardItemContent>
              2018 애플 앱스토어 <br />
              오늘의 여행앱 선정
            </IntroAwardItemContent>
          </IntroAwardItem>
        </AwardContainer>
      </IntroContentsContainer>
    </Container>
  )
}

export default IntroAwardSection
