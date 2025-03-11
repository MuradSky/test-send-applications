'use client';
import Field from '../field';
import FieldDate from '../field-date';
import RadioGroup from '../redio-group';
import Select from '../select';
import Button from '../button';

import s from './index.module.scss';
import useForm from '@/hooks/useForm';
import { useScreenSize } from '@/hooks/useScreenSize';
import { useState } from 'react';
import Image from 'next/image';


const radioOptions = [
  {
    value: 0,
    label: '16 апреля',
  },
  {
    value: 1,
    label: '17 апреля',
  },
  {
    value: 2,
    label: '16 и 17 апреля',
  }
];

const initialState = {
  surname: '',
  name: '',
  patronymic: '',
  birthday: '',
  email: '',
  occupation: '',
  date: '16 и 17 апреля',
}

const RegisterForm = () => {
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoad, setIsLoad] = useState(false);

  const [isError, setIsError] = useState(false);
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const { isMobileMd } = useScreenSize();
  const { form, handleChange, handleSubmit, setValue } = useForm(initialState)

  const onSelect = (v: number) => {
    setValue('date', 
      radioOptions[v].label
    )
  }
 
  const onSubmit = () => {
    console.log(form);
    setIsLoad(true);
    fetch('/api/application', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }).then((data) => {
      if (data.status === 400) return setError('Что-то пошло не так...');
      setSuccess('Ваша завайка принята!');
    }).finally(() => {
      setIsLoad(false);
    });
  }
  
  const isValid = (
    form.surname.length > 2 && form.name.length > 2 
    && form.birthday.length >= 10 && form.email.length > 2 
    && form.occupation.length > 2 && !isError && !isErrorEmail
  )
  
  if (success) {
    return (
      <div className={s.success}>
        <Image
          src="/ok.png"
          alt=""
          width={80}
          height={80}
        />
        {success}
      </div>
    )
  }

  if (error) {
    return (
      <div className={s.error_res}>
        <Image
          src="/Error-512.webp"
          alt=""
          width={50}
          height={50}
        />
        {error}

        <Button
          variant="pink"
          onClick={() => {
            setError(null);
          }}
        >
          Попробовать еще
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={s.form}
    >
      <div className={s.fields}>
        <Field
          value={form.surname}
          onChange={handleChange}
          name="surname"
          placeholder="Фамилия*"
          disabled={isLoad}
        />
        <Field
          value={form.name}
          onChange={handleChange}
          name="name"
          placeholder="Имя*"
          disabled={isLoad}
        />
        <Field
          value={form.patronymic}
          onChange={handleChange}
          name="patronymic"
          placeholder="Отчество"
          disabled={isLoad}
        />
        <FieldDate
          value={form.birthday}
          onChange={handleChange}
          onErrorField={(isError) => {
            setIsError(isError);
          }}
          name="birthday"
          placeholder="Дата рождения*"
          disabled={isLoad}
        />
        <Field
          value={form.email}
          onChange={handleChange}
          onErrorField={
            (isError) => {
              setIsErrorEmail(isError)
            }
          }
          name="email"
          type="email"
          placeholder="E-mail*"
          disabled={isLoad}
        />
        <Field
          value={form.occupation}
          onChange={handleChange}
          name="occupation"
          placeholder="Род деятельности*"
          disabled={isLoad}
        />
      </div>
      {isMobileMd ?
        <div className={s.mobile}>
          <div className={s.radio_title}>Дни участия в конференции*</div>
          <Select
            options={radioOptions}
            onSelect={onSelect}
            defaultValue={2}
            disabled={isLoad}
          />
        </div>
        :
        <RadioGroup
          label="Дни участия в конференции*"
          onSelect={onSelect}
          options={radioOptions}
          defaultValue={2}
          disabled={isLoad}
        />
      }
      <Button
        type="submit"
        variant="pink"
        customClass={s.button}
        disabled={!isValid}
      >
        {isLoad && <div className={s.loader} />}
        <span style={{ opacity: isLoad ? 0 : 1 }}>Зарегистрироваться</span>
      </Button>
    </form>
  );
}

export default RegisterForm;