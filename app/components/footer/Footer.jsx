import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Footer.module.css"; // If using CSS modules

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} Cinepedia. All rights reserved.</p>
        <p className="mb-0">
          <a href="https://www.example.com" className="text-light" target="_blank" rel="noopener noreferrer">Privacy Policy</a> | 
          <a href="https://www.example.com" className="text-light" target="_blank" rel="noopener noreferrer">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}
