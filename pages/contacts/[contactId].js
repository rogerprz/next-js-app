import { useRouter } from 'next/router';
import contacts from '../api/contacts';
import styles from './../../styles/Home.module.css';
import Link from 'next/link';

export default function Contact() {
  const router = useRouter();
  const { contactId } = router.query;
  const contact = contacts.find((contact) => contact.id === contactId);

  return (
    <>
      <div className={styles.card}>
        <Link href={'/'}>
          <div>HOME</div>
        </Link>
        <a href="#" onClick={() => router.back()}>
          Back
        </a>
      </div>
      <div className={styles.card}>
        <h1>Contact </h1>
        <div>{contact?.id}</div>
        <p>{contact?.name} </p>
        <p>{contact?.country} </p>
      </div>
    </>
  );
}
