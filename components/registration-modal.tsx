"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface FormData {
  name: string
  phoneNumber: string
  email: string
  educationQualification: string
  experience: number | string
  department: string
  expectedSalary: string
}

export default function RegistrationModal() {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
    email: "",
    educationQualification: "",
    experience: "",
    department: "",
    expectedSalary: "",
  })

  useEffect(() => {
    const handleOpenModal = () => {
      setShowModal(true)
    }

    window.addEventListener("openRegistrationModal", handleOpenModal)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const scrollPercent = (scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 100

      if (scrollPercent > 30 && !localStorage.getItem("modalShown") && window.location.pathname === "/") {
        setShowModal(true)
        localStorage.setItem("modalShown", "true")
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("openRegistrationModal", handleOpenModal)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleClose = () => {
    setShowModal(false)
  }

  const handleInputChange = (field: keyof FormData, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Registration Data:", formData)
    handleClose()
  }

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="text-center mb-6">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2"
              >
                Join CareViza Today!
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-600 text-sm sm:text-base"
              >
                Get access to exclusive nursing opportunities
              </motion.p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                <Label htmlFor="name" className="text-gray-700 font-medium text-sm">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  className="mt-1"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                <Label htmlFor="phoneNumber" className="text-gray-700 font-medium text-sm">
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                  className="mt-1"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
                <Label htmlFor="email" className="text-gray-700 font-medium text-sm">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="mt-1"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
                <Label htmlFor="educationQualification" className="text-gray-700 font-medium text-sm">
                  Education Qualification
                </Label>
                <Select onValueChange={(value) => handleInputChange("educationQualification", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select your qualification" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="diploma">Diploma in Nursing</SelectItem>
                    <SelectItem value="bsc">BSc Nursing</SelectItem>
                    <SelectItem value="msc">MSc Nursing</SelectItem>
                    <SelectItem value="gnm">GNM</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
                <Label htmlFor="experience" className="text-gray-700 font-medium text-sm">
                  Experience (How many years)
                </Label>
                <Input
                  id="experience"
                  type="number"
                  placeholder="Enter years of experience (e.g., 3)"
                  min="0"
                  max="50"
                  required
                  className="mt-1"
                  value={formData.experience}
                  onChange={(e) => handleInputChange("experience", Number.parseInt(e.target.value) || 0)}
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>
                <Label htmlFor="department" className="text-gray-700 font-medium text-sm">
                  Which Department
                </Label>
                <Select onValueChange={(value) => handleInputChange("department", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="icu">ICU</SelectItem>
                    <SelectItem value="emergency">Emergency</SelectItem>
                    <SelectItem value="pediatric">Pediatric</SelectItem>
                    <SelectItem value="surgical">Surgical</SelectItem>
                    <SelectItem value="medical">Medical</SelectItem>
                    <SelectItem value="oncology">Oncology</SelectItem>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="orthopedic">Orthopedic</SelectItem>
                    <SelectItem value="general">General Ward</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }}>
                <Label htmlFor="expectedSalary" className="text-gray-700 font-medium text-sm">
                  Expected Salary
                </Label>
                <Input
                  id="expectedSalary"
                  type="text"
                  placeholder="Enter expected salary (e.g., ₹50,000)"
                  required
                  className="mt-1"
                  value={formData.expectedSalary}
                  onChange={(e) => handleInputChange("expectedSalary", e.target.value)}
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Register Now
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
