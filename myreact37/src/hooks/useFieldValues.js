import { useState } from 'react';

function useFieldValues(initialFieldValues) {
  const [fieldValues, setFieldValues] = useState(initialFieldValues);

  const clearFieldValues = () => setFieldValues(initialFieldValues);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // // 함수 안 쓰고, 값 지정
    // setFieldValues({
    //   ...fieldValues,
    //   [name]: value,
    // });

    setFieldValues((prevFieldValues) => ({
      ...prevFieldValues,
      [name]: value,
    }));
  };

  return [fieldValues, handleChange, clearFieldValues];
}

export default useFieldValues;
