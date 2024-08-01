import React, { useState, useRef } from 'react';
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
  margin-bottom: 30px;
`;

const ProfileImageContainer = styled.div`
  flex: 0 0 200px;
  margin-right: 40px;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
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
  font-size: 2.5em;
  color: #58a6ff;
`;

const AboutMe = styled.p`
  margin-bottom: 20px;
  font-size: 1em;
  line-height: 1.5;
`;

const ContactInfo = styled.div`
  margin-bottom: 15px;
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
  padding: 8px 16px;
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

const SocialMediaSection = styled.div`
  display: flex;
  margin-top: 15px;
`;

const SocialMediaIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #30363d;
  margin-right: 10px;
  transition: all 0.3s ease;

  img {
    width: 15px;
    height: 15px;
  }

  &:hover {
    background-color: #c9d1d9;
    img {
      filter: invert(1);
    }
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SkillsSection = styled.div`
  flex: 1;
  background-color: #21262d;
  padding: 15px;
  border-radius: 6px;
`;

const SoftSkillsSection = styled(SkillsSection)`
  grid-column: 2;
`;

const InterestsSection = styled(SkillsSection)`
  grid-column: 3;
`;

const SkillItem = styled.div`
  margin-bottom: 10px;
`;

const SkillName = styled.span`
  display: inline-block;
  width: 100px;
`;

const SkillBar = styled.div`
  height: 8px;
  background-color: #30363d;
  border-radius: 4px;
  display: inline-block;
  width: calc(100% - 110px);
`;

const SkillLevel = styled.div`
  height: 100%;
  background-color: #58a6ff;
  border-radius: 4px;
  width: ${props => props.level}%;
`;

const TimelineSection = styled.div`
  margin-top: 30px;
  position: relative;
  height: 80px;
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
  width: 10px;
  height: 10px;
  background-color: #58a6ff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

const TimelineLabel = styled.div`
  position: absolute;
  top: ${props => props.position === 'top' ? '-25px' : '25px'};
  left: ${props => props.left};
  transform: translateX(-50%);
  text-align: center;
  font-size: 0.8em;
  color: #8b949e;
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

const WorkExperienceSection = styled.div`
  margin-top: 40px;
`;

const JobCard = styled.div`
  background-color: #21262d;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;

const JobTitle = styled.h3`
  color: #58a6ff;
  margin-bottom: 10px;
`;

const JobDetails = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 15px;
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

const ProjectLanguages = styled.p`
  color: #8b949e;
  margin-bottom: 10px;
`;

const LanguagesSection = styled.div`
  background-color: #21262d;
  padding: 15px;
  border-radius: 6px;
  margin-top: 20px;
`;

const AnthemSection = styled.div`
  display: flex;
  align-items: center;
  background-color: #21262d;
  padding: 15px;
  border-radius: 6px;
  margin-top: 20px;
`;

const AnthemInfo = styled.div`
  flex: 1;
`;

const AnthemTitle = styled.h3`
  margin: 0;
  color: #58a6ff;
`;

const AnthemArtist = styled.p`
  margin: 5px 0 0;
  color: #8b949e;
`;

const PlayButton = styled.button`
  background-color: #238636;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2ea043;
  }
`;

const ProfileLeftSection = styled.div`
  flex: 3;
  margin-right: 20px;
`;

const ProfileRightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const MainInfoSection = styled.div`
  flex: 3;
`;

const RightInfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
`;

const ProgrammingLanguagesSection = styled(SkillsSection)`
  flex: 2;
`;

const ProjectDetailContainer = styled.div`
  padding: 20px;
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProjectLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 15px;
`;

const ProjectTitle = styled.h2`
  color: #58a6ff;
  margin: 0;
`;

const SectionContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const Section = styled.div`
  background-color: #21262d;
  border-radius: 8px;
  padding: 20px;
`;

const SummarySection = styled(Section)`
  flex: 1;
`;

const TechnologiesSection = styled(Section)`
  flex: 1;
`;

const SectionTitle = styled.h3`
  color: #58a6ff;
  margin-top: 0;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  color: #c9d1d9;
  margin: 0;
`;

const TechnologyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TechnologyItem = styled.div`
  display: flex;
  align-items: center;
`;

const TechnologyName = styled.span`
  width: 100px;
  color: #c9d1d9;
`;

const TechnologyBar = styled.div`
  height: 8px;
  background-color: #30363d;
  border-radius: 4px;
  flex-grow: 1;
`;

const TechnologyLevel = styled.div`
  height: 100%;
  background-color: #58a6ff;
  border-radius: 4px;
  width: ${props => props.level}%;
`;


const TimelineTitle = styled.h3`
  color: #c9d1d9;
  margin-bottom: 10px;
`;

const Timeline = styled.div`
  height: 2px;
  background-color: #30363d;
  position: relative;
  margin: 20px 0;
`;

const DocumentsSection = styled.div`
  margin-top: 20px;
`;

const DocumentsTitle = styled.h3`
  color: #c9d1d9;
  margin-bottom: 10px;
`;

const DocumentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 15px;
`;

const DocumentItem = styled.div`
  background-color: #21262d;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
`;

const DocumentIcon = styled.div`
  font-size: 24px;
  margin-bottom: 5px;
`;

const DocumentName = styled.div`
  color: #c9d1d9;
  font-size: 12px;
`;



function MainContent({ data, section }) {
  const [currentPath, setCurrentPath] = useState([]);
  const [viewingFile, setViewingFile] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const audioRef = useRef(null);

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

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
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

  const ProjectDetail = ({ project }) => (
    <ProjectDetailContainer>
      <ProjectHeader>
        <ProjectLogo src={project.logo} alt={project.name} />
        <ProjectTitle>{project.name}</ProjectTitle>
      </ProjectHeader>
      <SectionContainer>
        <SummarySection>
          <SectionTitle>Summary</SectionTitle>
          <ProjectDescription>{project.longDescription}</ProjectDescription>
        </SummarySection>
        <TechnologiesSection>
          <SectionTitle>Technologies Used</SectionTitle>
          <TechnologyList>
            {project.technologies.map((tech, index) => (
              <TechnologyItem key={index}>
                <TechnologyName>{tech.name}</TechnologyName>
                <TechnologyBar>
                  <TechnologyLevel level={tech.level} />
                </TechnologyBar>
              </TechnologyItem>
            ))}
          </TechnologyList>
        </TechnologiesSection>
      </SectionContainer>
      <TimelineSection>
        <TimelineTitle>Project Timeline</TimelineTitle>
        <Timeline>
          {project.timeline.map((item, index) => (
            <TimelinePoint key={index} style={{ left: `${(index / (project.timeline.length - 1)) * 100}%` }} />
          ))}
        </Timeline>
      </TimelineSection>
      <DocumentsSection>
        <DocumentsTitle>Project Documents</DocumentsTitle>
        <DocumentsGrid>
          {project.documents.map((doc, index) => (
            <DocumentItem key={index} onClick={() => setViewingFile(doc)}>
              <DocumentIcon>📄</DocumentIcon>
              <DocumentName>{doc.name}</DocumentName>
            </DocumentItem>
          ))}
        </DocumentsGrid>
      </DocumentsSection>
    </ProjectDetailContainer>
  );

  let content;
  if (section === 'profile') {
    const { skills, softSkills, socialMedia, timeline, interests, languages, anthem } = data.profile;
    content = (
      <ProfileContainer>
        <TopSection>
          <MainInfoSection>
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
                <SocialMediaSection>
                  {socialMedia.map((social, index) => (
                    <SocialMediaIcon key={index} href={social.link} target="_blank">
                      <img src={social.icon} alt={social.name} />
                    </SocialMediaIcon>
                  ))}
                </SocialMediaSection>
              </ProfileInfo>
            </ProfileSection>
          </MainInfoSection>
          <RightInfoSection>
            <LanguagesSection>
              <h3>Languages</h3>
              <ul>
                {languages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </LanguagesSection>
            <AnthemSection>
              <AnthemInfo>
                <AnthemTitle>{anthem.title}</AnthemTitle>
                <AnthemArtist>{anthem.artist}</AnthemArtist>
              </AnthemInfo>
              <PlayButton onClick={togglePlay}>
                {isPlaying ? '⏸' : '▶'}
              </PlayButton>
              <audio ref={audioRef} src={anthem.audioSrc} />
            </AnthemSection>
          </RightInfoSection>
        </TopSection>
        <SkillsContainer>
          <ProgrammingLanguagesSection>
            <h3>Programming Languages</h3>
            {skills.map((skill, index) => (
              <SkillItem key={index}>
                <SkillName>{skill.name}</SkillName>
                <SkillBar>
                  <SkillLevel level={skill.level} />
                </SkillBar>
              </SkillItem>
            ))}
          </ProgrammingLanguagesSection>
          <SkillsSection>
            <h3>Soft Skills</h3>
            <ul>
              {softSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </SkillsSection>
          <SkillsSection>
            <h3>Interests</h3>
            <ul>
              {interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </SkillsSection>
        </SkillsContainer>
        <TimelineSection>
          <TimelineLine />
          {timeline.map((item, index) => {
            const leftPosition = `${index * 100 / (timeline.length - 1)}%`;
            return (
              <React.Fragment key={index}>
                <TimelinePoint style={{ left: leftPosition }} />
                <TimelineLabel position={index % 2 === 0 ? 'top' : 'bottom'} left={leftPosition}>
                  <div>{item.year}</div>
                  <div>{item.event}</div>
                </TimelineLabel>
              </React.Fragment>
            );
          })}
        </TimelineSection>
      </ProfileContainer>
    );
  } else if (section === 'workExperience') {
    content = renderWorkExperience();
  } else if (section === 'projects') {
    content = selectedProject ? <ProjectDetail project={selectedProject} /> : renderProjects();
  } else {
    const currentFolder = getCurrentFolder();
    content = (
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

export default MainContent;