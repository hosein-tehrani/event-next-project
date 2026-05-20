import Link from "next/link";
import classes from "./MainHeader.module.css";
export default function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={classes.navigation}>
        <ui>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ui>
      </nav>
    </header>
  );
}
