import styles from "../styles/Footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
     
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.slogan}>
            OH YES, WE DID. THE MAHESHWARI CAKE, WELL BAKED CAKE.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR BAKERY</h1>
          <p className={styles.text}>
          Shop nom.8, Prernatirth Derasar Rd <br />Vraj Vihar, Satellite, Ahmedabad <br />
          Gujarat 380015.
          </p>
          <p className={styles.text}>
          Shivalik Plaza, 7, IIM Rd, opposite AMA <br /> Panjara Pol, Ambawadi, Ahmedabad, <br />
          Gujarat 380015.
          </p>
          <p className={styles.text}>
          Vittal Complex, New CG Rd, opp. Sakar High School, <br /> Nigam Nagar, Chandkheda, Ahmedabad,<br />
          Gujarat 382424.
          </p>
          <p className={styles.text}>
          Vardhman Appt, Commerce College Rd <br /> Navrangpura, Ahmedabad, <br />
          Gujarat 380009.
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
           MONDAY UNTILL FRIDAY <br /> 9.00 AM - 8.00 PM
          </p>
          
          <p className={styles.text}>
          SATURDAY-SUNDAY <br /> 9.00 AM - 10.00 PM
          </p>
        </div>
      </div> <div className={styles.item}>
        <Image src="/Images/slider4.jpg" alt="" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Footer;
