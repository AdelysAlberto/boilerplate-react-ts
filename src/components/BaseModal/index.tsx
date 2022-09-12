
import { ReactNode } from "react";
import BaseButton from "../BaseButton";
import BaseIcon from "../BaseIcons";
import styles from "./baseModal.module.scss";

type TAlert = {
  title?: any
  body: ReactNode | string,
  bodyClass?: string,
  isVisible: boolean,
  showModal: any,
  showCloseButton?: boolean
}

const BaseModal = ({ isVisible = false, showCloseButton = false, showModal, title, body, bodyClass }: TAlert) => {

  return (
    <>
      <div className={`${isVisible ? styles.visible : styles.noVisible} ${styles.modal}`}>
        <div className={styles.modal__content}>
          <div className={styles.modal__header}>
            <BaseIcon icon='icon-close' width={30} height={30} style={styles.icon__close} onClick={() => showModal(false)} />
            <div className='font-big m-2'>
              {title}
            </div>
          </div>

          <div className={`${bodyClass} ${styles.modal__body}`}>
            <div className='font-regular m-2'>
              {body}
            </div>
          </div>

          {showCloseButton ? (
            <div className={styles.modal__footer}>
              <BaseButton title="Cerrar" onClick={() => showModal(false)} />
            </div>)
            : (<></>)
          }
        </div>
      </div>
    </>
  );
};

export default BaseModal;