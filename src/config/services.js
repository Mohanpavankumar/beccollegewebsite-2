import { AxiosInstance } from './config';


export const getLandingPageData = () => {
    return AxiosInstance.get('/getAllLandingPageData');
}

export const getPlacementData = () => {
    return AxiosInstance.get('/getPlacementsData');
}

export const getAcademicsData = () => {
    return AxiosInstance.get('/getAcademicsData');

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

<<<<<<< HEAD
export const getDepartmentsGraphData = () => {
    return AxiosInstance.get('/getdeptGraphData');
}
=======
>>>>>>> bab10fe347d17cfe745975edebd1a72c567f3c91
export const uploadImage = (data) => {
    return AxiosInstance.post('/uploadStaffImage', data);
}

export const getStaffImage = () => {
    return AxiosInstance.get('/getStaffImgage')
}
export const getFacilitiesChartData = () => {
    return AxiosInstance.get('/getLibraryGraphData');
}
