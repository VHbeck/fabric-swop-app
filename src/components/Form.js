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

function Form() {
  const [cardState, setCardState] = React.useState([]);
  const [name, setName] = React.useState("");
  const [type, setType] = React.useState("");
  const [fabricLength, setFabricLength] = React.useState("");
  const [fabricWidth, setFabricWidth] = React.useState("");
  const [fabricColor, setfabricColor] = React.useState("");
  const [price, setPrice] = React.useState("");

  React.useEffect(() => {
    setCardToStorage(cardState);
  }, [cardState]);

  function setCardToStorage(item) {
    return localStorage.setItem("Card", JSON.stringify(item));
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleTypeChange(event) {
    setType(event.target.value);
  }

  function handleLengthChange(event) {
    setFabricLength(event.target.value);
  }

  function handelWidthChange(event) {
    setFabricWidth(event.target.value);
  }

  function handleColorChange(event) {
    setfabricColor(event.target.value);
  }

  function handlePriceChange(event) {
    setPrice(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newCard = [
      {
        name: name,
        type: type,
        fabricLength: fabricLength,
        fabricWidth: fabricWidth,
        fabricColor: fabricColor,
        price: price,
        bookmark: false
      },
      ...cardState
    ];
    setCardState(newCard);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormContainer>
        <Number>1</Number>
        <h2>Fabric Info</h2>
        <label>
          Name:{" "}
          <input
            type="text"
            placeholder="Cotton fabric with dots"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label>
          Type:{" "}
          <input
            type="text"
            placeholder="cotton"
            value={type}
            onChange={handleTypeChange}
          />
        </label>
        <label>
          Length:{" "}
          <input
            type="number"
            placeholder="3"
            value={fabricLength}
            onChange={handleLengthChange}
          />
          m
        </label>
        <label>
          Width:{" "}
          <input
            type="number"
            placeholder="1.45"
            value={fabricWidth}
            onChange={handelWidthChange}
          />
          m
        </label>
        <label>
          Color:{" "}
          <input
            type="text"
            placeholder="blue"
            value={fabricColor}
            onChange={handleColorChange}
          />
        </label>
      </FormContainer>

      <FormContainer>
        <Number>2</Number>
        <h2>Price</h2>
        <label>
          Price:{" "}
          <input
            type="number"
            placeholder="10"
            value={price}
            onChange={handlePriceChange}
          />
          Euro
        </label>
        <AddButton>Add</AddButton>
      </FormContainer>
    </form>
  );
}

export default Form;
