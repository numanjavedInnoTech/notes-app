import { useState } from "react";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";

const NoteForm = ({ notes, setNotes }) => {
    const [formData, setFormData] = useState({
        title: '',
        priority: 'Medium',
        category: 'Work',
        description: ''
    });
    const [isFormVisible, setIsFormVisible] = useState(false);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formData.title || !formData.description) return;
        const newNote = { id: Date.now(), ...formData}
        setNotes([newNote, ...notes]);
        setFormData({
            title: '',
            priority: 'Medium',
            category: 'Work',
            description: ''
        })
    }
    const optionsPriority = [
        {value:'High', label:'High'}, 
        {value:'Medium', label:'Medium'}, 
        {value:'Low', label:'Low'}
    ];
    const optionsCategory = [
        {value:'Personal', label:'Personal'}, 
        {value:'Work', label:'Work'}, 
        {value:'Idea', label:'Idea'}
    ];
    const formButton = <button onClick={(e) => {setIsFormVisible(!isFormVisible)}}
        className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover: bg-purple-200 hover: border-purple-300 transition mb4" >
        {isFormVisible  ? 'Hide Form x' : 'Add New Note +' }
    </button>
    const formNote = <form onSubmit={handleSubmit} action="" className="mb-6">
        <TextInput label="Title" name="title" value={formData.title} onChange={handleChange} required={false} />
        <SelectInput label="Priority" name="priority" value={formData.priority} onChange={handleChange} required={false} 
            options={optionsPriority} />
        <SelectInput label="Category" name="category" value={formData.category} onChange={handleChange} required={false} 
            options={optionsCategory} />
        
        <div className="mb4">
            <label htmlFor="description" className="block font-semibold">Description</label>
            <textarea type="text" className="w-full p2 border rounded-lg" name="description" value={formData.description} 
            onChange={handleChange}></textarea>
        </div>
        <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover: bg-purple-600">
            Add Note
        </button>
    </form>;
    return ( 
        <>
            {formButton}
            {isFormVisible && formNote}
        </>
        
     );
}
 
export default NoteForm;