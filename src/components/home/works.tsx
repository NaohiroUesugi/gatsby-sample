import * as React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import ReactImg from '../../images/react.png'
import GatsbyImg from '../../images/gatsby.png'
import Neo4jImg from '../../images/neo4j.png'

const WorksStyle = styled.div`
  display: grid;
  grid-template:
    'header' 250px
    'main' 2fr
    / auto;
`
const WorksHeder = styled.div`
  color: #515151;
  grid-area: header;
  text-align: center;
  align-self: center;
`

const WorksMain = styled.div`
  margin: 0px 5%;
  grid-area: main;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

const Item = styled.div`
  height: 500px;
  display: grid;
  grid-template:
    'image' 300px
    'explanation' 1fr
    / auto;
`

const Image = styled.img`
  width: 300px;
  height: 300px;
  justify-self: center;
  object-fit: cover;
`

const Explanation = styled.div`
  .title {
    font-weight: bold;
    font-size: 20px;
  }
  text-align: center;
`

const Works = () => {
  return (
    <WorksStyle>
      <WorksHeder>
        <h1>WORKS</h1>
        <p>制作実績など</p>
      </WorksHeder>
      <WorksMain>
        <Item>
          <Image src={ReactImg} />
          <Explanation>
            <p className="title">aaaaLP</p>
            <p>Coding/Gatsby</p>
            <Link to="/page-2/">
              {' '}
              <FontAwesomeIcon icon={faAngleRight} size="3x" color="#EF75BE" />
            </Link>
          </Explanation>
        </Item>
        <Item>
          <Image src={GatsbyImg} />
          <Explanation>
            <p className="title">bbbbLP</p>
            <p>Coding/Gatsby</p>
            <Link to="/page-2/">
              {' '}
              <FontAwesomeIcon icon={faAngleRight} size="3x" color="#EF75BE" />
            </Link>
          </Explanation>
        </Item>
        <Item>
          <Image src={Neo4jImg} />
          <Explanation>
            <p className="title">ccccLP</p>
            <p>Coding/Gatsby</p>
            <Link to="/page-2/">
              {' '}
              <FontAwesomeIcon icon={faAngleRight} size="3x" color="#EF75BE" />
            </Link>
          </Explanation>
        </Item>
      </WorksMain>
    </WorksStyle>
  )
}

export default Works
