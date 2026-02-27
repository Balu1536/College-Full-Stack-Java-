// import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import "./Home/Home.css";
import Landing from './Landing/Landing';
import Links from './Links/Links';
import Navigation from './Navigation/navbar';
import UsersTable from './Temp/APIintegration';




function App() {
  return (
    <>
    <div className="App">/
      <BrowserRouter>
      <Navigation/>
      {/* <Landing/> */}
      <Links/>
      </BrowserRouter>
      <UsersTable/>
      {/* <BrowserRouter>
      <Temp/>
      <Links/>
      </BrowserRouter> */}
    </div>   
    </>
  );
}

export default App;
