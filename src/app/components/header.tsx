import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} href="/">
          <Image
            src="/assets/dogs.svg"
            alt="Dogs"
            width={28}
            height={22}
            priority
          />
        </Link>
        <Link href="/">Dogs</Link>
        <Link className={styles} href="/inus">犬
        </Link>
       <Link className={styles.login} href="/login">
          Login / Criar
        </Link>
      </nav>
    </header>
  );
}
 