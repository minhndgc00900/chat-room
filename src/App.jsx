import { useEffect, useState } from "react";
import "./App.css";
import { AuthenticatedApp } from "./components/AuthenticatedApp";
import { UnauthenticatedApp } from "./components/UnauthenticatedApp";
import { useAuth } from "./hooks/useAuth";

const App = () => {
  const { user, login } = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (user || accessToken) {
      setIsAuthenticated(true);
    }
  }, [accessToken, user])
  

  return (
    <div className="container">
      <h1>Chat Room</h1>
      {isAuthenticated ? (
        <AuthenticatedApp />
      ) : (
        <>
          <button className="btn-signin" onClick={() => login()}>
            {" "}
            Sign In With Google
          </button>
          <UnauthenticatedApp />
        </>
      )}
    </div>
  );
};

export default App;
