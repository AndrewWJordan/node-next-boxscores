import { Oswald } from "next/font/google";
import styles from "@/styles/Baseball.module.scss";
import Layout from "../components/Layout";
import BaseballBoxscore from "@/components/BaseballBoxscore/BaseballBoxscore";

const oswald = Oswald({ subsets: ["latin"] });

export default function Baseball() {
  return (
    <Layout title="Boxscores" description="Welcome - Fresh scores daily!">
      <main className={`${oswald.className} ${styles.main}`}>
        <h1>Baseball</h1>
        <BaseballBoxscore />
      </main>
    </Layout>
  );
}
