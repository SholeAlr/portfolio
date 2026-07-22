export interface BlogMetadata {
  title: string;
  description: string;
  date: string;
  tags: string[];
  cover: string;
  published: boolean;
  readingTime: string;
}

export interface Blog extends BlogMetadata {
  slug: string;
  content: React.ReactNode;
}
