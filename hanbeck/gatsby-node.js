const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const servicesTemplate = path.resolve(`src/templates/service.js`)
  const subServicesTemplate = path.resolve(`src/templates/subservice.js`)
  const pricesTemplate = path.resolve(`src/templates/prices.js`)
  const programmsTemplate = path.resolve(`src/templates/programm.js`)
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
      allStrapiServicesSecondLevels {
        edges {
          node {
            slug
            name
          }
        }
      }
      allStrapiPrices {
        edges {
          node {
            slug
            name
          }
        }
      }
      allStrapiProgramms {
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
  result.data.allStrapiServicesSecondLevels.edges.forEach(edge => {
    createPage({
      path: `/service-detailed/${edge.node.slug}`,
      component: subServicesTemplate,
      context: {
        slug:edge.node.slug,
        title: edge.node.name,
      },
    })
  })
  result.data.allStrapiPrices.edges.forEach(edge => {
    createPage({
      path: `/prices/${edge.node.slug}`,
      component: pricesTemplate,
      context: {
        slug:edge.node.slug,
        title: edge.node.name,
      },
    })
  })
  result.data.allStrapiProgramms.edges.forEach(edge => {
    createPage({
      path: `/programms/${edge.node.slug}`,
      component: programmsTemplate,
      context: {
        slug:edge.node.slug,
        title: edge.node.name,
      },
    })
  })
}

const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
exports.onCreateNode = async ({
 node,
 actions,
 store,
 cache,
 createNodeId,
}) => {
const { createNode } = actions


if (node.internal.type === "StrapiDoctors") {
  let galleryItems = node.main_picture;
  if (galleryItems.length > 0) {
    const images = await Promise.all(
      galleryItems.map(el =>
        createRemoteFileNode({
          url: `http://localhost:1337${el.url}`,
          parentNodeId: node.id,
          store,
          cache,
          createNode,
          createNodeId,
        })
        )
      )
    galleryItems.forEach((image, i) => {
      image.localFile___NODE = images[i].id
    })
  }
  /*if (items.length > 0 ) {
   let itemsImagesContainer=Array();
   items.forEach(item => {
    itemsImagesContainer=itemsImagesContainer.concat(item.gallery)
   })
   const itemsImages = await Promise.all(
    itemsImagesContainer.map(el =>
       createRemoteFileNode({
         url: `http://localhost:1337${el.url}`,
         parentNodeId: node.id,
         store,
         cache,
         createNode,
         createNodeId,
       })
     )
   )
   itemsImagesContainer.forEach((image, i) => {
     image.localFile___NODE = itemsImages[i].id
   })


 }*/

}

if (node.internal.type === "StrapiFeedbacks") {
  let galleryItems = node.picture;
  if (galleryItems.length > 0) {
    const images = await Promise.all(
      galleryItems.map(el =>
        createRemoteFileNode({
          url: `http://localhost:1337${el.url}`,
          parentNodeId: node.id,
          store,
          cache,
          createNode,
          createNodeId,
        })
        )
      )
    galleryItems.forEach((image, i) => {
      image.localFile___NODE = images[i].id
    })
  }
}

if (node.internal.type === "StrapiServices") {
  let items = node.doctors;
   if (items.length > 0 ) {
    let itemsImagesContainer=Array();
    items.forEach(item => {
     itemsImagesContainer=itemsImagesContainer.concat(item.main_picture)
    })
    const itemsImages = await Promise.all(
     itemsImagesContainer.map(el =>
        createRemoteFileNode({
          url: `http://localhost:1337${el.url}`,
          parentNodeId: node.id,
          store,
          cache,
          createNode,
          createNodeId,
        })
      )
    )
    itemsImagesContainer.forEach((image, i) => {
      image.localFile___NODE = itemsImages[i].id
    })
  }
}
if (node.internal.type === "StrapiServicesSecondLevels") {
  let items = node.doctors;
   if (items.length > 0 ) {
    let itemsImagesContainer=Array();
    items.forEach(item => {
     itemsImagesContainer=itemsImagesContainer.concat(item.main_picture)
    })
    const itemsImages = await Promise.all(
     itemsImagesContainer.map(el =>
        createRemoteFileNode({
          url: `http://localhost:1337${el.url}`,
          parentNodeId: node.id,
          store,
          cache,
          createNode,
          createNodeId,
        })
      )
    )
    itemsImagesContainer.forEach((image, i) => {
      image.localFile___NODE = itemsImages[i].id
    })
  }
  let galleryItems = node.pictures;
  if (galleryItems.length > 0) {
    const images = await Promise.all(
      galleryItems.map(el =>
        createRemoteFileNode({
          url: `http://localhost:1337${el.url}`,
          parentNodeId: node.id,
          store,
          cache,
          createNode,
          createNodeId,
        })
        )
      )
    galleryItems.forEach((image, i) => {
      image.localFile___NODE = images[i].id
    })
  }

}

if (node.internal.type === "StrapiPrices" || node.internal.type === "StrapiProgramms") {
  let items = node.doctors;
   if (items.length > 0 ) {
    let itemsImagesContainer=Array();
    items.forEach(item => {
     itemsImagesContainer=itemsImagesContainer.concat(item.main_picture)
    })
    const itemsImages = await Promise.all(
     itemsImagesContainer.map(el =>
        createRemoteFileNode({
          url: `http://localhost:1337${el.url}`,
          parentNodeId: node.id,
          store,
          cache,
          createNode,
          createNodeId,
        })
      )
    )
    itemsImagesContainer.forEach((image, i) => {
      image.localFile___NODE = itemsImages[i].id
    })
  }
  // let galleryItems = node.pictures;
  // if (galleryItems.length > 0) {
  //   const images = await Promise.all(
  //     galleryItems.map(el =>
  //       createRemoteFileNode({
  //         url: `http://localhost:1337${el.url}`,
  //         parentNodeId: node.id,
  //         store,
  //         cache,
  //         createNode,
  //         createNodeId,
  //       })
  //       )
  //     )
  //   galleryItems.forEach((image, i) => {
  //     image.localFile___NODE = images[i].id
  //   })
  // }

}




}