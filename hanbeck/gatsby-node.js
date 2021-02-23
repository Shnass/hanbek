const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const servicesTemplate = path.resolve(`src/templates/service.js`)
  const result = await graphql(`
    query {
      allStrapiServices {
        edges {
          node {
            slug
            name
          }
        }
      }
    }
  `)
  result.data.allStrapiServices.edges.forEach(edge => {
    createPage({
      path: `/service/${edge.node.slug}`,
      component: servicesTemplate,
      context: {
        slug:edge.node.slug,
        title: edge.node.name,
      },
    })
  })
}