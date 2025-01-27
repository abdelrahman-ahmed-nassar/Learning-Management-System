import styles from "./page.scss";
import Hero from "@/app/_components/layout/Hero/Hero";

export default function Home() {
  return (
    <>
      <section className={styles["hero"]}>
        <Hero />
      </section>
    </>
  );
}
