module.exports = {
    base: "/",
    title: "OC-Careers",
    description: "Careers Management Plugin for OctoberCMS",
    themeConfig: {
      sidebar: [
        {
          title: "Installation",
          children: ["/getting-started/installation"]
        },
        {
          title: "UseCase",
        },
        {
          title: "Components",
          children: [
            "/components/joblist",
            "/components/jobdetails"
          ]
        }
      ],
      nav: [
        { text: "Guide", link: "/" },
        {
          text: "Marketplace",
          link: "https://octobercms.com/plugin/fytinnovations-careers"
        }
      ],
      docsRepo: "fytinnovations/oc-jobmanager",
      editLinks: true,
      editLinkText: "Help us improve this page!"
    }
  };