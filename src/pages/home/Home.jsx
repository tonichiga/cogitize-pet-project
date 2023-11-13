import Card from "../../components/card/Card";
import s from "./home.module.scss";

const films = [
  {
    id: 1,
    img: "/shan-chi.jpeg",
    title: "Black Widow",
    rate: 6.8,
  },
  {
    id: 2,
    img: "https://cdn.pixabay.com/photo/2023/09/17/16/02/crab-8258856_1280.jpg",
    title: "Sokol",
    rate: 8.5,
  },
  {
    id: 3,
    img: "https://cdn.pixabay.com/photo/2023/09/17/16/02/crab-8258856_1280.jpg",
    title: "Rak",
    rate: 8.5,
  },
  {
    id: 4,
    img: "https://cdn.pixabay.com/photo/2023/09/17/16/02/crab-8258856_1280.jpg",
    title: "Fish",
    rate: 8.5,
  },
  {
    id: 15,
    img: "/shan-chi.jpeg",
    title: "Black Widow",
    rate: 6.8,
  },
  {
    id: 6,
    img: "https://cdn.pixabay.com/photo/2023/09/17/16/02/crab-8258856_1280.jpg",
    title: "Sokol",
    rate: 8.5,
  },
  {
    id: 7,
    img: "https://cdn.pixabay.com/photo/2023/09/17/16/02/crab-8258856_1280.jpg",
    title: "Rak",
    rate: 8.5,
  },
  {
    id: 8,
    img: "https://cdn.pixabay.com/photo/2023/09/17/16/02/crab-8258856_1280.jpg",
    title: "Fish",
    rate: 8.5,
  },
];

const Home = ({ onSwitchPage }) => {
  return (
    <div className={`${s.test_container} ${s.test_2_container}`}>
      <div className={s.default_input}>
        <input type="text" placeholder="Search Movies or TV Shows" />
      </div>

      <div className={s.input_container}>
        <input type="text" placeholder="Search Movies or TV Shows" />

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 22L20 20"
            stroke-width="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className={s.swither}>
        <div className={s.input_radio_container}>
          <input type="radio" name="swither" id="all" />
          <label htmlFor="all">All</label>
        </div>
        <div className={s.input_radio_container}>
          <input type="radio" name="swither" id="films" />
          <label htmlFor="films">Фильмы</label>
        </div>
        <div className={s.input_radio_container}>
          <input type="radio" name="swither" id="anime" />
          <label htmlFor="anime">Anime</label>
        </div>
      </div>
      <ul className={s.list}>
        {films.map((film) => {
          return (
            <li key={film.id} onClick={onSwitchPage}>
              <Card />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
