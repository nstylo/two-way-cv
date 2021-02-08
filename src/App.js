import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import me from "./Me.jpeg";
import home from "./home.png";
import linkedin from "./linkedin.png";
import tel from "./tel.png";
import email from "./email.png";
import github from "./github.png";

const CVouter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CVbody = styled.div`
  width: 210mm;
  color: #4d4d4d;
  font-size: 10px;
  background-color: white;
  overflow: hidden;

  @media screen {
    margin: 20px 0;
    box-shadow: 0px 0px 8px 6px #333;
  }
`;

const Header = styled.div`
  z-index: 3;
  line-height: 1.3;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 40px;
  background-color: #21a021;
  color: white;
  padding-bottom: 4px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Sidebar = styled.aside`
  width: 65mm;
  height: 100%;
  background-color: #f2f2f2;
  padding: 12px;
  text-align: right;
  box-sizing: border-box;
`;

const SidebarHeader = styled.div`
  color: #4d4d4d;
  font-family: "Roboto Condensed";
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 8px;
`;

const SidebarSection = styled.div`
  margin: 20px 0;
`;

const Content = styled.main`
  width: 100%;
  padding: 10px 54px 10px 22px;
`;

const SectionHeader = styled.div`
  white-space: nowrap;
  font-family: "Roboto Condensed";
  font-weight: 500;
  font-size: 16px;
  font-weight: 600;
  color: #4d4d4d;
`;

const HR = styled.div`
  flex-grow: 1;
  width: 100%;
  margin: 0px;
  margin-left: 5px;
  margin-bottom: 6px;
  border: 0px;
  border-bottom: 1px solid #ccc;
`;

const SectionItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 10px;
  color: #4d4d4d;
  margin: 8px 0;
`;

const SectionItemLeft = styled.div`
  box-sizing: border-box;
  padding-right: 4mm;
  white-space: wrap;
  min-width: 40mm;
  width: 40mm;
  line-height: 1.4;
`;

const SectionItemRight = styled.div``;

const SectionItemHeader = styled.div`
  font-family: "Roboto Condensed";
  font-weight: 600;
`;

const SectionItemContent = styled.div`
  font-weight: 300;
  text-align: justify;
  font-size: 10px;
`;

const Company = styled.p`
  margin: 0;
  font-weight: 300;
  font-family: "Roboto";
`;

const Place = styled.p`
  font-weight: 300;
  color: #aaa;
  margin: 0;
  font-family: "Roboto";
  font-size: 8px;
  margin-top: 2px;
`;

const Me = styled.div`
  background: url(${me}) no-repeat;
  background-size: cover;
  border-radius: 50%;
  width: 34mm;
  height: 34mm;
  background-position: 0mm -2mm;
`;

const SectionItem = ({ entity, place, position, children, href, ...props }) => {
  return (
    <SectionItemWrapper>
      <SectionItemLeft>
        <Company>
          <A href={href} target="blank_" color="#4d4d4d">
            {entity}
          </A>
        </Company>
        <Place>{place}</Place>
      </SectionItemLeft>
      <SectionItemRight>
        <SectionItemHeader>{position}</SectionItemHeader>
        <SectionItemContent>{children}</SectionItemContent>
      </SectionItemRight>
    </SectionItemWrapper>
  );
};

const Skillset = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: wrap;
  padding-left: 5mm;
`;

const Skill = styled.div`
  font-weight: 300;
  background-color: white;
  border: 0.1pt solid #aaa;
  border-radius: 5px;
  font-size: 10px;
  padding: 2px 6px;
  margin: 0 4px 4px 0;
  white-space: nowrap;
`;

const Bubble = styled.div`
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-left: 3px;
  background-color: ${(props) => (props.active === true ? "#21a021" : "#ccc")};
`;

const LanguageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  font: "Roboto Condensed";
  padding: 4px 0;
`;

const A = styled.a`
  text-decoration: none;
  border-bottom: 1px solid transparent;
  color: ${(props) => props.color};
  -webkit-transition: border 500ms ease;
  -moz-transition: border 500ms ease;
  -ms-transition: border 500ms ease;
  -o-transition: border 500ms ease;
  transition: border 500ms ease;

  &:hover {
    text-decoration: none;
    border-bottom: 1px solid ${(props) => props.color}dd;
  }
`;

const Language = ({ text, level = 0 }) => {
  let level_text;
  switch (level) {
    case 1:
      level_text = "basic";
      break;
    case 2:
      level_text = "keine ahnung";
      break;
    case 3:
      level_text = "fluent";
      break;
    case 4:
      level_text = "native";
      break;
    default:
      level_text = "keine ahnung";
  }

  return (
    <LanguageWrapper>
      <div
        style={{
          paddingLeft: 24,
          fontFamily: "Roboto Condensed",
          fontSize: 11,
          fontWeight: 600,
        }}
      >
        {text}
        <span
          style={{
            paddingLeft: 4,
            fontFamily: "Roboto Condensed",
            fontSize: 8,
            fontWeight: 500,
            color: "#999",
          }}
        >
          ({level_text})
        </span>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        {Array(4)
          .fill()
          .map((_, i) => (
            <Bubble active={i + 1 <= level} />
          ))}
      </div>
    </LanguageWrapper>
  );
};

