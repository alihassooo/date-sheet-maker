
import { DateSheet } from "./components/date-sheet-maker";
import { App } from "./components/lg-page";
import DataComponent from "./components/practice";
import { Student } from "./components/student";

import styles from "./page.module.css";



export default async function Home() {
  return (
    <main className={styles.main}>

       {/* <DataComponent /> 
      <Student /> */}
      {/* <App/> */}
      <DateSheet/>

    </main>
  );
}