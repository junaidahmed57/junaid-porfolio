/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Junaid Ahmed",
  title: "Hi all, I'm Junaid",
  subTitle: emoji(
    "A passionate Android Developer 🚀 skilled in creating innovative, user-centric applications that deliver seamless user experiences."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1FQht33pjeMTrUChlu3-qIMVhayhOkdXP/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/junaidahmed57",
  linkedin: "https://www.linkedin.com/in/junaidahmed57/",
  gmail: "junaidahmedev@gmail.com",
  // gitlab: "https://gitlab.com/junaidahmed57",
  // facebook: "https://www.facebook.com/junaidahmed57",
  stackoverflow: "https://stackoverflow.com/users/8627443/junaid-ahmed",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "EXPERIENCED ANDROID DEVELOPER FOCUSED ON CREATING HIGH-QUALITY, USER-CENTERED MOBILE APPLICATIONS",
  skills: [
    emoji(
      "⚡ Build Android applications from the ground up, focusing on Clean Architecture and MAD(Modern Android Development) Skills"
    ),
    emoji("⚡ Contribute to and enhance existing projects, adding new features and refining current functionality"),
    emoji(
      "⚡ Optimize app performance, fix bugs, and integrate the latest Android features to ensure a seamless user experience"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Android SDK",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fab fa-korvue"
    },
    /* {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    }, */
    {
      skillName: "Jetpack Compose",
      fontAwesomeClassname: "fab fa-uikit"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "MVVM / MVI",
      fontAwesomeClassname: "fab fa-hive"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Room / Realm db",
      fontAwesomeClassname: "fas fa-database"
    },
	{
      skillName: "Unit / UI Testing",
      fontAwesomeClassname: "fas fa-flask"
    },
	{
      skillName: "Coroutines / Flows",
      fontAwesomeClassname: "fas fa-layer-group"
    },
	{
      skillName: "Dependency Injection",
      fontAwesomeClassname: "fas fa-download"
    },
	{
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
	    {
      Stack: "Backend",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Android Developer",
      company: "Paramount LLC",
      companylogo: require("./assets/images/paramountLogo.png"),
      date: "Nov 2022 – Dec 2023",
      desc: "Directed the end-to-end development of G-Trading & Recording apps, showing leadership and project management skills.",
      descBullets: [
        "Implemented Picture-In-Picture mode to enhance user experience",
        "Firebase Cloud Messaging (FCM) for real-time chat functionality, boosting 30% user engagement and interaction"
      ]
    },
    {
      role: "Senior Android Developer",
      company: "Server4Sale LLC",
      companylogo: require("./assets/images/server4saleLogo.jpg"),
      date: "Jul 2020 – Mar 2021",
      desc: "Spearheaded the development of Ameen Janaza application for US Muslim community and published on Google Play.",
	  descBullets: [
        "Conducted automated Unit testing to ensure the reliability and robustness of application",
        "Integrated AWS S3 storage with Retrofit for storing and retrieving data"
      ]
	},
    {
      role: "Intermediate Android Developer",
      company: "Solpk Technologies",
      companylogo: require("./assets/images/solpkLogo.jpg"),
      date: "Apr 2018 – Jan 2019",
      desc: "Collaborated on two ongoing Android apps, One Minute & Home Stylist, to add new features and fix bugs.",
	  descBullets: [
        "Engineered real-time tracking functionality for riders, providing customers with live updates on their delivery status",
        "Spearheaded the development of 3 Android apps Car Rental, SEM, and Abhi Laya"
      ]
	},
	{
      role: "Jr. Android Developer",
      company: "Solutions Player Ltd",
      companylogo: require("./assets/images/spLogo.png"),
      date: "Sep 2017 – Mar 2018",
      desc: "Orchestrated the end-to-end development of six Android apps, including Gilgit Bazar, PK Prize Bond, Mint Squad, Mezan Hotel, Delivery6, and Hotel Mezban.",
	  descBullets: [
        "Proactively identified and resolved critical bugs, leveraging Firebase Crashlytics to reduce app crashes by an impressive 80%, which improved overall app quality and stability"
      ]
	}
  ]
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Comsats Institute of Information Technology",
      logo: require("./assets/images/comsatsLogo.png"),
      subHeader: "Bachelor of Electrical Engineering",
      duration: "September 2013 - July 2017",
      desc: emoji("Awarded the prestigious university bronze medal 🥉 for achieving third place on campus, recognizing my dedication and academic excellence."),
      descBullets: [
        "I successfully completed my final year project by developing an Android app, showcasing my commitment in mobile development.",
        "Developed an autonomous parking system using ultrasonic sensors, showcasing advanced technical skills in sensor integration and automation."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR MOBILE APPLICATIONS",
  projects: [
    {
      image: require("./assets/images/vshftLogo.png"),
      projectName: "Vshft Trucking",
      projectDesc: "Seamless City-to-City Goods Transfer with Nearby Truck Booking and Instant Ride Confirmation",
      footerLink: [
        {
          name: "View Portfolio",
          url: "https://drive.google.com/file/d/1gVkFr3Vni2RSo3QeJIzrEtStH2mDe03s/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ameenLogo.png"),
      projectName: "Ameen Janaza",
      projectDesc: "App for the US Muslim Community with Nearby Janaza Alerts, Location, and Timing Details.",
      footerLink: [
        {
          name: "View Portfolio",
          url: "https://drive.google.com/file/d/1gVkFr3Vni2RSo3QeJIzrEtStH2mDe03s/view?usp=sharing"
        }
      ]
    },
	{
      image: require("./assets/images/oneMinuteLogo.png"),
      projectName: "OneMinute",
      projectDesc: "A Saudi Arabia-Based Ride and Delivery App Offering Distance-Based Fare Calculation and Live Tracking.",
      footerLink: [
        {
          name: "View Portfolio",
          url: "https://drive.google.com/file/d/1gVkFr3Vni2RSo3QeJIzrEtStH2mDe03s/view?usp=sharing"
        }
      ]
    },
	{
      image: require("./assets/images/homeStylistLogo.png"),
      projectName: "HomeStylist",
      projectDesc: "A Saudi Arabia-Based App Allowing Salons to Offer Services and Customers to Choose Based on Ratings and Services.",
      footerLink: [
        {
          name: "View Portfolio",
          url: "https://drive.google.com/file/d/1gVkFr3Vni2RSo3QeJIzrEtStH2mDe03s/view?usp=sharing"
        }
      ]
    },
	{
      image: require("./assets/images/glxLogo.png"),
      projectName: "GLX",
      projectDesc: "A Mobile App for Buying, Selling, and Finding Anything Nearby with Ease, Offering Real-Time Communication.",
      footerLink: [
        {
          name: "View Portfolio",
          url: "https://drive.google.com/file/d/1gVkFr3Vni2RSo3QeJIzrEtStH2mDe03s/view?usp=sharing"
        }
      ]
    },
	{
      image: require("./assets/images/xrLogo.png"),
      projectName: "Xeros Rental",
      projectDesc: "Car Rental App with Flexible Options, Offering Daily Rates and Choices for With or Without Driver.",
      footerLink: [
        {
          name: "View Portfolio",
          url: "https://drive.google.com/file/d/1gVkFr3Vni2RSo3QeJIzrEtStH2mDe03s/view?usp=sharing"
        }
      ]
    },
	{
      image: require("./assets/images/gTradingLogo.png"),
      projectName: "G-Trading",
      projectDesc: "A Cryptocurrency App for Live Price Tracking, On-Demand Buying and Selling, with Instant Updates via Socket.",
      footerLink: [
        {
          name: "View Portfolio",
          url: "https://drive.google.com/file/d/1gVkFr3Vni2RSo3QeJIzrEtStH2mDe03s/view?usp=sharing"
        }
      ]
    },
	{
      image: require("./assets/images/hotelMezbanLogo.png"),
      projectName: "Hotel Mezban",
      projectDesc: "Hotel Booking App for Room Selection, Date Reservation, and Personalized Service Add-Ons for Your Stay.",
      footerLink: [
        {
          name: "View Portfolio",
          url: "https://drive.google.com/file/d/1gVkFr3Vni2RSo3QeJIzrEtStH2mDe03s/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3309892980",
  email_address: "junaidahmedev@gmail.com",
  display: true
};

// Twitter Section

const twitterDetails = {
  userName: "junaidahmed57", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
