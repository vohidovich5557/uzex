import { QueryClient } from "@tanstack/react-query";


export const queryclient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
})