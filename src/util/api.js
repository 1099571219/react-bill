import serviceAxios from "./http"

const getBillList = async () => {
    const res = await serviceAxios.get("/billList")
    return res
}

export default {
    getBillList
}