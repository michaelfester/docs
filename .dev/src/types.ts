export interface Frontmatter {
  title: string;
}

export interface IndexedDocument extends Frontmatter {
  objectID: string;
  route: string;
  body: string;
  title: string;
  description?: string;
  image?: string;
}

export type Navigation<T = {}> = NavigationSection<T>[];

export type NavigationLinks<T = {}> = Array<NavigationNode<T> & T>;
export interface NavigationSection<T = {}> {
  title: string;
  links: NavigationLinks<T>;
}

export interface NavigationNode<T = {}> {
  title: string;
  href: string;
  section?: string;
  links?: NavigationLinks<T>;
}

export type EnhancedNavigation = Navigation<{
  modified: string;
  frontmatter: Record<string, any>;
  file: {
    path: string;
  };
}>;

export type EnhancedNavigationSection = EnhancedNavigation[0];
export type EnhancedNavigationNode = EnhancedNavigationSection["links"][0];
