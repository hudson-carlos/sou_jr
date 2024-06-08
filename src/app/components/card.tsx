import Image from 'next/image'

interface props {
  title: string;
  img: any;
}

export default ({title, img}: props) => {
  return (
    <div>
      <img
        src={img}
        alt={title}
      />
      <h1>{title}</h1>
    </div>
  );
}