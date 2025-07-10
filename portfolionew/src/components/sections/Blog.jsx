import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const postFiles = import.meta.glob("@/assets/blog/*.md", { as: "raw" });
      const postData = await Promise.all(
        Object.keys(postFiles).map(async (path) => {
          const content = await postFiles[path]();
          const id = path.split("/").pop().replace(".md", "");
          return { id, title: content.split("\n")[0].replace("# ", ""), content };
        })
      );
      setPosts(postData);
    };
    loadPosts();
  }, []);

  return (
    <AnimatedSection id="blog" className="section">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{post.content.slice(0, 100)}...</p>
                <Link to={`/blog/${post.id}`} className="text-primary">
                  Read More
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}