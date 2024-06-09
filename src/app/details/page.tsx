"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from '../styles/details.module.css';

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
    <div className={styles.detail}>
      <Link href="/"><h3>return to home page</h3></Link>
      <h1>{article.title}</h1>
      <div>
        <img src={article.image} alt={article.title} />
      </div>
      <p>{article.description}</p>
    </div>
  ) 
}