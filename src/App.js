import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import {Home} from "./Components/Home"
import {Todolist } from './Components/Todolist';
import {Counter} from "./Components/Counter"
import { Api } from './Components/Api';
import { Turnary } from './Components/Turnary';
import Classcomponent from './Components/Classcomponent';
import Classtodo from './Components/Classtodo';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/todo' element={<Todolist/>}/>
          <Route path='/counter' element={<Counter/>}/>
          <Route path='/api' element={<Api/>}/>
          <Route path='/turnary' element={<Turnary/>}/>
          <Route path='/class' element={<Classcomponent/>}/>
          <Route path='/classtodo' element={<Classtodo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
