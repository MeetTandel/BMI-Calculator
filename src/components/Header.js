import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <Wrapper>
            <h1>BMI Calculator</h1>
        </Wrapper>
    )
}

export default Header;

const Wrapper = styled.div`
text-align: center;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
background-color: #41b3a3;
color: #eee;
h1{
  margin: 0;
  padding: 5px;
  font-size: 1.6rem;
}

${'' /* @media (min-width: 657px) {
  h1 {
    min-width: 100%;
    min-height: 70%;
  }
  } */}
`

