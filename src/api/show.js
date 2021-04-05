import axios from 'axios';

const showApi = axios.create({
  baseURL: 'http://localhost:3090',
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1heXJvbkB0ZXN0LmNvbSIsInBhc3N3b3JkIjoiMTIzNDU2IiwiaWF0IjoxNjE3NjMzNTExLCJleHAiOjE2MTc2NTE1MTF9.iZ2zy9N94GkrGYLoRTIJy2s26dEtVLZF0uA0nfcUAuk',
  },
});

export { showApi };