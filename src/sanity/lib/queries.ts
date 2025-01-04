import {defineQuery} from 'next-sanity'

export const POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] 
  | order(publishedAt asc)[$start...$end] {
    _id, title, slug, publishedAt
  }
`);


export const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage, publishedAt
}`)

export const POST_DETAIL_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage, publishedAt
}`)

export const TOTAL_POSTS_QUERY = defineQuery(`count(*[_type == "post" && defined(slug.current)])`)