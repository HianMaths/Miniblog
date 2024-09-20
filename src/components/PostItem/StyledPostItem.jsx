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

export const Btn  = styled.button`
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
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(219, 30, 30);
  }

  &:active {
    background-color: rgb(219, 30, 30);
  }
`;
