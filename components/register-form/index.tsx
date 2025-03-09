'use client';
import Field from '../field';
import FieldDate from '../field-date';
import RadioGroup from '../redio-group';
import Select from '../select';
import Button from '../button';

import s from './index.module.scss';
import useForm from '@/hooks/useForm';

const selectOptions = [
  {
    value: 0,
    label: 'Developer',
  },
  {
    value: 1,
    label: 'Designer',
  },
  {
    value: 2,
    label: 'QA',
  },
  {
    value: 3,
    label: 'Manager',
  },
  {
    value: 4,
    label: 'DevOps',
  },
  {
    value: 5,
    label: 'Other',
  },
];

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
  lastname: '',

}

const RegisterForm = () => {
  const { form, handleChange, handleSubmit } = useForm(initialState)

  const onSubmit = () => {
    console.log(form);
  }
  
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={s.form}
    >
      <div className={s.fields}>
        <Field
          value={form.lastname}
          onChange={handleChange}
          name="lastname"
          placeholder="Фамилия*"
        />
        <Field
          value={form.firstname}
          onChange={handleChange}
          name="firstname"
          placeholder="Имя*"
        />
        <Field
          value={form.patronymic}
          onChange={handleChange}
          name="patronymic"
          placeholder="Отчество*"
        />
        <FieldDate
          value={form.birthday}
          onChange={handleChange}
          name="birthday"
          placeholder="Дата рождения*"
        />
        <Field
          value={form.email}
          onChange={handleChange}
          name="email"
          placeholder="E-mail*"
        />
        <Select
          options={selectOptions}
          onSelect={() => console.log()}
          placeholder="Род деятельности*"
        />
      </div>
      <RadioGroup
        label="Дни участия в конференции*"
        onSelect={() => console.log()}
        options={radioOptions}
        defaultValue={2}
      />
      <Button
        type="submit"
        variant="pink"
        customClass={s.button}
      >
        Зарегистрироваться
      </Button>
    </form>
  );
}

export default RegisterForm;