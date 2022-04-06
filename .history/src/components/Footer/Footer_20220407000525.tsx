import styles from './Footer.module.scss';
import { ReactComponent as GitHubIcon } from './git.svg';

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.links}
        target="_blank"
        href="https://github.com/Axeliriya"
      >
        <GitHubIcon className={styles.img} />
        <span>Axeliriya</span>
      </a>
      <a
        className={styles.links}
        target="_blank"
        href="https://github.com/Axeliriya"
      >
        <GitHubIcon className={styles.img} />
        <span>Axeliriya</span>
      </a>
    </footer>
  );
};
