/*Click Button Sound*/
function playClickButtonAudio(){
    AUDIO_CLICKBUTTON.play();
}

/*Open Pokemon Card Sound*/
function playOpenCardAudio(){
    AUDIO_OPENCARD.play();
}

/*Open Pokemon Card*/
function openDetails() {
    document.getElementById("popUpPokemonBackground").classList.remove("d-none");
    document.body.classList.add("body-pop-up");
}
  
/*Close Pokemon Card*/
function closeDetails() {
    document.getElementById("popUpPokemonBackground").classList.add("d-none");
    document.body.classList.remove("body-pop-up");
}

/*Itteriert durch pokemonRange */
async function PokemonIntoJson(){
    for (let i = 1; i < pokemonRange; i++) {
        await downloadURL(i);
    }
}

/*Download URL -> URL text -> jSON -> safed in currentPokemon*/ 
async function downloadURL(i){
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    let pokemonData = responseAsJson;
    currentPokemon.push(pokemonData);
    renderPokemon(pokemonData);
}

async function loadCompletePokedex(){
    for (let i = 1; i < 100; i++) {
        let URL = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(URL);
        let responseAsJson = await response.json();
        let pokemonData = responseAsJson;
        searchPokemons.push(pokemonData);
    }
}


/*Change Buttons */
function baseStatsButton(){
    document.getElementById('changeButton1').classList.add('change-pokemon-button-clicked');
    document.getElementById('changeButton2').classList.remove('change-pokemon-button-clicked');
    document.getElementById('changeButton3').classList.remove('change-pokemon-button-clicked');
    document.getElementById('changeButton4').classList.remove('change-pokemon-button-clicked');
    document.getElementById('changeButton5').classList.remove('change-pokemon-button-clicked');
}

/*Change Buttons */
function bodyButton(){
    document.getElementById('changeButton2').classList.add('change-pokemon-button-clicked');
    document.getElementById('changeButton1').classList.remove('change-pokemon-button-clicked');
    document.getElementById('changeButton3').classList.remove('change-pokemon-button-clicked');
    document.getElementById('changeButton4').classList.remove('change-pokemon-button-clicked');
    document.getElementById('changeButton5').classList.remove('change-pokemon-button-clicked');
}

/*Change Buttons */
function typeButton(){
    document.getElementById('changeButton3').classList.add('change-pokemon-button-clicked');
    document.getElementById('changeButton1').classList.remove('change-pokemon-button-clicked');
    document.getElementById('changeButton2').classList.remove('change-pokemon-button-clicked');
    document.getElementById('changeButton4').classList.remove('change-pokemon-button-clicked');
    document.getElementById('changeButton5').classList.remove('change-pokemon-button-clicked');
}

/*Change Buttons */
function abilitiesButton(){
    document.getElementById('changeButton4').classList.add('change-pokemon-button-clicked');
    document.getElementById('changeButton1').classList.remove('change-pokemon-button-clicked');
    document.getElementById('changeButton2').classList.remove('change-pokemon-button-clicked');
    document.getElementById('changeButton3').classList.remove('change-pokemon-button-clicked');
    document.getElementById('changeButton5').classList.remove('change-pokemon-button-clicked');
}

/*Change Buttons */
function moveButton(){
    document.getElementById('changeButton5').classList.add('change-pokemon-button-clicked');
    document.getElementById('changeButton1').classList.remove('change-pokemon-button-clicked');
    document.getElementById('changeButton2').classList.remove('change-pokemon-button-clicked');
    document.getElementById('changeButton3').classList.remove('change-pokemon-button-clicked');
    document.getElementById('changeButton4').classList.remove('change-pokemon-button-clicked');
}

/*Load Base Stats Details*/
function loadPokemonBaseStatsDetails(pokemonId){
    let stats = searchPokemons[pokemonId -1].stats;
    let talbeHtml = '<table>';
    for(let i = 0; i < stats.length; i++){
        const stats_1 = stats[i];
        let stat = stats_1['stat'];
       
        talbeHtml += `
            <tr class="pop-up-pokemon-base-stats-section">
                <td><b>${stat['name']} :</b></td>
                <td><b>${stats_1['base_stat']}</b></td>
            </tr>
        `; 
    }
    talbeHtml += '</table>';
    document.getElementById('pop-up-pokemon-detail-section').innerHTML = talbeHtml;
}

/*Load Body Details */
function loadPokemonBodyDeatils(pokemonId){
    let pokemon = searchPokemons[pokemonId - 1];
    let talbeHtml = '<table class="pop-up-pokemon-body-section">';
    talbeHtml += `
            <tr>
                <th>Base experience : ${pokemon.base_experience}</th> 
                <th>Height : ${pokemon.height}</th>
                <th>Weight : ${pokemon.weight}</th> 
            </tr>
    `;
    talbeHtml += '</table>';
    document.getElementById('pop-up-pokemon-detail-section').innerHTML = talbeHtml;
}

/*Load Type Details */
function loadPokemonTypeDetails(pokemonId){
    let types = searchPokemons[pokemonId -1].types;
    let talbeHtml = '<table>';
    for (let i = 0; i < types.length; i++) {
        const type_1 = types[i];
        let type = type_1['type'];
       
        talbeHtml += `
            <tr class="pop-up-pokemon-body-section">
                <td><b>Type ${i + 1}: ${type['name']}</b></td>
            </tr>
        `;
    }
    talbeHtml += '</table>';
    document.getElementById('pop-up-pokemon-detail-section').innerHTML = talbeHtml;
}

