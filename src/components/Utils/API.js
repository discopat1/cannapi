import axios from "axios";

export default {
    findAll: function() {
        return axios.get("http://strainapi.evanbusse.com/yJcuH4v/strains/search/all");
    }
}