import { siteMetadata } from '@/constants/metadata';
import { formatDate, getPostFromSlug } from '@/components/posts/utils';
import PageTitle from './page-title';

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const { metadata } = await getPostFromSlug(params.slug);

  return {
    title: metadata.title,
    description: metadata.summary,
    openGraph: {
      title: metadata.title,
      description: metadata.summary,
      type: 'article',
      publishedTime: metadata.publishedAt,
      authors: [siteMetadata.author],
    },
  };
}

export default async function Blog(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;

  const { metadata, content } = await getPostFromSlug(params.slug);

  return (
    <section>
      <PageTitle>{metadata.title}</PageTitle>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(metadata.publishedAt)}
        </p>
      </div>
      <article className="prose md:max-w-5xl">{content}</article>
    </section>
  );
}
