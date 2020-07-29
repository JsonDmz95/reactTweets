import Panel from "./Panel.js";

const Split = ({usersList}) => {

  return (
    <div id="split">
      {usersList.map(user => (
        <Panel 
          key={user.index}
          user={user}
        />
      ))}
    </div>
  );
}
 
export default Split;