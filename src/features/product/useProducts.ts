import { axiosInstance } from "@/libs/axios/axiosInstance"
import { useQuery } from "@tanstack/react-query"

export const useProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            try {
                const response = await axiosInstance.get("/products")
                return response.data.products
            } catch (err) {
                if (err) {
                    console.log(err)
                }
            }
        }
    })
}