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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // First Name validation
    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    }

    // Last Name validation
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6 || formData.password.length > 16) {
      newErrors.password = "Password must be between 6 and 16 characters";
    }

    // Password Confirmation validation
    if (!formData.passwordConfirmation) {
      newErrors.passwordConfirmation = "Please confirm your password";
    } else if (formData.password !== formData.passwordConfirmation) {
      newErrors.passwordConfirmation =
        "Password confirmation must match the password";
    }

    // Newsletter frequency validation
    if (formData.newsletter && !formData.newsFreq) {
      newErrors.newsFreq = "Please select a newsletter frequency";
    }

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
