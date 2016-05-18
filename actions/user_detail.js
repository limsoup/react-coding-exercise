import axios from 'axios'

const BASE_URL_DETAIL = "http://api.github.com/users";
export function getUserDetail(login){
  const user = axios.get(`${BASE_URL_DETAIL}/${login}`);
  const followers = axios.get(`${BASE_URL_DETAIL}/${login}/followers`);
  const repos = axios.get(`${BASE_URL_DETAIL}/${login}/repos`);
  //console.log(request);
  return {
    type: 'GET_USER_DETAIL',
    payload: Promise.all([user, followers, repos])
  };
}