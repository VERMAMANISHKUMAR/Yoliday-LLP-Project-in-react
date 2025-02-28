import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../assets/Style/Portfolio.css';
import img1 from '../assets/Image/Rectangle1.png'
import img2 from '../assets/Image/Rectangle2.png'
import img3 from '../assets/Image/Rectangle3.png'
import img4 from '../assets/Image/Rectangle4.png'
function Portfolio() {
  const [activeTab, setActiveTab] = useState('Project');
  const [searchQuery, setSearchQuery] = useState('');

  const projects = [
    {
      title: 'Kemampuan Merangkum Tulisan',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      category: 'BAHASA SUNDA',
      author: 'Oleh Al-Balqi Samaan',
      image:img1,
    },
    {
      title: 'Teknik Menulis Efektif',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada.',
      category: 'BAHASA INDONESIA',
      author: 'Oleh Rahmat Hidayat',
      image:img2,
    },
    {
      title: 'Teknik Menulis Efektif',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada.',
      category: 'BAHASA INDONESIA',
      author: 'Oleh Rahmat Hidayat',
      image:img3,
    },
    {
      title: 'Teknik Menulis Efektif',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada.',
      category: 'BAHASA INDONESIA',
      author: 'Oleh Rahmat Hidayat',
      image:img4,
    },
  ];

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="portfolio-container">
      <div className="header">
        <h2>Portfolio</h2>
        <div className="search-filter">
          <button className="filter-btn">Filter ▼</button>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search a project"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="search-icon"/>
          </div>
        </div>
      </div>

      <div className="tabs">
        {['Project', 'Saved', 'Shared', 'Achievment'].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'active-tab' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="content">
        {activeTab === 'Project' &&
          filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className='description'>{project.description}</p>
                <p className="category">{project.category}</p>
                <p className="author">{project.author}</p>
               </div>
               <button className="add-btn">Add to Cart</button>
               </div>
          ))}

        {activeTab === 'Saved' && <p>Your saved projects will appear here.</p>}
        {activeTab === 'Shared' && <p>View the projects you've shared with others.</p>}
        {activeTab === 'Achievment' && <p>Track your achievements here.</p>}
      </div>
    </div>
  );
}

export default Portfolio;
