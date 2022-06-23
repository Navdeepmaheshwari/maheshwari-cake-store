import styles from "../styles/CakeCard.module.css";
import Image from "next/image";
import Link from "next/link";
const CakeCard = ({cake}) => {
  return (
    <div className={styles.container}>
      <div className={styles.cake}>
        <Link href={`/product/${cake._id}`}>
        <Image
          src={cake.img}
          alt=""
          width="550"
          height="550"
          style={{ borderRadius: "50%" }}
        />
        </Link>
      </div>
      <h1 className={styles.title}>{cake.title.slice(0,30)}...</h1>
      <span className={styles.price}>&#x20b9;{cake.prices[0]}/-</span>
      <p className={styles.desc}>{cake.desc.slice(0,40)}...</p>
    </div>
  );
};

export default CakeCard;
