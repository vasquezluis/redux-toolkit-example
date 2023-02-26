import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/user/userSlice";

function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emailField = useRef(null);
  const passwordField = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get("http://localhost:3000/users").then((response) => {
      const users = response.data;
      const userToLog = users.find(
        (user) => user.email === emailField.current.value
      );

      if (userToLog) {
        if (userToLog.password === passwordField.current.value) {
          console.log("credenciales validas");

          dispatch(
            setUser({
              email: userToLog.email,
              fullName: `${userToLog.first_name} ${userToLog.last_name}`,
              token: Date.now(),
            })
          );
          navigate("/home");
        }
      }
    });
  };

  return (
    <div className="w-full h-full">
      <div>
        <h2>LOGIN FORM</h2>
        <form className="" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="user@gmail.com" ref={emailField} />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="******" ref={passwordField} />
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Index;
