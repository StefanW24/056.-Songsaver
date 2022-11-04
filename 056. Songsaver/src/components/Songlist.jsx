import React from 'react'

function SongList(props) {

    function handleClick(id) {
        props.onDelete(id)
    }

    return <tbody>

        {
            props.songs.map((songItem, index) => {
                return <tr onClick={() => handleClick(songItem.id)} key={songItem.id}>
                    <td>{songItem.songTitle}</td>
                    <td>{songItem.songArtist}</td>
                    <td>{songItem.genre}</td>
                    <td>{songItem.rating}</td>
                </tr>
            })
        }


    </tbody>
}

export default SongList