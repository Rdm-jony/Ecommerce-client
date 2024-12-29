import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from './useAxiosPublic';

const axios=useAxiosPublic()
const useGetDataPublic = (key,route,dependecies) => {
   
    const {data,isLoading:loading,refetch}=useQuery({
        queryKey:[key,...dependecies],
        queryFn:async()=>{
            const {data}=await axios.get(route)
            return data;
        }
    })
    return [data,loading,refetch]
};

export default useGetDataPublic;