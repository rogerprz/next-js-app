import { useRouter } from 'next/router';
import contacts from '../api/contacts';
import styles from './../../styles/Home.module.css';
import Link from 'next/link';

export default function Learn() {
  const router = useRouter();
  const { name } = router.query;
  const person = contacts.find((contact) => contact.id === name);

  return (
    <>
      <div className={styles.card}>
        <Link href={'/'}>
          <div>HOME</div>
        </Link>
        <Link href={'/contacts'}>
          <div>CONTACTS</div>
        </Link>
      </div>
      <div className={styles.card}>
        <h1>Contact </h1>
        <div>{person.id}</div>
        <p>{person.name} </p>
        <p>{person.country} </p>
      </div>
    </>
  );
}
