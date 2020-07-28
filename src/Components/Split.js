import Panel from "./Panel.js";
// var projectName = require("@scope/@emotion/styled");

const Split = () => {
  const {useState, useEffect} = React;

  const [search, updateSearch] = useState({
    userName: "VersaAgency",
    count: "30"
  });
  const [query, updateQuery] = useState(true);
  const [result, updateResult] = useState([]);

  const {userName, count} = search;

  useEffect(() => {

    const url = `http://localhost:7890/1.1/statuses/user_timeline.json\?count\=${count}\&screen_name\=${userName}`;

    const reponse = fetch(url);
    const answer = reponse.then(result => {
      return result.json();
    });

    answer.then(tweets => console.log(tweets));
    }
    // readAPI();
    // eslint-disable-next-line
  , [query]);

  return (
    <div id="split">
      <Panel />
      {/* <Panel />
      <Panel /> */}
    </div>
  );
}
 
export default Split;