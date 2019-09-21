import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  parms: {
    api_key: "3deda24a230f3c3e2164482b5b6c1717",
    language: "en-US"
  }
});

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  topRate: () => api.get("/movie/top_rated"),
  popular: () => api.get("movie/popular"),
  movieDetail: id =>
    api.get(`/movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};

export const TVApi = {
  topRate: () => api.get("/tv/top_rated"),
  popular: () => api.get("/tv/popular"),
  airingToday: () => api.get("/tv/airing_today"),
  showDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};
