import React, { useState } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import LoaderButton from '../shared/components/LoaderButton';
import { useUser } from '../shared/hooks/useUser';
import { useFormFields } from '../shared/hooks/useFormFields';
import './Login.css';

const LoginPage = ({ history }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({ email: '', password: '' });
  const { login } = useUser();

  const validateForm = () => {
    return fields.email.length > 0 && fields.password.length > 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await login(fields.email, fields.password);
      history.push('/');
    } catch (e) {
      alert(e.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="Login">
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
            value={fields.password}
            onChange={handleFieldChange}
            type="password"
          />
        </FormGroup>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Login
        </LoaderButton>
      </form>
    </div>
  );

};
export default LoginPage;