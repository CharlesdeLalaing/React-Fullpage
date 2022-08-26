import React from 'react'
import styled, { keyframes } from 'styled-components'


const glow = keyframes`
0% {
    box-shadow: 0 0 10px #e60073;
  }
 100% {
    box-shadow: 0 0 20px #fff, 0 0 30px #e60073, 0 0 35px #e60073, 0 0 40px #e60073;
  }
`
const FormContainer = styled.form`
  width: 50%;
  margin: auto;
  height: auto;
  padding: 1em;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: black;
  animation: ${glow} 3s ease-in-out infinite alternate;
`;
const FormTitle = styled.h1`
  font-size: 25px;
  color: white;
  text-align: center;
  justify-content: center;
`;

const FormInputContainer = styled.div`
  height: auto;
  border-radius: 25px;
  margin: auto;
  background-color: black;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const FormInputContainer2 = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  border-radius: 25px;
  margin: auto;
  background-color: black;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;

const FormInput1 = styled.input`
  width: 40%;
  height: auto;
  border-radius: 25px;
  margin: 1em auto;
  background-color: transparent;
  color: white;
  border-bottom: 4px solid white;
  padding: 1em;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const FormInput = styled.input`
  width: 90%;
  height: auto;
  border-radius: 25px;
  margin: 1em auto;
  background-color: transparent;
  color: white;
  border-bottom: 4px solid white;
  padding: 1em;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const FormButton = styled.button`
  background-color: white;
  border-radius: 25px;
  margin: 2em 3em;
  padding: 0.5em 2em;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const Main = () => {
  return (
    <FormContainer autocomplete="off">
      <FormTitle>Contact Me</FormTitle>
      <FormInputContainer2>
        <FormInput1 type="text" autocomplete="off" name="first_name" placeholder='first name' required/>
        <FormInput1 type="text" autocomplete="off" name="last_name" placeholder='last name' required/>
      </FormInputContainer2>
      <FormInputContainer>
        <FormInput type="text" autocomplete="off" name="first_name" placeholder='first name' required/>
        <FormInput type="text" autocomplete="off" name="last_name" placeholder='last name' required/>
      </FormInputContainer>
      <FormButton type="submit">Send</FormButton>
    </FormContainer>
  )
}

export default Main