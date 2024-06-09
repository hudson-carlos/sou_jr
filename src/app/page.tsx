"use client";
import { useEffect, useState } from "react";
import Card from "./components/card";
import api from "./api";
import "./globals.css";

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
      {list.map(({ title, image, description }) => {
        return (
          <Card title={title} image={image}  description={description}/>
        )
      })}
    </main>
  );
}
