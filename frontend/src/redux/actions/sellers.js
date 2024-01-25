import axios from "axios";
import { server } from "../../server";

// get all sellers --- admin
export const getAllSellers = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllSellersRequest",
    });

    const { data } = await axios.get(`${server}/shop/admin-all-sellers`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllSellersSuccess",
      payload: data.sellers,
    });
  } catch (error) {
    dispatch({
      type: "getAllSellerFailed",
    //   payload: error.response.data.message,
    });
  }
};


// Activate seller --- admin
export const activateSeller = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "activateSellerRequest",
    });

    const { data } = await axios.put(
      `${server}/shop/activate-seller/${id}`,
      {},
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "activateSellerSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "activateSellerFailed",
      payload: error.response.data.message,
    });
  }
};