import React from 'react';
import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import appURLs from './appURLs';

const httpClient = axios.create();

export function setDefaultHeader(token,value) {
    httpClient.defaults.headers.common['Authorization'] = 'Bearer '+value;
}
export async function apiCall(
    method,
    url,
    data,
    header = {
        'Accept': 'application/json',
    },
) {
    const noNetdata = {
        data : { 
            message: 'Please check your internet connection',
            code: 400
        }
    };
    try {
        const netInfo = await NetInfo.fetch();
        if (netInfo.isConnected) {
            console.log(appURLs.baseUrl+url, data, header);
            const res = await httpClient({
                method,
                url,
                baseURL: `${appURLs.baseUrl}`,
                data: data,
                headers: header,
                withCredentials: false,
            });
            console.log("RESS>>>>>>>", res);
            return res;
        } else {
            return noNetdata;
        }
    } catch (error) {
        console.log("Some of api error : == ", url, "   Err is " ,error.response.data)
        if (error.response.status == "404"){
            return ({data: {message: "Unable to connect to server."}})
        }
        else if (error.response.data) {
            const data = error.response.data;
            return {data};
        }
        else {
            return error;
        }
    }
}
