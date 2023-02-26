import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { unSetUser } from "../reducers/user/userSlice";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const handleLogOut = () => {
    dispatch(unSetUser);
    navigate("/");
  };

  return (
    <>
      <h2>Home</h2>
      <p>Welcome {user.fullName}</p>
      <button onClick={handleLogOut}>Log out</button>
      <hr />
    </>
  );
}

export default Home;
