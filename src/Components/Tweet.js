import { dateFormat } from "./helper.js";

// Styled Components
const TweetCard = styled.article`
  border-top: 1.5px solid #000;
`;

const TweetLink = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: rgba(255, 255, 255, 1);
  }

  .right {
    flex-grow: 1;
  }

  .left {
    padding-right: 10px;

    img {
      border-radius: 100%;
      height: 40px;
      width: 40px;
    }
  }

  .tweet-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;

    .date {
      font-size: 14px;
      opacity: 0.75;
    }
  }
`;

const UserLink = styled.a`
  font-weight: 700;
  color: #fff;

  &:hover {
    color: #17bf63;
  }
`;

const TweetScope = styled.div`
  padding-top: 10px;

  .scope-item{
    margin-right: 15px;
    font-size: 12px;
    font-weight: 200;
    color: rgba(255,255,255, 0.7);

    i{
      font-size: 14px;
      margin-right: 3px;

      &.fa-heart{
        color: rgb(224, 36, 94);
        text-shadow: 1px 1px 20px rgba(224, 36, 94, 0.8);
      }

      &.fa-retweet{
        color: rgb(23, 191, 99);
        text-shadow: 1px 1px 20px rgba(23, 191, 99, 0.8);
      }
    }
  }
`;

// END OF Styled Components

const Tweet = ({ tweetItem }) => {
  const handleClick = () => {
    let win = window.open(tweetUrl, "_blank");
    win.focus();
  };

  const { text, user, id_str, created_at, favorite_count, retweet_count } = tweetItem;
  const tweetUrl = `https://twitter.com/${user.screen_name}/status/${id_str}`;
  return (
    <TweetCard>
      <TweetLink onClick={handleClick}>
        <div className="left">
          <a
            href={`https://twitter.com/${user.screen_name}`}
            title={`@${user.screen_name}`}
            target="_blank"
          >
            <img
              src={user.profile_image_url}
              alt={user.screen_name}
              className="user-picture"
            />
          </a>
        </div>

        <div className="right">
          <div className="tweet-info">
            <UserLink
              href={`https://twitter.com/${user.screen_name}`}
              title={`@${user.screen_name}`}
              target="_blank"
            >
              {user.name}
            </UserLink>

            <span className="date">{dateFormat(created_at)}</span>
          </div>

          <div className="tweet-content">{text}</div>

          <TweetScope className="tweet-scope">
            <a className="scope-item favs" href={`${tweetUrl}/likes`} target="_blank" title="View Favs">
              <i className="fas fa-heart"></i> {favorite_count}
            </a>

            <a className="scope-item rts" href={`${tweetUrl}/retweets/with_comments`} target="_blank" title="View RTs">
            <i className="fas fa-retweet"></i> {retweet_count}
            </a>
          </TweetScope>
        </div>
      </TweetLink>
    </TweetCard>
  );
};

export default Tweet;
