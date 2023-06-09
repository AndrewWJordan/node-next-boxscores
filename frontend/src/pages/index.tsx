import { Oswald } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Layout from "../components/Layout";

const oswald = Oswald({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title="Boxscores" description="Welcome - Fresh scores daily!">
      <main className={`${oswald.className} ${styles.main}`}>
        <h1>Boxscores</h1>
      </main>
    </Layout>
  );
}
