import React, { useContext } from "react";
import "./Extracurriculars.scss";
import StyleContext from "../../contexts/StyleContext";
import { extracurriculars } from "../../portfolio";
import { Fade } from "react-reveal";
import Button from "../../components/button/Button";

export default function Extracurriculars() {
  const { isDark } = useContext(StyleContext);

  if (!extracurriculars.display) return null;

  return (
    <div id="extracurriculars">
      <Fade bottom duration={1000} distance="20px">
        <div className="experience-container">
          <div>
            <h1 className="experience-heading">Extracurriculars</h1>
            <div className="experience-cards-div">
              {extracurriculars.clubs.map((club, i) => (
                <div key={i} className={`experience-card ${isDark ? "dark" : ""}`}>
                  <img
                    className="experience-card-logo"
                    src={require(`../../assets/images/${club.logo_path}`)}
                    alt={club.name}
                  />
                  <div className="experience-card-body">
                    <h2 className="experience-card-title">{club.name}</h2>
                    <h3 className="experience-card-subtitle">{club.role}</h3>
                    <p className="experience-card-duration">{club.date}</p>
                    <p className="experience-card-description">{club.desc}</p>
                    {club.link && (
                      <Button
                        text={"View"}
                        className="experience-card-button"
                        href={club.link}
                        newTab={true}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
