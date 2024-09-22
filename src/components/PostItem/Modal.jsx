import React from "react";
import { ModalContainer, ModalContent, ButtonClose } from "./StyledPostItem";

// Função para o famoso "leia mais" quando não cabem mais caracteres na tela, no caso, a descrição do post
export default function Modal({ description, onClose }) {
  return (
    <ModalContainer>
      <ModalContent>
        <p>{description}</p>
        <ButtonClose onClick={onClose}>Fechar</ButtonClose>
      </ModalContent>
    </ModalContainer>
  );
}
