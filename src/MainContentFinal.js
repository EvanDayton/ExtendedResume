import React, { useState } from 'react';
import styled from 'styled-components';

const ContentContainer = styled.main`
  flex-grow: 1;
  padding: 45px;
  overflow-y: auto;
  background-color: #0d1117;
  color: #c9d1d9;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: 50px;
`;

const ProfileImageContainer = styled.div`
  flex: 0 0 200px;
  margin-right: 40px;
`;

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #30363d;
`;

const ProfileInfo = styled.div`
  flex: 1;
  min-width: 300px;
`;

const ProfileName = styled.h1`
  margin: 0 0 18px 0;
  font-size: 3em;
  color: #58a6ff;
  margin-top: 35px;
`;

const AboutMe = styled.p`
  margin-bottom: 30px;
  font-size: 1.1em;
  line-height: 1.6;
`;

const ContactInfo = styled.div`
  margin-bottom: 20px;
`;

const ContactItem = styled.p`
  margin: 5px 0;
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  margin-right: 10px;
  font-size: 1.2em;
`;

const ResumeLink = styled.button`
  display: inline-block;
  background-color: #238636;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #2ea043;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const ItemCard = styled.div`
  background-color: #21262d;
  border-radius: 6px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
  position: relative;

  &:hover {
    background-color: #30363d;
  }
`;

const ItemIcon = styled.div`
  font-size: 48px;
  margin-bottom: 10px;
`;

const ItemName = styled.p`
  margin: 0;
  text-align: center;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #0d1117;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
`;

const DocumentViewerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
`;

const DocumentDisplay = styled.div`
  flex: 2;
  margin-right: 20px;
`;

const DocumentInfo = styled.div`
  flex: 1;
  background-color: #21262d;
  padding: 20px;
  border-radius: 8px;
  overflow-y: auto;
`;

const DocumentTitle = styled.h2`
  color: #58a6ff;
  margin-bottom: 15px;
`;

const InfoSection = styled.div`
  margin-bottom: 20px;
`;

const InfoTitle = styled.h3`
  color: #8b949e;
  margin-bottom: 10px;
`;

const SourcesList = styled.ul`
  padding-left: 20px;
`;

const SourceItem = styled.li`
  margin-bottom: 5px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #c9d1d9;
  font-size: 24px;
  cursor: pointer;
`;

const FolderHover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;

  ${ItemCard}:hover & {
    opacity: 1;
  }
`;

const FolderSummary = styled.p`
  color: #ffffff;
  text-align: center;
  padding: 10px;
`;

const FolderHeader = styled.div`
  margin-bottom: 20px;
`;

const FolderTitle = styled.h2`
  color: #58a6ff;
  margin-bottom: 10px;
`;

const FolderDescription = styled.p`
  color: #8b949e;
`;

const BackButton = styled.button`
  background-color: #D22B2B;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    background-color: #D2042D;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProfileLeftSection = styled.div`
  flex: 2;
  margin-right: 20px;
`;

const ProfileRightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const SkillsSection = styled.div`
  background-color: #21262d;
  padding: 15px;
  border-radius: 6px;
`;

const SkillItem = styled.div`
  margin-bottom: 10px;
`;

const SkillName = styled.span`
  display: inline-block;
  width: 100px;
`;

const SkillBar = styled.div`
  height: 10px;
  background-color: #30363d;
  border-radius: 5px;
  display: inline-block;
  width: calc(100% - 110px);
`;

const SkillLevel = styled.div`
  height: 100%;
  background-color: #58a6ff;
  border-radius: 5px;
  width: ${props => props.level}%;
`;

const SocialMediaSection = styled.div`
  display: flex;
  margin-top: 10px;
`;

const SocialMediaIcon = styled.a`
  margin-right: 10px;
  color: #c9d1d9;
  &:hover {
    color: #58a6ff;
  }
`;

const TimelineSection = styled.div`
  margin-top: 40px;
  position: relative;
  height: 100px;
  width: 100%;
`;

const TimelineLine = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #30363d;
`;

const TimelinePoint = styled.div`
  position: absolute;
  top: 50%;
  width: 12px;
  height: 12px;
  background-color: #58a6ff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    width: 16px;
    height: 16px;
  }
`;

