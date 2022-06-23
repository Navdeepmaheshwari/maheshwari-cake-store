import React from "react";
import Image from "next/image";
import styles from "../styles/Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import OrderDetail from "../Component/OrderDetail";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCashRegister,
  faCreditCard,
  faMoneyBill,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
const server = process.env.URL || "http://localhost:3000";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);
  const amount = cart.total;
  const currency = "USD";
  const style = { layout: "vertical" };
  const dispatch = useDispatch();
  const router = useRouter();
  let total = cart.total;
  const createOrder = async (data) => {
    try {
      const res = await axios.post(`${server}/api/orders`, data);
      if (res.status === 201) {
        await dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </tbody>
          <tbody>
            {cart.products.map((product) => (
              <tr className={styles.tr} key={product._id}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src={product.img}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>{product.title}</span>
                </td>
                <td>
                  <span className={styles.extras}>
                    {product.extras.map((extra) => (
                      <span key={extra._id}>{extra.text}, </span>
                    ))}
                  </span>
                </td>
                <td>
                  <span className={styles.price}>&#x20b9;{product.price}</span>
                </td>
                <td>
                  <span className={styles.quantity}>{product.quantity}</span>
                </td>
                <td>
                  <span className={styles.total}>
                    &#x20b9;{product.price * product.quantity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL </h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>&#x20b9;
            {cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>&#x20b9;0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>&#x20b9;{cart.total}
          </div>
          {open && total > 0 ? (
            <div className={styles.paymentMethods}>
              <button
                className={styles.paybutton}
                // onClick={() => setCash(true)}
              >
                <FontAwesomeIcon icon={faCreditCard} className={styles.icon} />
                <span className={styles.text1}>UPI,Net Banking</span>
              </button>

              <button
                className={styles.paybutton}
                onClick={() => setCash(true)}
              >
                <FontAwesomeIcon icon={faWallet} className={styles.icon} />
                <span className={styles.text1}>CASH ON DELIVERY</span>
              </button>
            </div>
          ) : (
            <button onClick={() => setOpen(true)} className={styles.button}>
              <FontAwesomeIcon icon={faBagShopping} className={styles.icon} />
              <span className={styles.text1}>BUY NOW</span>
            </button>
          )}
        </div>
      </div>
      {cash && <OrderDetail total={cart.total} createOrder={createOrder} />}
    </div>
  );
};

export default Cart;
