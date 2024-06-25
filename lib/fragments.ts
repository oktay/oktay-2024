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

export const authorFragment = `
  fragment authorFragment on HeroRecord {
    name
    job
    profilePicture {
      responsiveImage(imgixParams: { w: 40, h: 40 }) {
        ...responsiveImageFragment
      }
    }
  }
  ${responsiveImageFragment}
`;

export const experienceFragment = `
  fragment experienceFragment on ExperienceRecord {
    id
    company
    workTitle
    description
    startDate
    endDate
    tags
    logo {
      responsiveImage(imgixParams: { w: 48, h: 48 }) {
        ...responsiveImageFragment
      }
    }
  }
  ${responsiveImageFragment}
`;

export const projectFragment = `
  fragment projectFragment on ProjectRecord {
    id
    title
    description
    url
    tags
    image {
      responsiveImage {
        ...responsiveImageFragment
      }
    }
  }
  ${responsiveImageFragment}
`;
