import { useState } from 'react';
// custom hook starts with use***
function useInput(initValue) {
  const [inputValue, setInputValue] = useState(initValue);

  function inputHadler(event) {
    setInputValue(event.target.value);
  }

  function resetInput() {
    setInputValue('');
  }
  // return [inputValue, inputHadler];
  return {
    value: inputValue,
    setter: inputHadler,
    reset: resetInput,
  };
}

export default useInput;
