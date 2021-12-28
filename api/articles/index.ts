import type { APIHandler } from 'aleph/types.d.ts';

export const handler: APIHandler = async ({ request, response }) => {
  let referer = request.headers.get('referer');

  if (!referer) return;

  try {
    referer = referer.slice(0, referer.indexOf('/api/'));

    const url = `${referer}/articles.json`;
    const data = await (await fetch(url)).json();
    const { articlePaths }: { articlePaths: { year: string; baseFilename: string }[] } = data;

    const articles = [];

    for await (const path of articlePaths) {
      const articleData: { articles: { href: string; title: string; date: string; categories: string[]; tag: string[]; summary: string }[] } = await (await fetch(referer + path.baseFilename.replace('public/', ''))).json();

      articles.push(...articleData.articles);
    }

    response.json({ articles });
  } catch (error) {
    response.status = 500;
    response.body = 'Issue fetching article json data';
  }

}
