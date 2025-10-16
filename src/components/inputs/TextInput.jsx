const TextInput = ({label, name, value, onChange, required = false}) => {
    const inputDiv = <div className="mb4">
            <label htmlFor={name} className="block font-semibold">{label}</label>
            <input type="text" className="w-full p2 border rounded-lg" name={name} value={value} 
            onChange={onChange} required={required} />
        </div>
    return inputDiv;
}
export default TextInput;