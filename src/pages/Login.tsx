import { useLocation } from "react-router-dom";

const LogIn = () => {
  const location = useLocation();
  console.log(location.state); // { userId: 123 }

  return <div>About Page</div>;
};

export default LogIn