import styled from 'styled-components'

import { riseWithFadeIn } from '@/styles/commonKeyframes'

export const RiseAnimation = (delay = 0) => styled.div`
  opacity: 0;
  animation: ease-in 0.7s ${riseWithFadeIn()} ${delay}s forwards;
`
