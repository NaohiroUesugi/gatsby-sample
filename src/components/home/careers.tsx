import * as React from 'react'

import styled from 'styled-components'

const CareersStyle = styled.div`
  background: #f7f7f7;
`

const TwoCareers = styled.div`
  padding: 60px 30px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 30px;
`
const Content = styled.div`
  height: 500px;
  color: #676767;
  h3{
    color: #00A1AB;
    padding-bottom: 10px;
    border-bottom: solid 1px #C4C4C4;
  }
  li{
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
