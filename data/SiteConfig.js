module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  lessonsDir: "lessons", // The name of the directory that contains lessons or docs.
  siteTitle: "Shashank K", // Site title.
  siteTitleAlt: "Portfolio website of Shashank K", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://shashankkeshava.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Software Developer (Full Stack)", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "740846919637638", // FB Application ID for using app insights
  googleAnalyticsID: "UA-117744290-1", // GA tracking ID.
  disqusShortname: "shashankkeshava", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "User", // Username to display in the author segment.
  userTwitter: "keshavashashank", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Bengaluru,Karnataka,INDIA", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription: "All about me!", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/shashankKeshava/",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/keshavashashank",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:keshavashashank@gmail.com",
      iconClassName: "fa fa-envelope"
    },
  ],
  copyright: "Copyright © 2017. Advanced User", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  // TODO: Move this literally anywhere better.
  toCChapters: ["", "Chapter 1", "Chapter 2"] // Used to generate the Table Of Contents. Index 0 should be blank.
};
