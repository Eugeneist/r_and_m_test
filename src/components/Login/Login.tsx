import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store/store';
import { login } from '../../redux/actions/charsActions';

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <GoogleLogin
        onSuccess={(credentialResponse: any) => {
          let decoded = jwt_decode(credentialResponse.credential);
          dispatch(login(decoded));
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </>
  );
};

export default Login;
