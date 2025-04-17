import { useEffect, useState } from "react";

const StateComponentDemo = () => {
  const [myName, setMyName] = useState("");
  const [age, setAge] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");
  const [email, setemail] = useState("");

  const [isNameValid, setIsNameValid] = useState(true);
  const [isAgeValid, setIsAgeValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleNameChange = (e) => {
    const value = e.target.value;
    setMyName(value);
    setIsNameValid(value !== "" && isNaN(value));
  };

  const handleAgeChange = (e) => {
    const value = e.target.value;
    setAge(value);
    setIsAgeValid(value !== "" && Number(value) >= 0 && Number(value) <= 100);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhoneNo(value);
    setIsPhoneValid(value.length === 10 && !isNaN(value));
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setemail(value);
    setIsEmailValid(value.includes("@") && value.includes("."));
  };

  useEffect(() => {
    console.log("state change: myName");
  }, [myName]);

  useEffect(() => {
    console.log("state change: age");
  }, [age]);

  useEffect(() => {
    console.log("state change: PhoneNo");
  }, [PhoneNo]);

  useEffect(() => {
    console.log("state change: email");
  }, [email]);

  return (
    <div>
      <h3>This is Application Form</h3>

      <div>My name is: {myName}</div>
      <input value={myName} onChange={handleNameChange} placeholder="Enter Name" />
      {!isNameValid && <p style={{ color: "red" }}>Name must be at least 2 letters.</p>}
      Length: {myName.length}

      <div>My age: {age}</div>
      <input value={age} onChange={handleAgeChange} placeholder="Enter Age" />
      {!isAgeValid && <p style={{ color: "red" }}>Enter a valid number for age.</p>}
      Length: {age.length}

      <div>Phone No: {PhoneNo}</div>
      <input value={PhoneNo} onChange={handlePhoneChange} placeholder="Enter 10-digit Phone No" />
      {!isPhoneValid && <p style={{ color: "red" }}>Phone number must be 10 digits.</p>}
      Length: {PhoneNo.length}

      <div>Email: {email}</div>
      <input value={email} onChange={handleEmailChange} placeholder="Enter Email" />
      {!isEmailValid && <p style={{ color: "red" }}>Enter a valid email address.</p>}
      Length: {email.length}
    </div>
  );
};

export default StateComponentDemo;

