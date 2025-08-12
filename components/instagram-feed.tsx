"use client"
import { motion } from "framer-motion"
import { Instagram, Heart, MessageCircle, Send, Bookmark } from "lucide-react"
import { Card } from "@/components/ui/card"

const instagramPosts = [
  {
    id: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1681967053996-4275be0191e7?q=80&w=1193&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Celebrating our amazing nurses who make a difference every day! 💙 #NursingLife #CareViza",
    likes: 245,
    comments: 18,
    timeAgo: "2h",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption:
      "New opportunities in pediatric nursing! Join our team of compassionate caregivers. #PediatricNursing #JobOpportunity",
    likes: 189,
    comments: 12,
    timeAgo: "5h",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1603807008857-ad66b70431aa?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption:
      "Behind every successful healthcare team is a dedicated nurse. Thank you for your service! 🏥 #HealthcareHeroes",
    likes: 312,
    comments: 24,
    timeAgo: "1d",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=400&width=400",
    caption: "Ready to advance your nursing career? We're here to help you find the perfect opportunity! #CareerGrowth",
    likes: 156,
    comments: 9,
    timeAgo: "2d",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=400&width=400",
    caption: "Teamwork makes the dream work! Join our network of healthcare professionals. #TeamWork #NursingJobs",
    likes: 203,
    comments: 15,
    timeAgo: "3d",
  },
  {
    id: 6,
    image: "/placeholder.svg?height=400&width=400",
    caption:
      "Compassionate care is at the heart of everything we do. Find your calling in nursing! ❤️ #CompassionateCare",
    likes: 278,
    comments: 21,
    timeAgo: "4d",
  },
]

export default function InstagramFeed() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Instagram className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Follow Us on Instagram</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with the latest nursing opportunities, success stories, and healthcare insights
          </p>
          <motion.a
            href="https://instagram.com/careviza"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            @careviza
            <Instagram className="h-4 w-4 ml-2" />
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={`Instagram post ${post.id}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-6 text-white">
                      <div className="flex items-center">
                        <Heart className="h-6 w-6 mr-2" />
                        <span className="font-semibold">{post.likes}</span>
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-6 w-6 mr-2" />
                        <span className="font-semibold">{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-700 hover:text-red-500 transition-colors duration-300"
                      >
                        <Heart className="h-5 w-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
                      >
                        <MessageCircle className="h-5 w-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
                      >
                        <Send className="h-5 w-5" />
                      </motion.button>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
                    >
                      <Bookmark className="h-5 w-5" />
                    </motion.button>
                  </div>

                  <div className="mb-2">
                    <span className="font-semibold text-gray-900">{post.likes} likes</span>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed mb-2">
                    <span className="font-semibold">careviza</span> {post.caption}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{post.timeAgo}</span>
                    <span>{post.comments} comments</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://instagram.com/careviza"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram className="h-5 w-5 mr-2" />
            Follow @careviza
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
