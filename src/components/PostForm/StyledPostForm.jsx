import styled from "styled-components";

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: center;
  gap: 15px;
  margin: 0 50px;
  margin-top: 20px;

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 2px solid #bfbaba;
    border-radius: 5px;
    font-size: 1rem;
    font-family: "Arial", sans-serif;
  }

  textarea {
    min-height: 100px;
    resize: none;
  }
`;

export const Btn = styled.button`
  background-color: rgb(9, 174, 86);
  color: white;
  padding: 10px 20px;
  margin-top: 10px;
  margin-right: auto;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(9, 174, 86);
  }

  &:active {
    background-color: rgb(7, 216, 104);
  }
`;
