import { useState, ChangeEvent, FormEvent } from 'react';

interface UseFormProps {
  [key: string]: string;
}

interface UseFormReturn {
  form: UseFormProps;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  resetForm: () => void;
  handleSubmit: (callBack: (value: UseFormProps) => void) => (event: FormEvent<HTMLFormElement>) => void;
}

const useForm = (initialState: UseFormProps): UseFormReturn => {
  const [form, setForm] = useState<UseFormProps>(initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const resetForm = () => {
    setForm(initialState);
  };

  const handleSubmit = (callBack: (value: UseFormProps) => void) => (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    callBack(form);
  };

  return { form, handleChange, resetForm, handleSubmit };
};

export default useForm;
