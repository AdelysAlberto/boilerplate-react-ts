import { FC } from 'react';


import styles from './styles/header.module.scss';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <Link to={'/'} className={styles.header}>
      Header Logo
    </Link>

  );
}

export default Header;