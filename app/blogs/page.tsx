"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppWidget from "@/components/whatsapp-widget";
import { motion } from "framer-motion";
import { getBlogs } from "../firestore/firestore";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      getBlogs()
        .then((response) => setBlogs(response))
        .catch((error) => console.log("errot fetching blogs", error))
        .finally(() => setLoading(false));
    };
    fetchBlogs();
  }, []);

  const handleClick = (blog) => {
    console.log("selected blog", blog);
    sessionStorage.setItem("selectedBlog", JSON.stringify(blog));
    router.push(`/blogs/${blog.id}`);
  };

  //
  // const featuredPost = {
  //   id: 1,
  //   title: "The Future of Nursing: Technology and Patient Care in 2024",
  //   excerpt:
  //     "Explore how emerging technologies are transforming nursing practice and improving patient outcomes in modern healthcare settings.",
  //   author: "Dr. Sarah Johnson",
  //   date: "March 15, 2024",
  //   readTime: "8 min read",
  //   category: "Technology",
  //   image:
  //     "https://plus.unsplash.com/premium_photo-1681967053996-4275be0191e7?q=80&w=1193&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // };

  // const blogPosts = [
  //   {
  //     id: 2,
  //     title: "Career Advancement Tips for New Graduate Nurses",
  //     excerpt:
  //       "Essential strategies for new nurses to build successful careers and advance in their chosen specialties.",
  //     author: "Maria Rodriguez, RN",
  //     date: "March 12, 2024",
  //     readTime: "6 min read",
  //     category: "Career Development",
  //     image:
  //       "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     id: 3,
  //     title: "Understanding Nurse-to-Patient Ratios: What You Need to Know",
  //     excerpt:
  //       "A comprehensive guide to nurse-to-patient ratios and their impact on job satisfaction and patient care quality.",
  //     author: "James Chen, MSN",
  //     date: "March 10, 2024",
  //     readTime: "5 min read",
  //     category: "Healthcare Policy",
  //     image:
  //       "https://images.unsplash.com/photo-1603807008857-ad66b70431aa?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     id: 4,
  //     title: "Travel Nursing: Pros, Cons, and Everything in Between",
  //     excerpt:
  //       "Discover the benefits and challenges of travel nursing, plus tips for making the most of your assignments.",
  //     author: "Lisa Thompson, RN",
  //     date: "March 8, 2024",
  //     readTime: "7 min read",
  //     category: "Travel Nursing",
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1681967053996-4275be0191e7?q=80&w=1193&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     id: 5,
  //     title: "Mental Health Resources for Healthcare Workers",
  //     excerpt:
  //       "Important mental health resources and self-care strategies for nurses dealing with workplace stress and burnout.",
  //     author: "Dr. Michael Brown",
  //     date: "March 5, 2024",
  //     readTime: "9 min read",
  //     category: "Wellness",
  //     image:
  //       "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     id: 6,
  //     title: "Salary Negotiation Tips for Nurses",
  //     excerpt:
  //       "Learn how to effectively negotiate your salary and benefits package as a nursing professional.",
  //     author: "Amanda Davis, RN",
  //     date: "March 3, 2024",
  //     readTime: "6 min read",
  //     category: "Career Development",
  //     image:
  //       "https://images.unsplash.com/photo-1603807008857-ad66b70431aa?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  // ];

  const categories = [
    "All",
    "Career Development",
    "Technology",
    "Healthcare Policy",
    "Travel Nursing",
    "Wellness",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppWidget />
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-12 h-12 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
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
                  Nursing <span className="text-blue-600">Insights</span> & Tips
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  Stay informed with the latest trends, career advice, and
                  industry insights for nursing professionals.
                </p>
              </motion.div>

              {/* 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
              <Input placeholder="Search articles..." className="pl-12 h-14 text-lg rounded-2xl shadow-lg border-0" />
              <Button className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-700 text-white h-10">Search</Button>
            </div>
          </motion.div>

          */}
            </div>
          </section>

          {/* 
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Featured Article
                </h2>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto">
                      <Image
                        src={blogs[0]?.thumbnail || "/placeholder.svg"}
                        alt={blogs[0]?.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-blue-600 text-white">
                          {blogs[0]?.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-8 flex flex-col justify-center">
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <User className="h-4 w-4 mr-2" />
                        <span className="mr-4">{blogs[0]?.author}</span>
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="mr-4">{blogs[0]?.publishedAt}</span>
                        <Clock className="h-4 w-4 mr-2" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {blogs[0]?.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {blogs[0]?.excerpt}
                      </p>
                      <motion.div whileHover={{ x: 5 }}>
                        <Link
                          href={`/blogs/${featuredPost.id}`}
                          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                        >
                          Read Full Article
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </motion.div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            </div>
          </section>
          */}

          {/* 
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={category === "All" ? "default" : "outline"}
                  className={
                    category === "All"
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "border-blue-600 text-blue-600 hover:bg-blue-50"
                  }
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      */}

          {/* Blog Posts Grid */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Latest Articles
                </h2>
                <p className="text-gray-600">
                  Stay up-to-date with the latest nursing industry insights
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card
                      className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300"
                      onClick={() => handleClick(post)}
                    >
                      <div className="relative h-48">
                        <Image
                          src={
                            post.thumbnail ||
                            "https://plus.unsplash.com/premium_photo-1681967053996-4275be0191e7?q=80&w=1193&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          }
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge
                            variant="secondary"
                            className="bg-white/90 text-gray-700"
                          >
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-center text-gray-500 text-sm mb-3">
                          <User className="h-4 w-4 mr-1" />
                          <span className="mr-3">{post.author}</span>
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-500 text-sm">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                          <motion.div whileHover={{ x: 5 }}>
                            <Link
                              href={`/blogs/${post.id}`}
                              className="text-blue-600 font-semibold hover:text-blue-700"
                            >
                              Read More
                            </Link>
                          </motion.div>
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
                  Load More Articles
                </Button>
              </motion.div>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="py-20 bg-blue-600">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Stay Updated with Nursing Insights
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Get the latest articles, career tips, and industry news
                  delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    placeholder="Enter your email"
                    className="bg-white border-0 h-12"
                  />
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 h-12 px-8">
                    Subscribe
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </>
      )}
      <Footer />
    </div>
  );
}
