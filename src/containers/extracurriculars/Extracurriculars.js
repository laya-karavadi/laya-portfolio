import React, {useContext} from "react";
import "./Extracurriculars.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {extracurriculars} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Extracurriculars() {
  const {isDark} = useContext(StyleContext);
  if (extracurriculars.display) {
    return (
      <div id="extracurriculars">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="extracurricularsSection">
            <div>
              <h1 className="experience-heading">Extracurriculars</h1>
              <div className="experience-cards-div">
                {extracurriculars.experience.map((card, i) => (
                  <ExperienceCard
                    key={i}
                    isDark={isDark}
                    cardInfo={{
                      company: card.company,
                      desc: card.desc,
                      date: card.date,
                      companylogo: card.companylogo,
                      role: card.role,
                      descBullets: card.descBullets
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
