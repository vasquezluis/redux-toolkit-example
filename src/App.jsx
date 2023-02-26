import "./App.css";
import { useSelector } from "react-redux";

function App() {
  // TODO: obtener valor del estado global => user reducer
  const { email, fullName, token } = useSelector((state) => state.user);

  return (
    <div className="container">
      <h1 className="font-bold underline">Hola que hace?</h1>
      <h2>Full Name: {fullName}</h2>
      <h2>Token: {token}</h2>
      <h2>El email en el store es: {email}</h2>
    </div>
  );
}

export default App;
