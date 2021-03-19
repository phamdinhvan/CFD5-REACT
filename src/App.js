import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import './assets/css/custom.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/home'
import Team from './pages/team'
import Profile from './pages/profile'
import Error from './pages/Error';
import Email from './pages/Email';
import FAQ from './pages/FAQ';
import CoinIntro from './pages/CoinIntro';
import Pay from './pages/Pay';
import Collaborate from './pages/Collaborate';
import Courses from './pages/Courses';
import Projects from './pages/Projects';
import Register from './pages/Register';
import Demo from './pages/demo';
import { useRef } from 'react';
import Login from './components/Login';
import CourseDetail from './pages/CourseDetail';

function App() {

  let inputRef = useRef();
  
  let loginModelRef = useRef()

  function _testclick() {
      inputRef.current.value = '09012412212'
  }

  function _openLogin() {
    loginModelRef.current.open()
  }

  function _closeLogin() {
    loginModelRef.current.close()
  }

  return (
    <BrowserRouter>
      <Header />
      {/* <Home /> */}
      {/* <Team /> */}
      {/* <Profile /> */}
      {/* <Error/> */}
      {/* <Email /> */}
      {/* <FAQ /> */}
      {/* <CourseDetail /> */}
      {/* <CoinIntro /> */}
      {/* <Pay /> */}
      {/* <button onClick={_testclick} style={{marginTop : 100, marginBottom : 100}}>Test</button>
      <button onClick={_openLogin} style={{marginTop : 100, marginBottom : 100}}>Open Login</button>
      <button onClick={_closeLogin} style={{marginTop : 100, marginBottom : 100}}>Close Login</button> */}
      <Switch>
        <Route path ="/contact" component={Collaborate} />
        <Route exact path ="/course" component={Courses} />
        <Route path ="/profile" component={Profile} />
        <Route path ="/project" component={Projects} />
        <Route path ="/register" component={Register} />
        <Route path ="/team" component={Team} />
        <Route path ="/pay" component={Pay} />
        <Route path ="/email" component={Email} />
        <Route path ="/faq" component={FAQ} />
        <Route path ="/coin" component={CoinIntro} />
        <Route path ="/coursedetail" component={CourseDetail} />
        <Route path ="/loginform" component={Login} />
        <Route exact path ="/home" component={Home} />
        <Route component={Error} />
      </Switch>
      {/* <Collaborate ref={inputRef} /> */}
      {/* <Courses /> */}
      {/* <Projects /> */}
      {/* <Register/> */}
      {/* <Demo num={10}/> */}
      <Footer />
      {/* <Login ref ={loginModelRef} /> */}
    </BrowserRouter>
  );
}

export default App;
