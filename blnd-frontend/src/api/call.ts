import axios from "axios";
import { aboutus, hoempage_url } from "./apis";
import { base_api_url } from "./constants";

export const getHomeData = async ()=> {
  "use server";
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${base_api_url}${hoempage_url}`,
    headers: {
       key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate, proxy-revalidate' 
    },
    fetchOptions: { cache: "no-store" },
  };

  try {
    const response = await axios.request(config);
    const data= response?.data.data;
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};


export const getAboutUs = async ()=> {
  "use server";
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${base_api_url}${aboutus}`,
    headers: {
       key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate, proxy-revalidate' 
    },
    fetchOptions: { cache: "no-store" },
  };


  try {
    const response = await axios.request(config);
    const data= response?.data.data;
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};