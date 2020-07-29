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
  const [usersList, updateList] = useState([
    {
      index: 1,
      userName: "VersaAgency",
      count: "30"
    },
    {
      index: 2,
      userName: "RainAgency",
      count: "30"
    },
    {
      index: 3,
      userName: "alexadevs",
      count: "30"
    }
  ]);
  return (
    <Fragment>
      <Header />
      <Split 
        usersList={usersList}
      />
    </Fragment>
  );
}
 
export default App;