import Image from "next/image";
import axios from "axios";
import styles from "../styles/Allproducts.module.css";
import CakeCard from "../Component/CakeCard";
const server = process.env.URL || "http://localhost:3000";
const products = ({ cakeList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Maheshwari Cake</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        laboriosam omnis dicta architecto, obcaecati tenetur. Ipsum quam
        reprehenderit vitae magnam distinctio quae minima?
      </p>
      <h2>Our New Products</h2>
      <div className={styles.wrapper}>
        {cakeList.map((cake) => (
          <CakeCard key={cake._id} cake={cake} />
        ))}
      </div>
    </div>
  );
};
export const getServerSideProps = async () => {
  const res = await axios.get(`${server}/api/products`);
  return {
    props: {
      cakeList: res.data,
    },
  };
};
export default products;
