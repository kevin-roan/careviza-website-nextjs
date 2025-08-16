"use client";
import "github-markdown-css/github-markdown.css";
import { useEffect, useState } from "react";
import MarkdownRenderer from "@/components/mdrender";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function BlogPage() {
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    const storedBlog = sessionStorage.getItem("selectedBlog");
    if (storedBlog) setBlog(JSON.parse(storedBlog));
  }, []);

  if (!blog)
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        Loading...
      </div>
    );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <main className="flex-1">
        <section className="pt-24 pb-16 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            {/* TITLE */}
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {blog.title}
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
              {blog.desc}
            </p>

            <div className="w-16 h-1 mt-6 mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
          </div>
<div className="flex flex-1 justify-center items-center">

          <article className="markdown-body mt-10 max-w-3xl mx-auto bg-white shadow-sm rounded-lg p-6 sm:p-8 prose prose-blue lg:prose-lg leading-loose">
            <MarkdownRenderer markdown={blog.markdown} />
          </article>
</div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
