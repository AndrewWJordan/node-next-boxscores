import { Oswald } from "next/font/google";
import styles from "@/styles/Baseball.module.scss";
import Layout from "../components/Layout";
import FootballBoxscore from "@/components/FootballBoxscore/FootballBoxscore";

const oswald = Oswald({ subsets: ["latin"] });

export default function Football() {
  return (
    <Layout title="Football Boxscore" description="Football boxscore page">
      <main className={`${oswald.className} ${styles.main}`}>
        <h1>Football</h1>
        <FootballBoxscore />
      </main>
    </Layout>
  );
}
