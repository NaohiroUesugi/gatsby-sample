import * as React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'

const CareersStyle = styled.div`
  background: #f7f7f7;
`

const TwoCareers = styled.div`
  padding: 60px 30px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
`
const Content = styled.div`
  font-size: 20px;
  height: 500px;
  color: #c4c4c4;
  h3 {
    margin-left: 10px;
    color: #00a1ab;
    display: inline-block;
    padding-bottom: 10px;
    border-bottom: solid 1px #c4c4c4;
  }
  ul {
    padding-left: 22px;
  }
  li {
    font-weight: bold;
  }
`
const Skill = styled.div`
  height: 300px;
  /* background: hsl(300, 80%, 50%); */
`
const PersonalQualities = styled.div`
  height: 300px;
  /* background: hsl(200, 80%, 30%); */
`

const Careers = () => {
  return (
    <CareersStyle>
      <TwoCareers>
        <Content>
          <FontAwesomeIcon icon={faAddressBook} size="sm" color="#C4dC4C4" />
          <h3>EXPRERIENCE</h3>
          <ul>
            <li>list1</li>
            <p>testtesttest</p>
            <li>list1</li>
          </ul>
        </Content>
        <Content>
          <h3>EDUCATION</h3>
          <ul>
            <li>list1</li>
            <li>list1</li>
          </ul>
        </Content>
      </TwoCareers>
      <TwoCareers>
        <Content>
          <h3>SKILL</h3>
          <ul>
            <li>list1</li>
            <li>list1</li>
          </ul>
        </Content>
        <Content>
          <h3>PERSONAL QUALITIES</h3>
          <ul>
            <li>list1</li>
            <li>list1</li>
          </ul>
        </Content>
      </TwoCareers>
    </CareersStyle>
  )
}

export default Careers
