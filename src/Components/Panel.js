const UserPanel = styled.div`
  background: #0c0c0c;
  /* margin-top: 30px; */
  /* padding: 10px; */
  /* border: 1px solid #fff; */
  margin-bottom: 15px;
  flex: 1;

  .panel-header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 10px;

    .user-info{
      .user-link{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        &:hover{
          text-decoration: none;
        }

        .user-picture{
          height: 25px;
          width:25px;
          border-radius: 100%;
        }

        .user-name{
          margin-left: 10px;
          color: #fff;
          opacity: 0.75;
          font-size: 14px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    /* background: red; */
    margin-bottom: 0px;
    margin-left: 15px;

  }
`;

const Panel = () => {
  return (
    <UserPanel>
      <div className="panel-header">
        <div className="user-info">
          <a className="user-link" href="#/">
            <img
              src="https://pbs.twimg.com/profile_images/1222911098183200773/-5pqLuY2_normal.jpg"
              alt="User Name"
              className="user-picture"
            />
            <span className="user-name">@userName</span>
          </a>
        </div>

        <div className="layout-info">
          30
        </div>
      </div>
    </UserPanel>
  );
};

export default Panel;
