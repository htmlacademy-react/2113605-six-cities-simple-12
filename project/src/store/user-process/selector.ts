import { AuthorizationStatus, NameSpace } from '../../consts';
import { State } from '../../types/process-state';
import { UserDataType } from '../../types/index';

export const getUserData = (state:State): UserDataType | null => state[NameSpace.User].userData;
export const getAuthStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authStatus;

