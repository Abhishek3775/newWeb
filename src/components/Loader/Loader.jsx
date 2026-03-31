import { useRef, useEffect } from "react";
import styles from "./Loader.module.css";
import newLogo from "../../assets/logo-elite.png";

const Loader = ({ isLoaded }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // Remove and re-add the animation classes to force replay
    img.style.animation = "none";
    // Force reflow so the browser registers the removal
    void img.offsetWidth;
    img.style.animation = "";
  }, []);

  return (
    <div className={`${styles.loaderBg} ${isLoaded ? styles.fadeOut : ""}`}>
      <div className={styles.logoWrap}>
        <img
          ref={imgRef}
          src={newLogo}
          alt="Elite Global Logo"
          className={styles.eliteLogo}
        />
      </div>
    </div>
  );
};

export default Loader;