import { httpService } from "./httpServices";

const userApi = {
    getUsers: (input) => {
        return httpService.GET({
            uri: "api/user/all", params: {
                page: 0,
                limit: 10,
                // limit: inputLimit,
                column: "role",
                columnDir: "DESC",
                search: input,
            }
        });
    },
    getDetailUser: (uuid) => {
        return httpService.GET({
            uri: `/api/user/${uuid}`
        });
    },
    createUser: (request) => {
        return httpService.POST({
            uri: "api/user/create", request
        })
    },
    editUser: (request) => {
        return  httpService.POST({
            uri: "api/user/update", request
        });
    },
    deleteUser: (request) => {
        return httpService.DELETE({
            uri: "api/user/delete", request   
        });
    },
}

export default userApi

