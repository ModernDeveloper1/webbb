import React from 'react'
import styled from 'styled-components'
import GIF from '../assets/Home Video.png'


const Image = styled.div`
width: 100%;

image{
    width: 100%;
    height: auto;
}

@media (max-width: 64em) {
  min-width: 40vh;
}
`

const CoverVideo = () => {
  return (
    <div
        src={GIF} type="png"   > 
    </div>
  )
}

export default CoverVideo