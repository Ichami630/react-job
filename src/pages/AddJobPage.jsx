import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'; //for redirecting
const AddJobPage = ({addJobSubmit}) => {
    const [formData, setFormData] = useState({
        type: '',
        title: '',
        location: '',
        description: '',
        salary: '',
        companyName: '',
        companyDescription: '',
        contactEmail: '',
        contactPhone: '',
    });

    //initialise the redirect hook
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData((prev) => {
            return { ...prev, [name]: value};
        });
    };

    const submitForm = (e) => {
        e.preventDefault();

        const {title,type,location,description,salary,companyName,companyDescription,contactEmail,contactPhone} = formData;
        const newJob = {
            title,
            type,
            location,
            description,
            salary,
            company: {
              name: companyName,
              description: companyDescription,
              contactEmail,
              contactPhone,
            },
            
        };
        //submit form to the backend api
        addJobSubmit(newJob);

        toast.success('job added successfully');
        return navigate('/jobs');
      
    }
  return (
    <section className="bg-indigo-50">
      <div className="container max-w-2xl py-24 m-auto">
        <div
          className="px-6 py-8 m-4 mb-4 bg-white border rounded-md shadow-md md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="mb-6 text-3xl font-semibold text-center">Add Job</h2>

            <div className="mb-4">
              <label htmlFor="type" className="block mb-2 font-bold text-gray-700">Job Type</label>
              <select
                id="type"
                name="type"
                className="w-full px-3 py-2 border rounded"
                required
                value={formData.type} 
                onChange={handleChange}>
                <option value="" disabled>--select job type--</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-bold text-gray-700">Job Listing Name</label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full px-3 py-2 mb-2 border rounded"
                placeholder="eg. Beautiful Apartment In Miami"
                required
                value={formData.title} 
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block mb-2 font-bold text-gray-700">Description</label >
              <textarea
                id="description"
                name="description"
                value={formData.description} 
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="type" className="block mb-2 font-bold text-gray-700">Salary</label>
              <select
                id="salary"
                name="salary"
                className="w-full px-3 py-2 border rounded"
                required
                value={formData.salary} 
                onChange={handleChange}
                >
                <option value="" disabled>--select salary range--</option>
                <option value="Under $50K">Under $50K</option>
                <option value="$50K - 60K">$50K - $60K</option>
                <option value="$60K - 70K">$60K - $70K</option>
                <option value="$70K - 80K">$70K - $80K</option>
                <option value="$80K - 90K">$80K - $90K</option>
                <option value="$90K - 100K">$90K - $100K</option>
                <option value="$100K - 125K">$100K - $125K</option>
                <option value="$125K - 150K">$125K - $150K</option>
                <option value="$150K - 175K">$150K - $175K</option>
                <option value="$175K - 200K">$175K - $200K</option>
                <option value="Over $200K">Over $200K</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block mb-2 font-bold text-gray-700'>
                Location
              </label>
              <input
                type='text'
                id='location'
                name='location'
                value={formData.location} 
                onChange={handleChange}
                className='w-full px-3 py-2 mb-2 border rounded'
                placeholder='Company Location'
                required/>
            </div>

            <h3 className="mb-5 text-2xl">Company Info</h3>

            <div className="mb-4">
              <label htmlFor="company" className="block mb-2 font-bold text-gray-700">Company Name</label>
              <input
                type="text"
                id="company"
                name="companyName"
                value={formData.companyName} 
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                placeholder="Company Name"/>
            </div>

            <div className="mb-4">
              <label
                htmlFor="company_description"
                className="block mb-2 font-bold text-gray-700">Company Description</label>
              <textarea
                id="company_description"
                name="companyDescription"
                value={formData.companyDescription} 
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                rows="4"
                placeholder="What does your company do?"></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block mb-2 font-bold text-gray-700">Contact Email</label>
              <input
                type="email"
                id="contact_email"
                name="contactEmail"
                className="w-full px-3 py-2 border rounded"
                placeholder="Email address for applicants"
                required
                value={formData.contactEmail} 
                onChange={handleChange}
                />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block mb-2 font-bold text-gray-700">Contact Phone</label>
              <input
                type="tel"
                id="contact_phone"
                name="contactPhone"
                value={formData.contactPhone} 
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                placeholder="Optional phone for applicants"
              />
            </div>

            <div>
              <button
                className="w-full px-4 py-2 font-bold text-white bg-indigo-500 rounded-full hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddJobPage