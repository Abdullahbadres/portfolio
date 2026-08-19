import { lazy, Suspense, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import Home from "./Pages/Home"
import About from "./Pages/About"
import AnimatedBackground from "./components/Background"
import Navbar from "./components/Navbar"
import Portofolio from "./Pages/Portofolio"
import ContactPage from "./Pages/Contact"
import WelcomeScreen from "./Pages/WelcomeScreen"
import Footer from "./components/Footer"
import AosInit from "./components/AosInit"
import { AnimatePresence } from "framer-motion"

const ProjectDetails = lazy(() => import("./components/ProjectDetail"))
const CertificateDetails = lazy(() => import("./components/CertificateDetail"))
const ThankYouPage = lazy(() => import("./Pages/ThankYou"))
const NotFound = lazy(() => import("./Pages/NotFound"))

const PageLoader = () => (
  <div className="min-h-screen bg-[#030014] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
  </div>
)

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AosInit />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg"
      >
        Skip to content
      </a>

      <AnimatePresence mode="wait">
        {showWelcome && <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />}
      </AnimatePresence>

      {!showWelcome && (
        <main id="main-content">
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <Portofolio />
          <ContactPage />
          <Footer />
        </main>
      )}
    </>
  )
}

const ProjectPageLayout = () => (
  <Suspense fallback={<PageLoader />}>
    <ProjectDetails />
    <Footer />
  </Suspense>
)

const CertificatePageLayout = () => (
  <Suspense fallback={<PageLoader />}>
    <CertificateDetails />
    <Footer />
  </Suspense>
)

function App() {
  const [showWelcome, setShowWelcome] = useState(true)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
        <Route path="/certificate/:id" element={<CertificatePageLayout />} />
        <Route
          path="/thank-you"
          element={
            <Suspense fallback={<PageLoader />}>
              <ThankYouPage />
            </Suspense>
          }
        />
        <Route
          path="/game"
          element={
            <Suspense fallback={<PageLoader />}>
              <NotFound />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<PageLoader />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
