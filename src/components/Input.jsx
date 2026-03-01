export default function Input({ name, type, value = '', action }) {
  return (
    <input
      onChange={action}
      type={type}
      name={name}
      value={value}
      placeholder={`Enter your ${name} ...`}
      className="w-full rounded-2xl px-5 py-2 shadow-md placeholder:text-gray-300 focus:outline-0 md:text-[24px]"
    />
  );
}
