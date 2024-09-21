import React from 'react'
import {ModalContainer, ModalContent, ButtonClose} from "./StyledPostItem"

export default function Modal({ description, onClose }) {
  return (
    <ModalContainer>
      <ModalContent>
        <p>{description}</p>
        <ButtonClose onClick={onClose}>Fechar</ButtonClose>
      </ModalContent>
    </ModalContainer>
  )
}

