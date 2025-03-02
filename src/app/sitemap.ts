import { getBlogPosts } from '@/components/posts/utils';
import { siteMetadata } from '@/constants/metadata';

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `${siteMetadata.baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ['', 'blog', 'projects', 'about'].map((route) => ({
    url: `${siteMetadata.baseUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
