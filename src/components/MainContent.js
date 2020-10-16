import React from 'react'
import { Col, Row } from 'react-bootstrap'

const MainContent = () => {
  return (
    <>
      <Row>
        <Col>
          <p className='brandiBio'>
            Brandi Bailey is an up and coming composer for film, televison and
            video games. Hailing from Saskatoon, she currently resides in
            Edmonton, Alberta. In 2018, she graduated from Grant MacEwan
            university with a degree in composition. You can also hear Brandi's
            work in the bands "The Eclipse", and "Machines Like These".
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
        <iframe className="brandiPlayer"
            title="brandiPlayer"
            src='https://open.spotify.com/embed/album/0xSgeuWjUS4d1S7Kx5kM3W'
            width='1000'
            height='190'
            frameborder='0'
            allowtransparency='true'
            allow='encrypted-media'
          ></iframe>
        </Col>
      </Row>
    </>
  )
}

export default MainContent
