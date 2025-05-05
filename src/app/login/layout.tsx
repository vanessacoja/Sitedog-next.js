import styles from "../login/login.module.css";

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.login}>
      <aside>Siebar</aside>
      <div className={styles.forms}>{children}</div>
    </div>
  );
}