const TimelineLabel = styled.div`
  position: absolute;
  top: ${props => props.position === 'top' ? '0' : '100%'};
  transform: translateX(-50%);
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;

  ${TimelinePoint}:hover + & {
    opacity: 1;
  }
`;

const AdditionalSection = styled.div`
  margin-top: 20px;
  background-color: #21262d;
  padding: 15px;
  border-radius: 6px;
`;

const WorkExperienceSection = styled.div`
  margin-top: 40px;
`;

const JobCard = styled.div`
  background-color: #21262d;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #30363d;
  }
`;

const JobTitle = styled.h3`
  color: #58a6ff;
  margin-bottom: 10px;
`;

const JobDetails = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const JobDetailRow = styled.tr`
  border-bottom: 1px solid #30363d;
`;

const JobDetailCell = styled.td`
  padding: 10px 0;
  &:first-child {
    font-weight: bold;
    width: 30%;
  }
`;

// Add these new styled components at the top of your file
const ProjectsSection = styled.div`
  margin-top: 40px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const ProjectCard = styled.div`
  background-color: #21262d;
  border-radius: 8px;
  padding: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #30363d;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 2.2em;
  color: #58a6ff;
  margin-bottom: 10px;

`;

const ProjectLanguages = styled.p`
  color: #8b949e;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  color: #c9d1d9;
`;

const ProjectDetailView = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProjectLogo = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;

const ProjectContent = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const ProjectSummary = styled.div`
  flex: 2;
  background-color: #21262d;
  padding: 20px;
  border-radius: 8px;
  margin-right: 20px;
`;

const ProjectTechnologies = styled.div`
  flex: 1;
  background-color: #21262d;
  padding: 20px;
  border-radius: 8px;
`;

const TechnologyItem = styled.div`
  margin-bottom: 10px;
`;

const TechnologyName = styled.span`
  display: inline-block;
  width: 100px;
`;

const TechnologyBar = styled.div`
  height: 10px;
  background-color: #30363d;
  border-radius: 5px;
  display: inline-block;
  width: calc(100% - 110px);
`;

const TechnologyLevel = styled.div`
  height: 100%;
  background-color: #58a6ff;
  border-radius: 5px;
  width: ${props => props.level}%;
`;

const ProjectTimeline = styled.div`
  margin-top: 20px;
`;

const ProjectDocuments = styled.div`
  margin-top: 20px;
