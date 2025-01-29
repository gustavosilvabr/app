import axios from 'axios';
const apiFilmesPopular = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1',
  timeout: 10000,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2Y0MWZmNzQwZTg3NTJhZTA4YWFlZjc2NzBiNWY0OSIsIm5iZiI6MTY3MzI5Nzk4NS4zMDksInN1YiI6IjYzYmM4MDQxZmMzMWQzMDA3ZTMyNDMxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AvNlS5j6z0iDXZ_Rt_H_8cIhY-AQdZ3qVo-14L3HoJU`,
    'Content-Type': 'application/json',
  },
});

export default apiFilmesPopular;