module.exports = {
	siteMetadata: {
	  title: `My superblog`,
	  description: `well, i hope it would work this time`,
	  author: `@gatsbyjs`,
	},
	plugins: [
	  `gatsby-plugin-react-helmet`,
	  {
	    resolve: `gatsby-source-filesystem`,
	    options: {
	      name: `images`,
	      path: `${__dirname}/src/images`,
	    },
	  },
	  {
	    resolve: "gatsby-plugin-anchor-links",
	    options: {
	      offset: -100,
	      duration: 2000
	    }
	  },
	  {
	    resolve:`gatsby-source-strapi`,
	    options: {
	      apiURL: `http://localhost:1337`,
	      queryLimit: 1000,
	      contentTypes:[
	        `services`,
	        `doctors`,
	        `feedbacks`,
	        `licenses`,
	        `services-second-levels`,
	        `prices`,
	        `programms`,
	      ],
	      singleTypes:[
	      	`contact-data`
	      ]
	    }
	  },
	  `gatsby-transformer-sharp`,
	  `gatsby-plugin-sharp`,
	  {
	    resolve: `gatsby-plugin-manifest`,
	    options: {
	      name: `gatsby-starter-default`,
	      short_name: `starter`,
	      start_url: `/`,
	      background_color: `#11ffff`,
	      theme_color: `#11ffff`,
	      display: `minimal-ui`,
	      icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
	    },
	  },
	  // this (optional) plugin enables Progressive Web App + Offline functionality
	  // To learn more, visit: https://gatsby.dev/offline
	  `gatsby-plugin-offline`,
	  `gatsby-plugin-layout`
	],
}