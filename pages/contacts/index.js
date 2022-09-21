import Link from 'next/link';
import contacts from '../api/contacts';
import styles from './../../styles/Home.module.css';
import Layout from '../../components/Layout';
export default function Contacts() {
  return (
    <>
      <Layout>
        <div className={styles.card}>
          <h1>Contacts</h1>
          {contacts.map((contact) => (
            <ul key={contact.id}>
              <Link href={`/contacts/${contact.id}`}>
                <li>{contact.id}</li>
              </Link>
            </ul>
          ))}
        </div>
      </Layout>
    </>
  );
}
