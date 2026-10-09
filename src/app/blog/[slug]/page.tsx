import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const SITE_URL = DATA.url;

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  const post = await getPost(params.slug);

  if (!post) {
    return undefined;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image
    ? `${SITE_URL}${image}`
    : `${SITE_URL}/og?title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent(description)}`;
  const postUrl = `/blog/${post.slug}`;

  return {
    title,
    description,
    keywords: [title, DATA.name, "blog"],
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: postUrl,
      authors: [DATA.name],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const ogImage = post.metadata.image
    ? `${SITE_URL}${post.metadata.image}`
    : `${SITE_URL}/og?title=${encodeURIComponent(post.metadata.title)}`;

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: ogImage,
            url: postUrl,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": postUrl,
            },
            author: {
              "@type": "Person",
              name: DATA.name,
              url: SITE_URL,
            },
            publisher: {
              "@type": "Person",
              name: DATA.name,
              url: SITE_URL,
            },
            inLanguage: "en",
          }),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            <time dateTime={post.metadata.publishedAt}>
              {formatDate(post.metadata.publishedAt)}
            </time>
            {" · "}
            {DATA.name}
          </p>
        </Suspense>
      </div>
      <article
        className="prose break-words dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.source }}
      ></article>
    </section>
  );
}
