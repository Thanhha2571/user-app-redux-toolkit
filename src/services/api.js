import { httpService } from "./httpServices";

const userApi = {
    getUsers: () => {
        return httpService.GET({
            uri: "api/user/all", params: {
                page: 0,
                limit: 10,
                // limit: inputLimit,
                column: "role",
                columnDir: "DESC",
                // search: input,
            }
        });
    },
    createUser: (request) => {
        return httpService.POST({
            uri: "api/user/create", request
        })
    }
}

export default userApi