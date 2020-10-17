import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Player from '../components/Player'
import Bio from '../components/Bio'

const MainContent = () => {
  return (
    <>
      <Row>
        <Col>
          <Bio />
        </Col>
      </Row>
      <Row>
        <Col>
          <Player />
        </Col>
      </Row>
    </>
  )
}

export default MainContent
