customElements.define(
    "giscus-comments",
    class Comment extends HTMLElement {
      constructor() {
        super();
  
        this.outerHTML = `
        <script src="https://giscus.app/client.js"
          data-repo="JunLog/junlog.github.io"
          data-repo-id="R_kgDOLZpQlg"
          data-category="Comments"
          data-category-id="DIC_kwDOLZpQls4Cdo3r"
          data-mapping="title"
          data-strict="0"
          data-reactions-enabled="1"
          data-emit-metadata="0"
          data-input-position="bottom"
          data-theme="preferred_color_scheme"
          data-lang="zh-CN"
          data-loading="lazy"
          crossorigin="anonymous"
          async>
        </script>
        `;
      }
    }
  );
  