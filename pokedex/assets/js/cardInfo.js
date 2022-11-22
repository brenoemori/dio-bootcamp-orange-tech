function convertPokemonToDetails(pokemon) {
    return `<section class="cardInfo">
    <section class="pokeUnit ">
        <div class="pokeMain">
            <div class="backButton">

                <a href="index.html"><button id="backButton" type="button">
                    < 
                </button></a>
                        <div class="pokeInfos">
                            <div class="detail">

                                <div class="nameType ${pokemon.type}">
                                    <span class="name">Bulbasaur</span>
                                    <ol class="types">
                                        <li class="type">Grass</li>
                                        <li class="type">Poison</li>
                                    </ol>

                                </div>
                                <span class="number">#${pokemon.number}</span>


                            </div>
                            <div class="pokeImg">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                                    alt="Bulbasaur">
                            </div>
                        </div>

    </section>

    <section class="pokeDetailsUnit">
        <div class="secMenu">
            <div class="itemMenu">About</div>
            <div class="itemMenu">Base Stats</div>
        </div>
        <div class="discription">
            <ol class="aboutList">
                <li>Species : </li>
                <li>Height :</li>
                <li>Weight :</li>
                <li>Abilities :</li>
            </ol>
            <ol class="aboutStats">
                <li>Seed</li>
                <li>2'3.6" (0.70 cm)</li>
                <li>15.2 lbs (6.9 kg)</li>
                <li>Overgrow, Chlorophyl</li>
            </ol>
            
        </div>
    </section>
    </section>
        `
}