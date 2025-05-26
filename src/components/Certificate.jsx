"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Modal, IconButton, Box, Backdrop } from "@mui/material"
import { Eye, Info } from "lucide-react"
import CloseIcon from "@mui/icons-material/Close"

const Certificate = ({ certificate }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // Debug log untuk memastikan data certificate
  console.log("Certificate data:", certificate)

  return (
    <Box component="div" sx={{ width: "100%" }}>
      {/* Certificate Card */}
      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

        <div className="relative p-5 z-10">
          {/* Certificate Image */}
          <div className="relative overflow-hidden rounded-lg cursor-pointer" onClick={handleOpen}>
            <img
              src={certificate.image || "/placeholder.svg"}
              alt={certificate.title}
              className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                console.error("Image failed to load:", certificate.image)
                e.target.src = "/placeholder.svg"
              }}
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Eye className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              {certificate.title}
            </h3>

            <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-2">{certificate.description}</p>

            <div className="pt-4 flex items-center justify-between gap-3">
              <button
                onClick={handleOpen}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                <Eye className="w-4 h-4" />
                <span className="text-sm font-medium">Preview</span>
              </button>

              {/* Details Button dengan Link ke halaman detail */}
              <Link
                to={`/certificate/${certificate.id}`}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                onClick={() => {
                  console.log("Navigating to certificate detail:", certificate.id)
                }}
              >
                <Info className="w-4 h-4" />
                <span className="text-sm font-medium">Details</span>
              </Link>
            </div>
          </div>

          <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
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
              console.error("Modal image failed to load:", certificate.image)
              e.target.src = "/placeholder.svg"
            }}
          />
        </Box>
      </Modal>
    </Box>
  )
}

export default Certificate
