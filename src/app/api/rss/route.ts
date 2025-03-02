import { NextResponse } from 'next/server';
import { getBlogPosts } from '@/components/posts/utils';
import { siteMetadata } from '@/constants/metadata';

export async function GET() {
  const posts = getBlogPosts();

  const rssItems = posts
    .map(
      (post) => `
      <item>
        <title>${post.metadata.title}</title>
        <link>${siteMetadata.baseUrl}/blog/${post.slug}</link>
        <description>${post.metadata.summary}</description>
      </item>
    `
    )
    .join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${siteMetadata.title.default}</title>
        <link>${siteMetadata.baseUrl}</link>
        <description>${siteMetadata.description}</description>
        ${rssItems}
      </channel>
    </rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      'Content-Type': 'application/rss+xml',
    },
  });
}
