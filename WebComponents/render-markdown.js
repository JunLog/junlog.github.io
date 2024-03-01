import MarkdownIt from 'https://cdn.jsdelivr.net/npm/markdown-it@14.0.0/+esm';
import hljs from 'https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/+esm';

const md = new MarkdownIt(
  {html:true,}
);

customElements.define("render-markdown", class Markdown extends HTMLElement {
  constructor() {
    super();

    const str = this.innerHTML;
    const m = str.match(/^\n*( *)/);
    const re = new RegExp('^' + m[1], 'gm');
    const str2 = str.replace(re, '').trim();
    const html = md.render(str2);

    this.outerHTML = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/atom-one-dark.min.css">
      <div class="post-content">
        ${html}
      </div>
    `;
    hljs.highlightAll();
  }
});
