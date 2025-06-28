"use client"

import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {
  ArrowLeft,
  ExternalLink,
  Award,
  Calendar,
  User,
  ChevronRight,
  BookOpen,
  Trophy,
  CheckCircle,
  Star,
  Code2,
  GraduationCap,
  Building,
  Hash,
  Sparkles,
  Download,
  Globe,
  Languages,
  BarChart3,
} from "lucide-react"

const TECH_ICONS = {
  "Front-End Development": Code2,
  JavaScript: Code2,
  "React.js": Code2,
  jQuery: Code2,
  "jQuery UI": Code2,
  "jQuery Mobile": Code2,
  HTML5: Code2,
  HTML: Code2,
  "Cascading Style Sheets (CSS)": Code2,
  "Tailwind CSS": Code2,
  "Bootstrap (Framework)": Code2,
  "Node.js": BookOpen,
  "Postman API": BookOpen,
  GitHub: BookOpen,
  "Redux.js": Code2,
  "HTML5 & Semantic Markup": Code2,
  "CSS3 & Advanced Styling": Code2,
  "JavaScript ES6+": Code2,
  "React.js Framework": Code2,
  "Responsive Web Design": Code2,
  "Git Version Control": BookOpen,
  "API Integration": BookOpen,
  "Modern Development Tools": BookOpen,
  "UI/UX Principles": Code2,
  "Performance Optimization": Code2,
  // Language skills icons
  "English Reading Comprehension": BookOpen,
  "English Listening Skills": Globe,
  "English Writing Proficiency": BookOpen,
  "English Speaking Fluency": Languages,
  "Academic English": GraduationCap,
  "Business English Communication": Building,
  "Cross-cultural Communication": Globe,
  "International English Standards": Globe,
  default: CheckCircle,
}

const TechBadge = ({ tech, index }) => {
  const Icon = TECH_ICONS[tech] || TECH_ICONS["default"]

  return (
    <div className="group relative overflow-hidden px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg sm:rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-default">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
      <div className="relative flex items-center gap-1 sm:gap-1.5 md:gap-2">
        <span className="text-[10px] sm:text-xs md:text-sm font-bold text-blue-400 min-w-[16px] sm:min-w-[20px]">
          {index + 1}.
        </span>
        <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-blue-400 group-hover:text-blue-300 transition-colors flex-shrink-0" />
        <span className="text-[10px] sm:text-xs md:text-sm font-medium text-blue-300/90 group-hover:text-blue-200 transition-colors leading-tight">
          {tech}
        </span>
      </div>
    </div>
  )
}

const FeatureItem = ({ feature, index }) => {
  return (
    <li className="group flex items-start space-x-2 sm:space-x-3 p-2 sm:p-2.5 md:p-3.5 rounded-lg sm:rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
      <div className="relative mt-1 sm:mt-2">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
        <div className="relative w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-125 transition-transform duration-300" />
      </div>
      <span className="text-xs sm:text-sm md:text-base text-gray-300 group-hover:text-white transition-colors leading-relaxed">
        {feature}
      </span>
    </li>
  )
}

const CertificateStats = ({ certificate }) => {
  const techCount = certificate?.technologiesLearned?.length || 0
  const isLanguageCert = certificate?.type === "language"

  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 bg-[#0a0a1a] rounded-lg sm:rounded-xl overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-50 blur-2xl z-0" />

      <div className="relative z-10 flex items-center space-x-1.5 sm:space-x-2 md:space-x-3 bg-white/5 p-1.5 sm:p-2 md:p-3 rounded-md sm:rounded-lg border border-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:shadow-lg">
        <div className="bg-blue-500/20 p-1 sm:p-1.5 md:p-2 rounded-full">
          {isLanguageCert ? (
            <Languages className="text-blue-300 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" strokeWidth={1.5} />
          ) : (
            <Code2 className="text-blue-300 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" strokeWidth={1.5} />
          )}
        </div>
        <div className="flex-grow min-w-0">
          <div className="text-sm sm:text-lg md:text-xl font-semibold text-blue-200">{techCount}</div>
          <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-400 leading-tight">
            {isLanguageCert ? "Skills" : "Technologies"}
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-center space-x-1.5 sm:space-x-2 md:space-x-3 bg-white/5 p-1.5 sm:p-2 md:p-3 rounded-md sm:rounded-lg border border-purple-500/20 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:shadow-lg">
        <div className="bg-purple-500/20 p-1 sm:p-1.5 md:p-2 rounded-full">
          <Trophy className="text-purple-300 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" strokeWidth={1.5} />
        </div>
        <div className="flex-grow min-w-0">
          <div className="text-sm sm:text-lg md:text-xl font-semibold text-purple-200">
            {isLanguageCert ? certificate?.cefrLevel?.split(" ")[0] || "B2" : certificate?.grade || "A+"}
          </div>
          <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-400 leading-tight">
            {isLanguageCert ? "CEFR Level" : "Final Grade"}
          </div>
        </div>
      </div>
    </div>
  )
}

