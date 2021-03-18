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
    <>
      <Header />
      {/* <Home /> */}
      {/* <Team /> */}
      <Profile />
      {/* <Error/> */}
      {/* <Email /> */}
      {/* <FAQ /> */}
      {/* <CourseDetail /> */}
      {/* <CoinIntro /> */}
      {/* <Pay /> */}
      {/* <button onClick={_testclick} style={{marginTop : 100, marginBottom : 100}}>Test</button>
      <button onClick={_openLogin} style={{marginTop : 100, marginBottom : 100}}>Open Login</button>
      <button onClick={_closeLogin} style={{marginTop : 100, marginBottom : 100}}>Close Login</button> */}
      {/* <Collaborate ref={inputRef} /> */}
      {/* <Courses /> */}
      {/* <Projects /> */}
      {/* <Register/> */}
      {/* <Demo num={10}/> */}
      <Footer />
      {/* <Login ref ={loginModelRef} /> */}
    </>
  );
}

export default App;
