import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
    selectedCategory: null,
    isLoading: false,
};

export const select = createAsyncThunk(
    "category/select",
    item => item
)

const categorySlide = createSlice({
    name: 'category',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(select.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(select.fulfilled, (state, action) => {
                state.selected = action.payload;
            })
            .addCase(select.rejected, (state, { payload }) => {
                state.error = payload?.error;
            })
    }
})

const { reducer } = categorySlide;

export default reducer;