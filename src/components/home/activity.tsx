import * as React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

import TennisImg from '../../images/tennis.jpg'
import MathImg from '../../images/math.jpg'

import ActivityHeder from './common_style/text_center_grid'
import {Content, Header} from './common_style/list_content'

const ActivityStyle = styled.div`
  display: grid;
  grid-template:
    'header' 250px
    'main' 2fr
    / auto;
`

const ActivityMain = styled.div`
  padding: 60px 30px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
`

const Blog = styled.div`
  margin: 0px 35px 15px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;
  .blog_date {
    color: #000;
  }
  .blog_msg {
    color: #ef75be;
  }
`

const Interrest = styled.div`
  margin: 0px 35px 15px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  color: #000;
  text-align: center;
`

const RadiusImg = styled.img`
  width: calc(25vmin - 60px);
  height: calc(25vmin - 60px);
  border-radius: 50%;
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
            <div>
              <RadiusImg src={TennisImg} />
              <p>テニス</p>
            </div>
            <div>
              <RadiusImg src={MathImg} />
              <p>数学</p>
            </div>
          </Interrest>
        </Content>
      </ActivityMain>
    </ActivityStyle>
  )
}

export default Activity
