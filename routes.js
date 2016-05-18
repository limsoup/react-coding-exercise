import React         from 'react';
import { Route , IndexRoute}     from 'react-router';
//import AppContainerView from './views/AppContainerView';
import FilterView  from './views/FilterView';
import HomeView  from './views/RootView';
import FishView  from './views/FishView';
import UserDetail from './components/user_detail';
import './bootstrap/dist/css/bootstrap.min.css';
import './style/icono.min.css';
import './style/style.css';
//import './style/font-awesome-4.6.3/css/font-awesome.min.css'
//import './elusive-icons-2.0.0/css/elusive-icons.css';
//import './elusive-icons-2.0.0/fonts/elusiveicons-webfont.eot';
//import './elusive-icons-2.0.0/fonts/elusiveicons-webfont.svg';
//import './elusive-icons-2.0.0/fonts/elusiveicons-webfont.ttf';
//import './elusive-icons-2.0.0/fonts/elusiveicons-webfont.woff';

//import './style/glyphicons/style.css';

//import '';
const routes = (
  <Route path="/" component={HomeView} >
    <IndexRoute component={FilterView} />
    <Route path="fishes" component={FishView} />
    <Route path="detail/:userid" component={UserDetail} />
  </Route>
);


export default routes;
