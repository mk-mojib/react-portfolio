import React from 'react';
import skillsData from './SkillsData'; // استيراد البيانات المخزنة محلياً

const TechSkills = () => {
    const renderSkills = () => {
        return skillsData.map((skill, index) => (
        <div key={index} className="bar">
            <div className="info">
            <img src={skill.icon} alt="skill" style={{width: "32px", height: "32px"}} />
            <span style={{ fontSize: "1rem" }}>{skill.name}</span >
            </div>
        </div>
        ));
    };

  return (
    <section className="skills" id="skills">
      <h2 className="heading"><i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span></h2>
      <div className="container">
        <div className="row" id="skillsContainer">
          {renderSkills()}
        </div>
      </div>
    </section>
  );
};

export default TechSkills;
