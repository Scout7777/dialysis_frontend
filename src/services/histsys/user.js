import { request } from 'umi';
import { toQueryString, toSearchPayload } from './utils';
import technicalPosition from './static_files/user_technical_position';

export async function currentUser() {
  return request('/api/users/me', {
    method: 'GET',
  }).then((response) => {
    // console.log(response)
    return response.data;
  });
}

export async function login({ username, password }) {
  return request('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { username, password },
  });
}

export async function pageUser(payload) {
  // const { params: { pageSize = 20, current = 1 } = {}, sort, filter } = payload
  return request(`/api/users/page?${toQueryString(payload)}`, {
    method: 'GET',
  }).then((response) => {
    return {
      data: response.data.content || [],
      success: true,
      total: response.data.totalElements || 0,
    };
  });
}

export async function searchUser(payload) {
  // console.log(payload);
  // const { params: { pageSize = 20, current = 1 } = {}, sort, filter } = payload
  return request(`/api/users/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: toSearchPayload(payload),
  }).then((response) => {
    return {
      data: response.data.content || [],
      success: true,
      total: response.data.totalElements || 0,
    };
  });
}

export async function createUser(values) {
  return request('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}

export async function updateUser(id, values) {
  return request(`/api/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...values },
  });
}

export async function deleteUser(id) {
  return request(`/api/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function listTechnicalPosition() {
  return technicalPosition;
}
