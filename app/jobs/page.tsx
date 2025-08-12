"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MapPin, DollarSign, Search, Filter, Heart, Building, Calendar } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppWidget from "@/components/whatsapp-widget"
import { motion } from "framer-motion"

export default function JobsPage() {
  const jobs = [
    {
      id: 1,
      title: "ICU Registered Nurse",
      hospital: "City General Hospital",
      location: "New York, NY",
      salary: "$85,000 - $95,000",
      type: "Full-time",
      experience: "3+ years",
      posted: "2 days ago",
      description: "Join our dynamic ICU team providing critical care to patients in a state-of-the-art facility.",
      requirements: ["BSN required", "3+ years ICU experience", "BLS/ACLS certified"],
      benefits: ["Health insurance", "401k matching", "Tuition reimbursement"],
    },
    {
      id: 2,
      title: "Emergency Room Nurse",
      hospital: "Metro Medical Center",
      location: "Los Angeles, CA",
      salary: "$80,000 - $90,000",
      type: "Full-time",
      experience: "2+ years",
      posted: "1 day ago",
      description: "Fast-paced ER environment seeking experienced nurses to join our trauma team.",
      requirements: ["RN license", "2+ years ER experience", "TNCC preferred"],
      benefits: ["Competitive salary", "Health benefits", "Flexible scheduling"],
    },
    {
      id: 3,
      title: "Pediatric Nurse",
      hospital: "Children's Healthcare",
      location: "Chicago, IL",
      salary: "$75,000 - $85,000",
      type: "Full-time",
      experience: "1+ years",
      posted: "3 days ago",
      description: "Caring for children and families in our pediatric unit with a focus on family-centered care.",
      requirements: ["RN license", "Pediatric experience", "PALS certification"],
      benefits: ["Excellent benefits", "Professional development", "Supportive team"],
    },
    {
      id: 4,
      title: "Operating Room Nurse",
      hospital: "Surgical Specialists Hospital",
      location: "Houston, TX",
      salary: "$90,000 - $100,000",
      type: "Full-time",
      experience: "5+ years",
      posted: "1 week ago",
      description: "Experienced OR nurse needed for complex surgical procedures in a leading surgical center.",
      requirements: ["BSN preferred", "5+ years OR experience", "CNOR certification"],
      benefits: ["Premium pay", "Comprehensive benefits", "Career advancement"],
    },
    {
      id: 5,
      title: "Travel Nurse - ICU",
      hospital: "Healthcare Staffing Solutions",
      location: "Multiple Locations",
      salary: "$2,000 - $2,500/week",
      type: "Contract",
      experience: "2+ years",
      posted: "5 days ago",
      description: "13-week travel assignments in top-rated hospitals across the country.",
      requirements: ["Active RN license", "2+ years ICU experience", "Flexible schedule"],
      benefits: ["Housing stipend", "Travel allowance", "Health insurance"],
    },
    {
      id: 6,
      title: "Nurse Manager",
      hospital: "Regional Medical Center",
      location: "Phoenix, AZ",
      salary: "$95,000 - $110,000",
      type: "Full-time",
      experience: "7+ years",
      posted: "4 days ago",
      description: "Leadership opportunity for experienced nurse to manage a 40-bed medical unit.",
      requirements: ["MSN preferred", "7+ years experience", "Management experience"],
      benefits: ["Leadership development", "Excellent benefits", "Bonus eligible"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppWidget />

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Find Your Perfect <span className="text-blue-600">Nursing Job</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover thousands of nursing opportunities at top healthcare facilities across the country.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input placeholder="Job title or keyword" className="pl-10 h-12" />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input placeholder="Location" className="pl-10 h-12" />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white h-12">
                  <Search className="h-5 w-5 mr-2" />
                  Search Jobs
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Jobs Listing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-bold text-gray-900">Available Positions</h2>
              <p className="text-gray-600">{jobs.length} jobs found</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Button variant="outline" className="border-blue-600 text-blue-600 bg-transparent">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </motion.div>
          </div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
                            <div className="flex items-center text-blue-600 font-medium mb-2">
                              <Building className="h-4 w-4 mr-1" />
                              {job.hospital}
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-500">
                            <Heart className="h-5 w-5" />
                          </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center text-gray-600">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span className="text-sm">{job.location}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <DollarSign className="h-4 w-4 mr-2" />
                            <span className="text-sm">{job.salary}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span className="text-sm">Posted {job.posted}</span>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4">{job.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="secondary">{job.type}</Badge>
                          <Badge variant="outline">{job.experience}</Badge>
                          {job.requirements.slice(0, 2).map((req, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="lg:ml-6 flex flex-col gap-2">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full lg:w-auto">
                            Apply Now
                          </Button>
                        </motion.div>
                        <Button variant="outline" className="w-full lg:w-auto bg-transparent">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
            >
              Load More Jobs
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
