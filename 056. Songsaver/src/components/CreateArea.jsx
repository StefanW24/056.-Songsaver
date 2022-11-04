import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';



function CreateArea(props) {
    const [song, setSong] = useState({
        songTitle: "",
        songArtist: "",
        genre: "",
        rating: "",
        id: ""

    });

    function handleChange(event) {
        const { name, value } = event.target

        setSong(prevSong => {
            return {
                ...prevSong,
                [name]: value
            }
        })
    }


    function submitSong(event) {

        const newId = uuidv4()


        setSong(prevSong => {
            return {
                ...prevSong,
                id: newId
            }
        })

        event.preventDefault();
        props.onAdd(song);



    }
    return <nav>
        <form>
            <input
                name="songTitle"
                placeholder="Song Title"
                value={song.songTitle}
                onChange={handleChange}
            />
            <input
                name="songArtist"
                placeholder="Artist Name"
                value={song.songArtist}
                onChange={handleChange}
            />
            <select required
                name="genre"
                value={song.genre}
                onChange={handleChange}>
                <option value="">Choose Genre</option>
                <option value="Rock">Rock</option>
                <option value="HipHop">Hiphop</option>
                <option value="Folk">Folk</option>
            </select>
            <select placeholder="Rating"
                name="rating"
                value={song.rating}
                onChange={handleChange}>
                <option value="">Choose Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button onClick={submitSong}>Submit</button>
        </form>
    </nav>
}
export default CreateArea