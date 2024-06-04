import axios from "axios";

export const checkDiscord = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_CHECKDC_URL}/check-discord`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching the referrer check:", error);
    return null;
  }
};
