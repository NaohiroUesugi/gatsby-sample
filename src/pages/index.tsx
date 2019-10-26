import * as React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import scrollTo from 'gatsby-plugin-smoothscroll'

import Introduction from '../components/home/introduction'
import Works from '../components/home/works'
import Careers from '../components/home/careers'
import Activity from '../components/home/activity'
import SnsFooter from '../components/home/sns_footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'

const GoToBack = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
`
// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface Home {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export default class extends React.Component<Home, {}> {
  constructor(props: Home, context: any) {
    super(props, context)
  }
  public render() {
    return (
      <>
        <Introduction />
        <Works />
        <Careers />
        <Activity />
        <SnsFooter />
        <GoToBack>
          <Link to="#">
            <FontAwesomeIcon
              icon={faChevronCircleUp}
              size="3x"
              color="#EF75BE"
            />
          </Link>
        </GoToBack>
        <h2>以下は練習</h2>
        <p>
          Welcome to your new{' '}
          <strong>{this.props.data.site.siteMetadata.title}</strong> site.
        </p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
