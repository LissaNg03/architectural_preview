/** @format */

const API_URL = import.meta.env.VITE_BASE_URL;
import axios from "../pages/admin/api/axios";

const fetchDesign = async (id) => {
	try {
		const design = await axios.get(`${API_URL}/api/design/${id}`);
		return design.data;
	} catch (error) {
		return Promise.reject(error);
		// console.log(error);
	}
};

export default fetchDesign;
