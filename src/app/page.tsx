"use client";
import { useEffect, useState } from "react";
import Card from "./components/card";
import api from "./api";

export default function Home() {
  const [list, setList] = useState([]);
  useEffect(() => {
    api().then((res: any) => {      
      console.log(res);
      
      setList(res);
    });
    
  },[]);

  return (
    <main>
      {/* <h1>hudson</h1> */}
      {list.map(({ title, image }) => {
        // console.log(urlToImage);
        
        return (
          // <h1>{title}</h1>
          <Card title={title} img={image} />
        )
      })}
    </main>
  );
}
