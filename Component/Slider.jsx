import Image from "next/image";
import styles from "../styles/Slider.module.css";
import { useState } from "react";
const Slider = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/Images/sli1.jpg",
    "/Images/sli2.jpg",
    "/Images/sli3.jpg",
    "/Images/sli4.jpg",
    "/Images/sli5.jpg",
    "/Images/sli6.jpg",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 5);
    }
    if (direction === "r") {
      setIndex(index !== 5 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image
          src="/Images/arrowl.png"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image
          src="/Images/arrowr.png"
          layout="fill"
          alt=""
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Slider;
