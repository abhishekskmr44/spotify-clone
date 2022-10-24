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
       
        getSongsByGenre: builder.query({query:(genre=>`/charts/
        genre-world?genre_code=${genre}`)}),
        
        getSongDetails:builder.query({query:({songid})=>`/
        tracks/details?track_id=${songid}`}),
        
        getSongRelated: builder.query({query:(songid)=>`
        /tracks/realted?track_id${songid}`}),
        
        getArtistsDetails:builder.query({query:(artistId)=>`
        artists/details?artist_id=${artistId}`}),
        
        getSongsByCountry: builder.query({query:(countryCode)=>`/
        charts/country?country_code=${countryCode}`})
        
        getSongsBySearch: builder.query({query:(searchTerm)=>`/
        search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`})
      }),
    });

    export const {
        useGetTopChartsQuery,
        useGetSongDetailsQuery,
        useGetSongRelatedQuery,
        useGetArtistsDetailsQuery,
        useGetSongsByCountryQuery,
        useGetSongsByGenreQuery,
        useGetSongsBySearchQuery
    } = shazamCoreApi;
