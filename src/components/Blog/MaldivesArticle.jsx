import React, { useState } from 'react';
import styles from './MaldivesArticle.module.css';

import img1 from "../../assets2/IndividualBlog/2.png"
import img2 from "../../assets2/IndividualBlog/3.png"
import img3 from "../../assets2/IndividualBlog/4.png"

const MaldivesArticle = () => {
  const [currentPage, setCurrentPage] = useState(1);

const changePage = (pageNo) => {
  setCurrentPage(pageNo);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'The Private Island Experience',
        text: 'Discover the Maldives: A journey through exclusive island resorts',
      });
    } else {
      alert('Share: The Private Island Experience - Maldives');
    }
  };

  const handleSave = () => {
    alert('Article saved to your library');
  };

  return (
    <div className={styles.container}>
      {/* PAGE 1 */}
      {currentPage === 1 && (
        <div className={styles.page}>
          <header className={styles.header}>
            <div className={styles.headerContent}>
              <div className={styles.authorInfo}>
                <div>
                  <p className={styles.label}>Written by</p>
                  <p className={styles.author}>Alexandra Montague</p>
                </div>
                <div>
                  <p className={styles.label}>Published</p>
                  <p className={styles.date}>February 12, 2026</p>
                </div>
                <div>
                  <p className={styles.label}>Category</p>
                  <p className={styles.category}>Destinations</p>
                </div>
              </div>
              <div className={styles.actions}>
                <button className={styles.btn} onClick={handleShare}>SHARE</button>
                <button className={styles.btn} onClick={handleSave}>SAVE</button>
                <button className={styles.btn} onClick={handlePrint}>PRINT</button>
              </div>
            </div>
          </header>

          <main className={styles.content}>
            <div className={styles.introduction}>
              <p className={styles.dropCapP}>
                <span className={styles.dropCap}>T</span>
                here is a moment - somewhere between the seaplane's descent and the first barefoot step onto powdered white sand - when the Maldives reveals itself not as a destination, but as a state of mind. It is here, scattered across 1,192 coral islands in the Indian Ocean, that the world's most discerning travelers come to experience a form of luxury that cannot be replicated anywhere else on earth.
              </p>
            </div>

            <p className={styles.bodyText}>
              The appeal is deceptively simple: crystalline waters in impossible shades of aquamarine, overwater villas that seem to float between sun and sky, and a privacy so complete that the outside world ceases to exist entirely. But beneath this apparent simplicity lies an extraordinary sophistication - a choreography of service, design, and natural wonder that has refined over decades.
            </p>

            <p className={styles.bodyText}>
              What we discovered on our most recent journey through four of the archipelago's most exclusive properties was something altogether more profound: a new philosophy of slow travel that's reshaping how we think about luxury itself.
            </p>

            <h1 className={styles.mainTitle}>The Private Island Experience</h1>

            <p className={styles.bodyText}>
              Our journey began at dawn aboard a private seaplane from Velana International Airport. The forty-minute flight south - over an archipelago that appears as scattered emeralds on a sapphire sea - delivered us to each destination that follows. Below, the atolls reveal themselves in concentric rings of turquoise, teal, and deep navy, each island a self-contained world fringed by impossibly white sand.
            </p>

            <p className={styles.bodyText}>
              The concept of the private island resort has evolved significantly in recent years. Where once the emphasis was on exclusivity alone - the simple guarantee that you would be undisturbed - today's most visionary properties are reimagining what it means to exist in harmony with one of the planet's most fragile ecosystems. The result is a form of hospitality that is as intellectually engaging as it is physically indulgent.
            </p>

            <div className={styles.imageContainer}>
              <img src={img1} alt="Private island beach with loungers and umbrella" className={styles.mainImage} />
              <p className={styles.imageCaption}>An open-air treatment pavilion at one of the archipelago's most exclusive wellness retreats</p>
            </div>
          </main>
        </div>
      )}

      {/* PAGE 2 */}
      {currentPage === 2 && (
        <div className={styles.page}>
          <main className={styles.content}>
            <h2 className={styles.sectionTitle}>Wellness Without Walls</h2>

            <p className={styles.bodyText}>
              The spa at our second island enclave is unlike any wellness facility we have encountered. There are no walls, no doors, no barriers between the treatment rooms and the ocean that stretches endlessly in every direction. The sound of waves provides the only soundtrack. The breeze carries the scent of frangipani and salt. Treatments draw upon centuries-old Ayurvedic traditions, adapted by practitioners who have trained in Kerala and Asia, and approach wellness not as a service but as a vocation.
            </p>

            <div className={styles.quoteContainer}>
              <blockquote className={styles.quote}>
                "In the Maldives, luxury is not about what is added — it is about what is stripped away. Here, the greatest extravagance is simply the freedom to exist in the present moment."
              </blockquote>
              <p className={styles.quoteAttribution}>— ALEXANDRA MONTAGUE, TRAVEL EDITOR</p>
            </div>

            <h2 className={styles.sectionTitle}>Beneath the Surface</h2>

            <p className={styles.bodyText}>
              The Maldives' underwater world remains one of the great natural spectacles on earth. The coral reefs that ring each atoll support an astonishing biodiversity: hawksbill turtles glide beneath gardens of staghorn coral, manta rays sweep through cleaning stations in graceful formation, and wave upon wave of tropical fish move through these waters with a regularity that rewards patient observation. At another, a coral propagation project has successfully transplanted over 50,000 coral fragments onto degraded reef systems.
            </p>

            <p className={styles.bodyText}>
              Each of the properties we visited employs a resident marine biologist - invariably passionate, deeply knowledgeable, and genuinely delighted to share their underwater world with guests. These aren't academic appointments. At one property, the marine biology programme has tagged and tracked over 600 individual manta rays, contributing to global conservation research. At another, a coral propagation project has successfully transplanted over 50,000 coral fragments onto degraded reef systems.
            </p>

            <div className={styles.imageGrid}>
              <div className={styles.gridItem}>
                <img src={img2} alt="Coral reef with tropical fish" className={styles.gridImage} />
                <p className={styles.imageCaption}>The pristine house reef, accessible directly from each villa</p>
              </div>
              <div className={styles.gridItem}>
                <img src={img3}alt="Private sandbank dinner setup" className={styles.gridImage} />
                <p className={styles.imageCaption}>A private sandbank dinner - the ultimate Maldivian dining experience</p>
              </div>
            </div>
          </main>
        </div>
      )}

      {/* PAGE 3 */}
      {currentPage === 3 && (
        <div className={styles.page}>
          <main className={styles.content}>
            <h2 className={styles.sectionTitle}>The Table is Set</h2>

            <p className={styles.bodyText}>
              Dining in the Maldives has undergone a quiet revolution. The private sandbank dinner - once considered the pinnacle of island dining - has been joined by an extraordinary range of culinary experiences that would rival any destination restaurant, treehouse pavilions, and chef's table experiences where Japanese precision meets Indian Ocean produce have transformed the archipelago into one of the world's most surprising fine dining destinations.
            </p>

            <p className={styles.bodyText}>
              At one property, a chef who trained under Alain Ducasse in Paris has created a tasting menu that draws entirely on ingredients found within the atoll - line-caught yellowfin tuna, hand-harvested sea grapes, coconut in every possible preparation, and herbs grown in the resort's own hydroponic garden. The result is cuisine that is simultaneously of this place and utterly without precedent.
            </p>

            <h2 className={styles.sectionTitle}>What We Recommend</h2>

            <div className={styles.recommendationsList}>
              <div className={styles.recommendation}>
                <div className={styles.recommendNumber}>01</div>
                <div className={styles.recommendContent}>
                  <h3 className={styles.recommendTitle}>Stay longer than you think.</h3>
                  <p className={styles.recommendText}>The Maldives rewards patience. A five-night minimum allows the rhythm of island life to truly settle in. Seven nights is ideal; ten is transformative.</p>
                </div>
              </div>

              <div className={styles.recommendation}>
                <div className={styles.recommendNumber}>02</div>
                <div className={styles.recommendContent}>
                  <h3 className={styles.recommendTitle}>Choose your atoll wisely.</h3>
                  <p className={styles.recommendText}>The northern atolls offer the best manta ray encounters (August to November). The southern atolls provide more remote, undeveloped landscapes. The central atolls balance accessibility with exclusivity.</p>
                </div>
              </div>

              <div className={styles.recommendation}>
                <div className={styles.recommendNumber}>03</div>
                <div className={styles.recommendContent}>
                  <h3 className={styles.recommendTitle}>Embrace the water.</h3>
                  <p className={styles.recommendText}>Whether it's a dawn snorkel over the house reef, a sunset fishing expedition on a traditional dhoni, or simply floating in the impossibly warm lagoon, the ocean is the reason you're here.</p>
                </div>
              </div>

              <div className={styles.recommendation}>
                <div className={styles.recommendNumber}>04</div>
                <div className={styles.recommendContent}>
                  <h3 className={styles.recommendTitle}>Book a private sandbank dinner.</h3>
                  <p className={styles.recommendText}>Yes, it's been done before. No, that doesn't diminish it. There is something primordially magical about dining on a tiny sliver of sand surrounded by nothing but ocean and stars.</p>
                </div>
              </div>

              <div className={styles.recommendation}>
                <div className={styles.recommendNumber}>05</div>
                <div className={styles.recommendContent}>
                  <h3 className={styles.recommendTitle}>Allow for spontaneity.</h3>
                  <p className={styles.recommendText}>The best Maldivian moments are unplanned: a pod of dolphins at breakfast, a bioluminescent beach at midnight, a conversation with a marine biologist that changes your perspective on ocean conservation.</p>
                </div>
              </div>
            </div>

            <p className={styles.conclusion}>
              The Maldives is not merely a destination - it is an argument for a different way of existing in the world. In an age of constant connectivity and limitless acceleration, these islands offer something increasingly rare and infinitely valuable: the permission to simply be.
            </p>

            <div className={styles.tagContainer}>
              <p className={styles.tagLabel}>Tags:</p>
              <div className={styles.tags}>
                <span className={styles.tag}>MALDIVES</span>
                <span className={styles.tag}>ISLAND RESORTS</span>
                <span className={styles.tag}>SLOW TRAVEL</span>
                <span className={styles.tag}>INDIAN OCEAN</span>
                <span className={styles.tag}>LUXURY HOTELS</span>
                <span className={styles.tag}>WELLNESS</span>
                <span className={styles.tag}>MARINE LIFE</span>
              </div>
            </div>

            <div className={styles.authorBox}>
              <div className={styles.authorBoxContent}>
                <div className={styles.authorAvatar}><h2 className={styles.authorAvatarName}>AM</h2></div>
                <div className={styles.authorDetails}>
                  <h3 className={styles.authorBoxTitle}>ABOUT THE AUTHOR</h3>
                  <h2 className={styles.authorBoxName}>Alexandra Montague</h2>
                  <p className={styles.authorBio}>
                    Alexandra is Aurum's Travel Editor and has spent two decades exploring the world's most extraordinary destinations. Her writing has appeared in Condé Nast Traveler, Financial Times, HTSI, and Monocle. She divides her time between London, Marrakech, and wherever the next story takes her.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}

       {/* ================= NAVIGATION ================= */}
      <div className={styles.navigation}>
        <button
          className={styles.navBtn}
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ← Previous
        </button>

        <div className={styles.pageIndicator}>
          Page <span className={styles.currentPage}>{currentPage}</span> of{" "}
          <span className={styles.totalPages}>3</span>
        </div>

        <button
          className={styles.navBtn}
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === 4}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default MaldivesArticle;