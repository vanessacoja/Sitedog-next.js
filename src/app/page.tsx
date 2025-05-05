import Image from "next/image";
import styles from "./page.module.css";
import Feed from "./components/feed/feed";
import photosGet, { Photo } from '../../src/app/actions/photo-get';


export default async function Home() {
  const data = await photosGet();
  return (
    <section className="container mainContainer">
      <Feed photos={data} />
    </section>
  );
}
