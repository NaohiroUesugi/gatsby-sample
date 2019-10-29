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
  margin-bottom: 40px;
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

const Content = styled.div`
  font-size: 20px;
  color: #c4c4c4;
`

const Blog = styled.div`
  margin: 0px 35px 15px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;
  .blog_date{
    color: #000;
  }
  .blog_msg{
    color: #EF75BE;
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
        <Content>
          <Header>
            <FontAwesomeIcon
              icon={faPencilAlt}
              size="sm"
              color="#C4dC4C4"
              className="img"
            />
            <h3 className="title">BLOG</h3>
          </Header>
          <Blog>
            <p className="blog_date">2019.10.26</p>
            <p className="blog_msg">ipad_proを購入</p>
            <p className="blog_date">2019.09.1</p>
            <p className="blog_msg">高校の友達と旅行 (四国に)</p>
          </Blog>
        </Content>
        <Content>
          <Header>
            <FontAwesomeIcon
              icon={faHeart}
              size="sm"
              color="#C4dC4C4"
              className="img"
            />
            <h3 className="title">INTERREST</h3>
          </Header>
          <Interrest>
            
          </Interrest>
        </Content>
      </ActivityMain>
    </ActivityStyle>
  )
}

export default Activity
