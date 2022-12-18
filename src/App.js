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
import { StudentsList } from './Components/StudentsList';
import { StaffList } from './Components/StaffList';
import { AddStudent } from './Components/AddStudent';
import { EditStudent } from './Components/EditStudent';


function App() {
  return (
    <div className="App">
      {/* <StudentsList/> */}
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
          <Route path='/students' element={<StudentsList/>}/>
          <Route path='/staff' element={<StaffList/>}/>
          <Route path='/editstudent' element={<EditStudent/>}/>
          <Route path='/addstudent' element={<AddStudent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
