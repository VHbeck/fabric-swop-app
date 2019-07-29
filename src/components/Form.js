import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    width: 245px;
    height: 25px;
    border: grey solid 1px;
  }
  label {
    margin: 7px;
  }
`;

const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background-color: #131426;
  border-radius: 50%;
  color: white;
  margin-top: 10px;
`;

const AddButton = styled.button`
  height: 35px;
  width: 133px;
  background-color: #ff979a;
  border-radius: 15px;
  font-weight: bold;
  font-size: 16px;
  font-family: "Nunito", sans-serif;
  margin: 10px;
  border: none;
`;

function Form() {
  return (
    <form>
      <FormContainer>
        <Number>1</Number>
        <h2>Fabric Info</h2>
        <label>
          Name: <input type="text" placeholder="Cotton fabric with dots" />
        </label>
        <label>
          Type: <input type="text" placeholder="cotton" />
        </label>
        <label>
          Length: <input type="number" placeholder="3" /> m
        </label>
        <label>
          Width: <input type="number" placeholder="1.45" /> m
        </label>
        <label>
          Color: <input type="text" placeholder="blue" />
        </label>
      </FormContainer>

      <FormContainer>
        <Number>2</Number>
        <h2>Price</h2>
        <label>
          Price: <input type="number" placeholder="10" />
        </label>
        <AddButton>Add</AddButton>
      </FormContainer>
    </form>
  );
}

export default Form;
