import React, { useState } from "react";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react/cjs/react.production.min";
import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer";
import Header from "./components/Header"
import SongPlaylist from "./components/SongPlaylist";

function App() {

    const [songs, setSongs] = useState([])

    function addSong(song) {
        setSongs(prevSong => {
            return [...prevSong, song]
        })

    }

    function deleteSong(id) {
        const filteredSongs = songs.filter((song) => {
            return song.id !== id;
        })

        setSongs(filteredSongs)

    }

    function sortByTitleAscending() {
        const sortedSongsTitleAsc = [...songs]
        sortedSongsTitleAsc.sort((a, b) => {
            return a.songTitle.localeCompare(b.songTitle);

        })
        console.log(sortedSongsTitleAsc)
        setSongs(sortedSongsTitleAsc)
    }

    function sortByTitleDescending() {
        const sortedSongsTitleDes = [...songs]
        sortedSongsTitleDes.sort((a, b) => {
            return b.songTitle.localeCompare(a.songTitle);

        })
        console.log(sortedSongsTitleDes)
        setSongs(sortedSongsTitleDes)
    }

    function sortByRatingAscending() {
        const sortedSongsRatingAsc = [...songs]
        sortedSongsRatingAsc.sort((a, b) => {
            return a.rating.localeCompare(b.rating);

        })
        console.log(sortedSongsRatingAsc)
        setSongs(sortedSongsRatingAsc)
    }

    function sortByRatingDescending() {
        const sortedSongsRatingDes = [...songs]
        sortedSongsRatingDes.sort((a, b) => {
            return b.rating.localeCompare(a.rating);

        })
        console.log(sortedSongsRatingDes)
        setSongs(sortedSongsRatingDes)
    }


    return (<div>
        <Header />
        <CreateArea
            onAdd={addSong}
        />
        <SongPlaylist songs={songs} onDelete={deleteSong} onSortTitleAsc={sortByTitleAscending} onSortTitleDes={sortByTitleDescending} onSortRatingAsc={sortByRatingAscending} onSortRatingDes={sortByRatingDescending} />
        <Footer />
    </div>
    );
}

export default App;