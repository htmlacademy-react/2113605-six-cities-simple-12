import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, LocationApp, AuthorizationStatus } from '../consts';
import {
  loadNearOffers,
  loadOffers,
  loadReviews,
  loadCurrentOffer,
  redirect,
  authorization,
  setLoadingStatus,
  setOfferLoading,
  setReviewLoading,
  getUserData,
} from './action';
import {
  AuthDataType,
  UserDataType,
  OfferType,
  AppDispatch,
  State,
  ReviewType,
  NewReview,
} from '../types';
import { dropToken, saveToken } from '../services/token';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/loadOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setLoadingStatus(true));
  const { data } = await api.get<OfferType[]>(APIRoute.Offers);
  dispatch(setLoadingStatus(false));
  dispatch(loadOffers(data));
});

export const fetchCurrentOfferAction = createAsyncThunk<
  void,
  OfferType['id'],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/loadCurrentOffer', async (currentOffer, { dispatch, extra: api }) => {
  try {
    dispatch(setOfferLoading(true));
    const { data } = await api.get<OfferType>(
      `${APIRoute.Offers}/${currentOffer}`
    );
    dispatch(loadCurrentOffer(data));
    dispatch(setOfferLoading(false));
  } catch {
    dispatch(redirect(LocationApp.notFound));
  }
});

export const fetchReviewsAction = createAsyncThunk<
  void,
  OfferType['id'],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/loadReviews', async (currentOffer, { dispatch, extra: api }) => {
  const { data } = await api.get<ReviewType[]>(
    `${APIRoute.Reviews}/${currentOffer}`
  );
  dispatch(loadReviews(data));
});

export const addReviewAction = createAsyncThunk<
  void,
  NewReview,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/setNewReview',
  async ({ id, comment, rating }, { dispatch, extra: api }) => {
    try {
      dispatch(setReviewLoading(true));
      const { data } = await api.post<ReviewType[]>(
        `${APIRoute.Reviews}/${id}`,
        { comment, rating }
      );
      dispatch(loadReviews(data));
    } finally {
      dispatch(setReviewLoading(false));
    }
  }
);

export const fetchNearOffersAction = createAsyncThunk<
  void,
  OfferType['id'],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/loadNearOffers', async (currentOffer, { dispatch, extra: api }) => {
  const { data } = await api.get<OfferType[]>(
    `${APIRoute.Offers}/${currentOffer}/nearby`
  );
  dispatch(loadNearOffers(data));
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<UserDataType>(APIRoute.Login);
    dispatch(authorization(AuthorizationStatus.Auth));
    dispatch(getUserData(data));
  } catch {
    dispatch(authorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthDataType,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserDataType>(APIRoute.Login, {
      email,
      password,
    });
    const { token } = data;
    saveToken(token);
    dispatch(authorization(AuthorizationStatus.Auth));
    dispatch(redirect(LocationApp.Main));
    dispatch(getUserData(data));
  }
);

export const logOutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(authorization(AuthorizationStatus.NoAuth));
});
