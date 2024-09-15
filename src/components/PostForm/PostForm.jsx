import { useState } from "react";
import { FormContent, Btn } from "./StyledPostForm";

export function PostForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [post, setPost] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    const addPost = {
      id: Date.now(),
      title,
      description,
      imageUrl: imageUrl || "", //mostra uma imagem padrão caso não tenha uma
    };

    setPost([...post, addPost]);

    setTitle("");
    setDescription("");
    setImageUrl("");

    console.log(addPost);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <FormContent>
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={50}
          />
          <textarea
            placeholder="Conteúdo"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Link da imagem (opcional)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <Btn type="submit">Postar</Btn>
        </FormContent>
      </form>
    </>
  );
}
