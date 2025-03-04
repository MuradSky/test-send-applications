'use client'
import styles from "./page.module.css";
import clsx from "clsx";
import { ChangeEvent, useState } from "react";

const initvalue = {
  surname: '',
  name: '',
  patronymic: '',
  birthDate: '',
  email: '',
  occupation: '',
  conferenceDays: "16 и 17 апреля",
}

export default function Home() {
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [value, selectValue] = useState(initvalue)

  const changeVields = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    selectValue(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const chageConf = (value: string) => () => {
    selectValue(state => ({
      ...state,
      conferenceDays: value
    }))
  }

  const sumbitEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    fetch('/api/application', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value)
    }).then((data) => {
      if (data.status === 400) return setError('Что-то пошло не так...');
      setSuccess('Ваша завайка принята!');
    })
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.form}>
          <form onSubmit={sumbitEvent}>
            <div className={styles.row}>
              <input
                type="text"
                placeholder="Фамилия*"
                name="surname"
                value={value.surname}
                onChange={changeVields}
              />
            </div>
            <div className={styles.row}>
              <input
                type="text"
                placeholder="Имя*"
                name="name"
                value={value.name}
                onChange={changeVields}
              />
            </div>
            <div className={styles.row}>
              <input
                type="text"
                placeholder="Отчество"
                name="patronymic"
                value={value.patronymic}
                onChange={changeVields}
              />
            </div>
            <div className={styles.row}>
              <input
                type="date"
                placeholder="Дата рождения"
                name="birthDate"
                value={value.birthDate}
                onChange={changeVields}
              />
            </div>
            <div className={styles.row}>
              <input
                name="email"
                type="email"
                placeholder="E-mail*"
                value={value.email}
                onChange={changeVields}
              />
            </div>
            <div className={styles.row}>
              <select name="occupation" value={value.occupation} onChange={changeVields}>
                <option value="" key="1" selected>Род деятельности</option>
                <option value="Progerammer" key="2">Progerammer</option>
                <option value="Designer" key="3">Designer</option>
                <option value="Other" key="4">Other</option>
              </select>
            </div>

            <div className={styles.bottom}>
              <span>Дни участия в конференции*</span>
              <div className={styles.radio}>
                <label className={clsx(value.conferenceDays === '16 апреля' && styles.is_active)}>
                  16 апреля
                  <input 
                    type="radio" 
                    name="conf" 
                    checked={value.conferenceDays === '16 апреля'}
                    onChange={chageConf('16 апреля')}
                  />
                </label>
                <label className={clsx(value.conferenceDays === '17 апреля' && styles.is_active)}>
                  17 апреля
                  <input 
                    type="radio"
                    name="conf"
                    onChange={chageConf('17 апреля')}
                    checked={value.conferenceDays === '17 апреля'}
                  />
                </label>
                <label className={clsx(value.conferenceDays === '16 и 17 апреля' && styles.is_active)}>
                  16 и 17 апреля
                  <input 
                    type="radio" 
                    name="conf" 
                    onChange={chageConf('16 и 17 апреля')}
                    checked={value.conferenceDays === '16 и 17 апреля'} 
                  />
                </label>
              </div>
            </div>

            <button>Зарегистрироваться</button>

            {success && <p className={styles.success}>{success}</p>}
            {error && <p className={styles.error}>{error}</p>}
          </form>
        </div>
      </main>
    </div>
  );
}
