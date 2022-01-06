import TopNav from 'components/TopNav';
import PageComponent from 'pages/PageComponents';
import PageTodoList from 'pages/PageTodoList';
import { Routes, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route path="/" element={<div>대문</div>} />
        <Route path="/reviews" element={<PageComponent />} />
        <Route path="/todos" element={<PageTodoList />} />
      </Routes>
    </div>
  );
}

export default App;
