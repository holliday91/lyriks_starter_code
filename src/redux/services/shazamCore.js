import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                headers.set(X-RapidAPI-Key, 'fec8f86788msha352c5d97710683p1ed878jsne3187544bce3');

                return headers;
            }
        }), 
        endpoints: (builder) => ({
            getTopCharts: builder.query({query: () => '/charts/world'})
        }),
    });

    export const {
        useGetTopChartsQuery,
    } = shazamCoreApi;