const Controller = require('egg').Controller;

class BaseController extends Controller {
    success(data, status = 200) {
        this.ctx.status = status;
        this.ctx.body = {
            code: status,
            message: 'success',
            data: data
        }
    }

    failed(data, message, status = 500) {
        this.ctx.status = status;
        this.ctx.body = {
            code: status,
            message: message,
            data: data,
        }
    }
}

module.exports = BaseController;