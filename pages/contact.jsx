import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faEnvelope,
  faPhone,
  faImagePortrait,
  faEnvelopesBulk,
  faLocationDot,
  faPlaneCircleCheck,
  faShieldHalved,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";
const contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.first}>
          <div className={styles.left}>
            <h2 className={styles.h2}>Contact Details</h2>
            <div className={styles.btgrp}>
              <button>Track Orders</button>
              <button>FAQ</button>
            </div>
            <div className={styles.phone}>
              <FontAwesomeIcon className={styles.icon} icon={faPhone} />
              <p className={styles.text}>+91 9212422000 / 9755-248-248 </p>
              {/* <br /> Timings: 7:00 AM to 1:00 A */}
            </div>
            <div className={styles.email}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              <a href="mailto:help@maheshwaricake.com">
                {" "}
                help@maheshwaricake.com
              </a>
            </div>
            <h3 className={styles.h3}> For Media Enquiries</h3>
            <div className={styles.email}>
              <FontAwesomeIcon icon={faImagePortrait} className={styles.icon} />
              <a href="mailto:pr@maheshwaricake.com">pr@maheshwaricake.com</a>
            </div>
            <h3 className={styles.h3}>For Corporate Bulk Orders</h3>
            <div className={styles.email}>
              <FontAwesomeIcon icon={faEnvelopesBulk} className={styles.icon} />
              <a href="mailto:sale@maheshwaricake.com">
                sale@maheshwaricake.com
              </a>
            </div>
            {/* <div className={styles.offices}> */}
            <h3 className={styles.h31}>Our Branches</h3>
            <div className={styles.office}>
              <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
              <p>
                <span className={styles.bold}>
                  {" "}
                  Maheshwari Cakes and Backery{" "}
                </span>
                <br /> FNP Estates, Ashram Marg, Sultanpur Mandi Road, Gadaipur,
                Chhatarpur Farms, DLF Farms, New Delhi, Delhi 110030
              </p>
            </div>
            <div className={styles.office}>
              <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
              <p>
                <span className={styles.bold}>Maheshwari Cake </span>
                <br /> FNP Estates, Ashram Marg, Sultanpur Mandi Road, Gadaipur,
                Chhatarpur Farms, DLF Farms, New Delhi, Delhi 110030
              </p>
            </div>
          </div>

          <div className={styles.right}>
            <h2 className={styles.h2}>Have Questions?</h2>
            <div className={styles.btgrp}>
              <button className={styles.issue}>ORDER RELATED ISSUE?</button>
              <button>GENERAL QUERY</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.last}>
        <div className={styles.delivery}>
          <div className={styles.center}>
            <FontAwesomeIcon
              className={styles.lastIcon}
              icon={faPlaneCircleCheck}
            />
          </div>

          <p>
            <span className={styles.bold}>WORLDWIDE DELIVERY</span>
            <br /> We deliver gifts to over 70 countries
          </p>
        </div>
        <div className={styles.secure}>
          <div className={styles.center}>
            <FontAwesomeIcon
              className={styles.lastIcon}
              icon={faShieldHalved}
            />
          </div>
          <p>
            <span className={styles.bold}> 100% SAFE & SECURE PAYMENTS</span>
            <br /> Pay using secure payment methods
          </p>
        </div>
        <div className={styles.help}>
          <div className={styles.center}>
            <FontAwesomeIcon
              className={styles.lastIcon}
              icon={faHandsHelping}
            />
          </div>
          <p>
            <span className={styles.bold}>DEDICATED HELP CENTER</span>
            <br />
            Call us +91 9212422000 8:00AM-10:30PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default contact;
