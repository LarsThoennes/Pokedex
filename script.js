let currentPokemon = [];
let searchPokemons = [];
let pokemonRange = 19;
let AUDIO_OPENCARD = new Audio('audio/openCard.wav');
let AUDIO_CLICKBUTTON = new Audio('audio/clickButton.ogg');


async function init() {
    await includeHTML();
    await loadMainPage();
    await loadSearchPokemons();
}

async function loadMainPage() {
    await PokemonIntoJson();
}


function renderPokemon(pokemonData) {
    let mainContainer = document.getElementById('main-container');    
    mainContainer.innerHTML += generatePokemonHTML(pokemonData);
}


function generatePokemonHTML(pokemonData){
    const pokemonId = pokemonData.id;
    return `<div class="pokemon-main-page">
                <div onclick="showPokemonDetails(${pokemonId})" class="pokemon-main-page-box">
                    <p class="pokemon-main-page-box-id"><b># ${pokemonData.id}</b></p>
                    <img src="${pokemonData.sprites.front_default}">
                    <p class="pokemon-name"><b>${pokemonData.name}</b></p>
                </div>
            </div>
            `;
}


function showShinyPokemon(pokemonId){
    playClickButtonAudio();
    changeNormalPokemonImg(pokemonId);
    changeShinyButton();
}


function showNormalPokemon(pokemonId){
    playClickButtonAudio();
    changeShinyPokemonImg(pokemonId);
    changeNormalButton();
}


function showPokemonDetails(pokemonId){
    openDetails();
    playOpenCardAudio();
    loadPopUpCard(pokemonId);
    showBaseStatsDetails(pokemonId);
}


async function loadSearchPokemons(){
    loadCompletePokedex();
}


async function updateSuggestions() {
    const searchQuery = document.getElementById('searchQuery').value.toLowerCase();
    if (searchQuery.trim() === ''){
        clearSuggestions();
        return;
    }
    const searchResults = searchPokemons.filter(pokemon => (pokemon.name.includes(searchQuery) || String(pokemon.id).includes(searchQuery)));
    emptyContainer();
    loadSearchedPokemonIntoContainer(searchResults);
}


function clearSuggestions() {
    const suggestionList = document.getElementById('suggestionList');
    suggestionList.innerHTML = '';
}


function searchPokemon() {
    const searchQuery = document.getElementById('searchQuery').value.toLowerCase();
}


function showBaseStatsDetails(pokemonId){
    baseStatsButton();
    playClickButtonAudio();
    loadPokemonBaseStatsDetails(pokemonId);
}


function showBodyDetails(pokemonId){
    bodyButton();
    playClickButtonAudio();
    loadPokemonBodyDeatils(pokemonId);
}


function showTypeDetails(pokemonId){
    typeButton();
    playClickButtonAudio();
    loadPokemonTypeDetails(pokemonId);
}


function showAbilitiesDetails(pokemonId){
    abilitiesButton();
    playClickButtonAudio();
    loadPokemonAbilitiesDetails(pokemonId);
}


function showMovesDetails(pokemonId){
    moveButton();
    playClickButtonAudio();
    loadPokemonMovesDetails(pokemonId);
}


async function increasePokemonRange() {
    await loadMorePokemon();
    navigateToBottom();
}


function navigateToTop(){
   navigateToHeader();
}
