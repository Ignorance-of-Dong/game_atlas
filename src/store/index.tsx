import { observable, action } from 'mobx'

class Common {
    @observable userInfo: any = {}

    @action.bound
    getUserInfo(info): void {
        console.log(info)
        this.userInfo = info;
    }
}

export default new Common()