export interface BreadCrumbs {
  name: string;
  route: string | null;
}

export type BreadCrumbType = {
  pathParams: Array<BreadCrumbs> | null;
};