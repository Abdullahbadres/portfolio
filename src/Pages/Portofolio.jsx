"use client"

import { useEffect, useState, useCallback } from "react"
import PropTypes from "prop-types"
import { useTheme } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import CardProject from "../components/CardProject"
import CardCertificate from "../components/CardCertificate" // ✅ Import CardCertificate component
import TechStackIcon from "../components/TechStackIcon"
import AOS from "aos"
import "aos/dist/aos.css"
import { Code, Award, Boxes } from "lucide-react"

// Separate ShowMore/ShowLess button component
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5
      text-slate-300 
      hover:text-white 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-white/5 
      hover:bg-white/10
      rounded-md
      border 
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform 
          duration-300 
          ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}
        `}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
)

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  }
}

const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "MUI.svg", language: "Material UI" },
  { icon: "vercel.svg", language: "Vercel" },
  { icon: "SweetAlert.svg", language: "SweetAlert2" },
]

// Project data
const projectData = [
  {
    id: "project1",
    Title: "React Mini Project",
    Description: "A responsive web application built with React and modern UI components.",
    Img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/react-mini-project.jpg-eI4zv0YRT27onb0zUfmgRLAVGI6umd.jpeg",
    Link: "https://mini-project-2-react-dibimbing-id-6y8a.vercel.app",
    TechStack: ["React", "JavaScript", "CSS", "HTML"],
    Features: ["Responsive Design", "Modern UI Components", "Interactive Elements", "API Integration"],
    Github: "https://github.com/Abdullahbadres/Mini-Project---2-React-Dibimbing.id-",
  },
  {
    id: "project2",
    Title: "HTML & CSS Mini Project",
    Description: "A clean and responsive website built with HTML, CSS and JavaScript.",
    Img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/html-css-project.jpg-Esk5Y6oEVx2uTe8DSt26mgulYAt4Wt.jpeg",
    Link: "https://anakpanah.vercel.app",
    TechStack: ["HTML", "CSS", "JavaScript"],
    Features: ["Responsive Layout", "CSS Animations", "Cross-browser Compatibility", "Performance Optimized"],
    Github: "https://github.com/Abdullahbadres/anakpanah",
  },
  {
    id: "project3",
    Title: "Anakpanah Project",
    Description: "A web application for Anakpanah with modern features and responsive design.",
    Img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anakpanah-project.jpg-kqEc7thzjsfZcEzsTkspfkXB48r9JV.jpeg",
    Link: "https://react-with-html-css-mini-project-anakpanah-vercel-7fvn.vercel.app",
    TechStack: ["React", "JavaScript", "Tailwind CSS", "HTML"],
    Features: ["User Authentication", "Dashboard Interface", "Data Visualization", "Mobile Responsive"],
    Github: "https://github.com/Abdullahbadres/React-with-HTML-CSS-mini-project-anakpanah-VERCEL/tree/main/vite-project",
  },
  {
    id: "project4",
    Title: "React Dibimbing Project",
    Description: "An interactive web application developed during the Dibimbing bootcamp.",
    Img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/react-dibimbing.jpg-ozyREhaq7mYQ4Qmj4KXYyyreyBI8WQ.jpeg",
    Link: "https://mini-project-2-react-dibimbing-id-gv6n.vercel.app",
    TechStack: ["React", "JavaScript", "CSS", "API Integration"],
    Features: ["State Management", "Component Architecture", "API Integration", "Form Validation"],
    Github: "https://github.com/Abdullahbadres/pushmethod",
  },
  {
    id: "project5",
    Title: "Traveloke",
    Description: "A travel booking and exploration platform with modern UI and seamless user experience.",
    Img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/traveloke.jpg-OTCvGTXfwSmYGKZHl6cVch2WJtYfuc.jpeg",
    Link: "https://travelokefinpro.vercel.app/",
    TechStack: ["React", "JavaScript", "Tailwind CSS", "API Integration"],
    Features: ["Booking System", "Search Functionality", "Responsive Design", "User Profiles"],
    Github: "https://github.com/Abdullahbadres/travelokefinpro",
  },
    {
    id: "project6",
    Title: "Mobile Sosmed",
    Description: "Social Media App for Mobile and Desktop with modern UI and seamless user experience.",
    Img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sosmed-52jh7SxryyXtfdJAQmy41gJcBvTJ0W.png",
    Link: "https://sosmed-five.vercel.app/",
    TechStack: ["Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "API Integration"],
    Features: ["Social Media", "Seamless User Experience", "Responsive Design", "User Profiles", "Zodiac Feature", "Profile Customization"],
    Github: "https://github.com/Abdullahbadres/SOSMED",
  },
    {
    id: "project7",
    Title: "Portfolio Website",
    Description: "My personal portfolio website showcasing my projects and skills.",
    Img: "https://placehold.co/600x340/6366f1/ffffff?text=Portfolio+Website",
    Link: "/game",
    TechStack: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
    Features: ["Responsive Design", "Animations", "Project Showcase", "Contact Form"],
    Github: "https://github.com/Abdullahbadres",
  },
]

// ✅ Certificate data dengan updated PDF links dan Bachelor's Certificate
const certificateData = [
  {
    id: "cert1",
    title: "Front-End Web Development Bootcamp",
    description:
      "Comprehensive bootcamp covering modern front-end development technologies and best practices. Successfully completed with Grade A+ certification from Dibimbing.id, demonstrating proficiency in contemporary web development frameworks and methodologies.",
    image: "https://i.ibb.co.com/YTh4Ch6f/certificate-dibimbing.png",
    pdfUrl: "https://certificate-dibimbing.tiiny.site/", // ✅ Updated PDF link
    issuedTo: "Abdullah Badres",
    duration: "23 November 2024 - 25 Mei 2025",
    grade: "A+",
    certificateNo: "201029FE210523001",
    studentId: "56438",
    verificationUrl: "https://dibimbing.id/certificate-validation?cn=201029FE210523001",
    institution: "Dibimbing.id",
    technologiesLearned: [
      "Front-End Development",
      "JavaScript",
      "React.js",
      "jQuery",
      "jQuery UI",
      "jQuery Mobile",
      "HTML5",
      "HTML",
      "Cascading Style Sheets (CSS)",
      "Tailwind CSS",
      "Bootstrap (Framework)",
      "Node.js",
      "Postman API",
      "GitHub",
      "Redux.js",
    ],
    keyFeatures: ["Responsive Design", "Modern UI Components", "Interactive Elements", "API Integration"],
  },
  {
    id: "cert2",
    title: "Academic Report Card - Front-End Development",
    description:
      "Detailed academic performance report showcasing comprehensive learning progress and achievements throughout the Front-End Web Development program. This report card demonstrates consistent excellence and mastery of various web development technologies and methodologies.",
    image: "https://i.ibb.co.com/yFJ2btdb/reportcard-Abdullah-Badres-page-0009-imageonline-co-merged.png",
    pdfUrl: "https://reportcard-dibimbing.tiiny.site/", // ✅ Updated PDF link
    issuedTo: "Abdullah Badres",
    duration: "23 November 2024 - 25 Mei 2025",
    grade: "A+",
    certificateNo: "REPORT-2024-001",
    studentId: "56438",
    verificationUrl: "https://dibimbing.id/certificate-validation?cn=201029FE210523001",
    institution: "Dibimbing.id",
    technologiesLearned: [
      "HTML5 & Semantic Markup",
      "CSS3 & Advanced Styling",
      "JavaScript ES6+",
      "React.js Framework",
      "Responsive Web Design",
      "Git Version Control",
      "API Integration",
      "Modern Development Tools",
      "UI/UX Principles",
      "Performance Optimization",
    ],
    keyFeatures: [
      "Academic Excellence Recognition",
      "Comprehensive Skill Assessment",
      "Progress Tracking Documentation",
      "Performance Analytics",
      "Learning Milestone Achievements",
    ],
  },
  {
    // ✅ NEW: Bachelor's Certificate
    id: "bachelor",
    title: "Bachelor's Degree - Industrial Engineering",
    description:
      "Bachelor's degree in Industrial Engineering, providing a strong foundation in analytical thinking, process optimization, and systematic problem-solving approaches that complement my transition into web development.",
    image: "https://i.ibb.co.com/rStVbGY/Ijazah.jpg",
    pdfUrl: null, // No PDF download for bachelor's
    issuedTo: "Abdullah",
    duration: "2013 - 2017",
    grade: "Bachelor's Degree (Industrial Engineering)",
    certificateNo: 26201201738919,
    studentId: null,
    grade: "3.17 of 4.00",
    verificationUrl: null,
    institution: "Sultan Agung Islamic University (UNISSULA)",
    type: "bachelor", // ✅ Special type to identify bachelor's certificate
    technologiesLearned: [
      "Process Optimization",
      "Systems Analysis",
      "Project Management",
      "Quality Control",
      "Data Analysis",
      "Problem Solving",
      "Operations Research",
      "Supply Chain Management",
    ],
    keyFeatures: [
      "Analytical Thinking Foundation",
      "Process Improvement Methodologies",
      "Project Management Skills",
      "Data-Driven Decision Making",
      "Systematic Problem Solving",
    ],
  },
  {
    id: "certEF",
    title: "English Proficiency Certificate - EF SET",
    description:
      "Official English proficiency certification from Education First Standard English Test (EF SET), demonstrating B2 Upper Intermediate level competency in English language skills across reading, listening, writing, and speaking domains.",
    image: "https://i.ibb.co.com/LXhGBnt4/EF-SET-Certificate-page-0001.jpg",
    pdfUrl: null,
    issuedTo: "Abdullah Badres",
    duration: "10th June 2025",
    grade: "51/100 (B2 Upper Intermediate)",
    certificateNo: "EF-SET-2025-001",
    studentId: null,
    verificationUrl: "https://cert.efset.org/en/HxuHPy",
    institution: "Education First Standard English Test (EF SET)",
    type: "language", // Special type for language certificate
    technologiesLearned: [
      "English Reading Comprehension",
      "English Listening Skills",
      "English Writing Proficiency",
      "English Speaking Fluency",
      "Academic English",
      "Business English Communication",
      "Cross-cultural Communication",
      "International English Standards",
    ],
    keyFeatures: [
      "CEFR B2 Upper Intermediate Level",
      "Comprehensive Language Assessment",
      "International Recognition",
      "Academic and Professional Validation",
      "Multi-skill Evaluation",
    ],
    // Additional EF SET specific data
    efsetScore: "51/100",
    cefrLevel: "B2 (Upper Intermediate)",
    skillBreakdown: {
      reading: { score: "39/100", level: "A2 Elementary" },
      listening: { score: "60/100", level: "B2 Upper Intermediate" },
      writing: { score: "48/100", level: "B1 Intermediate" },
      speaking: { score: "58/100", level: "B2 Upper Intermediate" },
    },
  },
]

export default function FullWidthTabs() {
  const theme = useTheme()
  const [value, setValue] = useState(0)
  const [projects, setProjects] = useState([])
  const [certificates, setCertificates] = useState([]) // ✅ State untuk certificates
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [showAllCertificates, setShowAllCertificates] = useState(false)
  const isMobile = window.innerWidth < 768
  const initialItems = isMobile ? 4 : 6

  useEffect(() => {
    // Initialize AOS once
    AOS.init({
      once: false,
    })
  }, [])

  // ✅ Fetch data dan simpan ke localStorage
  const fetchData = useCallback(async () => {
    try {
      console.log("🔄 Setting up portfolio data...")

      // Set projects data
      setProjects(projectData)
      localStorage.setItem("projects", JSON.stringify(projectData))

      // ✅ Set certificates data - PENTING!
      setCertificates(certificateData)
      localStorage.setItem("certificates", JSON.stringify(certificateData))

      console.log("✅ Data berhasil disimpan:")
      console.log("📁 Projects:", projectData.length, "items")
      console.log("🏆 Certificates:", certificateData.length, "items")
      console.log("💾 LocalStorage updated")
      console.log(
        "🎓 Certificate IDs:",
        certificateData.map((cert) => cert.id),
      )
      console.log("🎓 Bachelor's Certificate added:", certificateData.find((cert) => cert.type === "bachelor")?.title)

      // ✅ Verify localStorage
      const savedCerts = JSON.parse(localStorage.getItem("certificates")) || []
      console.log("🔍 Verification - Saved certificates:", savedCerts.length)
      console.log(
        "🔍 Verification - IDs:",
        savedCerts.map((c) => c.id),
      )
    } catch (error) {
      console.error("❌ Error setting data:", error)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const handleChange = (event, newValue) => {
    setValue(newValue)
    console.log("📋 Tab changed to:", newValue === 0 ? "Projects" : newValue === 1 ? "Certificates" : "Tech Stack")
  }

  const toggleShowMore = useCallback((type) => {
    if (type === "projects") {
      setShowAllProjects((prev) => !prev)
    } else {
      setShowAllCertificates((prev) => !prev)
    }
  }, [])

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems)
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems)

  // ✅ Function to render the current tab content dengan integrasi CardCertificate component
  const renderTabContent = () => {
    switch (value) {
      case 0: // Projects tab
        return (
          <div className="container mx-auto flex justify-center items-center overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
              {displayedProjects.map((project, index) => (
                <div
                  key={project.id || index}
                  data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                  data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                >
                  <CardProject
                    Img={project.Img}
                    Title={project.Title}
                    Description={project.Description}
                    Link={project.Link}
                    id={project.id}
                  />
                </div>
              ))}
            </div>
          </div>
        )

      case 1: // ✅ Certificates tab dengan integrasi CardCertificate component
        console.log("🏆 Rendering certificates:", displayedCertificates.length, "items")
        return (
          <div className="container mx-auto flex justify-center items-center overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
              {displayedCertificates.map((certificate, index) => {
                console.log(`🎓 Certificate ${index + 1}:`, certificate.id, "-", certificate.title)
                return (
                  <div
                    key={certificate.id || index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    {/* ✅ CardCertificate component dengan props yang benar */}
                    <CardCertificate certificate={certificate} />
                  </div>
                )
              })}
            </div>
          </div>
        )

      case 2: // Tech Stack tab
        return (
          <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
              {techStacks.map((stack, index) => (
                <div
                  key={index}
                  data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                  data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                >
                  <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                </div>
              ))}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
      {/* Header section */}
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span
            style={{
              color: "#6366f1",
              backgroundImage: "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical expertise. Each section represents a
          milestone in my continuous learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        {/* AppBar and Tabs section */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="md:px-4"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                  "& .lucide": {
                    transform: "scale(1.1) rotate(5deg)",
                  },
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                  "& .lucide": {
                    color: "#a78bfa",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
            <Tab
              icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={<Award className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Certificates"
              {...a11yProps(1)}
            />
            <Tab
              icon={<Boxes className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Tech Stack"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>

        {/* Tab content */}
        <div className="mt-6">
          {renderTabContent()}

          {/* Show More/Less button for projects */}
          {value === 0 && projects.length > initialItems && (
            <div className="mt-6 w-full flex justify-start">
              <ToggleButton onClick={() => toggleShowMore("projects")} isShowingMore={showAllProjects} />
            </div>
          )}

          {/* Show More/Less button for certificates */}
          {value === 1 && certificates.length > initialItems && (
            <div className="mt-6 w-full flex justify-start">
              <ToggleButton onClick={() => toggleShowMore("certificates")} isShowingMore={showAllCertificates} />
            </div>
          )}
        </div>
      </Box>
    </div>
  )
}
