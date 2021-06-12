import React from 'react';
import {
  useHistory,
  useRouteMatch,
  useLocation,
  useParams,
} from 'react-router-dom';

function Profile() {
  const history = useHistory();
  const routeMatch = useRouteMatch();
  const location = useLocation();
  const params = useParams();
  console.log('history', history);
  console.log('routeMatch', routeMatch);
  console.log('location', location);
  console.log('params', params);
  console.log('routeMatch.params === params', routeMatch.params === params);
  console.log('history.location === localtion', history.location === location);
  return (
    <div>
      <h1>Profile</h1>
      <p>打开控制台</p>
      <h2>用户id:{params.id}</h2>
      <button
        onClick={() => {
          history.push('/news');
        }}
      >
        去新闻页面
      </button>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        返回刚才的页面
      </button>
    </div>
  );
}

export default Profile;