// New component for EF SET skill breakdown
const SkillBreakdown = ({ skillBreakdown }) => {
  const skills = [
    { key: "reading", label: "Reading", icon: BookOpen },
    { key: "listening", label: "Listening", icon: Globe },
    { key: "writing", label: "Writing", icon: BookOpen },
    { key: "speaking", label: "Speaking", icon: Languages },
  ]

  return (
    <div className="bg-white/[0.02] backdrop-blur-xl rounded-lg sm:rounded-2xl p-3 sm:p-6 md:p-8 border border-white/10 space-y-3 sm:space-y-6 hover:border-white/20 transition-colors duration-300 group">
      <h3 className="text-sm sm:text-xl font-semibold text-white/90 flex items-center gap-2 sm:gap-3">
        <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 group-hover:rotate-[20deg] transition-transform duration-300" />
        Skill Breakdown
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
        {skills.map(({ key, label, icon: Icon }) => {
          const skill = skillBreakdown[key]
          return (
            <div
              key={key}
              className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-md sm:rounded-lg bg-white/5 border border-white/10"
            >
              <Icon className="w-3 h-3 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-[10px] sm:text-sm text-gray-400">{label}</p>
                <p className="text-xs sm:text-base text-white font-medium truncate">{skill.score}</p>
                <p className="text-[8px] sm:text-xs text-gray-500">{skill.level}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const CertificateDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [certificate, setCertificate] = useState(null)
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)

    // Debug log
    console.log("🔍 Certificate ID from URL:", id)

    // Get certificates from localStorage
    const storedCertificates = JSON.parse(localStorage.getItem("certificates")) || []
    console.log("📦 Stored certificates:", storedCertificates.length, "items")
    console.log(
      "🗂️ Available certificate IDs:",
      storedCertificates.map((c) => c.id),
    )

    // Find certificate by ID
    const selectedCertificate = storedCertificates.find((c) => String(c.id) === String(id))
    console.log("🎯 Selected certificate:", selectedCertificate ? selectedCertificate.title : "NOT FOUND")

    if (selectedCertificate) {
      setCertificate(selectedCertificate)
      console.log("✅ Certificate loaded successfully:", selectedCertificate.id)
    } else {
      console.error("❌ Certificate not found for ID:", id)
      console.log("🔍 Searching for ID:", id, "Type:", typeof id)
      console.log(
        "📋 Available IDs:",
        storedCertificates.map((c) => ({ id: c.id, type: typeof c.id })),
      )
    }
  }, [id, navigate])

  if (!certificate) {
    return (
      <div className="min-h-screen bg-[#030014] flex items-center justify-center px-4">
        <div className="text-center space-y-4 sm:space-y-6 animate-fadeIn">
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 mx-auto border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
          <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-white">Loading Certificate...</h2>
          <p className="text-gray-400">Certificate ID: {id}</p>
        </div>
      </div>
    )
  }

  const isLanguageCert = certificate.type === "language"
  const isEFSet = certificate.id === "certEF"

  return (
    <div className="min-h-screen bg-[#030014] px-2 sm:px-4 md:px-0 relative overflow-hidden">
      {/* Enhanced Background animations */}
      <div className="fixed inset-0">
        <div className="absolute -inset-[10px] opacity-20">
          <div className="absolute top-0 -left-4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
          <div className="absolute top-0 -right-4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-10 sm:left-20 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
        </div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-16">
          {/* Enhanced Breadcrumb */}
          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 mb-4 sm:mb-8 md:mb-12 animate-fadeIn">
            <button
              onClick={() => navigate(-1)}
              className="group inline-flex items-center space-x-1 sm:space-x-1.5 md:space-x-2 px-2 sm:px-3 md:px-5 py-1.5 sm:py-2 md:py-2.5 bg-white/5 backdrop-blur-xl rounded-lg sm:rounded-xl text-white/90 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 text-xs sm:text-sm md:text-base"
            >
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </button>
            <div className="flex items-center space-x-1 md:space-x-2 text-xs sm:text-sm md:text-base text-white/50">
              <span>Certificates</span>
              <ChevronRight className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4" />
              <span className="text-white/90 truncate max-w-[120px] sm:max-w-[200px] md:max-w-none">
                {certificate.title}
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 md:gap-16">
            {/* Left Column - Enhanced */}
            <div className="space-y-3 sm:space-y-6 md:space-y-10 animate-slideInLeft order-2 lg:order-1">
              <div className="space-y-2 sm:space-y-4 md:space-y-6">
                <h1 className="text-xl sm:text-3xl md:text-6xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                  {certificate.title}
                </h1>
                <div className="relative h-0.5 sm:h-1 w-8 sm:w-16 md:w-24">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm" />
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-xs sm:text-base md:text-lg text-gray-300/90 leading-relaxed text-justify">
                  {certificate.description}
                </p>
              </div>

              <CertificateStats certificate={certificate} />

              {/* Enhanced Action Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 md:gap-4">
                {certificate.verificationUrl && (
                  <a
                    href={certificate.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center space-x-1 sm:space-x-1.5 md:space-x-2 px-3 sm:px-4 md:px-8 py-2 sm:py-2.5 md:py-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 text-blue-300 rounded-lg sm:rounded-xl transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40 backdrop-blur-xl overflow-hidden text-xs sm:text-sm md:text-base"
                  >
                    <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-r from-blue-600/10 to-purple-600/10 transition-transform duration-300 group-hover:translate-y-[0%]" />
                    <ExternalLink className="relative w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                    <span className="relative font-medium">Verify Certificate</span>
                  </a>
                )}

                {certificate.pdfUrl && (
                  <a
                    href={certificate.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center space-x-1 sm:space-x-1.5 md:space-x-2 px-3 sm:px-4 md:px-8 py-2 sm:py-2.5 md:py-4 bg-gradient-to-r from-green-600/10 to-emerald-600/10 hover:from-green-600/20 hover:to-emerald-600/20 text-green-300 rounded-lg sm:rounded-xl transition-all duration-300 border border-green-500/20 hover:border-green-500/40 backdrop-blur-xl overflow-hidden text-xs sm:text-sm md:text-base"
                  >
                    <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-r from-green-600/10 to-emerald-600/10 transition-transform duration-300 group-hover:translate-y-[0%]" />
                    <Download className="relative w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                    <span className="relative font-medium">Download PDF</span>
                  </a>
                )}

                <div className="group relative inline-flex items-center justify-center space-x-1 sm:space-x-1.5 md:space-x-2 px-3 sm:px-4 md:px-8 py-2 sm:py-2.5 md:py-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 hover:from-purple-600/20 hover:to-pink-600/20 text-purple-300 rounded-lg sm:rounded-xl transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 backdrop-blur-xl overflow-hidden text-xs sm:text-sm md:text-base">
                  <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-r from-purple-600/10 to-pink-600/10 transition-transform duration-300 group-hover:translate-y-[0%]" />
                  {isLanguageCert ? (
                    <Languages className="relative w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                  ) : (
                    <GraduationCap className="relative w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                  )}
                  <span className="relative font-medium">
                    {isLanguageCert
                      ? `Level: ${certificate.cefrLevel || certificate.grade}`
                      : `Grade: ${certificate.grade}`}
                  </span>
                </div>
              </div>

              {/* Enhanced Technologies/Skills Learned Section */}
              <div className="space-y-2 sm:space-y-4 md:space-y-6">
                <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-white/90 mt-4 sm:mt-8 md:mt-12 lg:mt-0 flex items-center gap-1 sm:gap-2 md:gap-3">
                  {isLanguageCert ? (
                    <Languages className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-400" />
                  ) : (
                    <Code2 className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-400" />
                  )}
                  <span>{isLanguageCert ? "Skills Developed" : "Technologies Learned"}</span>
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-purple-400" />
                </h3>
                {certificate.technologiesLearned && certificate.technologiesLearned.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 md:gap-3">
                    {certificate.technologiesLearned.map((tech, index) => (
                      <TechBadge key={index} tech={tech} index={index} />
                    ))}
                  </div>
                ) : (
                  <p className="text-xs sm:text-sm md:text-base text-gray-400 opacity-50">No technologies listed.</p>
                )}
              </div>
            </div>

            {/* Right Column - Enhanced */}
            <div className="space-y-3 sm:space-y-6 md:space-y-10 animate-slideInRight order-1 lg:order-2">
              {/* Enhanced Certificate Image */}
              <div className="relative rounded-lg sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={
                    isEFSet
                      ? "https://i.ibb.co.com/pjs5TN5Z/Official-EF-SET-Certificate- -Abdullah-Badres.jpg"
                      : certificate.image || "/placeholder.svg"
                  }
                  alt={certificate.title}
                  className="w-full object-cover transform transition-transform duration-700 will-change-transform group-hover:scale-105"
                  onLoad={() => setIsImageLoaded(true)}
                  onError={(e) => {
                    console.error("Certificate detail image failed to load:", certificate.image)
                    e.target.src = "/placeholder.svg"
                  }}
                />
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 transition-colors duration-300 rounded-lg sm:rounded-2xl" />
              </div>

              {/* Enhanced Certificate Information */}
              <div className="bg-white/[0.02] backdrop-blur-xl rounded-lg sm:rounded-2xl p-3 sm:p-6 md:p-8 border border-white/10 space-y-3 sm:space-y-6 hover:border-white/20 transition-colors duration-300 group">
                <h3 className="text-sm sm:text-xl font-semibold text-white/90 flex items-center gap-2 sm:gap-3">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 group-hover:rotate-[20deg] transition-transform duration-300" />
                  Certificate Information
                </h3>
                <div className="space-y-2 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-md sm:rounded-lg bg-white/5 border border-white/10">
                    <User className="w-3 h-3 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-sm text-gray-400">Issued To</p>
                      <p className="text-xs sm:text-base text-white font-medium truncate">
                        {certificate.issuedTo || "Abdullah Badres"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-md sm:rounded-lg bg-white/5 border border-white/10">
                    <Building className="w-3 h-3 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-sm text-gray-400">{isEFSet ? "Organizer" : "Institution"}</p>
                      <p className="text-xs sm:text-base text-white font-medium truncate">
                        {certificate.institution || "Dibimbing.id"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-md sm:rounded-lg bg-white/5 border border-white/10">
                    <Calendar className="w-3 h-3 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-sm text-gray-400">{isEFSet ? "Established in" : "Duration"}</p>
                      <p className="text-xs sm:text-base text-white font-medium">{certificate.duration}</p>
                    </div>
                  </div>
                  {certificate.certificateNo && (
                    <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-md sm:rounded-lg bg-white/5 border border-white/10">
                      <Hash className="w-3 h-3 sm:w-5 sm:h-5 text-orange-400 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-[10px] sm:text-sm text-gray-400">Certificate No.</p>
                        <p className="text-xs sm:text-base text-white font-medium font-mono">
                          {certificate.certificateNo}
                        </p>
                      </div>
                    </div>
                  )}
                  {/* EF SET specific scores */}
                  {isEFSet && (
                    <>
                      <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-md sm:rounded-lg bg-white/5 border border-white/10">
                        <Trophy className="w-3 h-3 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-[10px] sm:text-sm text-gray-400">EF SET Overall Score</p>
                          <p className="text-xs sm:text-base text-white font-medium">{certificate.efsetScore}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-md sm:rounded-lg bg-white/5 border border-white/10">
                        <Languages className="w-3 h-3 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-[10px] sm:text-sm text-gray-400">CEFR Overall Score</p>
                          <p className="text-xs sm:text-base text-white font-medium">{certificate.cefrLevel}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* EF SET Skill Breakdown */}
              {isEFSet && certificate.skillBreakdown && <SkillBreakdown skillBreakdown={certificate.skillBreakdown} />}

              {/* Enhanced Key Features */}
              <div className="bg-white/[0.02] backdrop-blur-xl rounded-lg sm:rounded-2xl p-3 sm:p-6 md:p-8 border border-white/10 space-y-3 sm:space-y-6 hover:border-white/20 transition-colors duration-300 group">
                <h3 className="text-sm sm:text-xl font-semibold text-white/90 flex items-center gap-2 sm:gap-3">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 group-hover:rotate-[20deg] transition-transform duration-300" />
                  Key Features
                </h3>
                {certificate.keyFeatures && certificate.keyFeatures.length > 0 ? (
                  <ul className="list-none space-y-1 sm:space-y-2">
                    {certificate.keyFeatures.map((feature, index) => (
                      <FeatureItem key={index} feature={feature} index={index} />
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs sm:text-base text-gray-400 opacity-50">No features listed.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-out;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.7s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 0.7s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}

export default CertificateDetails
