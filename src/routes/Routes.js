import Search from '../components/Search';

export const ROUTES = {
  ARTIST_SEARCH: {
    path: '/artist-search',
    Component: Search, 
    linkPath: () => '/artist-search'
  }
};
