const SelectInput = ({label, name, value, onChange, required = false, options}) => {
    const inputDiv = <div className="mb4">
            <label htmlFor={name} className="block font-semibold">{label}</label>
            <select className="w-full p2 border rounded-lg" name={name} value={value} 
            onChange={onChange} required={required}>
                {
                    options.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>  
                    ))
                }
            </select>
        </div>
    return inputDiv;
}
export default SelectInput;