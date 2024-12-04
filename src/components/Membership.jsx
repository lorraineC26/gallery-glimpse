import React, { useState } from "react";
import "../styles/Membership.css";

const Membership = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    newsletter: false,
    newsFreq: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    newsFreq: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error message when typing
    if (value.trim() !== "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const newErrors = { ...errors };

    switch (name) {
      case "firstName":
        if (!value.trim()) newErrors.firstName = "First Name is required";
        break;
      case "lastName":
        if (!value.trim()) newErrors.lastName = "Last Name is required";
        break;
      case "email":
        if (!value.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
          newErrors.email = "Please enter a valid email";
        break;
      case "password":
        if (!value.trim()) newErrors.password = "Password is required";
        else if (value.length < 6 || value.length > 16)
          newErrors.password = "Password must be between 6 and 16 characters";
        break;
      case "passwordConfirmation":
        if (value !== formData.password)
          newErrors.passwordConfirmation =
            "Password confirmation must match the password";
        break;
      case "newsFreq":
        if (formData.newsletter && !value)
          newErrors.newsFreq = "Please select a frequency for the newsletter";
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    if (!formData.passwordConfirmation.trim())
      newErrors.passwordConfirmation = "Password confirmation is required";
    if (formData.newsletter && !formData.newsFreq)
      newErrors.newsFreq = "Please select a frequency for the newsletter";

    setErrors(newErrors);

    // If no errors, redirect to success page
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully!");
      // window.history.pushState(null, '', '/confirmation');
      // setPage('/confirmation');
    }
  };

  return (
    <div className="membership-container">
      <h2>Join Our Community Today</h2>

      <form onSubmit={handleSubmit} className="membership-form">
        {/* First Name */}
        <div className="membership-form__field">
          <label htmlFor="firstName" className="membership-form__label">
            First Name{" "}
            <span className="membership-form__required">*required</span>
          </label>

          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your first name"
            className="membership-form__input"
          />

          {errors.firstName && (
            <p className="membership-form__error">{errors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div className="membership-form__field">
          <label htmlFor="lastName" className="membership-form__label">
            Last Name
            <span className="membership-form__required">*required</span>
          </label>

          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your last name"
            className="membership-form__input"
          />

          {errors.lastName && (
            <p className="membership-form__error">{errors.lastName}</p>
          )}
        </div>

        {/* Email */}
        <div className="membership-form__field">
          <label htmlFor="email" className="membership-form__label">
            Email <span className="membership-form__required">*required</span>
          </label>

          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your email"
            className="membership-form__input"
          />

          {errors.email && (
            <p className="membership-form__error">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="membership-form__field">
          <label htmlFor="password" className="membership-form__label">
            Password{" "}
            <span className="membership-form__required">*required</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Create a password"
            className="membership-form__input"
          />

          <ul className="password-rules">
            <li>At least 6 characters long</li>
            <li>Less than 16 characters</li>
          </ul>

          {errors.password && (
            <p className="membership-form__error">{errors.password}</p>
          )}
        </div>

        {/* Password Confirmation */}
        <div className="membership-form__field">
          <label
            htmlFor="passwordConfirmation"
            className="membership-form__label"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="passwordConfirmation"
            name="passwordConfirmation"
            value={formData.passwordConfirmation}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Confirm password"
            className="membership-form__input"
          />

          {errors.passwordConfirmation && (
            <p className="membership-form__error">
              {errors.passwordConfirmation}
            </p>
          )}
        </div>

        {/* Newsletter Subscription */}
        <div className="membership-form__field">
          <label htmlFor="newsletter" className="membership-form__label">
            Subscribe to our Newsletter
          </label>
          <div className="checkbox-field">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
              className="membership-form__checkbox"
            />
            Yes, I would like to receive newsletters
          </div>
        </div>

        {/* Conditional Newsletter Frequency */}
        {formData.newsletter && (
          <div className="membership-form__field">
            <label htmlFor="newsFreq" className="membership-form__label">
              Newsletter Frequency
            </label>
            <select
              id="newsFreq"
              name="newsFreq"
              value={formData.newsFreq}
              onChange={handleChange}
              onBlur={handleBlur}
              className="membership-form__select"
            >
              <option value="">Select Frequency</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
            </select>

            {errors.newsFreq && (
              <p className="membership-form__error">{errors.newsFreq}</p>
            )}
          </div>
        )}

        {/* Submit Button */}
        <button type="submit" className="membership-form__btn-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Membership;
