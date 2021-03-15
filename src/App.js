import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}
export default App;
