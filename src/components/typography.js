import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 30px;
  color: red;
`
const H2 = H1.withComponent('h2').extend`
  font-size: 24px;
`
const H3 = H1.withComponent('h2').extend`
  font-size: 18px;
`
const H4 = H1.withComponent('h2').extend`
  font-size: 15px;
`


export { H1, H2, H3, H4 }
