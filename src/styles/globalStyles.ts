import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyles = createGlobalStyle`
 ${reset}
 * {
   box-sizing:border-box;
   outline:none;
   border:none;
  }

 html {
  font-size: 16px;
 }

 h2 {
  font-size: 2.25rem;
 }
`

export default GlobalStyles
