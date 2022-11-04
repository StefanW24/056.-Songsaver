import React from 'react';
import SongList from './Songlist';

function SongPlaylist(props) {

    function handleSortbyAzAscending() {
        props.onSortTitleAsc()
    }

    function handleSortbyAzDescending() {
        props.onSortTitleDes()
    }

    function handleSortbyRatingAscending() {
        props.onSortRatingAsc()
    }

    function handleSortbyRatingDescending() {
        props.onSortRatingDes()
    }




    return <main>
        <table style={{ width: "100%" }}>
            <thead>
                <tr className="song-header">
                    <th className="song-row__item">Song</th>
                    <th className="song-row__item">Artist</th>
                    <th className="song-row__item">Genre</th>
                    <th className="song-row__item">Rating</th>
                </tr>
            </thead>
            <SongList songs={props.songs} onDelete={props.onDelete} />

        </table>

        <div className="sort-container">
            <button onClick={handleSortbyAzAscending} className="sort-button">Sort by A-Z</button >
            <button onClick={handleSortbyAzDescending} className="sort-button">Sort by Z-A</button>
            <button onClick={handleSortbyRatingAscending} className="sort-button">Sort by 1-5</button>
            <button onClick={handleSortbyRatingDescending} className="sort-button">Sort by 5-1</button>
        </div>

        <div className="dropdown-filter-container">
            <select className="dropdown-filter"
                name="rating" >
                <option value="">Choose genre to Filter</option>
                <option value=""></option>
                <option value="Rock">Rock</option>
                <option value="Hiphop">Hiphop</option>
                <option value="Folk">Folk</option>

            </select>
        </div>

    </main>
}

export default SongPlaylist