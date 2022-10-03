import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';
  



    export const shazamCoreApi = createApi({
       reducerPath: 'shazamCoreApi',
       baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1/',
        prepareHeaders:(headers) => {
            headers.set('X-RapidAPI-Key','b79f73c914mshd23be6f582e9cfep1a0a19jsnb75e1940d5f4');

            return headers;
        },
    }),
      endpoints: (builder) => ({
        getTopCharts: builder.query({query:()=>
            '/charts/world'}),
      }),
    });

    export const {
        useGetTopChartsQuery,
    } = shazamCoreApi;
