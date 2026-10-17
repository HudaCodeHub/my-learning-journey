import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/netflixindia", Icon: FaFacebookF },
  { label: "Instagram", href: "https://www.instagram.com/netflix_in", Icon: FaInstagram },
  { label: "Twitter", href: "https://twitter.com/netflixindia", Icon: FaTwitter },
  { label: "YouTube", href: "https://www.youtube.com/user/netflixindia", Icon: FaYoutube },
];

// Listed in reading order. The grid flows top-to-bottom, left-to-right
// (4 columns on desktop), so every 3 links fill one column.
const FOOTER_LINKS = [
  "Audio Description",
  "Investor Relations",
  "Legal Notices",
  "Help Centre",
  "Jobs",
  "Cookie Preferences",
  "Gift Cards",
  "Terms of Use",
  "Corporate Information",
  "Media Centre",
  "Privacy",
  "Contact Us",
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.social}>
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                className={styles.socialLink}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon size={24} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <nav aria-label="Footer">
          <ul className={styles.links}>
            {FOOTER_LINKS.map((text) => (
              <li key={text}>
                <a className={styles.link} href="#">
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className={styles.copyright}>&copy; 1997-{year} Netflix, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
