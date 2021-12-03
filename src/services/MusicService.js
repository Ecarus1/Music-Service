import { useHttp } from "../components/hooks/http.hook";

const useMusicService = () => {
    const {loading, request, error, clearError} = useHttp();

    // constructor() {
    //     this._apiBase = "http://localhost:3000";
    // }
    const _apiBase = "http://localhost:3000";

    // const getResource = async (url) => {
    //     const res = await fetch(`${this._apiBase}${url}`);
    
    //     if (!res.ok) {
    //         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    //     }
            
    //     return await res.json();
    // };

    const getAllTracks = async () => {
        const res = await request(`${_apiBase}/tracks`);
        return res.map(_transformTracks);
    };

    const getAllAlbums = async () => {
        const res = await request(`${_apiBase}/albums`);
        return res.map(_transformAlbums);
    };

    const getCurrentAllTracksInAlbum = async (id) => {
        const res = await request(`${_apiBase}/albums/${id}/tracks`);
        return res.map(_transformTracks);
    };


    //Старый вариант********************************************
    // const getAllTracks = async () => {
    //     const res = await this.getResource("/tracks");
    //     return res.map(this._transformTracks);
    // };

    // const getAllAlbums = async () => {
    //     const res = await this.getResource("/albums");
    //     return res.map(this._transformAlbums);
    // };

    // const getCurrentAllTracksInAlbum = async (id) => {
    //     const res = await this.getResource(`/albums/${id}/tracks`);
    //     return res.map(this._transformTracks);
    // };

    const _transformTracks = (char) => {
        return {
            id: char.id,
            albumId: char.albumId,
            title: char.title,
            artist: char.artist,
            imgSrc: char.imgSrc,
            src: char.src,
            status: char.status
        };
    };

    const _transformAlbums = (char) => {
        return {
            id: char.id,
            title: char.title,
            imgSrc: char.imgSrc
        };
    };

    return {loading, error, getAllTracks, getAllAlbums, clearError, getCurrentAllTracksInAlbum};
};

// const musicService = new MusicService();
export default useMusicService;