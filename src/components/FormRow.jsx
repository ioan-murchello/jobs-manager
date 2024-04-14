const FormRow = ({ label, type, name, value, handleChange }) => {
  

  return (
    <div className='flex flex-col w-full'>
      <label className='text-lg mb-2'>{label}</label>
      <input
        className='rounded-md p-2'
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
export default FormRow;
