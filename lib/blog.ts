import { promises as fs } from "fs";
import remarkGfm from "remark-gfm";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { Blog, BlogMetadata } from "@/types/blog";
import { mdxComponents } from "@/components/blog/MDX";

const BLOG_PATH = path.join(process.cwd(), "content", "blogs");

export async function getAllBlogs() {
  const files = await fs.readdir(BLOG_PATH);

  const blogs = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const slug = file.replace(".mdx", "");

        return await getBlogBySlug(slug);
      }),
  );

  return blogs
    .filter((blog): blog is NonNullable<typeof blog> => blog !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    const source = await fs.readFile(
      path.join(BLOG_PATH, `${slug}.mdx`),
      "utf8",
    );

    const { content, frontmatter } = await compileMDX<BlogMetadata>({
      source,
      components: mdxComponents,
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
