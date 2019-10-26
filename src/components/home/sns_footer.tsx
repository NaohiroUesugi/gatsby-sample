import * as React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTwitterSquare,
  faFacebookSquare,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons'

const SnsFooterStyle = styled.div`
  height: 400px;
  background: #f7f7f7;
  display: grid;
`

const CenterItem = styled.div`
  text-align: center;
  align-self: center;
  .item {
    margin: 0 15px;
  }
`

const SnsFooter = () => {
  return (
    <SnsFooterStyle>
      <CenterItem>
        <a href="https://twitter.com">
          <FontAwesomeIcon
            icon={faTwitterSquare}
            size="3x"
            color="#EF75BE"
            className="item"
          />
        </a>
        <a href="https://www.facebook.com">
          <FontAwesomeIcon
            icon={faFacebookSquare}
            size="3x"
            color="#EF75BE"
            className="item"
          />
        </a>
        <a href="https://www.github.com">
          <FontAwesomeIcon
            icon={faGithubSquare}
            size="3x"
            color="#EF75BE"
            className="item"
          />
        </a>
      </CenterItem>
    </SnsFooterStyle>
  )
}

export default SnsFooter
