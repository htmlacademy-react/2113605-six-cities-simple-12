import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, LocationApp } from '../consts';
import { redirect } from './action';
import {
  AuthDataType,
  UserDataType,
  OfferType,
  ReviewType,
  NewReview,
} from '../types';
import { State, AppDispatch } from '../types/process-state';
import { dropToken, saveToken } from '../services/token';

export const fetchOffersAction = createAsyncThunk<
  OfferType[],
  undefined,
  {
    state: State;
    extra: AxiosInstance;
  }
>('data/loadOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<OfferType[]>(APIRoute.Offers);
  return data;
});

export const fetchCurrentOfferAction = createAsyncThunk<
  OfferType,
  OfferType['id'],
  {
    state: State;
    extra: AxiosInstance;
  }
>('data/loadCurrentOffer', async (currentOffer, { extra: api }) => {
  const { data } = await api.get<OfferType>(
    `${APIRoute.Offers}/${currentOffer}`
  );
  return data;
});

export const fetchNearOffersAction = createAsyncThunk<
  OfferType[],
  OfferType['id'],
  {
    state: State;
    extra: AxiosInstance;
  }
>('data/loadNearOffers', async (currentOffer, { extra: api }) => {
  const { data } = await api.get<OfferType[]>(
    `${APIRoute.Offers}/${currentOffer}/nearby`
  );
  return data;
});

export const fetchReviewsAction = createAsyncThunk<
  ReviewType[],
  OfferType['id'],
  {
    state: State;
    extra: AxiosInstance;
  }
>('data/loadReviews', async (currentOffer, { extra: api }) => {
  const { data } = await api.get<ReviewType[]>(
    `${APIRoute.Reviews}/${currentOffer}`
  );
  return data;
});

export const addReviewAction = createAsyncThunk<
  ReviewType[],
  NewReview,
  {
    state: State;
    extra: AxiosInstance;
  }
>('data/setNewReview', async ({ id, comment, rating }, { extra: api }) => {
  const { data } = await api.post<ReviewType[]>(`${APIRoute.Reviews}/${id}`, {
    comment,
    rating,
  });
  return data;
});

export const checkAuthAction = createAsyncThunk<
  UserDataType,
  undefined,
  {
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { extra: api }) => {
  const { data } = await api.get<UserDataType>(APIRoute.Login);
  return data;
});

export const loginAction = createAsyncThunk<
  UserDataType,
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
    saveToken(data.token);
    dispatch(redirect(LocationApp.Main));
    return data;
  }
);

export const logOutAction = createAsyncThunk<
  void,
  undefined,
  {
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
});
