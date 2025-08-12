"use client";

import "github-markdown-css/github-markdown.css";
import { useEffect, useState } from "react";
import MarkdownRenderer from "@/components/mdrender";
import Header from "@/components/header";
import { Footer } from "react-day-picker";

export default function BlogPage() {
  console.log("id");
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Get blog data from session storage
    const storedBlog = sessionStorage.getItem("selectedBlog");
    if (storedBlog) {
      setBlog(JSON.parse(storedBlog));
    }
  }, []);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            {blog.title}
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{blog.desc}</p>
          <div className="markdown-body">
            <MarkdownRenderer markdown={blog.markdown} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
