import type { APIHandler } from 'aleph/types.d.ts';

export const handler: APIHandler = async ({ request, response }) => {
  let referer = request.headers.get('referer');

  if (!referer) return;

  try {
    referer = referer.slice(0, referer.indexOf('/api/'));

    const url = `${referer}/articles.json`;
    const data = await (await fetch(url)).json();

    response.json(data);
  } catch (error) {
    response.status = 500;
    response.body = 'Issue fetching article json data';
  }

}
