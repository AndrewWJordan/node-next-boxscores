import { Oswald } from "next/font/google";
import styles from "@/styles/Baseball.module.scss";
import Layout from "../components/Layout";

const oswald = Oswald({ subsets: ["latin"] });

export default function Football() {
  return (
    <Layout title="Hockey Boxscore" description="Hockey boxscore page">
      <main className={`${oswald.className} ${styles.main}`}>
        <h1>Hockey</h1>
        <div>Coming soonish</div>
      </main>
    </Layout>
  );
}
