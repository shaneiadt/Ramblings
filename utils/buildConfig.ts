// deno run --allow-read --allow-write .\utils\buildConfig.ts

import { Marked } from 'https://deno.land/x/markdown@v2.0.0/mod.ts';
import { writeJsonSync } from 'https://deno.land/x/jsonfile/mod.ts';

const getPages = async (dir: string) => {
    const pages = [];

    for await (const page of Deno.readDir(dir)) {
        pages.push(`${dir}/${page.name}`);
    }

    return pages;
}

const tree = [];
const meta = [];

for await (const dirEntry of Deno.readDir('./pages')) {
    if (dirEntry.isDirectory) {
        const pages = await getPages(`./pages/${dirEntry.name}`);

        for (const page of pages) {
            tree.push(page);
        }
    }
}

for await (const filename of tree) {
    const decoder = new TextDecoder("utf-8");
    const markdown = decoder.decode(await Deno.readFile(filename));
    const markup = Marked.parse(markdown);
    const summary = markup.content.slice(0, 100);
    const { title, date, categories, tags } = markup.meta;

    meta.push({ href: filename.replace('.md', '').replace('./pages/', ''), title, date, categories, tags, summary });
}

meta.sort((a, b) => b.date - a.date);

writeJsonSync('./public/articles.json', { articles: meta });