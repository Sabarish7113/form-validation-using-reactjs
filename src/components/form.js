import React, { useState } from 'react';
import './form.css';

function EmployeeForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    birthDate: '',
    email: '',
    phoneNumber: '',
    gender: '',
    startTime: '',
    endTime: '',
    jobPosition: '',
    teams: '',
    designation: '',
    billableHours: '',
    isBillable: false,
  });

  const [formErrors, setFormErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (!formData.firstName.trim()) errors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last Name is required';
    if (!formData.birthDate) errors.birthDate = 'Date is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.phoneNumber) errors.phoneNumber = 'Phone Number is required';
    if (!formData.gender) errors.gender = 'Gender is required';
    if (!formData.startTime) errors.startTime = 'Start Time is required';
    if (!formData.endTime) errors.endTime = 'End Time is required';
    if (!formData.jobPosition.trim()) errors.jobPosition = 'Job Position is required';
    if (!formData.teams) errors.teams = 'Team is required';
    if (!formData.designation) errors.designation = 'Designation is required';
    if (!formData.billableHours || formData.billableHours <= 0)
      errors.billableHours = 'Billable Hours is required and must be a positive number';

    return errors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log('Form submitted successfully:', formData);
      // Submit the form
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h1>Employee Form</h1>
    <div>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {formErrors.firstName && <p>{formErrors.firstName}</p>}
        </div>
        <div>
          <label>Middle Name</label>
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {formErrors.lastName && <p>{formErrors.lastName}</p>}
        </div>
    </div>

      <div>
        <div>
          <label>Birth Date</label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
          {formErrors.birthDate && <p>{formErrors.birthDate}</p>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && <p>{formErrors.email}</p>}
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {formErrors.phoneNumber && <p>{formErrors.phoneNumber}</p>}
        </div>
      </div>

      <div>
        <div>
          <label>Select Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Choose Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {formErrors.gender && <p>{formErrors.gender}</p>}
        </div>
        <div>
          <label>Start Time</label>
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
          />
          {formErrors.startTime && <p>{formErrors.startTime}</p>}
        </div>
        <div>
          <label>End Time</label>
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
          />
          {formErrors.endTime && <p>{formErrors.endTime}</p>}
        </div>
      </div>

      <div>
        <div>
          <label>Job Position</label>
          <input
            type="text"
            name="jobPosition"
            value={formData.jobPosition}
            onChange={handleChange}
          />
          {formErrors.jobPosition && <p>{formErrors.jobPosition}</p>}
        </div>
        <div>
          <label>Select Teams</label>
          <select name="teams" value={formData.teams} onChange={handleChange}>
            <option value="">Select</option>
            <option value="team1">Team 1</option>
            <option value="team2">Team 2</option>
          </select>
          {formErrors.teams && <p>{formErrors.teams}</p>}
        </div>
        <div>
          <label>Select Designation</label>
          <select
            name="designation"
            value={formData.designation}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="designation1">Designation 1</option>
            <option value="designation2">Designation 2</option>
          </select>
          {formErrors.designation && <p>{formErrors.designation}</p>}
        </div>
      </div>

      <div>
        <div>
          <label>Billable Hours</label>
          <input
            type="number"
            name="billableHours"
            value={formData.billableHours}
            onChange={handleChange}
          />
          {formErrors.billableHours && <p>{formErrors.billableHours}</p>}
        </div>
        <div className="checkbox-container">
        <label>Is Billable</label>
          <input style={{position:"relative",right:"230px",height:"30px",width:"30px"}}
            type="checkbox"
            name="isBillable"
            checked={formData.isBillable}
            onChange={handleChange}
          />
         
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default EmployeeForm;
