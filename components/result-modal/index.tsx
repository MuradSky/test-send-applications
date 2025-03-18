'use client';
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import Image from 'next/image';


interface ResultModalProps {
  isOpen: boolean;
  onClose?: () => void;
  isError?: boolean;
  message?: string;
}

const ResultModal: React.FC<ResultModalProps> = ({ 
  isOpen,
  onClose,
  isError
}) => {
  const [intro, setIntro] = useState(false);
  const [outro, setOutro] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isOpen) {
      setOpen(true);
      timer = setTimeout(() => {
        setIntro(true);
      }, 10)
    }
  
    return () => {
      clearTimeout(timer)
    }
  }, [isOpen]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!isOpen) {
      setOutro(true);

      timer = setTimeout(() => {
        setOutro(false);
        setOpen(false);
        setIntro(false);
      }, 200);
    }
    return () => {
      clearTimeout(timer)
    }
  }, [isOpen])

  if (!open || typeof document === 'undefined') return null;

  return createPortal(
    <div className={clsx(styles.modalOverlay, intro && styles.is_intro, outro && styles.is_outro)}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>

        {!isError ?
          <div className={styles.success}>
            <Image
              src="/ok.png"
              alt=""
              width={64}
              height={64}
            />
            Спасибо!<br />
            Ваша заявка принята!
          </div> :
          <div className={styles.error_res}>
            <Image
              src="/Error-512.webp"
              alt=""
              width={50}
              height={50}
            />
            Поизошла ошибка!<br />
            Попробуйте отправить заявку позже.
          </div>
        }
      </div>
    </div>,
    document.body
  );
};

export default ResultModal;
