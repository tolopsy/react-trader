import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rawBaseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:4000/' });