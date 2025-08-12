"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Award,
  Clock,
  Stethoscope,
  Shield,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppWidget from "@/components/whatsapp-widget";
import { motion } from "framer-motion";

export default function ServicesPage() {
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
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Our <span className="text-blue-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive nursing recruitment solutions designed to connect
              exceptional healthcare professionals with outstanding
              opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Nursing team collaboration"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Permanent Placement Services
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our permanent placement service connects qualified nurses with
                long-term career opportunities at leading healthcare facilities.
                We focus on finding the perfect match between your skills,
                preferences, and career goals.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Comprehensive skills assessment and matching",
                  "Competitive salary negotiation",
                  "Benefits package optimization",
                  "Career growth planning",
                  "Ongoing support and mentorship",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
              {/*

              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Learn More</Button>
                */}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Temporary & Contract Staffing
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Flexible staffing solutions that adapt to your lifestyle and
                career preferences. Whether you're looking for short-term
                assignments or travel nursing opportunities, we have options
                that work for you.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Flexible scheduling options",
                  "Travel nursing opportunities",
                  "Per diem and PRN positions",
                  "Rapid placement process",
                  "Competitive hourly rates",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
              {/*
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Explore Opportunities
              </Button>
              */}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <Image
                src="https://images.unsplash.com/photo-1603807008857-ad66b70431aa?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Nurse providing patient care"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We go beyond traditional recruitment to provide comprehensive
              career support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Personalized Matching",
                description:
                  "Our expert recruiters take time to understand your unique skills, preferences, and career goals.",
              },
              {
                icon: Clock,
                title: "Fast Placement",
                description:
                  "Streamlined process gets you connected with opportunities quickly and efficiently.",
              },
              {
                icon: Award,
                title: "Quality Assurance",
                description:
                  "All our partner facilities are thoroughly vetted for quality and professional standards.",
              },
              {
                icon: Stethoscope,
                title: "Specialty Focus",
                description:
                  "Specialized recruiters for ICU, ER, OR, Pediatrics, and other nursing specialties.",
              },
              {
                icon: Shield,
                title: "License Support",
                description:
                  "Complete assistance with license transfers, renewals, and regulatory compliance.",
              },
              {
                icon: TrendingUp,
                title: "Career Growth",
                description:
                  "Ongoing career development and advancement opportunities with our partners.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Advance Your Nursing Career?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of nurses who have found their perfect career match
              through our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
                  onClick={() => {
                    const event = new CustomEvent("openRegistrationModal");
                    window.dispatchEvent(event);
                  }}
                >
                  Get Started Today
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href={"/contact"}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 bg-transparent"
                  >
                    Contact Us
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
