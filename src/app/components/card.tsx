import styles from '../styles/card.module.css';
interface prop {
  title: string;
  image: string;
}
const Card = ({ title, image }: prop) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Card;
