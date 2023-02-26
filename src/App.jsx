import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { setUser, unSetUser } from "./reducers/user/userSlice";

function App() {
  // TODO: obtener valor del estado global => user reducer
  const { email, fullName, token } = useSelector((state) => state.user);

  // TODO: user useDispatch para actualizar los estados
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1 className="font-bold underline">Hola que hace?</h1>
      <h2>Full Name: {fullName}</h2>
      <h2>Token: {token}</h2>
      <h2>El email en el store es: {email}</h2>
      {/* se usa el dispatch para disparar un reducer y el reducer se trae del slice */}
      <button
        className="text-bold px-1 py-1 rounded bg-green-400 text-center mx-1"
        onClick={() =>
          dispatch(
            setUser({
              email: "hola@gmail.com",
              fullName: "hola tu",
              token: "456789123",
            })
          )
        }
      >
        Login
      </button>
      <button
        className="text-bold px-1 py-1 rounded bg-red-400 mx-1"
        onClick={() => {
          dispatch(unSetUser());
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default App;
