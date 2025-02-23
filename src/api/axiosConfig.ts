"use client";

import axios from 'axios';

export const axiosInstance =  axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    withCredentials: true,
});

// finalytics
// finalysis
// fin.in
// tradesight.in
// algowix.com
// quantwix.com
