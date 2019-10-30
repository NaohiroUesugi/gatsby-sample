import * as React from 'react'
import styled from 'styled-components'
import { Doughnut } from 'react-chartjs-2'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'

import {Content, Header} from './common_style/list_content'

const CareersStyle = styled.div`
  background: #f7f7f7;
`

const TwoCareers = styled.div`
  padding: 60px 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
`

const List = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr;
  grid-gap: 0px 15px;
  margin-bottom: 20px;
`
const ListMark = styled.div`
  display: grid;
  grid-template-rows: 20px 1fr;
  .border {
    margin-bottom: -30px;
    width: 50%;
    border-right: solid 1px #c4c4c4;
  }
`
const ListMsg = styled.div`
  color: #515151;
  p {
    margin: 0px 0px 5px 0px;
    font-size: 15px;
  }
  .title {
    font-weight: bold;
    font-size: 20px;
  }
`

const Skill = styled.div`
  margin: 0px 35px 15px;
  color: #515151;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  p {
    font-weight: bold;
    font-size: 20px;
    margin: 25px 0px 0px;
  }
`
const Score = styled.div`
  .score {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #c4c4c4;
    margin-right: 10px;
  }
  .green {
    background-color: #00a1ab;
  }
`

const Careers = () => {
  const data = {
    labels: ['Green', 'not'],
    datasets: [
      {
        data: [75, 25],
        backgroundColor: ['#56C9C5', '#515151'],
      }
    ],
  }

  const ListCompo = ({ children }: any) => {
    return (
      <List>
        <ListMark>
          <div>・</div>
          <div className="border"></div>
        </ListMark>
        <ListMsg>{children}</ListMsg>
      </List>
    )
  }

  // スキルのスコアを5段階で表示する
  const scoreList = (level:number) => {
    const list = [...Array(5)].map((_, i) => {
      if (i < level) {
        return <p className="score green" key={i}></p>
      }else{
        return <p className="score" key={i}></p>
      }
    })
    return list
  }

  return (
    <CareersStyle>
      <TwoCareers>
        <Content>
          <Header>
            <FontAwesomeIcon
              icon={faAddressBook}
              size="sm"
              color="#C4dC4C4"
              className="img"
            />
            <h3 className="title">EXPRERIENCE</h3>
          </Header>
          <ListCompo>
            <p className="title">
              エンジニア | 2019.03-
              <br />
              Baseconnect株式会社
            </p>
          </ListCompo>
          <ListCompo>
            <p className="title">コールセンター | 2018.04-</p>
            <p>NTTの光回線を売っていた</p>
          </ListCompo>
          <ListCompo>
            <p className="title">
              カフェ | 2017.04-
              <br />
              ドトール
            </p>
            <p>一番おいしい飲み物はハニーカフェオレ</p>
          </ListCompo>
          <List>
            <ListMark>
              <div>・</div>
            </ListMark>
            <ListMsg>
              <p className="title">塾講師</p>
              <p>科目は数学</p>
            </ListMsg>
          </List>
        </Content>
        <Content>
          <Header>
            <FontAwesomeIcon
              icon={faAddressBook}
              size="sm"
              color="#C4dC4C4"
              className="img"
            />
            <h3 className="title">EDUCATION</h3>
          </Header>
          <ListCompo>
            <p className="title">数学科 | 2017.04 - 現在</p>
            <p className="title">関西大学</p>
          </ListCompo>
          <List>
            <ListMark>
              <div>・</div>
            </ListMark>
            <ListMsg>
              <p className="title">普通科 | 2014.04 - 2017.03</p>
              <p className="title">奈良北高校</p>
            </ListMsg>
          </List>
        </Content>
      </TwoCareers>
      <TwoCareers>
        <Content>
          <Header>
            <FontAwesomeIcon
              icon={faAddressBook}
              size="sm"
              color="#C4dC4C4"
              className="img"
            />
            <h3 className="title">SKILL</h3>
          </Header>
          <Skill>
            <p className="skill_name">javascript</p>
            <Score>
              {scoreList(2)}
            </Score>
            <p className="other">ES6</p>
          </Skill>
          <Skill>
            <p className="skill_name">Ruby</p>
            <Score>
              {scoreList(3)}
            </Score>
            <p className="other"></p>
          </Skill>
          <Skill>
            <p className="skill_name">React</p>
            <Score>
              {scoreList(3)}
            </Score>
            <p className="other">Reduxは少し</p>
          </Skill>
          <Skill>
            <p className="skill_name">Typescript</p>
            <Score>
              {scoreList(1)}
            </Score>
            <p className="other">今回が初めて</p>
          </Skill>
        </Content>
        <Content>
          <Header>
            <FontAwesomeIcon
              icon={faAddressBook}
              size="sm"
              color="#C4dC4C4"
              className="img"
            />
            <h3 className="title">PERSONAL QUALITIES</h3>
          </Header>
          <Doughnut data={data} />
        </Content>
      </TwoCareers>
    </CareersStyle>
  )
}

export default Careers
