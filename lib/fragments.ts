export const responsiveImageFragment = `
  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    base64
  }
`;

export const metaTagsFragment = `
  fragment metaTagsFragment on Tag {
    attributes
    content
    tag
  }
`;

export const linkFragment = `
  fragment linkFragment on LinkRecord {
    link
    title
    variant
  }
`;

export const experienceFragment = `
fragment experienceFragment on ExperienceContentRecord {
    experiences {
      id
      company
      description
      workTitle
      startDate
      endDate
      tags {
        name
      }
      logo {
        image: responsiveImage {
          ...responsiveImageFragment
        }
      }
    }
  }
`;

export const projectFragment = `
  fragment projectFragment on ProjectContentRecord {
    projects {
      id
      title
      description
      tags {
        name
      }
      url
      thumbnail {
        image: responsiveImage {
          ...responsiveImageFragment
        }
      }
    }
  }
`;
