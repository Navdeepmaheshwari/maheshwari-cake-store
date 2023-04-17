import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Product.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
const server = process.env.URL || "http://localhost:3000";
const Product = ({ cake }) => {
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(cake.prices[0]);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();
  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const diff = cake.prices[sizeIndex] - cake.prices[size];
    setSize(sizeIndex);
    changePrice(diff);
  };

  const handleClick = (e, option) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };
  const handleCart = () => {
    dispatch(addProduct({ ...cake, extras, price, quantity }));
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={cake.img} objectFit="none" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{cake.title}</h1>
        <span className={styles.price}>&#x20b9;{price}</span>
        <p className={styles.desc}>{cake.desc}</p>
        <h3 className={styles.choose}>Choose the Size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/Images/size.png" layout="fill" alt="" />
            <span className={styles.number}>1 Pound</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/Images/size.png" layout="fill" alt="" />{" "}
            <span className={styles.number}>2 Pound</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src="/Images/size.png" layout="fill" alt="" />{" "}
            <span className={styles.number}>3 Pound</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional toppings</h3>
        <div className={styles.ingredients}>
          {cake.extraOptions.map((option) => (
            <div className={styles.option} key={option._id}>
              <input
                className={styles.checkbox}
                type="checkbox"
                id={option.text}
                name={option.text}
                onClick={(e) => handleClick(e, option)}
              />
              <label htmlFor={option.text}>{option.text}</label>
            </div>
          ))}
        </div>
        <div className={styles.add}>
          <input
            type="number"
            onChange={(e) => setQuantity(e.target.value)}
            defaultValue={1}
            className={styles.quantity}
          />
          <button className={styles.button} onClick={handleCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`${server}/api/products/${params.id}`);
  return {
    props: {
      cake: res.data,
    },
  };
};

export default Product;
