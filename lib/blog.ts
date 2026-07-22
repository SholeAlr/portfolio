import { promises as fs } from "fs";
import remarkGfm from "remark-gfm";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { Blog, BlogMetadata } from "@/types/blog";

const BLOG_PATH = path.join(process.cwd(), "content", "blogs");

export async function getAllBlogs() {
  const files = await fs.readdir(BLOG_PATH);

  return files;
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    const source = await fs.readFile(
      path.join(BLOG_PATH, `${slug}.mdx`),
      "utf8",
    );

    const { content, frontmatter } = await compileMDX<BlogMetadata>({
      source,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    });

    return {
      slug,
      content,
      ...frontmatter,
    };
  } catch {
    return null;
  }
}
