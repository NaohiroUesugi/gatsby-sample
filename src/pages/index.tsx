import * as React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Introduction from '../components/home/introduction'
import Works from '../components/home/works'
import Careers from '../components/home/careers'
import Activity from '../components/home/activity'

const Container = styled.h1`
  color: red;
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
        <Container>Hi people</Container>
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
