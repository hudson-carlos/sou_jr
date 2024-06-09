import Link from 'next/link';
import styles from '../styles/card.module.css';
interface prop {
  title: string;
  image: string;
  description: string;
}
const Card = ({ title, image, description}: prop) => {
  return (
  <div 
    className={styles.card}
    onClick={() =>{
      localStorage.setItem('article',  JSON.stringify({title, image, description}))
    }}
    >
    <Link href="/details">
      <img src={image} alt={title} className={styles.image} />
      <div>
        <h3>{title}</h3>
      </div>
    </Link>
  </div>
  );
};

export default Card;
