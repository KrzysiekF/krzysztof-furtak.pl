module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Krzysztof Furtak', // Navigation and Site Title
  titleAlt: 'Front-End / JavaScript Senior Developer', // Title for JSONLD
  description: 'JavaScript, HTML, CSS',
  headline: '', // Headline for schema.org JSONLD
  url: 'https://krzysztof-furtak.pl', // Domain of your site. No trailing slash!
  siteLanguage: 'pl', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'pl_PL', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Krzysztof Furtak', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Krzysztof Furtak', // Author for schemaORGJSONLD
  themeColor: '#4abfee',
  backgroundColor: '#EBEDF2',

  twitter: '@KrzysiekFurtak', // Twitter Username
  facebook: 'Front-end Developer', // Facebook Site Name
  googleAnalyticsID: 'UA-47519312-7',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
};
