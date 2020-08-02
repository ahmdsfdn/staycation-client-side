import { FETCH_PAGE } from "../types"
import axios from "config/axios";

export const fetchPage = (url, page) => (dispatch) => {
    axios
    .get(url, {
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
    })
    .then((response) => {
        dispatch({
            type: FETCH_PAGE,
            payload: {
                [page]: response.data,
            },
        })
    })
}
