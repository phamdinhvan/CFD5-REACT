import { useEffect, useState } from "react";
import ListCourse from "../../components/ListCourse";
import Action from "./components/Action";
import Banner from "./components/Banner";
import Different from "./components/Different";
import Gallery from "./components/Gallery";
import Terminal from "./components/Terminal";

export default function Home() {
  let [state, setState] = useState({
    gallery: [],
    online: [],
    offline: [],
    review: [],
    loading : true
  })

  useEffect(() =>{
    fetch('http://cfd-reactjs.herokuapp.com/elearning/v4/home')
    .then(res => res.json())
    .then((res) => {
      setState({
        ...res,
        loading : false
      })
    })
  },[])

  if(state.loading) return 'Loading...'

  return (
      <main className="homepage" id="main">
        <Banner />
        <ListCourse online={state.online} offline={state.offline} />
        <Different />
        <Terminal review={state.review} />
        <Gallery image={state.gallery} />
        <Action />
      </main>
  );
}
