import React, { useState } from 'react';
import { HelpBlock, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import LoaderButton from '../shared/components/LoaderButton';
import { useFormFields } from '../shared/hooks/useFormFields';
import './Register.css';

const RegisterPage = (props) => {
  const [fields, handleFieldChange] = useFormFields({
    email: '',
    password: '',
    confirmPassword: '',
    confirmationCode: ''
  });
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    return (
      fields.email.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  };

  const validateConfirmationCode = () => {
    return fields.confirmationCode.length > 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    setUser("test");

    setIsLoading(false);
  };

  const handleConfirmationSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
  };

  const renderConfirmationForm = () => {
    return (
      <form onSubmit={handleConfirmationSubmit}>
        <FormGroup controlId="confirmationCode" bsSize="large">
          <ControlLabel>
            Confirmation Code
          </ControlLabel>
          <FormControl
            autoFocus
            type="tel"
            onChange={handleFieldChange}
            value={fields.confirmationCode}
          />
          <HelpBlock>
            Please check your email for the code.
          </HelpBlock>
        </FormGroup>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          isLoading={isLoading}
          disabled={!validateConfirmationCode()}
        >
          Verify
        </LoaderButton>
      </form>
    );
  };

  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="confirmPassword" bsSize="large">
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            type="password"
            onChange={handleFieldChange}
            value={fields.confirmPassword}
          />
        </FormGroup>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Signup
      </LoaderButton>
      </form>
    );
  };

  return (
    <div className="Register">
      {user === null ? renderForm() : renderConfirmationForm()}
    </div>
  );
};
export default RegisterPage;