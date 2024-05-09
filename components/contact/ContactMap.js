import styles from "./ContactMap.module.css";

export default function ContactMap() {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.127896098545!2d120.2975555759037!3d22.611698731534975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e037f2a5a9001%3A0x28af37aaf30894aa!2z6auY6ZuEODXlpKfmqJM!5e0!3m2!1szh-TW!2stw!4v1715231468967!5m2!1szh-TW!2stw"
        className={styles.map}
        allowfullscreen="false"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>
  );
}
