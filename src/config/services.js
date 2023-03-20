import { AxiosInstance } from './config';


export const getLandingPageData = () => {
    return AxiosInstance.get('/getAllLandingPageData');
}

export const getPlacementData = () => {
    return AxiosInstance.get('/getPlacementsData');
}

export const getPlacementsNotifications = () => {
    return AxiosInstance.get('/getPlacementsNotifications');
}

export const getDepartmentsData = () => {
    return AxiosInstance.get('/getDepartmentsData');
}

export const registerPlacementData = (data) => {
    return AxiosInstance.post('/placementRegistration',data);
}