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

const dirs = [];

for await (const dirEntry of Deno.readDir('./pages')) {
    if (dirEntry.isDirectory) {
        const pages = await getPages(`./pages/${dirEntry.name}`);

        dirs.push({
            year: dirEntry.name,
            pages
        });
    }
}

const articlePaths = [];

for await (const dir of dirs) {
    const baseFilename = `./public/articles/articles-${dir.year}.json`;
    const baseMeta = [];

    for await (const filename of dir.pages) {
        const decoder = new TextDecoder("utf-8");
        const markdown = decoder.decode(await Deno.readFile(filename));
        const markup = Marked.parse(markdown);
        const summary = markup.content.slice(0, 100);
        const { title, date, categories, tags } = markup.meta;

        baseMeta.push({ href: filename.replace('.md', '').replace('./pages/', ''), title, date, categories, tags, summary });
    }

    baseMeta.sort((a, b) => b.date - a.date);

    articlePaths.push({ year: dir.year, baseFilename: baseFilename.replace('.', '') });

    writeJsonSync(baseFilename, { articles: baseMeta });
}

articlePaths.sort((a: any, b: any) => b.year - a.year);

writeJsonSync('./public/articles.json', { articlePaths });