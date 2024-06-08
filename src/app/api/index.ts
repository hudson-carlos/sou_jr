export default async () => {
  const key: string = "ff1a4765f2714e61a4b6e69c179a3ffc";
  
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`);
  
  const { articles } = await res.json();
        
  return articles;
}

