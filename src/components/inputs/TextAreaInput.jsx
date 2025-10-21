const TextAreaInput = ({label, name, value, onChange, required = false}) => {
    const inputDiv = <div className="mb4">
            <label htmlFor={name} className="block font-semibold">{label}</label>
            <textarea rows={5} type="text" className="w-full p2 border rounded-lg" name={name} value={value} 
            onChange={onChange} required={required}>{value}</textarea>
        </div>
    return inputDiv;
}
export default TextAreaInput;