import { useState } from "react";
import IconSuccessCheck from "../assets/icon-success-check.svg"
export function ContactForm() {
const [firstname,setFirstName]=useState('');
const [lastname,setLastName]=useState('');
const [email,setEmail]=useState('');
const [message,setMessage]=useState('');
const [consent,setConsent]=useState('');
const [querytype,setQueryType]=useState('');
const [errors,setErrors]=useState({});
const [submitdata,setSubmitData]=useState(null);
const handleSubmit=(e)=>{
e.preventDefault();
let newErrors={};
if(!firstname.trim()) newErrors.firstname="This field is required";
if(!lastname.trim()) newErrors.lastname="This field is required";
if(!email.trim()) newErrors.email="Please enter a valid email address";
if(!querytype.trim()) newErrors.querytype="Please select a query type";
if(!message.trim()) newErrors.message="This field is require";
if(!consent) newErrors.consent=" To submit this form, please consent to being contacted"

setErrors(newErrors);
if(Object.keys(newErrors).length===0){
const data={
    firstname,
    lastname,
    email,
    message,
    consent,
    querytype
}
    setSubmitData(data);
  setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
    setConsent(false);
    setQueryType('');

}
};
return (
  <div className=" min-h-screen flex items-center justify-center bg-gray-100 mx-auto">
    
    <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md mx-auto">
      
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Contact Us
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name<span className="text-green-600">*</span>
          </label>
          <input
            type="text"
            value={firstname}
            onChange={(e)=>setFirstName(e.target.value)}
            className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
          />
          {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname}</p>}
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name <span className="text-green-600">*</span>
          </label>
          <input
            type="text"
            value={lastname}
            onChange={(e)=>setLastName(e.target.value)}
            className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
          />
          {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address <span className="text-green-600">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Query Type */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-1">Query Type <span className="text-green-600">*</span></p>
<div className="flex gap-4 items-center justify-center">


          <div className="flex gap-4 rounded-md border border-black p-4 w-full max-w-xl">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="general"
                checked={querytype==="general"}
                onChange={(e)=>setQueryType(e.target.value)}
              />
              General Enquiry
            </label>
</div>
<div className="flex gap-4 rounded-md border border-black p-4 w-full max-w-xl">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="support"
                checked={querytype==="support"}
                onChange={(e)=>setQueryType(e.target.value)}
              />
              Support Request
            </label>
          </div>
          </div>
          {errors.querytype && (
            <p className="text-red-500 text-sm">{errors.querytype}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message <span className="text-green-600">*</span>
          </label>
          <textarea
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            className="w-full mt-1 p-2 border rounded-md h-24 focus:ring-2 focus:ring-green-500 outline-none"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        {/* Consent */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e)=>setConsent(e.target.checked)}
          />
          <label className="text-sm text-gray-700">
            I consent to being contacted
          </label>
        </div>
        {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}

        {/* Button */}
        <button
          type="submit"
         className="w-full bg-[hsl(169,82%,27%)] text-white py-2 rounded-md 
           hover:bg-[hsl(169,82%,32%)] 
           transition duration-200 ease-in-out"
        >
          Send Message
        </button>

      </form>

      {/* Submitted Data */}
      {submitdata && (
        <div className="mt-6 p-4 bg-green-100 rounded-md">
            <div className="bg-gray-900 rounded-md alignItems-center p-5">
              <p className="font-bold text-gray-500 mb-2 text-sm flex gap-1.5">  <img src={IconSuccessCheck} alt="icon" w-6 h-6 mt-1 /> Message sent!</p>
          <p className="text-gray-500 mb-2" text-sm items-center> Thanks for completing the form. We'll be in touch soon!</p>
            </div>
         
          <p><strong>First Name:</strong> {submitdata.firstname}</p>
          <p><strong>Last Name:</strong> {submitdata.lastname}</p>
          <p><strong>Email:</strong> {submitdata.email}</p>
          <p><strong>Message:</strong> {submitdata.message}</p>
          <p><strong>Consent:</strong> {submitdata.consent ? "Yes" : "No"}</p>
          <p><strong>Query Type:</strong> {submitdata.querytype}</p>
        </div>
      )};

    </div>
  </div>
);
};