import React from "react";
import "./Skills.css";
import "../../App.css";

const Skills = () => {
  return (
    <div className="skillsParent">
      <div className="title" id="skills">
        <h2>Skills.</h2>
      </div>
      <div className="skills">
        <div className="frontSkills">
          <div className="titleSkills">
            <h3>Front-End</h3>
          </div>
          <div className="skillsList">
            <ul className="ulSkillsList">
              <li>
                <div className="parentImgLogo">
                  <img src="./icon/whiteHtml.png" alt="html logo"></img>
                </div>
                <p>HTML</p>
              </li>
              <li>
                <div className="parentImgLogo">
                  <img src="./icon/whiteCss.png" alt="CSS logo"></img>
                </div>
                <p>CSS</p>
              </li>
              <li>
                <div className="parentImgLogo">
                  <img
                    src="./icon/whiteJavaScript.png"
                    alt="JavaScript logo"
                  ></img>
                </div>
                <p>JavaScript</p>
              </li>
              <li>
                <div className="parentImgLogo">
                  <img src="./icon/whiteSass.png" alt="Sass logo"></img>
                </div>
                <p>Sass</p>
              </li>
              <li>
                <div className="parentImgLogo">
                  <img src="./icon/whiteReactJs.png" alt="ReactJs logo"></img>
                </div>
                <p>ReactJs</p>
              </li>
              <li>
                <div className="parentImgLogo">
                  <img src="./icon/whiteTs.png" alt="TypeScript logo"></img>
                </div>
                <p>TypeScript</p>
              </li>
              <li>
                <div className="parentImgLogo">
                  <img src="./icon/whiteEjs.svg" alt="EJS logo"></img>
                </div>
                <p>EJS</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="backSkills">
          <div className="titleSkills">
            <h3>Back-End</h3>
          </div>
          <div className="skillsList">
            <ul className="ulSkillsList">
              <li>
                <div className="parentImgLogo">
                  <img src="./icon/whiteNodeJsTwo.png" alt="Node Js logo"></img>
                </div>
                <p>NodeJs</p>
              </li>
              <li>
                <div className="parentImgLogo">
                  <img src="./icon/whiteSql.png" alt="SQL logo"></img>
                </div>
                <p>SQL</p>
              </li>
              <li>
                <div className="parentImgLogo">
                  <img
                    src="./icon/whiteExpressJs.png"
                    alt="ExpressJs logo"
                  ></img>
                </div>
                <p>ExpressJs</p>
              </li>
              <li>
                <div className="parentImgLogo">
                  <img src="./icon/whiteMySqlTwo.png" alt="MySQL logo"></img>
                </div>
                <p>MySQL</p>
              </li>
              <li>
                <div className="parentImgLogo">
                  <img src="./icon/whiteApi.png" alt="API logo"></img>
                </div>
                <p>API</p>
              </li>
              <li>
                <div className="parentImgLogo">
                  <img
                    src="./icon/whiteSequelize.png"
                    alt="Sequelize logo"
                  ></img>
                </div>
                <p>Sequelize</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="toolsSkills">
          <div className="titleSkills">
            <h3>Outils & Environnement</h3>
          </div>
          <div className="skillsList">
            <ul className="ulSkillsList">
              <li>
                <div className="parentImgLogo">
                  <img src="./icon/whiteGitHub.png" alt="GitHub logo"></img>
                </div>
                <p>GitHub</p>
              </li>
              <li>
                <div className="parentImgLogo">
                  <img src="./icon/whiteGit.png" alt="Git logo"></img>
                </div>
                <p>Git</p>
              </li>
              <li>
                <div className="parentImgLogo">
                  <img src="./icon/whiteGitLab.png" alt="GitLab logo"></img>
                </div>
                <p>GitLab</p>
              </li>
              <li>
                <div className="parentImgLogo">
                  <img src="./icon/whiteVs.png" alt="Visual Studio logo"></img>
                </div>
                <p>VS Code</p>
              </li>
              <li>
                <div className="parentImgLogo">
                  <img src="./icon/whiteDocker.png" alt="Docker logo"></img>
                </div>
                <p>Docker</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
