import { useState } from "react";
import Modal from "./Modal";
import {
  PostContainer,
  ImageContainer,
  TextContainer,
  DeleteButton,
  Button,
} from "./StyledPostItem";

export function PostItem({ post, onDelete }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ReadMore = () => {
    setIsModalOpen(true);
  };

  return (
    <PostContainer>
      <ImageContainer>
        <img
          src={post.imageUrl || "https://encurtador.com.br/U27jc"}
          alt={post.title}
        />
      </ImageContainer>
      <TextContainer>
        <h2>{post.title}</h2>
        <p>
          {post.description.length > 100
            ? `${post.description.slice(0, 100)}...`
            : post.description}
        </p>
        {post.description.length > 100 && (
          <Button onClick={ReadMore}>Leia mais</Button>
        )}
        <DeleteButton onClick={() => onDelete(post.id)}>Excluir</DeleteButton>
      </TextContainer>
      {isModalOpen && (
        <Modal
          description={post.description}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </PostContainer>
  );
}
