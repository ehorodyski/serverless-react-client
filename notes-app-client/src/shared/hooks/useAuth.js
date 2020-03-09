import { Auth } from 'aws-amplify';

export default () => {

  const login = async (email, password) => {
    try {
      await Auth.signIn(email, password);
      alert('Logged in from auth hook');
    } catch (e) {
      alert(e.message);
    }
  };

  return { login };
};