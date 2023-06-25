const movies = [
  {
    _id: "15",
    title: "Trminator",
    genre: { _id: "1", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    liked: false,
  },
  {
    _id: "16",
    title: "Die Hard",
    genre: { _id: "2", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    liked: false,
  },
  {
    _id: "17",
    title: "Get Out",
    genre: { _id: "3", name: "Comedy" },
    numberInStock: 8,
    dailyRentalRate: 3.5,
    liked: false,
  },
  {
    _id: "18",
    title: "Trip to italy",
    genre: { _id: "4", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: false,
  },
  {
    _id: "19",
    title: "Wedding Crashers",
    genre: { _id: "5", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: false,
  },
  {
    _id: "20",
    title: "Gone Girl",
    genre: { _id: "6", name: "Thriller" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    liked: false,
  },
  {
    _id: "21",
    title: "The sixth sense",
    genre: { _id: "7", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: 3.5,
    liked: false,
  },
  {
    _id: "22",
    title: "The Avenger ",
    genre: { _id: "8", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: false,
  },
];
export function getMovies() {
  return movies;
}
export function getMovie(id) {
  return movies.find((m) => m._id === id);
}
