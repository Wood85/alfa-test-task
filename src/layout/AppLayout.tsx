import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import styles from "./AppLayout.module.css";

export function AppLayout() {
  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </main>
  );
}
