"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Users,
  Award,
  Clock,
  MapPin,
  Stethoscope,
  Shield,
  TrendingUp,
  Phone,
  Mail,
  LocateIcon as LocationIcon,
  Send,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppWidget from "@/components/whatsapp-widget"
import TestimonialCarousel from "@/components/testimonial-carousel"
import InstagramFeed from "@/components/instagram-feed"
import { motion } from "framer-motion"

export default function HomePage() {
  const handleRegisterClick = () => {
    const event = new CustomEvent("openRegistrationModal")
    window.dispatchEvent(event)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppWidget />

      {/* Hero Section */}
      <section
        className="pt-16 relative overflow-hidden min-h-screen flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.7), rgba(37, 99, 235, 0.7)), url('https://i0.wp.com/affiniks.com/wp-content/uploads/2023/11/attractive-youngLarge.jpg?fit=1624%2C1080&ssl=1')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-white leading-tight"
              >
                Find Your Dream
                <span className="text-blue-400"> Nursing Career</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 text-xl text-blue-100 leading-relaxed"
              >
                Connect with top healthcare facilities and advance your nursing career. We specialize in matching
                qualified nurses with their perfect opportunities.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-white hover:bg-blue-50 text-blue-600 px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                  >
                    Find Jobs Now
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={handleRegisterClick}
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 bg-transparent transition-all duration-300 font-semibold"
                  >
                    Register Now
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-12 grid grid-cols-3 gap-4 sm:gap-8"
              >
                <motion.div className="text-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <div className="text-2xl sm:text-3xl font-bold text-white">5000+</div>
                  <div className="text-xs sm:text-sm text-blue-200">Nurses Placed</div>
                </motion.div>
                <motion.div className="text-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <div className="text-2xl sm:text-3xl font-bold text-white">200+</div>
                  <div className="text-xs sm:text-sm text-blue-200">Healthcare Partners</div>
                </motion.div>
                <motion.div className="text-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <div className="text-2xl sm:text-3xl font-bold text-white">98%</div>
                  <div className="text-xs sm:text-sm text-blue-200">Success Rate</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive nursing recruitment solutions tailored to your career goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Permanent Placement",
                description:
                  "Find your perfect long-term nursing position with competitive benefits and growth opportunities.",
              },
              {
                icon: Clock,
                title: "Temporary Staffing",
                description: "Flexible temporary assignments that fit your schedule and lifestyle preferences.",
              },
              {
                icon: Award,
                title: "Career Development",
                description: "Professional development programs to advance your nursing career and skills.",
              },
              {
                icon: Stethoscope,
                title: "Specialty Matching",
                description: "Specialized placement in ICU, ER, OR, and other high-demand nursing specialties.",
              },
              {
                icon: Shield,
                title: "License Support",
                description: "Complete assistance with nursing license transfers and regulatory compliance.",
              },
              {
                icon: TrendingUp,
                title: "Salary Negotiation",
                description: "Expert guidance to ensure you receive competitive compensation packages.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 bg-white">
                  <CardContent className="p-6">
                    <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover exciting nursing positions at top healthcare facilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "ICU Registered Nurse",
                hospital: "City General Hospital",
                location: "New York, NY",
                salary: "$85,000 - $95,000",
                type: "Full-time",
                experience: "3+ years",
                urgent: true,
              },
              {
                title: "Emergency Room Nurse",
                hospital: "Metro Medical Center",
                location: "Los Angeles, CA",
                salary: "$80,000 - $90,000",
                type: "Full-time",
                experience: "2+ years",
                urgent: false,
              },
              {
                title: "Pediatric Nurse",
                hospital: "Children's Healthcare",
                location: "Chicago, IL",
                salary: "$75,000 - $85,000",
                type: "Full-time",
                experience: "1+ years",
                urgent: false,
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 bg-white relative overflow-hidden">
                  {job.urgent && (
                    <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-3 py-1 rounded-bl-lg font-semibold">
                      URGENT
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
                        <p className="text-blue-600 font-medium">{job.hospital}</p>
                      </div>
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-semibold">
                        {job.type}
                      </span>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                        <span className="text-sm">{job.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-blue-500" />
                        <span className="text-sm">{job.experience} experience</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">{job.salary}</span>
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Nurses Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from nurses who found their perfect careers through CareViza
            </p>
          </motion.div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Follow Us on Instagram</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay connected with us and see behind-the-scenes glimpses of our work
            </p>
          </motion.div>

          <InstagramFeed />
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to take the next step in your nursing career? Contact us today!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-xl flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600 break-all">8015867446</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-xl flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600 break-all">middleeastnursevacancy@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-xl flex-shrink-0">
                  <LocationIcon className="h-6 w-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    M-331, Tamil Nadu Housing Board, Jothi Nagar post, Arakkonam, Ranipet district - 631003
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-2xl bg-white">
                <CardContent className="p-6 sm:p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-gray-700 font-medium">
                          First Name
                        </Label>
                        <Input id="firstName" type="text" placeholder="John" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-gray-700 font-medium">
                          Last Name
                        </Label>
                        <Input id="lastName" type="text" placeholder="Doe" className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="contactEmail" className="text-gray-700 font-medium">
                        Email
                      </Label>
                      <Input id="contactEmail" type="email" placeholder="john@example.com" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="contactPhone" className="text-gray-700 font-medium">
                        Phone
                      </Label>
                      <Input id="contactPhone" type="tel" placeholder="+1 (555) 123-4567" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-gray-700 font-medium">
                        Subject
                      </Label>
                      <Input id="subject" type="text" placeholder="How can we help you?" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-gray-700 font-medium">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your nursing career goals..."
                        rows={4}
                        className="mt-1"
                      />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
