import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    form: [],
    filtered: [],
    load: false,
    error: null
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        filtered: (state, action) => {
            state.filtered = state.form.filter((e) => e.name.toLowerCase().includes(action.payload.toLowerCase()))
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addform.fulfilled, (state, action) => {
            state.form.push(action.payload)
            state.load = false
        }).addCase(delform.fulfilled, (state, action) => {
            state.form = state.form.filter((e, i) => e.id != action.payload)
            state.load = false
        }).addCase(getform.fulfilled, (state, action) => {
            state.form = action.payload
            state.load = false
        }).addCase(updform.fulfilled, (state, action) => {
            let obj = state.form.find((e) => e.id == action.payload.id)
            obj.name = action.payload.data.name,
                obj.email = action.payload.data.email,
                obj.phone = action.payload.data.phone
            state.load = false


        }).addCase(addform.pending, (state, action) => {
            state.load = true
        })
            .addCase(addform.rejected, (state, action) => {
                state.laod = false
            })
            .addCase(delform.pending, (state, action) => {

                state.load = true
            })
            .addCase(delform.rejected, (state, action) => {
                state.laod = false
            })
            .addCase(getform.pending, (state, action) => {

                state.load = true


            })
            .addCase(getform.rejected, (state, action) => {
                state.load = false
            }).addCase(updform.pending, (state, action) => {

                state.load = true


            })
            .addCase(updform.rejected, (state, action) => {
                state.load = false
            })
    }
})
export const getform = createAsyncThunk(
    'form/get',
    async (thunkAPI) => {
        const data = await axios.get("https://64ccec742eafdcdc851a7719.mockapi.io/users")
        return data.data

    }
)
export const addform = createAsyncThunk(
    'form/add',
    async (thunkAPI) => {
        const data = await axios.post("https://64ccec742eafdcdc851a7719.mockapi.io/users", thunkAPI)
        return data.data
    }
)
export const updform = createAsyncThunk(
    'form/upd',
    async (thunkAPI) => {
        console.log(thunkAPI)
        const data = await axios.put(`https://64ccec742eafdcdc851a7719.mockapi.io/users/${thunkAPI.id}`, thunkAPI.data)
        return thunkAPI

    }
)
export const delform = createAsyncThunk(
    'form/del',
    async (thunkAPI) => {
        const data = await axios.delete(`https://64ccec742eafdcdc851a7719.mockapi.io/users/${thunkAPI}`)
        console.log(data.data)
        return thunkAPI

    }
)

// Action creators are generated for each case reducer function
export const { filtered } = formSlice.actions

export default formSlice.reducer