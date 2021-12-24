import React from 'react';
import { useDeno } from 'https://deno.land/x/aleph/framework/react/mod.ts';
import { Marked } from 'https://deno.land/x/markdown@v2.0.0/mod.ts';

const getPages = async (dir: string) => {
  const pages = [];

  for await (const page of Deno.readDir(dir)) {
    pages.push(`${dir}/${page.name}`);
  }

  return pages;
}

export default () => {
  const articles = useDeno(async () => {
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
      const summary = markup.content.slice(0, 500);
      const { title, date, categories, tags } = markup.meta;

      meta.push({ href: filename.replace('.md', '').replace('./pages/', ''), title, date, categories, tags, summary });
    }

    meta.sort((a, b) => b.date - a.date);

    return meta;
  });

  return (
    <div className="page">
      {articles.map(article => (
        <div key={article.href} className="blog-post-content d-flex align-items-center flex-wrap margin-60px-bottom padding-60px-bottom border-bottom border-color-extra-light-gray md-margin-30px-bottom md-padding-30px-bottom text-center text-md-start md-no-border">
          <div className="col-12 col-lg-5 blog-image p-0 md-margin-30px-bottom sm-margin-20px-bottom margin-45px-right md-no-margin-right">
            <a href={article.href}><img src="https://via.placeholder.com/1200x840" alt={article.title} /></a>
          </div>
          <div className="col-12 col-lg-6 blog-text p-0">
            <div className="content margin-20px-bottom md-no-padding-left ">
              <a href={article.href} className="text-extra-dark-gray margin-5px-bottom alt-font text-extra-large font-weight-600 d-inline-block">{article.title}</a>
              <div className="text-medium-gray text-extra-small margin-15px-bottom text-uppercase alt-font"><span>{new Date(article.date).toDateString()}</span></div>
              <p className="m-0 w-95 lg-w-100">Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry industry’s standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <div className="text-medium-gray text-extra-small margin-15px-bottom text-uppercase alt-font mt-2">
                {article.tags.map((tag: string) => (
                  <span key={tag} style={{ color: '#fff', display: 'inline-block', padding: '5px', backgroundColor: 'lightseagreen', borderRadius: '3px', marginRight: '5px' }}>{tag}</span>
                ))}
              </div>
            </div>
            <a className="btn btn-very-small btn-dark-gray text-uppercase" href={article.href}>Continue Reading</a>
          </div>
        </div>
      ))}
      <div className="col-12 text-center margin-100px-top md-margin-50px-top position-relative wow animate__fadeInUp">
        <div className="pagination text-small text-uppercase text-extra-dark-gray">
          <ul className="mx-auto">
            <li><a href="#"><i className="fas fa-long-arrow-alt-left margin-5px-right d-none d-md-inline-block"></i> Prev</a></li>
            <li className="active"><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">Next <i className="fas fa-long-arrow-alt-right margin-5px-left d-none d-md-inline-block"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