const Section = ({ header, children, ...props }) => {
  return (
    <div>
      <div style={{ display: "flex", width: "100%", margin: "10px 0" }}>
        <SectionHeader>{header}</SectionHeader>
        <HR />
      </div>
      {children}
    </div>
  );
};

const GlobalStyle = createGlobalStyle`
  @media screen {
    html {
      background-color: #444;
    }
  }

  a {
    color: #21a021;
  }
`;

function CV() {
  return (
    <CVouter>
      <GlobalStyle />
      <CVbody>
        <Header>Niklas Stylianou</Header>
        <Container>
          <Sidebar>
            <SidebarSection style={{ margin: "32px 0 36px 0" }}>
              <Center>
                <Me />
              </Center>
            </SidebarSection>
            <SidebarSection>
              <SidebarHeader>Contact</SidebarHeader>
              Achilleslaan 21, 5631BS
              <br />
              Eindhoven, NL
              <br />
              <br />
              <div style={{ lineHeight: 2 }}>
                <div>
                  <A
                    color="#21a021"
                    href="tel:+31682220490"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +31 6 82220490
                  </A>
                  <img
                    src={tel}
                    alt="phone number"
                    style={{ width: 12, height: 12, marginLeft: 10 }}
                  />
                </div>
                <div>
                  <A
                    color="#21a021"
                    href="mailto:niklas@stylianou.info"
                    target="_blank"
                    rel="noreferrer"
                  >
                    niklas@stylianou.info
                  </A>
                  <img
                    src={email}
                    alt="email"
                    style={{ width: 12, height: 12, marginLeft: 10 }}
                  />
                </div>
                <div>
                  <A
                    color="#21a021"
                    href="https://github.com/nstylo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    nstylo
                  </A>
                  <img
                    src={github}
                    alt="github"
                    style={{ width: 12, height: 12, marginLeft: 10 }}
                  />
                </div>
                <div>
                  <A
                    color="#21a021"
                    href="https://linkedin.com/in/niklas-stylianou"
                    target="_blank"
                    rel="noreferrer"
                  >
                    niklas-stylianou
                  </A>
                  <img
                    src={linkedin}
                    alt="linkedin"
                    style={{ width: 12, height: 12, marginLeft: 10 }}
                  />
                </div>
                <div>
                  <A
                    color="#21a021"
                    href="https://homerow.dev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    homerow.dev
                  </A>
                  <img
                    src={home}
                    alt="homepage"
                    style={{ width: 12, height: 12, marginLeft: 10 }}
                  />
                </div>
              </div>
            </SidebarSection>
            <SidebarSection>
              <SidebarHeader>Languages</SidebarHeader>
              {[
                { text: "German", level: 4 },
                { text: "English", level: 3 },
                { text: "Dutch", level: 1 },
              ].map((lang) => (
                <Language text={lang.text} level={lang.level} />
              ))}
            </SidebarSection>
            <SidebarSection>
              <SidebarHeader>Skillset</SidebarHeader>
              <Skillset>
                {[
                  "JavaScript",
                  "ReactJS",
                  "Linux",
                  "Git",
                  "Python",
                  "PostgreSQL",
                  "Django",
                  "HTML5",
                  "CSS",
                  "Bash",
                  "SQL",
                  "Docker",
                  "Java",
                  "C",
                  "C++14",
                  "NodeJS",
                  "Cypress.io",
                  "GraphQL",
                  "styled-components",
                  "Material-UI",
                  "GatsbyJS",
                  "Google Cloud Platform",
                  "Scrum",
                ].map((item) => (
                  <Skill>{item}</Skill>
                ))}
              </Skillset>
            </SidebarSection>
          </Sidebar>
          <Content>
            <Section header="Education">
              <SectionItem
                entity="Eindhoven University of Technology, NL"
                place="2017-2021"
                position="Bachelor of Science"
                href="https://www.tue.nl/en/"
              >
                Computer Science & Engineering
              </SectionItem>
              <SectionItem
                entity="RWTH Aachen, DE"
                place="2015-2017"
                position="Bachelor of Science"
                href="https://www.rwth-aachen.de/go/id/a/?lidx=1"
              >
                Civil Engineering (discontinued)
              </SectionItem>
              <SectionItem
                entity="English Teaching College Wellington, NZ"
                place="2014-2015"
                position="CAE C1"
                href="https://www.etc.ac.nz/"
              >
                English
              </SectionItem>
              <SectionItem
                entity="Freiherr-vom-Stein Gymnasium, DE"
                place="2006-2014"
                position="Abitur"
                href="http://www.stein.kleve.de/"
              >
                A Level
              </SectionItem>
            </Section>
            <Section header="Professional Experience">
              <SectionItem
                entity="Code Yellow B.V."
                place="Eindhoven, NL"
                position="Fullstack Software Engineer"
                href="https://www.codeyellow.nl/"
              >
                Developing bespoke business software using ReactJS with MobX,
                Django and PostgreSQL. Application maintenance and support.
                Designing and implementing application modules, most notably a
                wagemanager backend which employs a custom parser which compiles
                rules defined by customer, stored as recursively defined
                relational models, into SQL insert queries to store wages.
                Direct contact to customer. Translating customer needs into
                software solutions.
              </SectionItem>
              <SectionItem
                entity="A Place For Now"
                place="Eindhoven, NL"
                position="Lead Frontend Developer & Development Operations"
                href="https://github.com/nstylo/aplacefornow.nl"
              >
                Implementing a modern web application frontend using ReactJS and
                MaterialUI within a small team. Responsible for CI/CD on Google
                Cloud using Docker and Git for version control.
              </SectionItem>
              <SectionItem
                entity="Hable Accessibility"
                place="Eindhoven, NL"
                position="Software Engineer"
                href="https://www.iamhable.com/"
              >
                Writing a parser in Python which transpiles a custom language
                into C++ source code.
              </SectionItem>
              <SectionItem
                entity="Code Product Solutions B.V."
                place="Eindhoven, NL"
                position="Frontend Developer"
                href="https://www.code-ps.com/office/id11603/eindhoven/"
              >
                Implementing a modern business application frontend with ReactJS
                which consumes REST API. Workflow via GitLab CI. Testing with
                Jest.
              </SectionItem>
              <SectionItem
                entity="INNSIDE Aachen"
                place="Aachen, DE"
                position="Commis de Rang & Barkeeper"
                href="https://www.melia.com/en/hotels/germany/aachen/innside-aachen/index.htm"
              >
                Serving and building relationships with customers by catering to
                their individual needs. Preparing refined alcoholic beverages
                and coffee.
              </SectionItem>
              <SectionItem
                entity="The Thorndon Hotel Wellington"
                place="Wellington, NZ"
                position="Commis de Rang"
                href="https://www.rydges.com/accommodation/new-zealand/the-thorndon-hotel-wellington/"
              >
                Serving and building relationships with customers by catering to
                their individual needs. Working in a professional team focused
                on customer satisfaction
              </SectionItem>
            </Section>
            <Section header="Internships & Non-Professional Experience">
              <SectionItem
                entity="Eindhoven University of Technology"
                place="Eindhoven, NL"
                position="Student Assistant"
                href="https://www.tue.nl/en/"
              >
                Student assistant for the courses Java Programming, Discrete
                Structures, Data Structures, Human Technology Interaction &
                Webtech, Logic & Set Theory. Grade assignments, answer questions
                and provide feedback to students.
              </SectionItem>
              <SectionItem
                entity="Nestlé Purina"
                place="Euskirchen, DE"
                position="Intern Marketing & Sales"
                href="https://www.purina.com/"
              >
                Conducting social media analysis on competitors.
              </SectionItem>
              <SectionItem
                entity="Evonik Industries"
                place="Krefeld, DE"
                position="Intern IT Administration"
                href="https://www.purina.com/"
              >
                Troubleshooting soft- and hardware problems, assisting in
                rolling out new hardware to internal personnel.
              </SectionItem>
            </Section>
            <Section header="Licenses & Certifications">
              <SectionItem
                entity="Massey University"
                place="Wellingtion, NZ"
                position="Cambridge English Level 2 Certificate"
                href="https://www.massey.ac.nz/"
              >
                Credential ID: 0047776898
              </SectionItem>
            </Section>
            <Section header="Personal Information">
              <SectionItemContent>
                I am a very inquisitive person by nature. Spending time on
                learning new things gives me pleasure and a feeling of
                accomplishment. Learning Computer Science empowered me with a
                potent toolset for solving complex and creative problems. I see
                computers and the programming of such as a huge sandbox
                environment with sheer endless opportunity to create.
                <br />
                <br />
                As a kid I loved designing my own board- and card-games and as a
                teenager I started to modify computer games. Back then I
                perceived computer programming as some sort of wizardry, which
                is why I value the power I am given now even more.
                <br />
                <br />
                I spend a significant amount of my current spare time on working
                with modern web-frameworks like ReactJS and VueJS, learning
                systems languages like C/C++ as well as delving into functional
                programming using Haskell. Furthermore I maintain a special
                interest in the Linux operating system as well as other free and
                open source software, which enable me to be a more effective
                software developer.
                <br />
                <br />
                Programming is a tool and is used as a means for solving a
                subset of problems. Therefore, it is my ambition to learn a
                multitude of various skills which in turn give me the ability to
                integrate diverse knowledge into the process of solving
                problems.
                <br />
                <br />
                My other interests comprise of playing and listening to music,
                drawing, reading, adventurous traveling and cooking. When I am
                not immersed in one of my hobbies I enjoy spending time with
                Family, Friends and meeting new people.
              </SectionItemContent>
            </Section>
          </Content>
        </Container>
      </CVbody>
    </CVouter>
  );
}

export default CV;
