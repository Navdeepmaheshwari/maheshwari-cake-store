import Image from "next/image";
import styles from "../styles/Cakelist.module.css";
import CakeCard from "./CakeCard";
const Cakelist = ({ cakeList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST CAKE SHOP IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        laboriosam omnis dicta architecto, obcaecati tenetur. Ipsum quam
        reprehenderit vitae magnam distinctio quae minima?
      </p>
      <div className={styles.wrapper}>
        {cakeList.slice(0, 12).map((cake) => (
          <CakeCard key={cake._id} cake={cake} />
        ))}
      </div>
    </div>
  );
};

export default Cakelist;
