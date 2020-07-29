import Tweet from "./Tweet.js";

// Styled Components
const UserPanel = styled.div`
  background: #0e0e0e;
  margin-bottom: 15px;
  flex: 1;
  overflow-y: scroll;
  max-height: 30vh;

  .panel-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 10px;
  }

  @media (min-width: 768px) {
    /* background: red; */
    margin-bottom: 0px;
    margin-left: 15px;
    max-height: none;
  }
`;

const UserLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  

  &:hover {
    text-decoration: none;
    transition: all ease 0.3s;

    .user-name {
      opacity: 1;
    }
  }

  .user-picture {
    height: 30px;
    width: 30px;
    border-radius: 100%;
  }

  .user-name {
    margin-left: 10px;
    color: #fff;
    opacity: 0.75;
    font-size: 14px;
    transition: all ease 0.3s;
  }
`;
// END OF Styled Components

const Panel = ({ user }) => {
  const { useState, useEffect, Fragment } = React;
  const { index, userName, count } = user;

  const [twitterInfo, updateTwitterInfo] = useState([]);
  const [print, updatePrint] = useState(false);

  useEffect(() => {
    const readAPI = () => {
      const url = `http://localhost:7890/1.1/statuses/user_timeline.json\?count\=${count}\&screen_name\=${userName}`;

      const reponse = fetch(url);
      const answer = reponse.then((result) => {
        return result.json();
      });

      answer.then(
        (tweets) => {
          updateTwitterInfo(tweets);
          updatePrint(true);
        }
        // console.log(tweets)
      );
    };
    readAPI();
  }, [count, userName]);

  return (
    <UserPanel>
      {print ? (
        <Fragment>
          <div className="panel-header">
            <div className="user-info">
              <UserLink
                href={`https://twitter.com/${twitterInfo[0].user.screen_name}`}
                target="_blank"
                title={twitterInfo[0].user.name}
              >
                <img
                  src={twitterInfo[0].user.profile_image_url}
                  alt={twitterInfo[0].user.screen_name}
                  className="user-picture"
                />
                <span className="user-name">
                  @{twitterInfo[0].user.screen_name}
                </span>
              </UserLink>
            </div>

            <div className="layout-info">30</div>
          </div>

          <div className="panel-body">
            {twitterInfo.map(tweetItem => (
              <Tweet tweetItem={tweetItem} key={tweetItem.id_str}/>
            ))}
          </div>
        </Fragment>
      ) : null}
    </UserPanel>
  );
};

export default Panel;
