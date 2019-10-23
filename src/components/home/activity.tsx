import * as React from 'react'
import styled from 'styled-components'

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

const ActivityMain = styled.div`
  padding: 60px 30px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
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
        <Blog>
          <h3>BLOG</h3>
          <ul>
            <li>list1</li>
            <p>testtesttest</p>
            <li>list1</li>
          </ul>
        </Blog>
        <Interrest>
          <h3>INTERREST</h3>
          <ul>
            <li>list1</li>
            <p>testtesttest</p>
            <li>list1</li>
          </ul>
        </Interrest>
      </ActivityMain>
    </ActivityStyle>
  )
}

export default Activity
