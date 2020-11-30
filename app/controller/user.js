const BaseController = require('../core/base_controller');

class UserController extends BaseController {
    async getUser(name) {
        if (name === null || name === undefined) {
            this.success(null);
            return;
        }

    }

    async login(user) {
        if (!user.username || !user.password) {
            this.failed('', 'username or password is null');
            return
        }
    }
}