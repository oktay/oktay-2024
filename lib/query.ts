import {
  authorFragment,
  experienceFragment,
  metaTagsFragment,
  projectFragment,
} from "./fragments";

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

export const bookmarksSeoQuery = `
  query SeoQuery {
    bookmarks: bookmarksPage {
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
      ...authorFragment
    }
  }
  ${authorFragment}
`;

export const homepageQuery = `
  query HomepageQuery {
    hero {
      description
      buttons {
        link
        title
        variant
      }
    }
  }
`;

export const experiencesQuery = `
  query ExperiencesQuery {
    experiences: allExperiences(orderBy: startDate_DESC) {
      ...experienceFragment
    }
    page: experiencesPage {
      title
      description
    }
  }
  ${experienceFragment}
`;

export const projectsQuery = `
  query ProjectsQuery {
    projects: allProjects {
      ...projectFragment
    }
    page: projectsPage {
      title
      description
    }
  }
  ${projectFragment}
`;

export const bookmarksQuery = `
  query BookmarksQuery {
    page: bookmarksPage {
      title
      description
    }
  }
`;
