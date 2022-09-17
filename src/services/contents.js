import axios from "axios";

class ContentsService {

    getAll(page = 0) {
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/contents`);
    }

}

export default new ContentsService();
