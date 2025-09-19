"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppWidget from "@/components/whatsapp-widget";
import TestimonialCarousel from "@/components/testimonial-carousel";
import InstagramFeed from "@/components/instagram-feed";
import { motion } from "framer-motion";

export default function HomePage() {
  const handleRegisterClick = () => {
    const event = new CustomEvent("openRegistrationModal");
    window.dispatchEvent(event);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <WhatsAppWidget />

      {/* Hero Section */}
      <section
        className="pt-16 relative overflow-hidden min-h-[100vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.7), rgba(37, 99, 235, 0.7)), url('https://i0.wp.com/affiniks.com/wp-content/uploads/2023/11/attractive-youngLarge.jpg?fit=1624%2C1080&ssl=1')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Find Your Dream
                <span className="text-blue-400"> Nursing Career</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 text-lg md:text-xl text-blue-100 leading-relaxed"
              >
                Connect with top healthcare facilities and advance your nursing
                career. We specialize in matching qualified nurses with their
                perfect opportunities.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="/contact">
                    <Button
                      size="lg"
                      className="bg-white hover:bg-blue-50 text-blue-600 px-6 md:px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold w-full sm:w-auto"
                    >
                      Contact Us Now
                    </Button>
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={handleRegisterClick}
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 md:px-8 py-3 bg-transparent transition-all duration-300 font-semibold w-full sm:w-auto"
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
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                    100+
                  </div>
                  <div className="text-xs sm:text-sm text-blue-200">
                    Nurses Placed
                  </div>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                    200+
                  </div>
                  <div className="text-xs sm:text-sm text-blue-200">
                    Healthcare Partners
                  </div>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                    98%
                  </div>
                  <div className="text-xs sm:text-sm text-blue-200">
                    Success Rate
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive nursing recruitment solutions tailored to your
              career goals
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
                description:
                  "Flexible temporary assignments that fit your schedule and lifestyle preferences.",
              },
              {
                icon: Award,
                title: "Career Development",
                description:
                  "Professional development programs to advance your nursing career and skills.",
              },
              {
                icon: Stethoscope,
                title: "Specialty Matching",
                description:
                  "Specialized placement in ICU, ER, OR, and other high-demand nursing specialties.",
              },
              {
                icon: Shield,
                title: "License Support",
                description:
                  "Complete assistance with nursing license transfers and regulatory compliance.",
              },
              {
                icon: TrendingUp,
                title: "Salary Negotiation",
                description:
                  "Expert guidance to ensure you receive competitive compensation packages.",
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From documentation to career guidance, we provide end-to-end
              support for healthcare professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Services Lists */}
            <div className="space-y-8">
              {/* Left Column Services */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {[
                  "HRD Attestation",
                  "MEA Attestation",
                  "Apostille Attestation",
                  "Travel Tickets",
                  "Tour Packages",
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <span className="text-lg font-medium text-gray-800">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Right Column Services */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {[
                  "Visiting Visa",
                  "Dataflow",
                  "Online Coaching Classes for Health Care Staff",
                  "Prometric Exams",
                  "Job Guidance for All Professionals",
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index + 5) * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <span className="text-lg font-medium text-gray-800">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Healthcare Professional Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <motion.img
                  src="/healthcare-professional.png"
                  alt="Healthcare Professional"
                  className="w-full h-auto object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg"
              >
                <Stethoscope className="h-8 w-8" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -left-4 bg-white text-blue-600 p-4 rounded-full shadow-lg border-2 border-blue-100"
              >
                <Award className="h-8 w-8" />
              </motion.div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={handleRegisterClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started Today
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/*
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Opportunities
            </h2>
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
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {job.title}
                        </h3>
                        <p className="text-blue-600 font-medium">
                          {job.hospital}
                        </p>
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
                        <span className="text-sm">
                          {job.experience} experience
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">
                        {job.salary}
                      </span>
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

      */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Nurses Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from nurses who found their perfect careers through
              CareViza
            </p>
          </motion.div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-0 bg-white">
        <InstagramFeed />
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to take the next step in your nursing career? Contact us
              today!
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
                  <p className="text-gray-600 break-all">
                    middleeastnursevacancy@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-xl flex-shrink-0">
                  <LocationIcon className="h-6 w-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    M-331, Tamil Nadu Housing Board, Jothi Nagar post,
                    Arakkonam, Ranipet district - 631003
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
                  <form
                    action="https://formsubmit.co/middleeastnursevacancy@gmail.com"
                    method="POST"
                    className="space-y-6"
                  >
                    <input type="hidden" name="_captcha" value="false" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your nursing experience and what type of opportunities you're looking for..."
                        rows={6}
                        required
                      />
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12"
                      >
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
