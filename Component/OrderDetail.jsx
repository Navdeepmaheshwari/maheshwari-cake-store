import React from 'react'
import styles from "../styles/OrderDetail.module.css";
import { useState } from "react";
const OrderDetail = ({ total, createOrder }) => {
    const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };
    return (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>You will have pay &#x20b9;{total} after delivery.</h1>
            <div className={styles.item}>
              <label className={styles.label}>Name Surname</label>
              <input
                placeholder="Navdeep"
                type="text"
                className={styles.input}
                onChange={(e) => setCustomer(e.target.value)}
                required
              />
            </div>
            <div className={styles.item}>
              <label className={styles.label}>Phone Number</label>
              <input
                type="text"
                placeholder="+1 234 567 89"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.item}>
              <label className={styles.label}>Address</label>
              <textarea
                rows={5}
                placeholder="Street, Landmark"
                type="text"
                className={styles.textarea}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            
            <button className={styles.button} onClick={handleClick}>
              Order Now
            </button>
          </div>
        </div>
      );
    }
export default OrderDetail