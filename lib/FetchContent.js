// Returns an array of all valid slugs
export async function getAllSlugs() {
    let data = await fetchDataFromCMS(`
        query postsQuery {
            posts {
            edges {
                node {
                    slug
                }
            }
            }
        }
    `)

    return data.posts.edges.map(({ node }) => node.slug) || []
}

// Fetches relevant content using a slug
export async function getPost(slug) {
    let data = await fetchDataFromCMS(`
        query postsQuery {
            posts {
            edges {
                node {
                    title
                    excerpt
                    slug
                    date
                    author {
                        node {
                            id
                        }
                    }
                    content
                }
            }
            }
        }
    `)

    // Get the correct post
    const post =
        data.posts.edges.filter(({ node }) => node.slug === slug)[0]?.node || {}

    return post
}

export async function getPostPreviews() {
    let data = await fetchDataFromCMS(`
    query postsQuery {
        posts {
        edges {
            node {
                slug
                title
                excerpt
                date
                featuredImage {
                    node {
                        sourceUrl
                        altText
                    }
                }
            }
        }
        }
    }
    `)

    const previews = data.posts.edges.map(({ node }) => {
        return {
            slug: node.slug,
            title: node.title,
            author: "Caleb",
            date: node.date,
            imageURL:
                node.featuredImage?.node.sourceUrl ||
                process.env.DEFAULT_FEATURED_IMAGE_URL,
            imageAlt: node.featuredImage?.node.altText || `${node.title}`,
            excerpt: node.excerpt,
        }
    })

    return previews
}

export async function getMorePosts() {
    return 0
}

// Performs a graphql query from the CMS (wordpress)
async function fetchDataFromCMS(query = "", variables = {}) {
    const headers = {
        "Content-Type": "application/json",
    }

    const res = await fetch(process.env.WORDPRESS_API_URL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            headers,
            query,
            variables,
        }),
    }).then((res) => res.json())

    return res.data
}
