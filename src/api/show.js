import axios from 'axios';

const showApi = axios.create({
  baseURL: ' http://10.0.2.2:3090',
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbXBhaW9tYXJjZWxvQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoic2VjcmV0byIsImlhdCI6MTYxNzczNTg3NywiZXhwIjoxNjE3NzUzODc3fQ.duZ0D_9H6sikqGMT96DZUS7QXLeLd8UlG1rR0xoEXis',
  },
});

export { showApi };