const FormRowSelect = ({label, type, name, value, handleChange, list}) => { 
  return (  
      <div className='flex flex-col w-full'>
        <label className='text-lg mb-2'>{label}</label>
        <select
        multiple={false}
          className='rounded-md p-2'
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
        >
          {list.map((el,i) => {
            return <option key={i} value={el}>{el}</option>
          })}
        </select>
      </div>
    );
}
export default FormRowSelect;