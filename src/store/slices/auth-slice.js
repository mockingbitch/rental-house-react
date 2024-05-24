import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {LoginService} from '@/services/auth-service.js';
import Cookies from 'js-cookie';

const initialState = {
    user : {
        access_token : Cookies.get('token'),
        user : {}
    },
    error : {
        fields: []
    },
    isLoggedIn : false,
    isLoading : false
};

export const login = createAsyncThunk(
    "auth/login",
    async ({email, password}, { rejectWithValue }) => {
        try {
            return await LoginService({email, password});
        } catch (_err) {
            return rejectWithValue({ error: _err?.response?.data?.error });
        }
    }
)

// export const logout = createAsyncThunk(
//     "auth/logout",
//     async (token) => {
//         try {
//             return await LogoutService(token);
//         } catch (error) {
//             return error
//         }
//     }
// )

const authSlide = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(login.fulfilled, (state, action) => {
                state.user.access_token = action?.payload?.data?.token;
                Cookies.set('token', action?.payload?.data?.token);
            }).addCase(login.rejected, (state, { payload }) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            state.error = payload?.error;
            state.isLoggedIn = false;
            state.isLoading = false;
        })
        // [login.fulfilled]: (state, action) => {
        //     state.user = action.payload ;
        //     state.isLoggedIn = true;
        // },
        // [logout.fulfilled]: (state, action) => {
        //     state.user = null;
        //     state.isLoggedIn = false;
        // }
    }
})

const { reducer } = authSlide;

export default reducer;