import styled from 'styled-components'

import { riseWithFadeIn } from '@/styles/commonKeyframes'

export const RiseAnimation = (delay?: number) => styled.div`
  opacity: 0;
  animation: ease-in 0.7s ${riseWithFadeIn()} ${delay || 0}s forwards;
`
