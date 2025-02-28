import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import Navbar from './component/Navbar/index';
import Sidebar from './component/Sidebar/index';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import Inputs from './pages/Inputs';
import Profile from './pages/Profile';
import Project from './pages/Project';
import Saved from './pages/Saved';
import Shared from './pages/Shared';
import Achievement from './pages/Achievement';
import BottomNavbar from './component/bottamNavbar';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "sidebar navbar"
    "sidebar main";
  height: 100vh;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "navbar"
      "main";
  }
`;

const MainContent = styled.main`
  grid-area: main;
  padding: 20px;
  overflow-y: auto;
`;

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <AppContainer>
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <Navbar toggleSidebar={toggleSidebar} />
        <MainContent>
          <Routes>
            {/* Sidebar Routes */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/inputs" element={<Inputs />} />
            <Route path="/profile" element={<Profile />} />
            
            {/* Navbar Routes */}
            <Route path="/project" element={<Project />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/shared" element={<Shared />} />
            <Route path="/achievement" element={<Achievement />} />
          </Routes>
        </MainContent>
      </AppContainer>
      <BottomNavbar/>
    </Router>
  );
}

export default App;
