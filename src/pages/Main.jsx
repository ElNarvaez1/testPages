import React, { Component } from "react";
import ContainerForm from "../components/ContainerForm";
import Cart from "../components/Cart";
import Alien from "../components/Alien";
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
      sortBy: "recent",
      founded: null,
      nameGame: ''
    };
    this.getGame = this.getGame.bind(this);
  }

  async componentDidMount() {
    const URL_STORS = `https://www.cheapshark.com/api/1.0/stores`;
    let storsQuery = await fetch(URL_STORS);
    let storsJSON = await storsQuery.json();
    let storsArray = Object.keys(storsJSON).map((key) => storsJSON[key]);
    this.setState({ stores: storsArray });
  }

  async getGame(e) {
    e.preventDefault();
    this.setState({ gamesDeals: [] });

    //Buscamos un juego por su nombre
    const URL = `https://www.cheapshark.com/api/1.0/deals?sortBy=${this.state.sortBy}&pageNumber=${this.state.page}&title=`;
    let nameGame = document.getElementById("inputGame");
    let query = await fetch(URL + nameGame.value);
    let datos = await query.json();
    let idGames = datos.map((game) => game.gameID);
    let idReduceGame = idGames.filter(
      (game, pos) => idGames.indexOf(game) == pos
    );
    this.setState({nameGame: nameGame.value});
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
    this.setState({ founded: arrayGameDeals.length > 0 });

    document.getElementById("containerForms").classList.add("active");
  }

  render() {
    if (this.state.founded == null || this.state.founded) {
      return (
        <>
          <ContainerForm getGame={this.getGame} />
          <section className="container ">
            <div className="row justify-content-center">
              {this.state.gamesDeals.map((game, index) => (
                <Cart game={game} key={index} stors={this.state.stores} />
              ))}
            </div>
          </section>
        </>
      );
    } else if (!this.state.founded) {
      //Tiene que ser false
      console.log("No pudimos encontrar nada ");
      return (
        <>
          <ContainerForm getGame={this.getGame} />
          <section className="container ">
            <div className="row justify-content-center">
              <div class="alert alert-info" role="alert">
                <p>Lo setimos mucho, el servicio no pudo encontrar algo relacionado con {this.state.nameGame} :C</p>
                <p>Cosas que podrias hacer:</p>
                <ul>
                  <li>Verifica que el nombre del juego sea el correcto.</li>
                  <li>Recuerda que utilizamos el servicio de  
                    <a href="https://apidocs.cheapshark.com/" className="alert-link" > Cheapshark </a>
                    ,este podria no tener el resgistro que buscas.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </>
      );
    }
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
