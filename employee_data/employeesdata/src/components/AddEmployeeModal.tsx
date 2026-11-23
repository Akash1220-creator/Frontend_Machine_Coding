import {useState} from 'react'
interface AddEmployeeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddEmployee: (employee: any) => void;
}
const AddEmployeeModal = ({ isOpen, onClose, onAddEmployee }: AddEmployeeModalProps) => {
   
    const [formData, setFormData] = useState({
    firstName: ''
  });

    if (!isOpen) return null;
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
  e.preventDefault();
  onAddEmployee({
    ...formData,
    id: Date.now()
  });
  onClose();// close the modal
};

  return (
    <div className='text-center'>
        <h3 className='mt-10 '>Add New Employee</h3>

        <form onSubmit={handleSubmit}>
        <div>
          <label className=''>First Name: </label>
          <input 
          className='border border-gray-400 rounded-lg p-1'
            type="text" 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange} 
            required 
          />
        </div>
         
        <button 
        className='border p-1 rounded-lg mt-2'
        type="submit"
        >
            Submit
        </button>
        <button 
        className='border p-1 rounded-lg mt-2'
        type="button" 
        onClick={onClose} style={{ marginLeft: '10px' }}
        >
          Cancel
        </button>  
        </form>
    </div>
  )
}

export default AddEmployeeModal