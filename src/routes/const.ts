
export const AppRoutes = {
    root: '/',
    users: '/users',
}

const baseDataUrl = import.meta.env.VITE_API_URL

export const urls = {
    users: baseDataUrl + '/users',
    usersById: (id: number) => baseDataUrl + '/user' + id,
}