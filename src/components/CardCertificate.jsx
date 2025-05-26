"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Modal, IconButton, Box, Backdrop } from "@mui/material"
import { Eye, ArrowRight, Award, Calendar, Building, GraduationCap } from "lucide-react"
import CloseIcon from "@mui/icons-material/Close"

const CardCertificate = ({ certificate }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // ✅ Check if this is a bachelor's certificate
  const isBachelor = certificate.type === "bachelor"

  // Handle kasus ketika certificate kosong
  const handlePreview = (e) => {
    if (!certificate.image) {
      console.log("Certificate image kosong")
      e.preventDefault()
      alert("Certificate image is not available")
    } else {
      handleOpen()
    }
  }

  const handleDetails = (e) => {
    if (!certificate.id || isBachelor) {
      console.log("❌ Certificate ID kosong atau Bachelor's certificate")
      e.preventDefault()
      if (isBachelor) {
        alert("Bachelor's certificate details are displayed here for informational purposes only")
      } else {
        alert("Certificate details are not available")
      }
    } else {
      console.log("🚀 Navigating to certificate detail:", certificate.id)
      console.log("🔗 URL will be: /certificate/" + certificate.id)

      // ✅ Verify data exists in localStorage before navigation
      const storedCerts = JSON.parse(localStorage.getItem("certificates")) || []
      const exists = storedCerts.find((c) => c.id === certificate.id)
      console.log("📦 Certificate exists in localStorage:", !!exists)
    }
  }

  return (
    <>
      <div className="group relative w-full">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
          {/* ✅ Different gradient for bachelor's certificate */}
          <div
            className={`absolute inset-0 ${
              isBachelor
                ? "bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10"
                : "bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"
            } opacity-50 group-hover:opacity-70 transition-opacity duration-300`}
          ></div>

          <div className="relative p-5 z-10">
            {/* Certificate Image */}
            <div className="relative overflow-hidden rounded-lg cursor-pointer" onClick={handlePreview}>
              <img
                src={certificate.image || "/placeholder.svg"}
                alt={certificate.title}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  console.error("Certificate image failed to load:", certificate.image)
                  e.target.src = "/placeholder.svg"
                }}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <h3
                className={`text-xl font-semibold ${
                  isBachelor
                    ? "bg-gradient-to-r from-amber-200 via-orange-200 to-red-200"
                    : "bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200"
                } bg-clip-text text-transparent`}
              >
                {certificate.title}
              </h3>

              <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-2">{certificate.description}</p>

              {/* Certificate Info */}
              <div className="flex flex-col gap-2 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  {isBachelor ? <GraduationCap className="w-3 h-3" /> : <Building className="w-3 h-3" />}
                  <span>{certificate.institution || (isBachelor ? "University" : "Dibimbing.id")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3" />
                  <span>{certificate.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-3 h-3" />
                  <span>{isBachelor ? certificate.grade : `Grade: ${certificate.grade}`}</span>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={handlePreview}
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  <span className="text-sm font-medium">Preview</span>
                  <Eye className="w-4 h-4" />
                </button>

                {/* ✅ Conditional rendering for Details button */}
                {isBachelor ? (
                  <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-sm font-medium">Academic Background</span>
                  </div>
                ) : certificate.id ? (
                  <Link
                    to={`/certificate/${certificate.id}`}
                    onClick={handleDetails}
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  >
                    <span className="text-sm font-medium">Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <span className="text-gray-500 text-sm">Details Not Available</span>
                )}
              </div>
            </div>

            <div
              className={`absolute inset-0 border border-white/0 ${
                isBachelor ? "group-hover:border-amber-500/50" : "group-hover:border-purple-500/50"
              } rounded-xl transition-colors duration-300 -z-50`}
            ></div>
          </div>
        </div>
      </div>

      {/* Modal for Preview */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="certificate-preview"
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            backdropFilter: "blur(5px)",
          },
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
          padding: 2,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "auto",
            maxWidth: "95vw",
            maxHeight: "95vh",
            outline: "none",
            "&:focus": {
              outline: "none",
            },
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              color: "white",
              bgcolor: "rgba(0,0,0,0.6)",
              zIndex: 1,
              padding: 1,
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.8)",
                transform: "scale(1.1)",
              },
            }}
            size="large"
          >
            <CloseIcon sx={{ fontSize: 24 }} />
          </IconButton>

          {/* Modal Image */}
          <img
            src={certificate.image || "/placeholder.svg"}
            alt={certificate.title}
            style={{
              display: "block",
              maxWidth: "100%",
              maxHeight: "95vh",
              margin: "0 auto",
              objectFit: "contain",
              borderRadius: "8px",
            }}
            onError={(e) => {
              console.error("Modal certificate image failed to load:", certificate.image)
              e.target.src = "/placeholder.svg"
            }}
          />
        </Box>
      </Modal>
    </>
  )
}

export default CardCertificate
