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

export async function getPostPreview(slug) {
    return 0
}

export async function getMorePosts() {
    return 0
}

// Performs a graphql query from the CMS (wordpress)
async function fetchDataFromCMS(query = "", variables = {}) {
    const headers = {
        "Content-Type": "application/json",
    }

    const res = await fetch("http://calebccc.local/graphql", {
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