`;

function MainContent({ data, section }) {
  const [currentPath, setCurrentPath] = useState([]);
  const [viewingFile, setViewingFile] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const getCurrentFolder = () => {
    return currentPath.reduce((acc, folder) => acc[folder].content, data[section].content);
  };

  const renderContent = (contentData) => (
    <Grid>
      {Object.entries(contentData).map(([name, item]) => (
        <ItemCard 
          key={name} 
          onClick={() => handleItemClick(item, name)}
        >
          {item.icon ? (
            <img src={item.icon} alt={name} style={{width: '48px', height: '48px', marginBottom: '10px'}} />
          ) : (
            <ItemIcon>{item.type === 'folder' ? '📁' : '📄'}</ItemIcon>
          )}
          <ItemName>{name}</ItemName>
          {(item.type === 'folder' || item.link) && (
            <FolderHover>
              <FolderSummary>{item.summary || 'No summary available'}</FolderSummary>
            </FolderHover>
          )}
        </ItemCard>
      ))}
    </Grid>
  );

  const handleItemClick = (item, name) => {
    if (item.type === 'folder') {
      setCurrentPath([...currentPath, name]);
    } else if (item.link) {
      window.open(item.link, '_blank');
    } else {
      setViewingFile(item);
    }
  };

  const handleBack = () => {
    if (selectedProject) {
      setSelectedProject(null);
    } else {
      setCurrentPath(currentPath.slice(0, -1));
    }
  };

  const renderWorkExperience = () => (
    <WorkExperienceSection>
      <h2>Work Experience</h2>
      {data.workExperience.map((job, index) => (
        <JobCard key={index} onClick={() => handleJobClick(job)}>
          <JobTitle>{job.title}</JobTitle>
          <JobDetails>
            <JobDetailRow>
              <JobDetailCell>Company</JobDetailCell>
              <JobDetailCell>{job.company}</JobDetailCell>
            </JobDetailRow>
            <JobDetailRow>
              <JobDetailCell>Duration</JobDetailCell>
              <JobDetailCell>{job.duration}</JobDetailCell>
            </JobDetailRow>
            <JobDetailRow>
              <JobDetailCell>Location</JobDetailCell>
              <JobDetailCell>{job.location}</JobDetailCell>
            </JobDetailRow>
          </JobDetails>
        </JobCard>
      ))}
    </WorkExperienceSection>
  );

  const handleJobClick = (job) => {
    setViewingFile({
      name: job.title,
      content: job.responsibilities.join('\n'),
      fileType: 'text/plain',
      summary: `Detailed responsibilities for ${job.title} at ${job.company}`,
      class: 'Work Experience',
      sources: []
    });
  };

  const renderProjects = () => (
    <ProjectsSection>
      <h2>Projects</h2>
      <ProjectsGrid>
        {data.projects.map((project, index) => (
          <ProjectCard key={index} onClick={() => handleProjectClick(project)}>
            <ProjectTitle>{project.name}</ProjectTitle>
            <ProjectLanguages>Languages: {project.languages.join(', ')}</ProjectLanguages>
            <ProjectDescription>{project.shortDescription}</ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleDocumentClick = (document) => {
    setViewingFile(document);
  };

  const ProjectDetail = ({ project }) => (
    <ProjectDetailView>
      <BackButton onClick={handleBack}>Back to Projects</BackButton>
      <ProjectHeader>
        <ProjectLogo src={project.logo} alt={project.name} />
        <ProjectTitle>{project.name}</ProjectTitle>
      </ProjectHeader>
      <ProjectContent>
        <ProjectSummary>
          <h3>Summary</h3>
          <p>{project.longDescription}</p>
        </ProjectSummary>
        <ProjectTechnologies>
          <h3>Technologies Used</h3>
          {project.technologies.map((tech, index) => (
            <TechnologyItem key={index}>
              <TechnologyName>{tech.name}</TechnologyName>
              <TechnologyBar>
                <TechnologyLevel level={tech.level} />
              </TechnologyBar>
            </TechnologyItem>
          ))}
        </ProjectTechnologies>
      </ProjectContent>
      <ProjectTimeline>
        <h3>Project Timeline</h3>
        <TimelineSection>
          <TimelineLine />
          {project.timeline.map((item, index) => {
            const position = index % 2 === 0 ? 'top' : 'bottom';
            const leftPosition = index / (project.timeline.length - 1) * 100;
            return (
              <React.Fragment key={index}>
                <TimelinePoint style={{ left: `${leftPosition}%` }} />
                <TimelineLabel style={{ left: `${leftPosition}%` }} position={position}>
                  <div>{item.date}</div>
                  <div>{item.event}</div>
                </TimelineLabel>
              </React.Fragment>
            );
          })}
        </TimelineSection>
      </ProjectTimeline>
      <ProjectDocuments>
        <h3>Project Documents</h3>
        <Grid>
          {project.documents.map((doc, index) => (
            <ItemCard key={index} onClick={() => handleDocumentClick(doc)}>
              <ItemIcon>📄</ItemIcon>
              <ItemName>{doc.name}</ItemName>
            </ItemCard>
          ))}
        </Grid>
      </ProjectDocuments>
    </ProjectDetailView>
  );

  const content = (() => {
    if (section === 'profile') {
      const { skills = [], socialMedia = [], timeline = [] } = data.profile;
      return (
        <ContentContainer>
          <ProfileContainer>
            <ProfileLeftSection>
              <ProfileSection>
                <ProfileImageContainer>
                  <ProfileImage src={data.profile.profileImage} alt="Profile" />
                </ProfileImageContainer>
                <ProfileInfo>
                  <ProfileName>{data.profile.name}</ProfileName>
                  <AboutMe>{data.profile.aboutMe}</AboutMe>
                  <ContactInfo>
                    <ContactItem>
                      <Icon>📧</Icon> {data.profile.email}
                    </ContactItem>
                    <ContactItem>
                      <Icon>📍</Icon> {data.profile.location}
                    </ContactItem>
                  </ContactInfo>
                  <SocialMediaSection>
                    {socialMedia.map((social, index) => (
                      <SocialMediaIcon key={index} href={social.link} target="_blank">
                        {social.icon}
                      </SocialMediaIcon>
                    ))}
                  </SocialMediaSection>
                  <ResumeLink onClick={() => {
                    setViewingFile({
                      name: 'Resume',
                      content: data.profile.resumeFile,
                      fileType: 'application/pdf',
                      summary: 'My professional resume',
                      class: 'Professional Documents',
                      sources: []
                    });
                  }}>
                    View Resume
                  </ResumeLink>
                </ProfileInfo>
              </ProfileSection>
            </ProfileLeftSection>
            <ProfileRightSection>
              <SkillsSection>
                <h3>Skills</h3>
                {skills.map((skill, index) => (
                  <SkillItem key={index}>
                    <SkillName>{skill.name}</SkillName>
                    <SkillBar>
                      <SkillLevel level={skill.level} />
                    </SkillBar>
                  </SkillItem>
                ))}
              </SkillsSection>
              <AdditionalSection>
                <h3>Additional Information</h3>
                {/* Add content here */}
              </AdditionalSection>
            </ProfileRightSection>
          </ProfileContainer>
          <TimelineSection>
            <TimelineLine />
            {timeline.map((item, index) => {
              const position = index % 2 === 0 ? 'top' : 'bottom';
              const leftPosition = 70 + (index * 15);
              return (
                <React.Fragment key={index}>
                  <TimelinePoint style={{ left: `${leftPosition}%` }} />
                  <TimelineLabel style={{ left: `${leftPosition}%` }} position={position}>
                    <div>{item.year}</div>
                    <div>{item.event}</div>
                  </TimelineLabel>
                </React.Fragment>
              );
            })}
          </TimelineSection>
        </ContentContainer>
      );
    } else if (section === 'workExperience') {
      return renderWorkExperience();
    } else if (section === 'projects') {
      return selectedProject ? <ProjectDetail project={selectedProject} /> : renderProjects();
    } else {
      const currentFolder = getCurrentFolder();
      return (
        <>
          <h1>{section.charAt(0).toUpperCase() + section.slice(1)}</h1>
          {currentPath.length > 0 && (
            <BackButton onClick={handleBack}>Back</BackButton>
          )}
          <FolderHeader>
            <FolderTitle>{currentPath[currentPath.length - 1] || section}</FolderTitle>
            <FolderDescription>{data[section].summary}</FolderDescription>
          </FolderHeader>
          {renderContent(currentFolder)}
        </>
      );
    }
  })();

  return (
    <ContentContainer>
      {content}
      {viewingFile && (
        <Modal onClick={() => setViewingFile(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setViewingFile(null)}>&times;</CloseButton>
            <DocumentViewerContainer>
              <DocumentDisplay>
                {viewingFile.fileType === 'application/pdf' ? (
                  <iframe 
                    src={viewingFile.content} 
                    title={viewingFile.name}
                    style={{width: '100%', height: '100%', border: 'none'}}
                  />
                ) : (
                  <p>{viewingFile.content}</p>
                )}
              </DocumentDisplay>
              <DocumentInfo>
                <DocumentTitle>{viewingFile.name}</DocumentTitle>
                <InfoSection>
                  <InfoTitle>Summary</InfoTitle>
                  <p>{viewingFile.summary || 'No summary available.'}</p>
                </InfoSection>
                <InfoSection>
                  <InfoTitle>Class</InfoTitle>
                  <p>{viewingFile.class || 'No class assigned.'}</p>
                </InfoSection>
                <InfoSection>
                  <InfoTitle>Sources</InfoTitle>
                  <SourcesList>
                    {viewingFile.sources && viewingFile.sources.length > 0 ? 
                      viewingFile.sources.map((source, index) => (
                        <SourceItem key={index}>{source}</SourceItem>
                      )) : 
                      <SourceItem>No sources available.</SourceItem>
                    }
                  </SourcesList>
                </InfoSection>
              </DocumentInfo>
            </DocumentViewerContainer>
          </ModalContent>
        </Modal>
      )}
    </ContentContainer>
  );
}
// At the end of your MainContent.js file, add this line:
export default MainContent;
<div className="social-media-icons" style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
  {socialMedia.map((social, index) => (
    <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
      <img src={social.icon} alt={social.name} style={{ width: '40px', height: '40px', borderRadius: '50%', transition: 'background-color 0.3s ease' }} />
    </a>
  ))}
</div>
