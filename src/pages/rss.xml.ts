import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  return rss({
    title: 'Lotus Reel Blog',
    description: 'Video production insights, guides, and tips from Bangkok\'s professional video production company.',
    site: context.site!,
    items: posts
      .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.publishDate,
        description: post.data.description,
        link: `/blog/${post.id}/`,
        categories: post.data.tags,
      })),
    customData: '<language>en-us</language>',
  });
}
