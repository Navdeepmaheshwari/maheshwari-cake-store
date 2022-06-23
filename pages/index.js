import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Cakelist from "../Component/Cakelist";
import Slider from "../Component/Slider";
import styles from "../styles/Home.module.css";
const server = process.env.URL || "http://localhost:3000";
export default function Home({cakeList,admin}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maheshwari Cakes</title>
        <meta name="description" content="Best Cake Store in Chittorgarh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      {/* {admin && <span>Hello</span>} */}
      <Cakelist cakeList={cakeList}/>
    </div>
  );
}

export const getServerSideProps= async (ctx)=>{

  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res= await axios.get(`${server}/api/products`);
  return{
    props:{
      cakeList:res.data,
      admin,
    }
  }
}