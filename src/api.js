const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const API_ENDPOINTS = {
  contacts: `${API_BASE_URL}/contacts`,
  blog: `${API_BASE_URL}/posts`,
  jobs: `${API_BASE_URL}/jobs`,
  auth: `${API_BASE_URL}/auth/login`,
};

export const CONFIG = {
  googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  phoneNumber: process.env.REACT_APP_PHONE_NUMBER,
};