/**
 * @TODO: Define all the actions (creator) for the users state
 */

import api from '../../utils/api';

export const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

export function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

export function asyncRegisterUser({ id, name, password }) {
  return async () => {
    try {
      await api.register({ id, name, password });
    } catch (error) {
      alert(error.message);
    }
  };
}
