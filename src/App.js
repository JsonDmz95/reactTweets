// import React from 'react';
// import {Fragment} from 'react'
import Header from "./Components/Header.js"
import Split from "./Components/Split.js"

const App = () => {
  const {useState, Fragment} = React;

  // const [search, updateSearch] = useState({
  //   userName: "",
  //   count: 30
  // });
  return (
    <Fragment>
      <Header />
      <Split />
    </Fragment>
  );
}
 
export default App;