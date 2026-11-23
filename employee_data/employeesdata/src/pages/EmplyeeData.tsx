import React from 'react'
import { useEffect, useState } from "react";
import AddEmployeeModal from '../components/AddEmployeeModal';

function EmplyeeData() {
   
  const [employee, setEmployee] = useState<any[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
  const fetchData = async () => {
    const res = await fetch("/data.json");
    const data = await res.json();
    console.log(data);
    setEmployee(data);// this will store all the employee data in the employee state
  };
  fetchData();
}, []);

return (
    <div className=" p-4">
     <header className="flex flex-row justify-between cursor-pointer">
      <h1 className="text-3xl">Employee Database Management</h1>
      <button 
      className="border border-gray-400 p-2 rounded xl bg-gray-200 cursor-pointer" 
      onClick={()=>setIsModalOpen(true)}>
        Add Employees
     </button>
      </header>
      <div className="flex border mt-4">
             <div  className="w-[30%] border-b text-center ">
              <h2 className="border-b">Employee List</h2>
    {employee.map((emp)=>(
      <p
      key={emp.id}
      onClick={()=>setSelectedEmployee(emp)}
      className="cursor-pointer p-2 hover:bg-blue-100"
      >
      {emp.firstName}
      </p>
      ))}
   </div> 
   <div className="w-[70%] border text-center">
    <h2 className="border-b">Employee Information</h2>
     {selectedEmployee && (
       <div>  
          <img
            src={selectedEmployee.imageUrl}
            alt={selectedEmployee.firstName}
            className="w-24 h-24 ml-auto mr-auto mt-2 rounded-full border object-cover"
          />
         <p className="text-gray-600 font-medium">
            {selectedEmployee.designation} - {selectedEmployee.department}
        </p>
        <p key={selectedEmployee.id}>
          {selectedEmployee.email}
        </p>       
      </div>
     )}
   </div>

  </div>
  <AddEmployeeModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  onAddEmployee={(newEmp) => setEmployee(prev => [...prev, newEmp])}
/>
</div>
  )
}



export default EmplyeeData