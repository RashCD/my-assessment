const BASE_URL = 'https://api.github.com/';

export default {
  search: (param: string, page: number) =>
    `${BASE_URL}search/repositories?per_page=${page}&q=${param}`,
};
