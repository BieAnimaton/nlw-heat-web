import { useContext } from 'react';
import styles from './App.module.scss';
import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';
import { SendMessageForm } from './components/SendMessageForm';
import { AuthContext } from './contexts/auth';

export function App() {
  const { user } = useContext(AuthContext);

  return (
    <main className={`${styles.contentWrapper} ${!!user ? styles.contentSigned : ''}}`}>
      <MessageList />
      { !!user ? <SendMessageForm /> : <LoginBox />} {/*Transforma a informação em verdadeira ou falsa (igual Boolean(user)) - no caso, se ele não estiver nulo, mostrar SendMessage*/}
    </main>
  )
};
