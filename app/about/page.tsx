"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Users,
  Award,
  Target,
  CheckCircle,
  TrendingUp,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppWidget from "@/components/whatsapp-widget";
import { motion } from "framer-motion";

export default function AboutPage() {
  const stats = [
    { number: "100+", label: "Nurses Placed", icon: Users },
    { number: "200+", label: "Healthcare Partners", icon: Heart },
    { number: "98%", label: "Success Rate", icon: TrendingUp },
    { number: "15+", label: "Years Experience", icon: Award },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "We understand the dedication nurses bring to patient care and match that commitment in our service to you.",
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description:
        "Building lasting relationships through honest communication and transparent processes.",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "Striving for the highest standards in everything we do, from candidate screening to client service.",
    },
    {
      icon: Users,
      title: "Partnership",
      description:
        "Working collaboratively with nurses and healthcare facilities to create mutually beneficial relationships.",
    },
  ];

  const team = [
    {
      name: "Evangline Baskar",
      role: "Chief Client Executive Officer",
      image: "/cceo.jpeg",
      bio: "Dedicated to strengthening client partnerships and driving healthcare success.",
    },
    {
      name: "Baskar",
      role: "Founder",
      image: "/founder.jpeg",
      bio: "Founder of Careviza, committed to transforming healthcare recruitment with innovative solutions.",
    },
    {
      name: "Harries Gnana Sundar",
      role: "Client Relations Manager",
      image: "/crm.jpeg",
      bio: "Client Relations Manager at Careviza, focused on delivering seamless support and lasting partnerships.",
    },
  ];

  const handleRegisterClick = () => {
    const event = new CustomEvent("openRegistrationModal");
    window.dispatchEvent(event);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppWidget />

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                About <span className="text-blue-600">CareViza</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Careviza is a nurse recruitment company dedicated to connecting
                skilled nurses with top healthcare facilities. Since our
                founding just one year ago, we have achieved remarkable success
                in bridging the gap between talented nursing professionals and
                the medical institutions that need them most.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                  onClick={handleRegisterClick}
                >
                  Join Our Network
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <Image
                src="https://plus.unsplash.com/premium_photo-1681967053996-4275be0191e7?q=80&w=1193&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Healthcare team"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence in nursing
              recruitment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower nursing professionals by connecting them with
                meaningful career opportunities that align with their skills,
                values, and aspirations while supporting healthcare facilities
                in building exceptional care teams.
              </p>
              <ul className="space-y-3">
                {[
                  "Personalized career matching and guidance",
                  "Comprehensive support throughout the placement process",
                  "Long-term career development partnerships",
                  "Commitment to quality and excellence in healthcare",
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Nursing team meeting"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <Image
                src="https://images.unsplash.com/photo-1603807008857-ad66b70431aa?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Healthcare innovation"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To be the leading nursing recruitment agency that transforms
                healthcare by ensuring every nurse finds their ideal career path
                and every healthcare facility has access to exceptional nursing
                talent.
              </p>
              <p className="text-lg text-gray-600">
                We envision a future where nursing professionals are empowered,
                valued, and positioned to make their greatest impact on patient
                care and healthcare outcomes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <value.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Healthcare professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of nurses who have found their perfect career match
              with CareViza.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
                  onClick={handleRegisterClick}
                >
                  Start Your Journey
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="/contact">
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
