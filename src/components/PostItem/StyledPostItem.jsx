import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid;
  border-radius: 10px;
  width: 94%;
`;

export const ImageContainer = styled.div`
  width: 40%; 
  img {
    width: 100%;
    height: auto; 
    object-fit: cover;
    border-radius: 10px 0 0 10px;
  }
`;

export const TextContainer = styled.div`
  width: 40%;
  padding: 10px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5); 
  }

  &:active {
    background-color: #004080;
  }
`;

export const DeleteButton  = styled.button`
  background-color: rgb(174, 9, 9);
  color: white;
  padding: 10px 20px;
  margin-top: 10px;
  margin-right: auto;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  gap: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(219, 30, 30);
  }

  &:active {
    background-color: rgb(219, 30, 30);
  }
`;

export const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background: rgba(0, 0, 0, 0.5);
display: flex;
justify-content: center;
align-items: center;
z-index: 999;
`;

export const ModalContent = styled.div`
background: white;
padding: 20px;
border-radius: 8px;
width: 50%;
max-height: 70vh; 
overflow-y: auto; 
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 

p {
  margin-bottom: 20px;
}
`;

export const ButtonClose = styled.button`
background-color: #ff5c5c;
color: white;
border: none;
padding: 10px 15px;
border-radius: 5px;
cursor: pointer;
font-size: 16px;

top: 10px;
right: 10px;

&:hover {
  background-color: #ff1a1a;
}
`;