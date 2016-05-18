import {combineReducers} from 'redux';

function UsersReducer (state = [], action) {
  switch(action.type){
    case 'SEARCH_USERS':
      try{
        return action.payload.data.items;
      } catch( e ){
        console.log(e);
        return state;
      }
    default:
      return state;
  }
  return state;
} 

function SelectedUserReducer (state = null, action) {
  switch(action.type){
    case 'GET_USER_DETAIL':
      try{
        let user_obj = action.payload[0].data;
        user_obj.repositories = action.payload[2].data;
        user_obj.followers = action.payload[1].data;
        return user_obj;
      } catch( e ){
        console.log(e);
        return state;
      }
    default:
      return state;
  }
  return state;
} 



const rootReducer = combineReducers({
  users: UsersReducer,
  selectedUser: SelectedUserReducer
});

export default rootReducer;