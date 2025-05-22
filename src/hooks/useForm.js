import { useState } from "react"

export const useForm = (initialValues) => {

    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    const reset = () => {
        setValues(initialValues);
    }

  return {
    values,
    initialValues,
    setValues,
    handleChange,
    reset
  }
}