/*Load Ability Details */
function loadPokemonAbilitiesDetails(pokemonId){
    let abilities = searchPokemons[pokemonId -1].abilities;
    let talbeHtml = '<table>';
    for (let i = 0; i < abilities.length; i++) {
        const abilities_1 = abilities[i];
        let ability = abilities_1['ability'];
        
        talbeHtml += `
                <tr class="pop-up-pokemon-body-section">
                    <td><b>Ability ${i + 1}: ${ability['name']}</b></td>
                </tr>
        `; 
    }
    talbeHtml += '</table>';
    document.getElementById('pop-up-pokemon-detail-section').innerHTML = talbeHtml;
}

/*Load Move Details */
function loadPokemonMovesDetails(pokemonId){
let moves = searchPokemons[pokemonId -1].moves;
    let talbeHtml = '<table>';
    for (let i = 0; i < moves.length; i++) {
        const move_1 = moves[i];
        let move = move_1['move']
        talbeHtml +=`
            <tr class="pop-up-pokemon-body-section">
                <td><b>Move ${i + 1}: ${move['name']}</b></td>
            </tr>
        `;
    }
    talbeHtml += '</table>';
    document.getElementById('pop-up-pokemon-detail-section').innerHTML = talbeHtml;
}

/*Changed Normal image -> Shiny image */
function changeNormalPokemonImg(pokemonId){
    let pokemon = currentPokemon[pokemonId - 1];
    document.getElementById('pokemonImg').innerHTML = ''; 
    document.getElementById('pokemonImg').innerHTML = ` <img class="pop-up-pokemon-img" src="${pokemon.sprites.front_shiny}">`; 
}

/*Changed Shiny image -> Normale image */
function changeShinyPokemonImg(pokemonId){
    let pokemon = currentPokemon[pokemonId - 1];
    document.getElementById('pokemonImg').innerHTML = ''; 
    document.getElementById('pokemonImg').innerHTML = ` <img class="pop-up-pokemon-img" src="${pokemon.sprites.front_default}">`; 
}

/*Changed  Shiny button -> Normale Button*/
function changeShinyButton(){
    document.getElementById('showShinyButton').classList.add('d-none');
    document.getElementById('showNormalButton').classList.remove('d-none');
}

/*Changed Normal Button -> Shiny Button */
function changeNormalButton(){
    document.getElementById('showShinyButton').classList.remove('d-none');
    document.getElementById('showNormalButton').classList.add('d-none');
}

/*Load Pop Up Deatil Pokemin Card */
function loadPopUpCard(pokemonId){
    let pokemon = searchPokemons[pokemonId - 1];
    document.getElementById('popUpPokemonDetails').innerHTML = '';
    document.getElementById('popUpPokemonDetails').innerHTML += `
        <div class="pop-up-top-section">
            <h1>${pokemon.name}</h1>
            <button id="showShinyButton" class="change-pokemon-button change-pokemon-button-mediaquery" onclick="showShinyPokemon(${pokemonId})">Show shiny</button>
            <button id="showNormalButton" class="d-none change-pokemon-button change-pokemon-button-mediaquery" onclick="showNormalPokemon(${pokemonId})">Show normal</button>
            <button class="close-pop-up-button" onclick="closeDetails()"><img class="close-pop-up-button-img" src="img/close.png"></button>
        </div>
        <div class="pop-up-underground-top-section">
            <div id="pokemonImg" class="pop-up-underground-img-section">
                <img class="pop-up-pokemon-img" src="${pokemon.sprites.front_default}">
            </div>
        </div>
        <div class="pop-up-main-section-buttons">
            <button id="changeButton1" class="change-pokemon-button" onclick="showBaseStatsDetails(${pokemonId})">Base Stats</button>
            <button id="changeButton2" class="change-pokemon-button" onclick="showBodyDetails(${pokemonId})">Body</button>
            <button id="changeButton3" class="change-pokemon-button" onclick="showTypeDetails(${pokemonId})">Type</button>
            <button id="changeButton4" class="change-pokemon-button" onclick="showAbilitiesDetails(${pokemonId})">Abilities</button>
            <button id="changeButton5" class="change-pokemon-button" onclick="showMovesDetails(${pokemonId})">Moves</button>
        </div>
        <div class="pop-up-main-section">
            <div id="pop-up-pokemon-detail-section">
            </div>
        </div>
    `;
}


async function loadMorePokemon(){
    newPokemonrange = pokemonRange;
    pokemonRange += 12;
    for (let i = newPokemonrange; i < pokemonRange; i++) {
        await downloadURL(i);
    }
    document.getElementById('back-to-top-button').classList.remove('d-none');
}


function navigateToBottom(){
    var element = document.getElementById('underground-button-section');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}


function navigateToHeader(){
    var element = document.getElementById('header');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}


function emptyContainer(){
    const suggestionList = document.getElementById('suggestionList');
    suggestionList.innerHTML = ''; 
}


function loadSearchedPokemonIntoContainer(searchResults){
    searchResults.forEach(pokemon => {
        const listItem = document.createElement('div');
        listItem.innerHTML += `
        <div class="pokemon-main-page">
            <div onclick="showPokemonDetails(${pokemon.id})" class="pokemon-search-page-box">
                <p class="pokemon-main-page-box-id"><b># ${pokemon.id}</b></p>
                <img src="${pokemon.sprites.front_default}">
                <p class="pokemon-name"><b>${pokemon.name}</b></p>
            </div>
        </div>
        `;
        suggestionList.appendChild(listItem);
    });
}