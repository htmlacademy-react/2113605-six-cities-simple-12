import { NameSpace } from '../../consts';
import { ReviewType } from '../../types/index';
import { State } from '../../types/process-state';

export const getReviews = (state: State): ReviewType[] => state[NameSpace.Reviews].reviews;
export const setReviews = (state: State): ReviewType[] => state[NameSpace.Reviews].reviews;
export const getLoadingStatus = (state: State): boolean => state[NameSpace.Reviews].isReviewLoading;
