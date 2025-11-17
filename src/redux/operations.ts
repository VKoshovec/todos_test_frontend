import axios from "axios";
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from "./boardsSlice";

axios.defaults.baseURL = "<https://todostestbackendr.vercel.app/api>";

export const fetchTasks = () => async (dispatch: (arg0: { payload: any; type: "boards/fetchingInProgress" | "boards/fetchingSuccess" | "boards/fetchingError"; }) => void) => {
  try {
    // Індикатор завантаження
    dispatch(fetchingInProgress());
    // HTTP-запит
    const response = await axios.get("/boards");
    // Обробка даних
    dispatch(fetchingSuccess(response.data));
  } 
//   catch (e) {
//     // Обробка помилки
//     dispatch(fetchingError(e.message));
//   }
};