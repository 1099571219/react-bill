import {serviceAxios} from "@/utils"

const getBillList = async () => {
    const res = await serviceAxios.get("/billList")
    return res
}

export default {
    getBillList
}