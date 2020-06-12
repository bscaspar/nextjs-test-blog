import React from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';

const PortfolioForm = ({ onSubmit, initialData = {} }) => {
  const { register, handleSubmit, setValue } = useForm({ defaultValues: initialData });
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  React.useEffect(() => {
    register({ name: 'startDate' });
    register({ name: 'endDate' });
  }, [register]);

  React.useEffect(() => {
    const { startDate, endDate } = initialData;
    if (startDate) setStartDate(new Date(startDate));
    if (endDate) setEndDate(new Date(endDate));
  }, [initialData]);

  const handleDateChange = (dateType, setDate) => (date) => {
    setValue(dateType, date);
    setDate(date);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='form-group'>
        <label htmlFor='title'>Title</label>
        <input ref={register} name='title' type='text' className='form-control' id='title' />
      </div>

      <div className='form-group'>
        <label htmlFor='city'>Company</label>
        <input ref={register} name='company' type='text' className='form-control' id='company' />
      </div>

      <div className='form-group'>
        <label htmlFor='city'>Company Website</label>
        <input
          ref={register}
          name='companyWebsite'
          type='text'
          className='form-control'
          id='companyWebsite'
        />
      </div>

      <div className='form-group'>
        <label htmlFor='street'>Location</label>
        <input ref={register} name='location' type='text' className='form-control' id='location' />
      </div>

      <div className='form-group'>
        <label htmlFor='street'>Job Title</label>
        <input ref={register} name='jobTitle' type='text' className='form-control' id='jobTitle' />
      </div>

      <div className='form-group'>
        <label htmlFor='description'>Description</label>
        <textarea
          ref={register}
          name='description'
          rows='5'
          type='text'
          className='form-control'
          id='description'
        ></textarea>
      </div>

      <div className='form-group'>
        <label htmlFor='Start Date'>Start Date</label>
        <div>
          <DatePicker
            selected={startDate}
            onChange={handleDateChange('startDate', setStartDate)}
            showYearDropdown
          />
        </div>
      </div>

      <div className='form-group'>
        <label htmlFor='End Date'>End Date</label>
        <div>
          <DatePicker
            disabled={!endDate}
            selected={endDate}
            onChange={handleDateChange('endDate', setEndDate)}
            showYearDropdown
          />
        </div>
      </div>
      <div className='form-group'>
        {endDate && (
          <button
            type='button'
            className='btn btn-danger'
            onClick={() => handleDateChange('endDate', setEndDate)(null)}
          >
            No End Date
          </button>
        )}
        {!endDate && (
          <button
            type='button'
            className='btn btn-success'
            onClick={() =>
              handleDateChange('endDate', setEndDate)(new Date(new Date().setHours(0, 0, 0, 0)))
            }
          >
            Set End Date
          </button>
        )}
      </div>
      <button type='submit' className='btn btn-primary'>
        Create
      </button>
    </form>
  );
};

export default PortfolioForm;
