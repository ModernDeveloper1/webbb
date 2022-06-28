import React, { lazy, Suspense } from 'react'
import styled, { ThemeProvider } from 'styled-components'
// import Carousel from '../Carousel'
import Button from '../Button'
import {dark} from '../../styles/Themes';
import Loading from '../Loading';


const Carousel = lazy(() => import("../Carousel"));

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;

`
const Container = styled.div`
width: 75%;
margin: 0 auto;
/* background-color: lightblue; */

display: flex;
justify-content: center;
align-items: center;
@media (max-width: 70em){
  width: 85%;
}

@media (max-width: 64em){
  width: 100%;
  flex-direction: column;

  &>*:last-child{
    width: 80%;
  }
}
@media (max-width: 40em){
  

  &>*:last-child{
    width: 90%;
  }
}
`
const Box = styled.div`
width: 50%;
height: 100%;
min-height: 60vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 40em){
  min-height: 50vh;
}
`
const ButtonContainer = styled.div`
 width: 80%;
 margin: 3rem auto;
 display: flex;
  align-self: flex-start;

  @media (max-width: 64em){
width: 100%;

button{
  margin: 0 auto;
}
}

`
 
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
margin: 0 auto;

@media (max-width: 64em){
  width: 100%;
  text-align:center;
}
@media (max-width: 40em){
  font-size: ${(props) => props.theme.fontxl};

}
@media (max-width: 30em){
  font-size: ${(props) => props.theme.fontlg};

}
`
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
margin: 1rem auto;
font-weight:400;
@media (max-width: 64em){
  width: 100%;
  text-align:center;
  font-size: ${(props) => props.theme.fontmd};

}
@media (max-width: 40em){
  font-size: ${(props) => props.theme.fontmd};

}
@media (max-width: 30em){
  font-size: ${(props) => props.theme.fontsm};

}

`
const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  align-self: flex-start;
  width: 80%;
margin: 1rem auto;
font-weight:400;

@media (max-width: 64em){
  width: 100%;
  text-align:center;
  font-size: ${(props) => props.theme.fontsm};

}
@media (max-width: 40em){
  font-size: ${(props) => props.theme.fontsm};

}
@media (max-width: 30em){
  font-size: ${(props) => props.theme.fontxs};

}

`


const About = () => {
  return (
    <Section id="Proximity">
      <Container>
        <Box> 
        <Suspense fallback={<Loading />}>
          <Carousel /> </Suspense> </Box>
        <Box> 
        <Title>
        Proximity <br /> Mint now!
        </Title>
        <SubText>
        Interwomen's proximity NFT set of 90, provide many great benefits for the users holding, 
        </SubText>
        <SubTextLight>
        • [1] Weekly member exclusive audio conversations /  transmissions  (30 mins - 1 hour each)

        • [2] Group coaching zoom calls monthly
• [3] Access to resources and recorded training, ever evolving high end resources
• [4] Downloadable booklets, work sheets paired with masterclasses
• [5] Community proximity and connection via Discord (and access to a growing worldwide community of experts, thought leaders and incredible humans)
• [6] Live and deep Breathwork experiences
• [7] Access to personal sovereignty information and guidance in this arena
• [8] Drip feed of investment strategy’s and intel for your peronal growth and legacy leading 
        </SubTextLight>
        <ButtonContainer>
        <ThemeProvider theme={dark}>
        <Button text="Mint Now" link="https://dapps-alpha.vercel.app/" />
        </ThemeProvider>
        </ButtonContainer>
         </Box>
      </Container>
    </Section>
  )
}

export default About