import logo from './logo.svg';
import './App.css';
import Profile from './Components/Profile';
import Photo from './photo.jpg'

function App() {
  const alertName = FullName => {
    alert(FullName) 
  }
   
  return (
    
    <Profile alertName={alertName} FullName="Yosra" Age={22} Biography="I'm a third year licence degree student in Esprit School of Business" Profession="Student">{Photo}</Profile>
  );
}

export default App;
