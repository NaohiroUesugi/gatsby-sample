import * as React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

const ActivityStyle = styled.div`
  display: grid;
  grid-template:
    'header' 250px
    'main' 2fr
    / auto;
`

const ActivityHeder = styled.div`
  font-family: Verdana;
  color: #515151;
  grid-area: header;
  text-align: center;
  align-self: center;
`

const Header = styled.div`
  margin-bottom: 20px;
  display: grid;
  grid-template:
    'img title' auto
    / 20px 1fr;
  grid-gap: 0px 10px;
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

const ActivityMain = styled.div`
  padding: 60px 30px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
`

const Blog = styled.div`
  height: 500px;
  color: #676767;
  h3 {
    color: #00a1ab;
    padding-bottom: 10px;
    border-bottom: solid 1px #c4c4c4;
  }
  li {
    font-weight: bold;
  }
`

const Interrest = styled.div`
  height: 500px;
  color: #676767;
  h3 {
    color: #00a1ab;
    padding-bottom: 10px;
    border-bottom: solid 1px #c4c4c4;
  }
  li {
    font-weight: bold;
  }
`

const Activity = () => {
  return (
    <ActivityStyle>
      <ActivityHeder>
        <h1>ACTIVITY</h1>
        <p>活動</p>
      </ActivityHeder>
      <ActivityMain>
        <Header>
          <FontAwesomeIcon
            icon={faPencilAlt}
            size="sm"
            color="#C4dC4C4"
            className="img"
          />
          <h3 className="title">BLOG</h3>
        </Header>
        <Header>
          <FontAwesomeIcon
            icon={faHeart}
            size="sm"
            color="#C4dC4C4"
            className="img"
          />
          <h3 className="title">INTERREST</h3>
        </Header>
      </ActivityMain>
    </ActivityStyle>
  )
}

export default Activity
