import {Routes, Route} from 'react-router-dom';
//import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
// import Sidebar from './pages/Sidebar';

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
export default App;
