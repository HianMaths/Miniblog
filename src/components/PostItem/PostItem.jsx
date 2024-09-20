
import { PostContainer, ImageContainer, TextContainer, DeleteButton, Btn  } from "./StyledPostItem";

export function PostItem({ post, onDelete }) {
  /* const maxContentLength = 100; */ 

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
          {post.description}
        </p>
        <DeleteButton onClick={() => onDelete(post.id)}>Deletar</DeleteButton >
      </TextContainer>
    </PostContainer>
  );
}
