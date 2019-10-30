import styled from 'styled-components'

export const Content = styled.div`
  font-size: 20px;
  color: #c4c4c4;
`

export const Header = styled.div`
  margin-bottom: 40px;
  display: grid;
  grid-template:
    'img title' auto
    / 20px 1fr;
  grid-gap: 0px 15px;
  .img {
    padding-top: 4px;
    justify-self: center;
    align-self: start;
  }
  .title {
    margin: 0;
    align-self: center;
    color: #00a1ab;
    display: inline-block;
    border-bottom: solid 1px #c4c4c4;
    padding-bottom: 15px;
  }
`
