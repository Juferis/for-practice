import PropTypes from "prop-types";

const favFood = [
  {
    id: 1,
    name: "Kimchi",
    Image:
      "http://gdimg1.gmarket.co.kr/goods_image2/exlarge_moreimg/150/528/1505282345/1505282345_01.jpg?ver=1618280554",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Pork_Belly",
    Image: "https://cdn.imweb.me/thumbnail/20200324/876cb6cbe8132.jpg",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Icecream",
    Image:
      "https://lh3.googleusercontent.com/proxy/8oLoERKVQnrUW6uzuMFPbMS5YH-JtbqnZZDbjZWo0o2PMTZI7EQZZRdjgiGrj1le6S8s0q6m_ZYdYbbTDOgOkZ73B96UTGCqldDLhFTCmgRh5wJj4HM",
    rating: 4.5,
  },
];

function Food({ name, picture, rating }) {
  // props.name == { name }
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} alt={name} />
      <h2>Rating : {rating}/5.0</h2>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      <h1 className="App">Hello ReactJS!</h1>
      {favFood.map((
        choice // choice는 object다
      ) => (
        <Food
          key={choice.id}
          name={choice.name}
          picture={choice.Image}
          rating={choice.rating}
        />
      ))}
    </div>
  );
}

export default App;
