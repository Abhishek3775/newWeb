import styles from "./ExploreSection.module.css";
import home1 from "../../assets/newhome1.png";
import home2 from "../../assets/newhome2.png";
import home3 from "../../assets/newhome3.png";
import home4 from "../../assets/newhome4.png";

const exploreData = [
  {
    id: 1,
    title: "EGC SIGNATURE JOURNEYS",
    image: home1,
  },
  {
    id: 2,
    title: "DESTINATIONS",
    image: home2,
  },
  {
    id: 3,
    title: "ACCOMMODATIONS",
    image: home3,
  },
  {
    id: 4,
    title: "EXPERIENCES",
    image: home4,
  },
];

export default function ExploreSection() {
  return (
    <section className={styles.explore}>
      <div className={styles.grid}>
        {exploreData.map((item) => (
          <div className={styles.card} key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              className={styles.image}
            />

            <div className={styles.overlay}>
              <h2 className={styles.title}>{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}