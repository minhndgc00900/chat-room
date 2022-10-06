import './App.css';
import { AuthenticatedApp } from './components/AuthenticatedApp';
import { UnauthenticatedApp } from './components/UnauthenticatedApp';
import { useAuth } from './hooks/useAuth';

const App = () => {
  const { user, login } = useAuth();
  return (
    <div className="container">
      <h1>Chat Room</h1>
      {!user && <button className="btn-signin" onClick={() => login()}> Sign In With Google</button>}
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  )
}

export default App;
