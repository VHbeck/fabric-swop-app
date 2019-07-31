import React from "react";
import styled from "styled-components";
import AddButton from "./AddButton";

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

function Form({ onCreate }) {
  const [newCard, setnewCard] = React.useState({
    name: "",
    type: "",
    fabricLength: "",
    fabricWidth: "",
    fabricColor: "",
    price: "",
    source: "images/sample-fabric.jpg",
    bookmark: false
  });

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setnewCard({
      ...newCard,
      [name]: value
    });
  }

  //console.log(newCard);

  function handleSubmit(event) {
    event.preventDefault();
    const item = {
      name: newCard.name,
      type: newCard.type,
      fabricLength: newCard.fabricLength,
      fabricWidth: newCard.fabricWidth,
      fabricColor: newCard.fabricColor,
      price: newCard.price,
      source: "images/sample-fabric.jpg",
      bookmark: false
    };
    onCreate(item);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormContainer>
        <Number>1</Number>
        <h2>Fabric Info</h2>
        <label>
          Name:{" "}
          <input
            name="name"
            type="text"
            placeholder="Cotton fabric with dots"
            value={newCard.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Type:{" "}
          <input
            name="type"
            type="text"
            placeholder="cotton"
            value={newCard.type}
            onChange={handleChange}
          />
        </label>
        <label>
          Length:{" "}
          <input
            name="fabricLength"
            type="number"
            placeholder="3"
            value={newCard.fabricLength}
            onChange={handleChange}
          />
          m
        </label>
        <label>
          Width:{" "}
          <input
            name="fabricWidth"
            type="number"
            placeholder="1.45"
            value={newCard.fabricWidth}
            onChange={handleChange}
          />
          m
        </label>
        <label>
          Color:{" "}
          <input
            name="fabricColor"
            type="text"
            placeholder="blue"
            value={newCard.fabricColor}
            onChange={handleChange}
          />
        </label>
      </FormContainer>

      <FormContainer>
        <Number>2</Number>
        <h2>Price</h2>
        <label>
          Price:{" "}
          <input
            name="price"
            type="number"
            placeholder="10"
            value={newCard.price}
            onChange={handleChange}
          />
          Euro
        </label>
        <AddButton type="submit">Add</AddButton>
      </FormContainer>
    </form>
  );
}

export default Form;
