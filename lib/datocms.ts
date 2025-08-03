import { toNextMetadata } from "react-datocms";

import {
  AuthorResponseType,
  PageResponseType,
  PostResponseType,
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

  return await response.json();
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
      description
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
