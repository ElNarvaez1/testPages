import React, { Component } from "react";
import ContainerForm from "../components/ContainerForm";
import Cart from "../components/Cart";
/**
 *
 * Componente de la pagina principal
 */
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesIDS: [],
      gamesDeals: [],
      page: 0,
      stores: [],
      sortBy: 'recent'
    };
    this.getGame = this.getGame.bind(this);
  }

  async componentDidMount(){
    const URL_STORS = `https://www.cheapshark.com/api/1.0/stores`;
    let storsQuery = await fetch(URL_STORS);
    let storsJSON = await storsQuery.json();
    let storsArray = Object.keys(storsJSON).map((key) => storsJSON[key]); 
    this.setState({stores:storsArray});
  }

  async getGame(e) {
    e.preventDefault();
    //Buscamos un juego por su nombre
    const URL = `https://www.cheapshark.com/api/1.0/deals?sortBy=${this.state.sortBy}&pageNumber=${this.state.page}&title=`;
    let nameGame = document.getElementById("inputGame");
    let query = await fetch(URL + nameGame.value);
    let datos = await query.json();
    let idGames = datos.map((game) => game.gameID);
    let idReduceGame = idGames.filter(
      (game, pos) => idGames.indexOf(game) == pos
    );
    this.setState({ gamesIDS: idReduceGame });

    //Buscamos los juegos por su ID
    let URL_GAMES_AT_IDS = `https://www.cheapshark.com/api/1.0/games?ids=`;
    let gamesDealsQuery = await fetch(URL_GAMES_AT_IDS + this.state.gamesIDS);
    let gamesDealsInformation = await gamesDealsQuery.json();
    //this.setState({gamesDeals:gamesDealsInformation});

    let arrayGameDeals = Object.keys(gamesDealsInformation).map(
      (key) => gamesDealsInformation[key]
    );
    this.setState({ gamesDeals: arrayGameDeals });

    document.getElementById("containerForms").classList.add("active");
  }

  render() {
    return (
      <>
        <ContainerForm getGame={this.getGame}/> 
        <section className="container ">
          <div className="row justify-content-center" >
            {this.state.gamesDeals.map((game, index) => (
              <Cart game={game} key={index} stors={this.state.stores}/>
            ))}
          </div>
        </section>
      </>
    );
  }
}

{
  /* <h1>Inicio.</h1>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat on proident, sunt in culpa
  qui officia deserunt mollit anim id est laborum.
</p> */
}
