import { CreateUserType } from '../types';

const USER_KEY = 'user';

const saveUser = (user: CreateUserType) => localStorage
  .setItem(USER_KEY, JSON.stringify(user));

export function createUser(user: CreateUserType) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function getUser() {
  const data = localStorage.getItem(USER_KEY);
  if (data === null) {
    return {};
  }
  const user = JSON.parse(data);
  return user;
}

export function updateUser(updatedUser: CreateUserType) {
  saveUser({ ...updatedUser });
}
