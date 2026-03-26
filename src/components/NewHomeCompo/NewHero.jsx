import styles from "./NewHero.module.css";
  import newLogo from "../../assets/eliteLogo.png"
import bgHero from "../../assets/bg-hero.png"

export default function NewHero() {
  return (
    <section className={styles.hero}>
      <img
        src={bgHero}
        alt="Hero"
        className={styles.background}
      />

      <div className={styles.overlay}></div>

      <div className={styles.inner}>
        {/* Text */}
        <div className={styles.content}>
          <h2>
            Real Experiences <br />
            Real Excellence
          </h2>
        </div>

        {/* Logo */}
        <div className={styles.logo}>
          <img
            src={newLogo}
            alt="Logo"
          />
        </div>
      </div>
    </section>
  );
}
