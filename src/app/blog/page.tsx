import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles by Kinshuk Sharma on full-stack development with Django and React, data structures and algorithms practice, and learning AI/ML.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: `Blog | ${DATA.name}`,
    description:
      "Articles on full-stack development, DSA practice, and learning AI/ML.",
    url: "/blog",
    type: "website",
  },
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">Blog</h1>
      </BlurFade>
      <ul className="list-none p-0 m-0">
        {posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <li className="mb-4">
                <Link className="flex flex-col space-y-1" href={`/blog/${post.slug}`}>
                  <span className="w-full flex flex-col">
                    <span className="tracking-tight">{post.metadata.title}</span>
                    <span className="h-6 text-xs text-muted-foreground">
                      <time dateTime={post.metadata.publishedAt}>
                        {post.metadata.publishedAt}
                      </time>
                    </span>
                  </span>
                </Link>
              </li>
            </BlurFade>
          ))}
      </ul>
    </section>
  );
}
