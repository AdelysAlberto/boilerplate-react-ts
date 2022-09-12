import { FC, ReactNode } from "react"
import Header from "./components/Header";

import styles from './styles/layout.module.scss';

const LayoutDefault: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={`${styles.container}`}>
      <Header />
      <div className={styles.box}>
        {children}
      </div>      
    </div>
  )
}


export default LayoutDefault;
