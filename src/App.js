import './App.css'
import {Switch, Route} from 'react-router-dom'
import HomeRoute from './components/HomeRoute'
import CourseItemDetailsRoute from './components/CourseItemDetailsRoute'
import NotFoundRoute from './components/NotFoundRoute'

const App = () => (
  <Switch>
    <Route exact path="/" component={HomeRoute} />
    <Route exact path="/courses/:id" component={CourseItemDetailsRoute} />
    <NotFoundRoute />
  </Switch>
)

export default App
