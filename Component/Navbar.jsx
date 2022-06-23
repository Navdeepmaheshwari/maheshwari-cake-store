import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

// import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faCartShopping,
  faEnvelope,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBars,
  faCoffee,
  faTimes,
  faUserCircle,
} from "@fortawesome/fontawesome-free-solid";
import { faTimesRectangle, faUser } from "@fortawesome/free-regular-svg-icons";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/Images/telephone.png" alt="" width="30" height="30" />
        </div>
        <div className={styles.texts}>
          <div className={styles.texts}>ORDER NOW</div>{" "}
          <div className={styles.texts}>+918654367823</div>{" "}
        </div>
      </div>
      <div className={styles.item} id={styles.link}>
        <ul
          className={isMobile ? styles.mlist : styles.list}
          onClick={() => setIsMobile(false)}
        >
          <Link href="/" passHref>
            <li className={styles.listItem}>Homepage</li>
          </Link>
          <Link href="/products" passHref>
            <li className={styles.listItem}>Product</li>
          </Link>
          <div className={styles.logo}>
            <Image src="/Images/logo.png" alt="" width="60" height="60" />
          </div>
          <li className={styles.listItem}>Menu</li>

          <Link href="/contact" passHref>
            <li className={styles.listItem}>Contact</li>
          </Link>
          <div className={styles.flexb}>
            <Link href="/admin/login" passHref>
              <li className={styles.listItem}>
                <FontAwesomeIcon icon={faUserAlt} className={styles.usericon} />
              </li>
            </Link>
            <Link href="/cart" passHref>
              <li className={styles.listItem}>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className={styles.usericon}
                />
              </li>
            </Link>
          </div>
        </ul>
      </div>
      <div className={styles.item}>
        <Link
          href="/admin/login"
          passHref
        >
          <div className={styles.person}>
            <FontAwesomeIcon icon={faUserAlt} className={styles.usericon} />
          </div>
        </Link>
        <Link href="/cart" passHref>
          <div className={styles.cart}>
            {/* <Image src="/images/cart.png" alt="" width="30px" height="30px" /> */}
            <FontAwesomeIcon
              icon={faCartShopping}
              className={styles.usericon}
            />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </Link>

        <button
          className={styles.mobileIcon}
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <FontAwesomeIcon icon={faTimes} className={styles.icon} />
          ) : (
            <FontAwesomeIcon icon={faBars} className={styles.icon} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
