module.exports = {
    base: "/",
    title: "Careers",
    description: "Careers Management Plugin for OctoberCMS",
    head: [
      ['link', { rel: 'icon', href: 'assets/img/logo.png' }]
    ],
    themeConfig: {
      logo: 'assets/img/logo.png',
      sidebar: [
        {
          title: "Getting Started",
          children: [
              "/getting-started/installation",
              "/getting-started/configuration",
          ]
        },
        {
          title: "Components"
        }
      ],
      nav: [
        { text: "Guide", link: "/" },
        {
          text: "Marketplace",
          link: "https://octobercms.com/plugin/fytinnovations-careers"
        }
      ],
      docsRepo: "fytinnovations/oc-careers",
      editLinks: true,
      editLinkText: "Help us improve this page!"
    }
  };
