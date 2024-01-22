import { CardWrapper } from "./card-wrapper"

const LoginForm = () => {
  return (
    <CardWrapper headerlabel="Welcome back" backbuttonlabel="Don't have an account" backbuttonhref="/auth/register" showsocial >
        <div>Login form</div>
    </CardWrapper>
  ) 
}

export default LoginForm