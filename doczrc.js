export default {
  public: "/public",
  files: "**/*.{md,markdown,mdx}",
  htmlContext: {
    head: {
      links: [
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css?family=Nunito:400,800&display=swap"
        },
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css?family=Nothing+You+Could+Do&display=swap"
        },
        {
          rel: "stylesheet",
          href: "https://use.fontawesome.com/releases/v5.7.0/css/all.css",
          integrity:
            "sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ",
          crossorigin: "anonymous"
        }
      ]
    }
  }
};
