import React from 'react';
import { pic2 } from '../assets';
import '../styles/Team.css';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      position: "Faculty Advisor",
      department: "Physics Department",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Leading astrophysicist with 15+ years of research experience in stellar evolution and galactic dynamics.",
      expertise: ["Stellar Physics", "Galactic Astronomy", "Research Methodology"]
    },
    {
      id: 2,
      name: "Alex Chen",
      position: "President",
      department: "Computer Science",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Passionate about computational astronomy and space technology. Leading multiple research projects.",
      expertise: ["Computational Astronomy", "Machine Learning", "Space Technology"]
    },
    {
      id: 3,
      name: "Priya Sharma",
      position: "Vice President",
      department: "Electronics Engineering",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Specialized in radio astronomy and telescope instrumentation. Expert in signal processing.",
      expertise: ["Radio Astronomy", "Instrumentation", "Signal Processing"]
    },
    {
      id: 4,
      name: "Marcus Rodriguez",
      position: "Treasurer",
      department: "Mechanical Engineering",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Focused on space engineering and satellite technology. Leading the rocketry division.",
      expertise: ["Space Engineering", "Satellite Technology", "Rocketry"]
    },
    {
      id: 5,
      name: "Dr. Raj Patel",
      position: "Research Coordinator",
      department: "Physics Department",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "Quantum physicist with expertise in cosmology and theoretical astrophysics.",
      expertise: ["Quantum Physics", "Cosmology", "Theoretical Astrophysics"]
    },
    {
      id: 6,
      name: "Emma Thompson",
      position: "Event Coordinator",
      department: "Astronomy & Astrophysics",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      bio: "Organizing astronomical observations and public outreach programs. Passionate about science communication.",
      expertise: ["Public Outreach", "Observational Astronomy", "Science Communication"]
    }
  ];

  return (
    <div className="team-page">
      <div className="team-background">
        <img 
          src={pic2} 
          alt="Cosmic background" 
          className="background-image"
        />
        <div className="background-overlay"></div>
      </div>

      <div className="team-content">
        <div className="team-header">
          <h1 className="team-title">OUR TEAM</h1>
          <p className="team-subtitle">
            Meet the passionate minds behind AstroNITR's astronomical explorations
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="card-image-container">
                <img src={member.image} alt={member.name} className="card-image" />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-position">{member.position}</p>
                <p className="member-department">{member.department}</p>
                <p className="member-bio">{member.bio}</p>
                <div className="expertise-tags">
                  {member.expertise.map((skill, index) => (
                    <span key={index} className="expertise-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="team-stats">
          <div className="stat-item">
            <h3>50+</h3>
            <p>Active Members</p>
          </div>
          <div className="stat-item">
            <h3>15+</h3>
            <p>Research Projects</p>
          </div>
          <div className="stat-item">
            <h3>25+</h3>
            <p>Events Organized</p>
          </div>
          <div className="stat-item">
            <h3>5+</h3>
            <p>Years of Excellence</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
