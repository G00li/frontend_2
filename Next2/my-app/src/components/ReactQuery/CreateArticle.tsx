import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

interface Article {
  title: string;
  content: string;
}

function createArticle(newArticle: Article) {
  return fetch("https://67ca2fd7102d684575c4b4f8.mockapi.io/api/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newArticle),
  }).then((res) => res.json());
}

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createArticle,
    onSuccess: () => {
      // Invalida e atualiza a query de artigos após criar um novo
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      setTitle("");
      setContent("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ title, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Título:</label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">Conteúdo:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? "Criando..." : "Criar Artigo"}
      </button>
      {mutation.isError && (
        <div>Erro ao criar artigo: {mutation.error.message}</div>
      )}
    </form>
  );
}

export default CreateArticle; 