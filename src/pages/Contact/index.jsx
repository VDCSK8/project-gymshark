import GoToTop from "../../components/GoToTop";
import styles from "./Contact.module.scss";

function Contact() {
  return (
    <main className={styles.contact}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.contact__header}>
          <h2 className={styles.contact__title}>CONTACT & SUPPORT</h2>
          <h3 className={styles.contact__subtitle}>
            How can we help? <br />
            We’re here to support you with orders, products and training gear.
          </h3>
        </div>

        {/* Support section */}
        <div className={styles.support}>
          <div className={styles.support__list}>
            {/* Item 1 */}
            <div className={styles.support__item}>
              <h3 className={styles.support__itemTitle}>EMAIL</h3>
              <a
                href="https://support.gymshark.com/en-US"
                className={styles.support__link}
              >
                support@gymshark.com
              </a>
            </div>

            {/* Item 2 */}
            <div className={styles.support__item}>
              <h3 className={styles.support__itemTitle}>DELIVER</h3>
              <a
                href="https://support.gymshark.com/en-US/article/problem-with-my-order"
                className={styles.support__link}
              >
                Center support
              </a>
            </div>

            {/* Item 3 */}
            <div className={styles.support__item}>
              <h3 className={styles.support__itemTitle}>RETURN POLICY</h3>
              <a
                href="https://support.gymshark.com/en-US/article/how-do-i-return-my-items"
                className={styles.support__link}
              >
                Return and Refund Policy
              </a>
            </div>

            {/* Item 4 */}
            <div className={styles.support__item}>
              <h3 className={styles.support__itemTitle}>TECHNIQUE</h3>
              <a
                href="https://support.gymshark.com/en-US/article/the-gymshark-app"
                className={styles.support__link}
              >
                Information about the Gymshark app
              </a>
            </div>
          </div>
        </div>
      </div>
      <GoToTop />
    </main>
  );
}

export default Contact;
