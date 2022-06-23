import { keyframes } from 'styled-components'

export const riseWithFadeIn = (y = '10px') => keyframes`
	0% {
		opacity : 0;
    transform: translateY(${y});
	}
	100% {
		opacity : 1;
    transform: translateY(0);
	}
`
