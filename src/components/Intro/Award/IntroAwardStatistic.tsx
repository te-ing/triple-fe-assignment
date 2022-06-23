import styled from 'styled-components'

import { Bold } from '@/styles/commonStyles'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const StatisticContent = styled.h2`
  font-size: 2.25rem;
  color: rgb(58, 58, 58);
`

const IntroAwardStatistic = () => {
  return (
    <Container>
      <StatisticContent>
        <Bold>700만 명</Bold>의 여행자
      </StatisticContent>
      <StatisticContent>
        <Bold>100만 개</Bold>의 여행 리뷰
      </StatisticContent>
      <StatisticContent>
        <Bold>470만 개</Bold>의 여행 일정
      </StatisticContent>
    </Container>
  )
}

export default IntroAwardStatistic
