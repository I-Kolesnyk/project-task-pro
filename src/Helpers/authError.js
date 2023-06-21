import { toast } from 'react-toastify';

const handleAuthError = (error) => {
  let errorMessage = 'An error occurred.';

  if (error.response && error.response.data && error.response.data.message) {
    switch (error.response.data.message) {
      case 'Email or password is wrong':
        errorMessage = 'Email or password is wrong';
        break;
      case 'Email is already in use':
        errorMessage = 'Email is already in use';
        break;

      default:
        errorMessage = 'An error occurred';
    }
  }

  toast.error(errorMessage);
};

export default handleAuthError;