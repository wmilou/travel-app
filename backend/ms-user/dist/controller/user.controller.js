"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_put_service_1 = require("../service/user_services/user_put_service");
const user_get_service_1 = require("../service/user_services/user_get_service");
const user_post_service_1 = require("../service/user_services/user_post_service");
const user_delete_service_1 = require("../service/user_services/user_delete_service");
class UserController {
    serviceGet;
    servicePut;
    servicePost;
    serviceDelete;
    constructor({ serviceGet = new user_get_service_1.UserGetService(), servicePost = new user_post_service_1.UserPostService(), servicePut = new user_put_service_1.UserPutService(), serviceDelete = new user_delete_service_1.UserDeleteService() }) {
        this.serviceGet = serviceGet;
        this.servicePost = servicePost;
        this.servicePut = servicePut;
        this.serviceDelete = serviceDelete;
    }
    async fetchAllUsers() {
        return this.serviceGet.fetchAllUsers();
    }
    async fetchOneUser(idUsers) {
        return this.serviceGet.fetchOneUser(idUsers);
    }
    async registerUser(dataForRegistration) {
        return this.servicePost.registerUser(dataForRegistration);
    }
    async updateUser(idUser, dataUpdate) {
        return this.servicePut.updateUser(idUser, dataUpdate);
    }
    async deleteUser(idUser) {
        return this.serviceDelete.deleteUsers(idUser);
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map