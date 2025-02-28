const explorer = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [{ name: "index.html", isFolder: false }],
    },
    {
      name: "src",
      isFolder: true,
      items: [
        {
          name: "components",
          isFolder: true,
          items: [
            {
              name: "Dashboard.js",
              isFolder: false,
            },
          ],
        },
        {
          name: "App.js",
          isFolder: false,
        },
        {
          name: "App.css",
          isFolder: false,
        },
        {
          name: "index.js",
          isFolder: false,
        },
      ],
    },
    {
      name: "package.json",
      isFolder: false,
    },
    {
      name: "README.md",
      isFolder: false,
    },
  ],
};
