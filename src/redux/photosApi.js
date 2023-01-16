import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const photosApi = createApi({
    reducerPath: 'photosApi',
    tagTypes: ['Photos'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    endpoints: (build) =>({
        getPhotos: build.query({
            query: (limit = '') => `photos?${limit && `_limit=${limit}`}`,
            providesTags: (result) => result ? [
                ...result.map(({id}) => ({ type: 'Photos', id})),
                {type: 'Photos', id: 'LIST'},

            ]:[
                {type: 'Photos', id: 'LIST'}
            ],
        }),


    })
})

export const {useGetPhotosQuery} = photosApi;