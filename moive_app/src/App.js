function Food({ fav }) {
  // props.fav == { fav }
  return <h3>I like {fav}</h3>;
}

function App() {
  return (
    <div>
      <h1 className="App">Hello ReactJS!</h1>
      <Food fav="kimchi" />
      <Food fav="hambuger" />
      <Food fav="skittles" />
      <Food fav="meet" />
    </div>
  );
}

export default App;
