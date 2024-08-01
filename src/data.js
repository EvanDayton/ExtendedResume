export const portfolioData = {
  profile: {
    name: "Evan Dayton",
    profileImage: "/images/profile.jpg",
    aboutMe: "I am a passionate developer with experience in web and mobile application development, as well as a keen interest in politics and history.",
    email: "evandayton@outlook.com",
    location: "Phoenix, AZ",
    resumeFile: "/documents/EvanDaytonResume.pdf",
    skills: [
      { name: 'JavaScript', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'Java', level: 60 },
      { name: 'C#', level: 70 },
      { name: 'SQL', level: 60 },
    ],
    softSkills: [
      'Leadership',
      'Teamwork',
      'Communication',
      'Problem-solving',
      'Adaptability'
    ],
    socialMedia: [
      { name: 'LinkedIn', icon: '/icons/linkedin.png', link: '#' },
      { name: 'GitHub', icon: '/icons/github.png', link: '#' },
      { name: 'Twitter', icon: '/icons/twitter.png', link: '#' },
      { name: 'Instagram', icon: '/icons/instagram.png', link: '#' },
    ],
    timeline: [
      { year: '2001', event: 'Born' },
      { year: '2016-2020', event: 'Peninsula High School' },
      { year: '2020-2024', event: 'Colorado Christian University' },
      { year: '2024', event: 'Present' },
    ],
    interests: [
      'Front-end Development',
      'Back-end Development',
      'Web Development',
      'Mobile App Development',
      'Machine Learning'
    ],
    languages: ['English', 'Spanish', 'Norwegian'],
    anthem: {
      title: "Vienna",
      artist: "Billy Joel",
      audioSrc: "/audio/Vienna.mp3"
    }
  },
  documents: {
    type: 'folder',
    summary: 'All documents and projects',
    content: {
      'Diplomas': {
        type: 'folder',
        summary: 'Academic achievements',
        content: {
          'College Diploma': {
            type: 'file',
            name: 'College Diploma',
            content: 'Not in possession',
            fileType: 'text/plain',
            summary: 'College diploma not yet delivered',
            class: 'Education',
            sources: []
          }
        }
      },
      'Achievements': {
        type: 'folder',
        summary: 'Notable accomplishments',
        content: {
          'Achievement 1': {
            type: 'file',
            name: 'Achievement 1',
            content: '/documents/achievement1.pdf',
            fileType: 'application/pdf',
            summary: 'Description of Achievement 1',
            class: 'Professional',
            sources: []
          }
        }
      },
      'Computer Science': {
        type: 'folder',
        summary: 'Computer Science projects',
        content: {
          'Portfolio': {
            type: 'file',
            name: 'Portfolio',
            icon: '/icons/portfolioimage.png',
            link: 'https://evandayton.me',
            summary: 'My personal portfolio website',
          },
          'Morse Code Converter': {
            type: 'file',
            name: 'Morse Code Converter',
            icon: '/icons/morse_code_icon.png',
            link: 'https://evandayton.github.io/TextToMorseCode/',
            summary: 'A web app that converts text to Morse code and vice versa',
          },
          'MelodiQ': {
            type: 'file',
            name: 'MelodiQ',
            icon: '/icons/melodiq_icon.png',
            link: 'https://melodiq.me',
            summary: 'A web application for music creation and sharing',
          },
          'Monkey Hop': {
            type: 'file',
            name: 'Monkey Hop',
            icon: '/icons/monkey.png',
            link: 'https://melodiq.me',
            summary: 'A simple game similar to Dino Jump but with my own twist',
          },
          'Echoes of the Nebula Conflict': {
            type: 'file',
            name: 'Echoes of the Nebula Conflict',
            icon: '/icons/echoes_icon.png',
            link: 'https://echoes-game.com',
            summary: 'An immersive space strategy game',
          }
        }
      },
      'Politics': {
        type: 'folder',
        summary: 'Political science studies and research',
        content: {
          'Domestic Policy': {
            type: 'folder',
            summary: 'Domestic policy analysis and research',
            content: {
              'Healthcare Reform': {
                type: 'file',
                name: 'Healthcare Reform Analysis',
                content: '/documents/politics/healthcare_reform.pdf',
                fileType: 'application/pdf',
                summary: 'Analysis of recent healthcare reform proposals',
                class: 'Domestic Policy',
                sources: ['Congressional Budget Office', 'Department of Health and Human Services']
              },
              'Economic Policy': {
                type: 'file',
                name: 'Economic Policy Review',
                content: '/documents/politics/economic_policy_review.pdf',
                fileType: 'application/pdf',
                summary: 'Review of recent economic policies and their impact',
                class: 'Domestic Policy',
                sources: ['Federal Reserve', 'Bureau of Economic Analysis']
              },
              'Education Policy': {
                type: 'file',
                name: 'Education Policy Analysis',
                content: '/documents/politics/education_policy_analysis.pdf',
                fileType: 'application/pdf',
                summary: 'Analysis of current education policies and proposed reforms',
                class: 'Domestic Policy',
                sources: ['Department of Education', 'National Center for Education Statistics']
              }
            }
          },
          'Memos': {
            type: 'folder',
            summary: 'Mock Memos',
            content: {
              'Healthcare Reform': {
                type: 'file',
                name: 'Healthcare Reform Analysis',
                content: '/documents/politics/healthcare_reform.pdf',
                fileType: 'application/pdf',
                summary: 'Analysis of recent healthcare reform proposals',
                class: 'Domestic Policy',
                sources: ['Congressional Budget Office', 'Department of Health and Human Services']
              }
            }
          },
          'Foreign Relations': {
            type: 'folder',
            summary: 'Foreign relations and international politics',
            content: {
              'US-China Relations': {
                type: 'file',
                name: 'US-China Relations Analysis',
                content: '/documents/politics/us_china_relations.pdf',
                fileType: 'application/pdf',
                summary: 'Analysis of current US-China relations and future prospects',
                class: 'Foreign Relations',
                sources: ['Council on Foreign Relations', 'U.S. Department of State']
              }
            }
          }
        }
      },
      'Philosophy': {
        type: 'folder',
        summary: 'Philosophy papers and essays',
        content: {
          'Aristotle': {
            type: 'folder',
            summary: 'Works on Aristotle and his philosophy',
            content: {
              'Aristotle and Christianity': {
                type: 'file',
                name: 'Aristotle and Christianity',
                content: '/documents/philosophy/Aristotle and Christianity.pdf',
                fileType: 'application/pdf',
                summary: 'Comparison of Aristotle\'s philosophy with Christian theology',
                class: 'Comparative Philosophy',
                sources: ['Aquinas, Thomas. Summa Theologica. 1265-1274.',]
              }
            }
          },
          'Memos': {
            type: 'folder',
            summary: 'Mock Memos',
            content: {
              'Healthcare Reform': {
                type: 'file',
                name: 'Healthcare Reform Analysis',
                content: '/documents/politics/healthcare_reform.pdf',
                fileType: 'application/pdf',
                summary: 'Analysis of recent healthcare reform proposals',
                class: 'Domestic Policy',
                sources: ['Congressional Budget Office', 'Department of Health and Human Services']
              }
            }
            
          },
          'Foreign Relations': {
            type: 'folder',
            summary: 'Foreign relations and international politics',
            content: {
              'US-China Relations': {
                type: 'file',
                name: 'US-China Relations Analysis',
                content: '/documents/politics/us_china_relations.pdf',
                fileType: 'application/pdf',
                summary: 'Analysis of current US-China relations and future prospects',
                class: 'Foreign Relations',
                sources: ['Council on Foreign Relations', 'U.S. Department of State']
              }
            }
          }
        }
      },
      'Religion': {
        type: 'folder',
        summary: 'Religious studies and research',
        content: {
          'Religious papers': {
            type: 'folder',
            summary: 'Research on the historical and theological evidence for the Bible',
            content: {
              'Unveiling Truth: A Comprehensive Study of Biblical Evidence': {
                type: 'file',
                name: 'Aristotle and Christianity',
                content: '/documents/religion/Unveiling Truth_ A Comprehensive Study of Biblical Evidence -1.pdf',
                fileType: 'application/pdf',
                summary: 'A comprehensive study of the historical and theological evidence for the Bible',
                class: 'Biblical Studies',
                sources: ['Aquinas, Thomas. Summa Theologica. 1265-1274.',]
              }
            }
          }
        }
      },
      'History': {
        type: 'folder',
        summary: 'Historical studies and research',
        content: {
          'American History': {
            type: 'folder',
            summary: 'American History Papers',
            content: {
              'The Genesis of American Independence: The Events and Ideas that Sparked the American Revolution': {
                type: 'file',
                name: 'The Genesis of American Independence: The Events and Ideas that Sparked the American Revolution',
                content: '/documents/history/The Genesis of American Independence_ The Events and Ideas that Sparked the American Revolution.pdf',
                fileType: 'application/pdf',
                summary: 'Analysis of the Events that sparked the American Revolution',
                class: 'Revolutionary War',
                sources: ['Bailyn, Bernard. The Ideological Origins of the American Revolution. Cambridge, MA: Harvard University Press, 1967.',
                'Breen, T.H. The Marketplace of Revolution: How Consumer Politics Shaped American Independence. New York: Oxford University Press, 2004.',
                'Middlekauff, Robert. The Glorious Cause: The American Revolution, 1763-1789. New York: Oxford University Press, 2005.',
                'Wood, Gordon S. The Creation of the American Republic, 1776-1787. Chapel Hill: University of North Carolina Press, 1969.',
                'David Hackett Fischer. Paul Revere\'s Ride. New York: Oxford University Press, 1995.']
              }
            }
          },
          'Modern History': {
            type: 'folder',
            summary: 'Studies in modern history',
            content: {
              'Industrial Revolution': {
                type: 'file',
                name: 'Industrial Revolution Impact',
                content: '/documents/history/industrial_revolution.pdf',
                fileType: 'application/pdf',
                summary: 'Analysis of the impact of the Industrial Revolution',
                class: 'Modern History',
                sources: ['Bailyn, Bernard. The Ideological Origins of the American Revolution. Cambridge, MA: Harvard University Press, 1967.',
                'Breen, T.H. The Marketplace of Revolution: How Consumer Politics Shaped American Independence. New York: Oxford University Press, 2004.',
                'Middlekauff, Robert. The Glorious Cause: The American Revolution, 1763-1789. New York: Oxford University Press, 2005.',
                'Wood, Gordon S. The Creation of the American Republic, 1776-1787. Chapel Hill: University of North Carolina Press, 1969.',
                'David Hackett Fischer. Paul Revere\'s Ride. New York: Oxford University Press, 1995.']
              }
            }
          }
        }
      }
    }
  },
  workExperience: [
    {
      title: "Behavioral Health Technician",
      company: "Horizon Recovery",
      duration: "May 2024 – Current",
      location: "Phoenix, AZ",
      responsibilities: [
        "Facilitated therapeutic group sessions, guiding clients in developing effective coping strategies.",
        "Monitored, documented, and reported on client behaviors and progress consistently.",
        "Collaborated with a multidisciplinary team to implement and adjust individualized treatment plans."
      ]
    },
    {
      title: "AV & Video Support",
      company: "Colorado Christian University",
      duration: "Oct 2023 – May 2024",
      location: "Lakewood, CO",
      responsibilities: [
        "Managed setup and operation of audiovisual equipment for school events, including microphones, presentations, and live streams.",
        "Provided sound support for chapel services and large school events, ensuring optimal audio quality.",
        "Troubleshot technical issues during events to ensure a seamless experience for presenters and attendees."
      ]
    },
    {
      title: "Golf Player Services",
      company: "Lakewood Country Club",
      duration: "May 2022 – May 2024",
      location: "Lakewood, CO",
      responsibilities: [
        "Managed tee time bookings and ensured efficiency of players on the course",
        "Maintained accurate record of players' scores and assisted with scorekeeping during tournaments",
        "Coordinated with other departments, such as maintenance and food and beverage, to ensure a high quality player experience."
      ]
    },
    {
      title: "Maintenance Technician",
      company: "Colorado Christian University",
      duration: "October 2023 – May 2024",
      location: "Lakewood, CO",
      responsibilities: [
        "Conduct electrical and plumbing repairs, addressing any issues promptly to minimize disruption to school operations.",
        "Perform routine and preventive maintenance on school facilities and equipment to ensure their optimal functioning.",
        "Address maintenance requests in a timely manner, prioritizing safety and functionality."
      ]
    },
    {
      title: "Campus Front Desk Security",
      company: "Colorado Christian University",
      duration: "January 2021 – May 2023",
      location: "Lakewood, CO",
      responsibilities: [
        "Manage incoming and outgoing calls and direct them to the appropriate department or staff member",
        "Monitor and maintain the security of the front desk area, including sign-in procedures for visitors",
        "Provide support to other departments as needed, such as coordinating with maintenance or IT."
      ]
    },
    {
      title: "Project Manager/Data Analyst",
      company: "The Dayton Company",
      duration: "Jan 2021 – Dec 2021",
      location: "Phoenix, AZ",
      responsibilities: [
        "Oversaw and managed budgeting project for The Dayton Company with the goal of streamlining and improving budgeting process.",
        "Collected and organized thousands of forms of expenses into one centralized place.",
        "Wrote and implemented SQL code to make the process more efficient and cost effective."
      ]
    }
  ],
  projects: [
    {
      name: "MelodiQ",
      logo: "/icons/melodiq_icon.png",
      languages: ["JavaScript", "React", "Node.js"],
      shortDescription: "A web application for music creation and sharing.",
      longDescription: "MelodiQ is a comprehensive web application that allows users to create, edit, and share music. It features a robust set of tools for both amateur and professional musicians.",
      technologies: [
        { name: 'React', level: 80 },
        { name: 'Node.js', level: 70 },
        { name: 'MongoDB', level: 60 },
        { name: 'WebAudio API', level: 90 },
      ],
      timeline: [
        { date: '2023-01', event: 'Project Inception' },
        { date: '2023-03', event: 'MVP Release' },
        { date: '2023-06', event: 'Beta Launch' },
        { date: '2023-09', event: 'Official Release' },
      ],
      documents: [
        { name: 'Project Charter', content: '/documents/melodiq/charter.pdf', fileType: 'application/pdf' },
        { name: 'Initial Outline', content: '/documents/melodiq/outline.pdf', fileType: 'application/pdf' },
      ],
      features: [
        "Interactive music creation interface",
        "Real-time collaboration with other users",
        "Integration with popular music streaming platforms",
        "Advanced audio processing capabilities",
        "Social sharing and discovery features"
      ]
    },
    {
      name: "Morse Code Converter",
      logo: "/icons/morse_code_icon.png",
      languages: ["JavaScript", "HTML", "CSS"],
      shortDescription: "A web app that converts text to Morse code and vice versa.",
      longDescription: "The Morse Code Converter is a user-friendly tool that allows quick and accurate translation between text and Morse code. It's designed with both educational and practical applications in mind.",
      technologies: [
        { name: 'JavaScript', level: 90 },
        { name: 'HTML5', level: 85 },
        { name: 'CSS3', level: 80 },
        { name: 'Web Audio API', level: 70 },
      ],
      timeline: [
        { date: '2022-11', event: 'Project Start' },
        { date: '2022-12', event: 'Initial Release' },
        { date: '2023-02', event: 'Audio Feature Added' },
        { date: '2023-04', event: 'Mobile Optimization' },
      ],
      documents: [
        { name: 'Project Spec', content: '/documents/morse-code/spec.pdf', fileType: 'application/pdf' },
        { name: 'User Guide', content: '/documents/morse-code/user-guide.pdf', fileType: 'application/pdf' },
      ],
      features: [
        "Bidirectional conversion between text and Morse code",
        "Audio playback of Morse code messages",
        "Visual representation of Morse code signals",
        "Support for international Morse code standards",
        "Responsive design for mobile and desktop use"
      ]
    },
    {
      name: "Echoes of the Nebula Conflict",
      logo: "/icons/echoes_icon.png",
      languages: ["C#", "Unity"],
      shortDescription: "An immersive space strategy game.",
      longDescription: "Echoes of the Nebula Conflict is a complex strategy game set in a distant galaxy. Players must manage resources, build fleets, and engage in tactical combat to secure their place in the universe.",
      technologies: [
        { name: 'C#', level: 85 },
        { name: 'Unity', level: 80 },
        { name: '3D Modeling', level: 70 },
        { name: 'Networking', level: 75 },
      ],
      timeline: [
        { date: '2022-06', event: 'Concept Development' },
        { date: '2022-09', event: 'Prototype' },
        { date: '2023-01', event: 'Alpha Version' },
        { date: '2023-05', event: 'Beta Testing' },
        { date: '2023-08', event: 'Launch' },
      ],
      documents: [
        { name: 'Game Design Document', content: '/documents/echoes/design-doc.pdf', fileType: 'application/pdf' },
        { name: 'Technical Specification', content: '/documents/echoes/tech-spec.pdf', fileType: 'application/pdf' },
      ],
      features: [
        "Procedurally generated galaxy with unique star systems",
        "Complex economy and resource management system",
        "Real-time tactical space combat",
        "Multiplayer modes for cooperative and competitive play",
        "Extensive tech tree for researching new technologies"
      ]
    },
    {
      name: "Personal Portfolio Website",
      logo: "/icons/portfolioimage.png",
      languages: ["JavaScript", "React", "Styled Components"],
      shortDescription: "A showcase of my skills, projects, and experiences.",
      longDescription: "This personal portfolio website serves as a comprehensive display of my professional journey, showcasing my skills, projects, and work experiences. It's designed to provide visitors with an intuitive and engaging way to learn about my capabilities and achievements.",
      technologies: [
        { name: 'React', level: 90 },
        { name: 'Styled Components', level: 85 },
        { name: 'JavaScript', level: 95 },
        { name: 'Responsive Design', level: 80 },
      ],
      timeline: [
        { date: '2023-03', event: 'Initial Design' },
        { date: '2023-04', event: 'Development Start' },
        { date: '2023-05', event: 'Content Population' },
        { date: '2023-06', event: 'Launch' },
      ],
      documents: [
        { name: 'Site Map', content: '/documents/portfolio/sitemap.pdf', fileType: 'application/pdf' },
        { name: 'Design Mockups', content: '/documents/portfolio/mockups.pdf', fileType: 'application/pdf' },
      ],
      features: [
        "Responsive design for optimal viewing on all devices",
        "Interactive project showcase with detailed information",
        "Integrated blog for sharing insights and experiences",
        "Contact form for easy communication",
        "Dark mode for comfortable viewing"
      ]
    }
  ]
};