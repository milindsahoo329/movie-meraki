import axios from "axios";

class PlaylistsService {


    // find(query, by = "title", page = 0) {
    //     return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/movies?${by}=${query}&page=${page}`);
    // }

    getTopPlaylists() {
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/contents/topplaylists`);
    }

    getMyPlaylists(data) {
        return axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/v1/contents/myplaylists`, data);
    }

    createPlaylist(data) {
        return axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/v1/contents/createplaylist`, data);
    }

    addToPlaylist(data) {
        return axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/v1/contents/playlist/add`, data);
    }

    getPlaylistContents(data){
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/contents/playlistcontent/${data}`);
    }

    deletFromPlaylist(data) {
        return axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/v1/contents/playlist/delete`, data);
    }

    // getMovieById(id) {
    //     return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/movies/id/${id}`);
    // }

    // getMovieList(data) {
    //     return axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/v1/movies/list`, data);
    // }

    // createReview(data) {
    //     return axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/v1/movies/review`, data);
    // }

    // editReview(data) {
    //     return axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/v1/movies/review`, data);
    // }

    // deleteReview(data) {
    //     return axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/v1/movies/review`, data);
    // }

}

export default new PlaylistsService();
