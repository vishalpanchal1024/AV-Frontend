import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseUrl = "";

const baseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers, { getState }) => {


        headers.set("content-type", "application/json")
        headers.set("Accept", "application/json")
    }
})


export const Api = createApi({
    reducerPath: "api",
    baseQuery,
    endpoints: () => ({}),
    tagtype: [""]
})