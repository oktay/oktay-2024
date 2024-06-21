import { metaTagsFragment, responsiveImageFragment } from "./fragments";

export const homepageSeoQuery = `
  query SeoQuery {
    homepage: hero {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
    }
  }
  ${metaTagsFragment}
`;

export const experiencesSeoQuery = `
  query SeoQuery {
    experiences: experiencesPage {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
    }
  }
  ${metaTagsFragment}
`;

export const projectsSeoQuery = `
  query SeoQuery {
    projects: projectsPage {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
    }
  }
  ${metaTagsFragment}
`;

export const authorQuery = `
  query AuthorQuery {
    author: hero {
      name
      job
      profilePicture {
        responsiveImage(imgixParams: { fit: crop, w: 40, h: 40, auto: format }) {
          ...responsiveImageFragment
        }
      }
    }
  }
  ${responsiveImageFragment}
`;

export const homepageQuery = `
  query HomepageQuery {
    hero {
      description
      actions {
        link
        title
      }
    }
  }
`;

export const experiencesQuery = `
  query ExperiencesQuery {
    experiences: allExperiences(orderBy: startDate_DESC) {
      id
      company
      workTitle
      description
      startDate
      endDate
      logo {
        responsiveImage(imgixParams: { fit: crop, w: 48, h: 48, auto: format }) {
          ...responsiveImageFragment
        }
      }
    }
    page: experiencesPage {
      title
      description
    }
  }
  ${responsiveImageFragment}
`;

export const projectsQuery = `
  query ProjectsQuery {
    projects: allProjects {
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
    page: projectsPage {
      title
      description
    }
  }
  ${responsiveImageFragment}
`;
