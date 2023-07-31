import Link from "next/link";
import s from "./globals.module.scss";

export default function Home() {
  return (
    <div className={s.mainWrapper}>
      <Link href={"./auth"}>AUTH</Link>
    </div>
  );
}
