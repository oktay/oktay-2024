import { toNextMetadata } from "react-datocms";

import {
  AuthorResponseType,
  PageResponseType,
  PostResponseType,
  PostSiblingsResponseType,
} from "@/types";

import {
  experienceFragment,
  linkFragment,
  metaTagsFragment,
  postDetailFragment,
  postFragment,
  projectFragment,
  responsiveImageFragment,
} from "./fragments";

export const performRequest = async <T>({
  query,
  variables = {},
  includeDrafts = false,
}: {
  query: string;
  variables?: Record<string, unknown>;
  includeDrafts?: boolean;
}): Promise<{ data: T }> => {
  const response = await fetch("https://graphql.datocms.com/", {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
      ...(includeDrafts ? { "X-Include-Drafts": "true" } : {}),
    },
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
      includeDrafts,
    }),
    next: {
      revalidate: false,
    },
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  const payload = await response.json();

  if (payload.errors?.length) {
    const details = payload.errors
      .map((error: { message?: string }) => error.message)
      .filter(Boolean)
      .join(" | ");

    throw new Error(details || "DatoCMS GraphQL request failed");
  }

  return payload;
};

export async function getMetadata(slug: string, includeDrafts = false) {
  const response = await performRequest<PageResponseType>({
    query: pageQuery,
    variables: { slug, includeDrafts },
  });
  return toNextMetadata(response.data.page.seo);
}

export async function getPageData(slug: string, includeDrafts = false) {
  const response = await performRequest<PageResponseType>({
    query: pageQuery,
    variables: { slug, includeDrafts },
  });
  return response.data.page;
}

export async function getPostMetadata(slug: string, includeDrafts = false) {
  const response = await performRequest<PostResponseType>({
    query: postQuery,
    variables: { slug, includeDrafts },
  });
  return toNextMetadata(response.data.post.seo);
}

export async function getPostData(slug: string, includeDrafts = false) {
  const response = await performRequest<PostResponseType>({
    query: postQuery,
    variables: { slug, includeDrafts },
  });
  return response.data.post;
}

export async function getPostSiblings(
  slug: string,
  firstPublishedAt: string,
  includeDrafts = false,
) {
  const response = await performRequest<PostSiblingsResponseType>({
    query: postSiblingsQuery,
    variables: { slug, firstPublishedAt, includeDrafts },
  });

  return response.data;
}

export async function getAuthor(includeDrafts = false) {
  const response = await performRequest<AuthorResponseType>({
    query: authorQuery,
    variables: { includeDrafts },
  });
  return response.data.author;
}

export const pageQuery = `
  query PageQuery($slug: String) {
    page(filter: {slug: {eq: $slug}}) {
      title
      description {
        value
        blocks {
          ... on ImageBlockRecord {
            __typename
            id
            images {
              __typename
              id
              alt
              title
              responsiveImage {
                ...responsiveImageFragment
              }
            }
          }
          ... on HeroImageRecord {
            __typename
            id
            title
            image {
              responsiveImage {
                ...responsiveImageFragment
              }
            }
          }
        }
      }
      highlights {
        title
      }
      content {
        ... on ExperienceContentRecord {
          ...experienceFragment
        }
        ... on ProjectContentRecord {
          ...projectFragment
        }
        ... on PostContentRecord {
          ...postFragment
        }
      }
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
      links {
        ...linkFragment
      }
    }
  }
  ${experienceFragment}
  ${projectFragment}
  ${postFragment}
  ${linkFragment}
  ${metaTagsFragment}
  ${responsiveImageFragment}
`;

export const postQuery = `
  query PostQuery($slug: String) {
    post(filter: {slug: {eq: $slug}}) {
      ...postDetailFragment
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
    }
  }
  ${postDetailFragment}
  ${metaTagsFragment}
  ${responsiveImageFragment}
`;

export const authorQuery = `
  query AuthorQuery {
    author {
      name
      title
      avatar {
        image: responsiveImage {
          ...responsiveImageFragment
        }
      }
    }
  }
  ${responsiveImageFragment}
`;

export const postSiblingsQuery = `
  query PostSiblingsQuery($slug: String, $firstPublishedAt: DateTime) {
    previous: post(
      orderBy: _firstPublishedAt_DESC
      filter: {
        _firstPublishedAt: { lt: $firstPublishedAt }
        slug: { neq: $slug }
      }
    ) {
      slug
      title
    }
    next: post(
      orderBy: _firstPublishedAt_ASC
      filter: {
        _firstPublishedAt: { gt: $firstPublishedAt }
        slug: { neq: $slug }
      }
    ) {
      slug
      title
    }
  }
`;
