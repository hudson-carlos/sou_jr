"use client";
import Link from "next/link";
import { useEffect, useState } from "react";


interface articleTyper {
  title: string;
  image: string;
  description: string;
}

export default () => {
  const [article, setArticle] = useState<null | articleTyper>(null);
  useEffect(() => {
    locaStorage();
  },[]);

  function locaStorage() {
    const local: null | string = localStorage.getItem('article');
    const article: null | articleTyper = local ? JSON.parse(local) : null;
    setArticle(() => article);
    
  } 
    
    console.log(article);
    
  if (!article) return <h1>Loading</h1>

  return(
    <div>
      <Link href="/"><h3>Volta para homer</h3></Link>
      <h1>{article.title}</h1>
      <img src={article.image} alt={article.title} />
      <p>{article.description}</p>
    </div>
  ) 
}