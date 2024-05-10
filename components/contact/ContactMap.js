import styles from "./ContactMap.module.css";

export default function ContactMap() {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920.6737575148118!2d120.30963736960244!3d22.627860836586873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0491c81682db%3A0xca409b5dd8fb42e5!2zODAw6auY6ZuE5biC5paw6IiI5Y2A5rCR55Sf5LiA6LevNTbomZ8!5e0!3m2!1szh-TW!2stw!4v1715267865916!5m2!1szh-TW!2stw"
        className={styles.map}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </>
  );
}
