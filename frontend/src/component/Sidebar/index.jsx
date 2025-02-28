import { FaTimes, FaUserCircle } from 'react-icons/fa';
import { MdSpaceDashboard } from 'react-icons/md';
import { BsBriefcaseFill } from 'react-icons/bs';
import { BiEditAlt } from 'react-icons/bi';
import {
  SidebarContainer,
  Logo as SidebarLogo, // Renamed as SidebarLogo
  SidebarHeader,
  SidebarToggle as CloseButton, // Renamed as CloseButton
  SidebarMenu,
  SidebarLink,
} from './SidebarStyles';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer isOpen={isOpen} className='main-sidebar'>
      <SidebarLogo>
        {isOpen ? 'Dashboard' : 'D'}
      </SidebarLogo>
      <CloseButton onClick={toggleSidebar}>
        <FaTimes />
      </CloseButton>
      
      <SidebarMenu>
        <SidebarLink to="/dashboard" isOpen={isOpen} activeClassName="active">
          <MdSpaceDashboard />
          <span>Dashboard</span>
        </SidebarLink>
        <SidebarLink to="/portfolio" isOpen={isOpen} activeClassName="active">
          <BsBriefcaseFill />
          <span>Portfolio</span>
        </SidebarLink>
        <SidebarLink to="/inputs" isOpen={isOpen} activeClassName="active">
          <BiEditAlt />
          <span>Inputs</span>
        </SidebarLink>
        <SidebarLink to="/profile" isOpen={isOpen} activeClassName="active">
          <FaUserCircle />
          <span>Profile</span>
        </SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
