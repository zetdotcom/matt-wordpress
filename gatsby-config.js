module.exports = {
  siteMetadata: {
    title: 'Test WP site for Matt',
    subtitle: 'Fetch Data from test WP site for Matt',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'testmatt-com.stackstaging.com',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: false,
        // auth: {
        //   // If auth.user and auth.pass are filled, then the source plugin will be allowed
        //   // to access endpoints that are protected with .htaccess.
        //   htaccess_user: "your-htaccess-username",
        //   htaccess_pass: "your-htaccess-password",
        //   htaccess_sendImmediately: false,
        // },
        // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
        // It can help you debug specific API Endpoints problems
        verboseOutput: true,
        // Search and Replace Urls across WordPress content
        searchAndReplaceContentUrls: {
          sourceUrl: 'https://source-url.com',
          replacementUrl: 'https://replacement-url.com',
        },
      },
    },
  ],
}
