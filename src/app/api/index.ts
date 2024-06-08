export default async () => {
  const apikey = '9fe38bf0b0597cecf1bad1084a801b9c';
  
  const res = await fetch('https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=' + apikey);
 console.log(res);
  
  const { articles } = await res.json();
        
  return articles;
}

 