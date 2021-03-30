import React, { useEffect } from "react";
import ListCourse from "../../components/ListCourse";
import useStateSession from "../../core/useStateSession";

export default function Courses() {
  let [state, setState] = useStateSession({
    offline: [],
    online: [],
    api: true,
    loading: true
}, 'course-list')

useEffect(() => {
    if (state.api) {
        fetch('http://cfd-reactjs.herokuapp.com/elearning/v4/courses')
            .then(res => res.json())
            .then((res) => {
                setState({
                    ...res,
                    loading: false
                })
            })
    }

}, [])
return <ListCourse online={state.online} offline={state.offline} />
}
