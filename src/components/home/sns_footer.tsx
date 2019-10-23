import * as React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core"
import { faTwitterSquare, faFacebookSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faAddressBook, faAngleRight, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'

const SnsFooterStyle = styled.div`
  height: 400px;
  background: #f7f7f7;
`

const SnsFooter = () => {
  return (
    <SnsFooterStyle>
      <FontAwesomeIcon icon={faTwitterSquare} size="3x" color="pink"/>
      <FontAwesomeIcon icon={faFacebookSquare} size="4x"/>
      <FontAwesomeIcon icon={faGithubSquare} size="5x"/>
      <FontAwesomeIcon icon={faAddressBook} size="3x" color="pink"/>
      <FontAwesomeIcon icon={faAngleRight} size="4x"/>
      <FontAwesomeIcon icon={faChevronCircleUp} size="5x"/>
    </SnsFooterStyle>
  )
}

export default SnsFooter
