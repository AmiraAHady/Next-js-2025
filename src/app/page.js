import Image from "next/image";
import styles from "./page.module.css";
import { auth } from "./_lib/auth";

export default async function Home() {
   const session=await auth()
   console.log(session);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>welcome to home page</h1>
         {session?.user&&<h1>welcome {session.user.name}</h1>}
      </main>
     
    </div>
  );
}
