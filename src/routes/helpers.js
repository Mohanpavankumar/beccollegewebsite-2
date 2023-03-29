export const getDeptFromUrl = (search) => {
    const params = search.includes('/departments') ? search.split('/')[2] : ""
    return params
}

