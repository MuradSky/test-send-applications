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
import ResultModal from '../result-modal';


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
  const [isOpen, setIsOpen] = useState(false);
  const [modalError, setModalError] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  const [isError, setIsError] = useState(false);
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const { isMobileMd } = useScreenSize();
  const { form, handleChange, handleSubmit, setValue, resetForm } = useForm(initialState)

  const onSelect = (v: number) => {
    setValue('date', 
      radioOptions[v].label
    )
  }
 
  const onClose = () => {
    setIsOpen(false);
    setModalError(false);
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
      if (data.status === 400) return setModalError(true);
      resetForm();
    }).finally(() => {
      setIsOpen(true);
      setIsLoad(false);
    });
  }
  
  const isValid = (
    form.surname.length > 2 && form.name.length > 2 
    && form.birthday.length >= 10 && form.email.length > 2 
    && form.occupation.length > 2 && !isError && !isErrorEmail
  )
  
  return (
    <>
      <ResultModal isOpen={isOpen} isError={modalError} onClose={onClose} />
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
    </>
  );
}

export default RegisterForm;