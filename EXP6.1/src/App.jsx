import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    skills: [],
    address: '',
    state: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      skills: checked
        ? [...prev.skills, value]
        : prev.skills.filter((skill) => skill !== value),
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Date of Birth: ${formData.dob}
Gender: ${formData.gender}
Skills: ${formData.skills.join(', ')}
Address: ${formData.address}
State: ${formData.state}
    `
    alert(message)
  }

  const handleCancel = () => {
    setFormData({
      firstName: '',
      lastName: '',
      dob: '',
      gender: '',
      skills: [],
      address: '',
      state: '',
    })
  }

  return (
    <div className="container">
      <h1>Controlled Form</h1>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input
            id="dob"
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
                required
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
                required
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={formData.gender === 'Other'}
                onChange={handleChange}
                required
              />
              Other
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Skills</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                value="JavaScript"
                checked={formData.skills.includes('JavaScript')}
                onChange={handleCheckboxChange}
              />
              JavaScript
            </label>
            <label>
              <input
                type="checkbox"
                value="React"
                checked={formData.skills.includes('React')}
                onChange={handleCheckboxChange}
              />
              React
            </label>
            <label>
              <input
                type="checkbox"
                value="Python"
                checked={formData.skills.includes('Python')}
                onChange={handleCheckboxChange}
              />
              Python
            </label>
            <label>
              <input
                type="checkbox"
                value="Node.js"
                checked={formData.skills.includes('Node.js')}
                onChange={handleCheckboxChange}
              />
              Node.js
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            rows={3}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State</label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">Select a state</option>
            <option value="Punjab">Punjab</option>
            <option value="J&K">J&K</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Gujarat">Gujarat</option>
          </select>
        </div>

        <div className="button-group">
          <button type="submit" className="btn">Submit</button>
          <button type="button" onClick={handleCancel} className="btn btn-cancel">Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default App
