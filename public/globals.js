/*
    This file contains the global variables that should be reached by all files.
*/

var fromApplyFilter = false;
var curTab = 'watchlistTab';
var isAlreadyRun = false;

// Movie and TV Show IDs and their respective genres
var movieGenres = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western"
};

var tvGenres = {
    10759: "Action",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    10762: "Kids",
    9648: "Mystery",
    10763: "News",
    10764: "Reality",
    10765: "Sci-Fi",
    10766: "Soap",
    10767: "Talk",
    10768: "War/Politics",
    37: "Western"
};

// Lists that hold the user's information. Populated from database.
var mainListGenres = [];
var watchlist = [];
var watchedList = [];
var searchList = [];
var mainList = watchlist;