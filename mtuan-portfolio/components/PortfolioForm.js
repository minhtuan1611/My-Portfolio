import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { useForm } from 'react-hook-form'
import 'react-datepicker/dist/react-datepicker.css'

const PortfolioForm = ({ onSubmit }) => {
  const { register, handleSubmit, setValue } = useForm()
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  // Register custom input for react-hook-form
  const handleStartDateChange = (date) => {
    setStartDate(date)
    setValue('startDate', date)
  }

  const handleEndDateChange = (date) => {
    setEndDate(date)
    setValue('endDate', date)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          {...register('title')}
          name="title"
          type="text"
          className="ßßform-control"
          id="title"
        />
      </div>

      <div className="form-group">
        <label htmlFor="company">Companyy</label>
        <input
          {...register('company')}
          ß
          name="company"
          type="text"
          className="form-control"
          id="company"
        />
      </div>

      <div className="form-group">
        <label htmlFor="companyWebsite">Company Website</label>
        <input
          {...register('companyWebsite')}
          name="companyWebsite"
          type="text"
          className="form-control"
          id="companyWebsite"
        />
      </div>

      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input
          {...register('location')}
          name="location"
          type="text"
          className="form-control"
          id="location"
        />
      </div>

      <div className="form-group">
        <label htmlFor="jobTitle">Job Title</label>
        <input
          {...register('jobTitle')}
          name="jobTitle"
          type="text"
          className="form-control"
          id="jobTitle"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          {...register('description')}
          name="description"
          rows="5"
          className="form-control"
          id="description"
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="startDate">Start Date</label>
        <div>
          <DatePicker
            showYearDropdown
            selected={startDate}
            onChange={handleStartDateChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="endDate">End Date</label>
        <div>
          <DatePicker
            showYearDropdown
            selected={endDate}
            onChange={handleEndDateChange}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  )
}

export default PortfolioForm
