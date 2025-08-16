"use client";

import { useEffect } from "react";

const posts = [
  `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DNSgKu7CeK6/" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin:1px; max-width:540px; min-width:326px; padding:0; width:99.375%;"></blockquote>`,

  `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DNPvTnziO02/" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin:1px; max-width:540px; min-width:326px; padding:0; width:99.375%;"></blockquote>`,

  `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DNPkl-LC684/" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin:1px; max-width:540px; min-width:326px; padding:0; width:99.375%;"></blockquote>`,
];

export default function InstagramGrid() {
  useEffect(() => {
    // load Instagram script for embeds
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Follow Us on Instagram
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with the latest nursing opportunities, success
            stories, and healthcare insights
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

        {posts.map((html, i) => (
          <div
            key={i}
            className="card flex-1 min-w-[300px] max-w-[32%] sm:max-w-full bg-white rounded-xl shadow-md overflow-hidden"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ))}
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
  );
}
