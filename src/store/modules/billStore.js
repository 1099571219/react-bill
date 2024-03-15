import { createSlice } from '@reduxjs/toolkit'
import api from '../../apis/api'
const billStore = createSlice({
    name: 'bill',
    initialState: {
        billList: []
    },
    reducers: {
        setBillList(state, action) {
            state.billList = action.payload
        }
    }
})

const { setBillList } = billStore.actions

const asyncGetBillList = () => {
    return async (dispatch) => {
        const res = await api.getBillList()
        dispatch(setBillList(res))
    }
}

export { asyncGetBillList }
const billReducer = billStore.reducer
export default billReducer
