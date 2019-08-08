import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 30px 30px 30px;
  input,
  select {
    font-size: 18px;
    width: 95%;
    border: grey solid 1px;
    padding: 5px;
    border-radius: 15px;
    background-color: white;
    margin: 0px 10px 15px 10px;
  }
  label {
    font-size: 18px;
    margin: 10px 10px 0px 10px;
  }
  button {
    display: block;
    align-self: center;
  }
  a {
    align-self: center;
  }
  .smallinput {
    width: 30%;
  }
`;

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  input {
    font-size: 18px;
    width: 90%;
    border: grey solid 1px;
    padding: 5px;
    border-radius: 15px;
    background-color: white;
  }
  .smallinput {
    width: 30%;
  }
  button {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const StyledUpload = styled.div`
  text-align: center;
`;
