import {
    lti,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,
    freelancing,
    homegarden,
    tensorflow,
    keras,
    pytorch,
    brainwaves,
    sable,
    arduino,
    rpi,
    ocr,
    mumart,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];


  
  
  const services = [
    {
      title: "Full stack Web Developer",
      icon: web,
    },
    {
      title: "MERN Stack Developer",
      icon: mobile,
    },
    {
      title: "AEM Developer",
      icon: backend,
    },
    {
      title: "AI Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Angular JS",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "TensorFlow",
      icon: tensorflow,
    },
    {
      name: "Keras",
      icon: keras,
    },
    {
      name: "PyTorch",
      icon: pytorch,
    },
  ];
  
  const experiences = [
    {
      title: "Freelance Malware Analyst",
      company_name: "Home Garden Fencing",
      icon: homegarden,
      iconBg: "#E6DEDD",
      date: "June 2023 - July 2023",
      points: [
        "Analyzed client’s website for malware and eliminated malwares thereby making the website 100% malware free.",
        "Tools like Sucuri and Snyk helped in finding 90% of the malware and wordfence assisted in finding 10% of the malwares.",
        "Monitoring the website for 1 month to ensure that no malware is injected again.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Larsen and Toubro Infotech",
      icon: lti,
      iconBg: "#383E56",
      date: "January 2021 - July 2022",
      points: [
        "Analyzed client’s request and developed the solution with less than 20% of backlogs and provided innovative suggestions",
        "Managed frontend and backend development using React.js, Typescript and Node.js with a team of 8 consisting of developers and testers.",
        "Created web-based forms using Adobe Experience Manager, Indian government utilized these forms to manage several government sectors, thereby digitizing nearly 80% of the official government processes",
        "Led a 6-member team in code maintenance, preventing backlogs, and fostering future-focused work. Resulted in 10% backlog reduction. Agile methodology ensured 10-15% fewer backlogs, successful feature deployment, rigorous testing, and high-quality assurance.",
      ],
    },
    {
      title: "Freelance Web Developer",
      company_name: "Freelancing",
      icon: freelancing,
      iconBg: "#E6DEDD",
      date: "August 2017 - January 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Health condition prediction using EEG data",
      description:
        "The project aims to determine the possible health condition a person is likely to suffer in future. This is done by analyzing brain waves data which are detected by electroencephalogram(EEG) test. An AI model consisting of a supervised (SVM) and an unsupervised (K-Means) algorithm was created to perform the analysis on the data. The model gave a precision of 75% over 100 epochs.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "artificialintelligence",
          color: "green-text-gradient",
        },
        {
          name: "semisupervisedmodel",
          color: "pink-text-gradient",
        },
      ],
      image: brainwaves,
      source_code_link: "https://github.com/Himanshu41/HealthConditionPredictionusingEEGdata",
      paper_link: "https://drive.google.com/file/d/1MJIGT-pCuwA1iPg17xDPvJltj8lzonCr/view?usp=drive_link",
    },
    {
      name: "Sable Play",
      description:
        "The project aims in solving the main problem of finding the best instrument in just few clicks. It uses the Information Extraction technique to find the instrument and uses Sentimental Analysis to find the best amongst them.",
      tags: [
        {
          name: "webscraping",
          color: "blue-text-gradient",
        },
        {
          name: "php",
          color: "green-text-gradient",
        },
        {
          name: "html5",
          color: "pink-text-gradient",
        },
      ],
      image: sable,
      source_code_link: "#",
    },
    {
      name: "Automatic Gas Stove",
      description:
        "Designed and implemented an automatic gas stove which detected the gas and turns off it automatically. Also the leakage is detected by the system, hence making the no of fire accidents reduce. It was designed under the domains of AI and IOT.",
      tags: [
        {
          name: "iot",
          color: "blue-text-gradient",
        },
        {
          name: "c#",
          color: "green-text-gradient",
        },
        {
          name: "arduino",
          color: "pink-text-gradient",
        },
      ],
      image: arduino,
      source_code_link: "#",
    },
    {
      name: "Alchohol Detection System using Raspberry Pi",
      description:
        "System uses alcohol sensor with, raspberry pi with dc motor to demonstrate as vehicle engine. System constantly monitors the sensitivity of alcohol sensor for drunk driver detection. If alcohol level is not appropriate, vehicle engine stops and the nearest police station receives the message.",
      tags: [
        {
          name: "iot",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "raspberrypi",
          color: "pink-text-gradient",
        },
      ],
      image: rpi,
      source_code_link: "#",
    },
    {
      name: "Mu-Mart",
      description:
        "The project aims in bringing the students to learn music from the scratch through different mediums. The students even get a mart to buy instruments of their choice. Also the Musicians get various stages to make their career. Existing system is too hectic for the students to learn, to buy instruments and musicians to find their appropriate audience and stages.",
      tags: [
        {
          name: "webdevelopment",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "php",
          color: "pink-text-gradient",
        },
      ],
      image: mumart,
      source_code_link: "#",
    },
    {
      name: "Android Based Gas Meter Reading Using OCR",
      description:
        "Designed and Implemented an automatic system for reading gas meters, which used the OCR technology to convert the photo of the meter which read the meter readings, convert it into text and generate the bill accordingly. Existing system offers a manual system in which the employee visits the home of the customers and notes the readings for generating the bill.",
      tags: [
        {
          name: "ocr",
          color: "blue-text-gradient",
        },
        {
          name: "c#",
          color: "green-text-gradient",
        },
        {
          name: "android",
          color: "pink-text-gradient",
        },
      ],
      image: ocr,
      source_code_link: "#",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects};