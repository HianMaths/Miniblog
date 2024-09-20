import { useState } from "react";
import { FormContent, Btn } from "./StyledPostForm";

export function PostForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [post, setPost] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      description,
      imageUrl: imageUrl || "", //mostra uma imagem padrão caso não tenha uma
    };

    setPost([...post, newPost]);

    setTitle("");
    setDescription("");
    setImageUrl("");

    console.log(addPost);
  };

  // Adicionando uma função para deletar post pelo ID
  const deletePost = (id) => {
    const updatePost = post.filter((item) => item.id !== id);
    setPost(updatePost);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <FormContent>
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            maxLength={50}
          />
          <textarea
            placeholder="Conteúdo"
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
      <div>
        {post.map((item) => {
          return (
            <div>
              <img
                src={item.imageUrl}
                alt={item.tittle}
                // Adicionando uma imagem caso nao haja link
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <p>Título: {item.title}</p>
              <p>Descrição: {item.description}</p>
              <Btn type="button" onClick={() => deletePost(item.id)}>
                Deletar Post
              </Btn>
            </div>
          );
        })}
      </div>
    </>
  );
}
