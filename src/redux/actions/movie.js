import request from "../../configs/axios";
import { FETCH_MOVIE_LIST , FETCH_MOVIE_DETAIL } from "../constants/movieConstant";
import createAction from "./index"

export const fetchMovie = (param) => {
    return async (dispatch) => {
        try {
            const res = await request({
                method: "GET",
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=${param.page}&soPhanTuTrenTrang=${param.pageSize}`
            })
            console.log(res.data);
            dispatch(createAction(FETCH_MOVIE_LIST, res.data))
        } catch (error) {
            console.log(error);
        }
    }
}
export const fetchMovieDetail = (movieId) => {
    return async (dispatch) => {
        try {
            const res = await request({
                method: "GET",
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`
            })
            console.log(res.data);
            dispatch(createAction(FETCH_MOVIE_DETAIL, res.data));
        } catch (err) {
            console.log(err);
        }
    }

};