'use client'
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { useAppSelector } from '@/redux/hooks';

const CheckoutForm = () => {

  const {items,totalAmount}=useAppSelector(state=>state.cart)


  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    address: '',
    apartment: '',
    city: '',
    pinCode: '',
    phoneNumber: '',
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const checkout =async()=>{
    const payload={
      user_data:formData,
      products:items,
      total_amount:totalAmount
    }
  try {
     const res=await fetch('http://localhost:3000/api/send',{
    headers: {
      'Content-Type': 'application/json',
    },
    method:'POST',
    body:JSON.stringify(payload)
   })

   console.log(res)
  } catch (error) {
    console.log(error)
  }
  }

  return (
    <div className="w-full p-6 bg-white rounded-2xl">
      <h2 className="text-xl font-semibold mb-4">Contact</h2>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-3 rounded-xl border focus:outline-none"
        />
      </div>

      <h2 className="text-xl font-semibold mb-4">Delivery</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First name"
          className="p-3 border rounded-xl w-full"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last name"
          className="p-3 border rounded-xl w-full"
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company (optional)"
          className="w-full p-3 border rounded-xl"
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full p-3 border rounded-xl"
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          name="apartment"
          value={formData.apartment}
          onChange={handleChange}
          placeholder="Apartment, suite, etc. (optional)"
          className="w-full p-3 border rounded-xl"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          className="p-3 border rounded-xl w-full"
        />
        <input
          type="text"
          name="pinCode"
          value={formData.pinCode}
          onChange={handleChange}
          placeholder="PIN code"
          className="p-3 border rounded-xl w-full"
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone number"
          className="w-full p-3 border rounded-xl"
        />
      </div>

      <Button 
      onClick={checkout}
      className="cursor-pointer bg-brand-primary text-brand-secondary w-full h-12 hover:bg-brand-primary font-semibold text-lg">
        Submit
      </Button>
    </div>
  );
};

export default CheckoutForm;
