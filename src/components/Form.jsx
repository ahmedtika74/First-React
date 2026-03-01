import Input from './Input';
import { useState } from 'react';

export default function Form() {
  const [inputsValue, setInputsValue] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
    status: '',
    error: '',
    isSuccess: false,
  });
  const handleAction = (event) => {
    const { name, value } = event.target;
    setInputsValue({ ...inputsValue, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputsValue({ ...inputsValue, isPending: true, error: '' });
    setTimeout(() => {
      if (inputsValue.name.length < 3) {
        setInputsValue({
          ...inputsValue,
          error: 'Name must be at least 3 characters!',
        });
      } else if (!inputsValue.email.match(/\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        setInputsValue({
          ...inputsValue,
          error: 'Enter valid email address!',
        });
      } else if (inputsValue.number.length < 10 || isNaN(inputsValue.number)) {
        setInputsValue({
          ...inputsValue,
          error: 'Enter valid Number!',
        });
      } else if (inputsValue.message.length < 20) {
        setInputsValue({
          ...inputsValue,
          error: 'Message must be at least 20 characters!',
        });
      } else {
        setInputsValue({
          name: '',
          email: '',
          number: '',
          message: '',
          error: 'Your Application has been sent successfully!',
          isSuccess: true,
          isPending: false,
        });
      }
    }, 1500);
  };
  return (
    <form className="w-full px-[5%] md:w-1/2" onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center gap-5">
        <Input
          name="name"
          type="text"
          value={inputsValue.name}
          action={handleAction}
        />
        <Input
          name="email"
          type="text"
          value={inputsValue.email}
          action={handleAction}
        />
        <Input
          name="number"
          type="text"
          value={inputsValue.number}
          action={handleAction}
        />
        <textarea
          name="message"
          className="w-full rounded-2xl px-5 py-2 shadow-md placeholder:text-gray-300 focus:outline-0 md:text-[24px]"
          placeholder="Enter your message"
          value={inputsValue.message}
          onChange={handleAction}
        ></textarea>
        <button
          type="submit"
          disabled={inputsValue.isPending}
          className={`flex items-center justify-center gap-3 rounded-full px-10 py-3 font-bold text-white shadow-md duration-300 ${inputsValue.isPending ? 'cursor-not-allowed bg-gray-400' : 'bg-green-500 hover:bg-green-700 active:scale-95'}`}
        >
          {inputsValue.isPending ? (
            <>
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              Sending...
            </>
          ) : (
            'Submit'
          )}
        </button>
        {inputsValue.error && (
          <p
            className={`mt-2 text-center font-bold ${inputsValue.isSuccess ? 'text-green-500' : 'text-red-500'}`}
          >
            {inputsValue.error}
          </p>
        )}
      </div>
    </form>
  );
}
