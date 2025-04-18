import { useFormik } from 'formik';
import { useEffect, useState } from "react";

function SimpleFormdata() {
  const [submittedData, setSubmittedData] = useState([]);

  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      phone: '',
      email: '',
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Name is required';
      }

      if (!values.age) {
        errors.age = 'Age is required';
      } else if (Number(values.age) < 0 || Number(values.age) > 100) {
        errors.age = 'Age must be between 0 and 100';
      }

      if (!values.phone) {
        errors.phone = 'Phone is required';
      } else if (values.phone.length !== 10) {
        errors.phone = 'Phone must be 10 digits';
      }

      if (!values.email) {
        errors.email = 'Email is required';
      } else if (
        values.email.indexOf('@') === -1 ||
        values.email.indexOf('.') === -1
      ) {
        errors.email = 'Email must have @ and .';
      }

      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      setSubmittedData(prevData => [...prevData, values]);
      resetForm();
    }
  });

  useEffect(() => {
    console.log('values changed:', formik.values);
  }, [formik.values]);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', padding: '20px' }}>
      <div style={{ flex: 1 }}>
        <form onSubmit={formik.handleSubmit}>
          <h2>Submit Form</h2>
          <label>Name:</label><br />
          <input name="name" onChange={formik.handleChange} value={formik.values.name} placeholder="Enter Name" /><br />
          {formik.errors.name && <div style={{ color: 'red' }}>{formik.errors.name}</div>}<br />

          <label>Age:</label><br />
          <input name="age" onChange={formik.handleChange} value={formik.values.age} placeholder='Enter Age' /><br />
          {formik.errors.age && <div style={{ color: 'red' }}>{formik.errors.age}</div>}<br />

          <label>Phone:</label><br />
          <input name="phone" onChange={formik.handleChange} value={formik.values.phone} placeholder='Enter Phone No' /><br />
          {formik.errors.phone && <div style={{ color: 'red' }}>{formik.errors.phone}</div>}<br />

          <label>Email:</label><br />
          <input name="email" onChange={formik.handleChange} value={formik.values.email} placeholder='Enter Email' /><br />
          {formik.errors.email && <div style={{ color: 'red' }}>{formik.errors.email}</div>}<br />

          <button type="submit" style={{ backgroundColor: '#777', color: 'white', marginTop: '10px' }}>Submit</button>
        </form>
      </div>

      <div style={{ flex: 1 }}>
        <h2>Submitted Data</h2>
        {submittedData.length > 0 ? (
          <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data submitted yet.</p>
        )}
      </div>
    </div>
  );
}

export default SimpleFormdata;
