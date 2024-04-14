const InputForm = ({ label, type, name, stateValue, handler }) => {
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor='login-email' className='text-lg capitalize'>
        {label}
      </label>
      <input 
        type={type}
        name={name}
        id={name}
        className='input-field border p-3 rounded-md'
        placeholder={`Enter your ${name}`}
        value={stateValue}
        onChange={handler}
        required
      />
    </div>
  );
};
export default InputForm;
