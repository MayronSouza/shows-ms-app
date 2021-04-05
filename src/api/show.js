import axios from 'axios';

const showApi = axios.create({
  baseURL: ' http://10.0.2.2:3090',
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbXBhaW9tYXJjZWxvQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoic2VjcmV0byIsImlhdCI6MTYxNzYzNDkyMywiZXhwIjoxNjE3NjUyOTIzfQ.1XAf83_SKW9zedQq4e2zyVWrlVuiSnRyehzE838VDLw',
  },
});

export { showApi };