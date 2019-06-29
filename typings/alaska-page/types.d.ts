
export interface Page {
  id: string;
  site: string;
  application: string;
  title: string;
  seoTitle: string;
  seoKeywords: string;
  seoDescription: string;
  route: string;
  type: 'normal' | 'list' | 'detail';
  component: string;
  layout: string;
  source: string;
  tabName: string;
  tabIcon: string;
  tabActiveIcon: string;
  sort: number;
  createdAt: string;
  content: string;

  rev?: number;
  error?: Error;
  fetching?: boolean;
  loaded?: boolean;
}
