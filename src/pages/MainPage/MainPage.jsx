import { useState } from "react";
import tracksList from "../../assets/tracksList";
import style from "./mainPage.module.scss";
import Track from "../../components/Track/Track";
import { Input } from "@mui/material";

const runSearch = (query) => {
    if (!query) {
        return tracksList;
    }
    const lowerCaseQuery = query.toLowerCase();
    return tracksList.filter((track) =>
        track.title.toLocaleLowerCase().includes(lowerCaseQuery) ||
        track.artists.toLocaleLowerCase().includes(lowerCaseQuery)
    );
}

const MainPage = () => {
    const [tracks, setTracks] = useState(tracksList);
    const handleChange = (event) => {
        const foundTracks = runSearch(event.target.value);
        setTracks(foundTracks);
    }
    return (
        <div className={style.search}>
            <Input className={style.input} placeholder="Пошук треків" onChange={handleChange} />
            <div className={style.list}>
                {tracks.map((track) => (
                    <Track key={track.id} {...track} />
                ))}
            </div>
        </div>
    );
};

export default MainPage;