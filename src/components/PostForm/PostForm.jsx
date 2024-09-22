import { useState } from "react";
import { FormContent, Btn } from "./StyledPostForm";
import { PostList } from "../PostList/PostList";

// Criando função para os estados dos atributos
export function PostForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [post, setPost] = useState([]);

  // Envio do formulário
  const onSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      description,
      imageUrl: imageUrl || "", //mostra uma imagem padrão caso não tenha uma
    };

    setPost([...post, newPost]);

    // Atualização do formulário para o padrão
    setTitle("");
    setDescription("");
    setImageUrl("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <FormContent>
          <input
            type="text"
            placeholder="Título da postagem (máximo de 50 caracteres)"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            maxLength={50}
            required
          />
          <textarea
            placeholder="Escreva o conteúdo aqui...."
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <input
            type="text"
            placeholder="Link da imagem (opcional)"
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
          />
          <Btn type="submit">Postar</Btn>
        </FormContent>
      </form>

      <PostList posts={post} setPosts={setPost} />
    </>
  );
}
