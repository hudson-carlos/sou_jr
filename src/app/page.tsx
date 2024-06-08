"use client";
import { useEffect } from "react";
import api from "./api";

export default function Home() {
  
  useEffect(() => {
    api().then((res: any) => {
      console.log(res, "hh");
      
    });
    
  },[]);

  return (
    <main>
      <h1>Hudson</h1>
      <p>carlos</p>
    </main>
  );
}
