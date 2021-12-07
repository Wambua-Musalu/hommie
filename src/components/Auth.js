import { useState } from "react";
import { useForm } from "../customHooks";
import homePlaceHolder from "../images/homeplaceHolder.jpg";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [value, setValue] = useForm({
    firstName: "",
    lastName: "",
    password: "",
    confirm_pass: "",
    email: "",
  });

  const handleChange_isLogin = () => setIsLogin((prev) => !prev);
  const handleRegistration =() => null;
  const handleLogin = () => null
  const makeVisible = () => null;

  return (
    <div className ="auth">
    {isLogin ? (
    <div className="login">
    <span className = "sign-title">Sign in</span>
      <form>
        <input
          type="text"
          placeholder="Email"
          value={value.firstName}
          onChange={setValue}
        />
        <input
          type="text"
          placeholder="Password"
          value={value.firstName}
          onChange={setValue}
        />
		<button
			className = "sign-button"
			onSubmit = {handleLogin}> sign in</button>
      </form>
      <button className = "is-login" onClick={handleChange_isLogin}>
        Not Yet Registered?  <span className = "small">Sign up</span>
      </button>
    </div>
  ) : (
    <div className="register">
    <span className = "sign-title">Sign up</span>
      <form>
        <div className="user-names">
          <input
            type="text"
            placeholder="First Name"
            value={value.firstName}
            onChange={setValue}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={value.lastName}
            onChange={setValue}
          />
        </div>
        <input
          type="text"
          placeholder="Email"
          value={value.firstName}
          onChange={setValue}
        />
        <input
          type="password"
          placeholder="Password"
          value={value.password}
          onChange={setValue}
          showPassword={makeVisible}
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={value.confirm_pass}
          onChange={setValue}
        />
        <button
			className="sign-button" 
			onSubmit={handleRegistration} >Sign up</button>
      </form>
      <button className = "is-login" onClick={handleChange_isLogin}>
       Already A Registered User?  <span className = "small">Sign in</span>
      </button>
    </div>
  )}
  <div className = "sideImg">
    <img src = {homePlaceHolder} alt = "home" />
  </div>
  </div>
  )
};

export default Auth;
