import {FC} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import {Box} from "@mui/material";
import {instance} from "../../utils/axios";
import {useAppDispatch} from "../../utils/hook";
import {login} from "../../store/slice/auth";
import {AppErrors} from "../../common/errors";
import {LoginSchema, RegisterSchema} from "../../utils/yup";
import LoginPage from "./login";
import RegisterPage from "./register";

const AuthRootComponent: FC = (): JSX.Element => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: {
      errors
    },
    handleSubmit
  } = useForm({
    resolver: yupResolver(location.pathname === '/login' ? LoginSchema : RegisterSchema)
  });

  const handleSubmitForm = async (data: any) => {
    if (location.pathname === '/login') {
      try {
        const userData = {
          email: data.email,
          password: data.password
        }

        const user = await instance.post('auth/login', userData);
        await dispatch(login(user.data));
        navigate('/');
      } catch (e) {
        return e;
      }
    } else {
      if (data.password === data.confirmPassword) {
        try {
          const userData = {
            firstName: data.name,
            username: data.username,
            email: data.email,
            password: data.password
          }

          const newUser = await instance.post('auth/register', userData);
          await dispatch(login(newUser.data));
          navigate('/');
        } catch (e) {
          return e;
        }
      } else {
        throw new Error(AppErrors.PasswordDoNotMatch);
      }
    }
  }

  return(
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
      padding: '20px'
    }}>
      <form style={{flex: '1'}} onSubmit={handleSubmit(handleSubmitForm)}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={640}
          margin="auto"
          padding={5}
          borderRadius={5}
          boxShadow={'-3px -2px 20px 1px #202020'}
        >
          {
            location.pathname === '/login'
              ? <LoginPage
                navigate={navigate}
                register={register}
                errors={errors}
              /> : location.pathname === '/register'
                  ? <RegisterPage
                      navigate={navigate}
                      register={register}
                      errors={errors}
                  />
                  : null
          }
        </Box>
      </form>
    </div>
  )
};

export default AuthRootComponent;
