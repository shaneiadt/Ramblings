import type { APIHandler } from 'aleph/types.d.ts';

export const handler: APIHandler = async ({ request, response }) => {
  const { url } = request;

  let referer = request.headers.get('referer');
  let counter = 0;
  let limit = 0;
  let start = 0;
  let year = 0;

  if (url.indexOf('?') > 0) {
    const params = new URLSearchParams(url.slice(url.indexOf('?')));

    if (params.has('limit')) limit = params.get('limit') as unknown as number;
    if (params.has('start')) start = params.get('start') as unknown as number;
    if (params.has('year')) year = params.get('year') as unknown as number;
  }

  if (!referer) return;

  try {
    referer = referer.slice(0, referer.indexOf('/api/'));

    const url = `${referer}/articles.json`;
    const data = await (await fetch(url)).json();
    const { articlePaths }: { articlePaths: { year: string; baseFilename: string }[] } = data;

    const articles = [];

    for await (const path of articlePaths) {
      const articleData: { articles: { href: string; title: string; date: string; categories: string[]; tag: string[]; summary: string }[] } = await (await fetch(referer + path.baseFilename.replace('public/', ''))).json();

      for (const article of articleData.articles) {
        if ((counter < limit && counter >= start) || (limit === 0 && start === 0 && year === 0)) articles.push(article);

        counter++;
      }
    }

    response.json({ articles });
  } catch (error) {
    response.status = 500;
    response.body = 'Issue fetching article json data';
  }

}
