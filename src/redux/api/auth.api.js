import { Api } from ".";


const AuthApi = Api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.query({})
    })
});

export const { useLoginQuery } = AuthApi;