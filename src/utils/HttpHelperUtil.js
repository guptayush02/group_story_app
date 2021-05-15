import axios from "axios";
import { AsyncStorage } from "react-native";
// import getEnvVars from "../../config/environment";
import { actions as appActions } from '../modules/app.module';
import { authService } from '../services/auth.service';

// const ENV = getEnvVars();
const baseUrl = 'http://localhost:3000/api/';

async function getSessAuthHeader() {
  try {
    const me = await AsyncStorage.getItem("me");
    if (me) {
      const sessionId = JSON.parse(me).session.id;
      if (!!sessionId) {
        return `Bearer ${sessionId}`;
      } else {
        return `Bearer no-token`;
      }
    }
  } catch (err) {
    console.log("err--->", err);
  }
}

const instanceWithoutAuthHeader = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const instanceWithAuthHeader = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: getSessAuthHeader(),
  },
});

function handleResponse(response) {
  if (response.status === 404) {
    authService.logout();
  }
  if (!response.ok) {
    if (response.status === 401) {
      authService.logout();
    }
  }
  return response.data;
}

function handleError(error) {
  console.log("This is the error ------------------->", error);
  return error.response?.data?.errors;
}

const HttpHelperUtil = {
  get: function (url) {
    return instanceWithoutAuthHeader
      .get(`${url}`)
      .then(handleResponse)
      .catch(handleError);
  },
  getParam: function (url, body) {
    return instanceWithoutAuthHeader
      .get(`${url}`, {
        params: body,
      })
      .then(handleResponse)
      .catch(handleError);
  },
  postWithoutAuth: function (url, payload) {
    return instanceWithoutAuthHeader
      .post(`${url}`, payload)
      .then(handleResponse)
      .catch(handleError);
  },
  getWithAuthAndWithoutBody: async function (url) {
    return instanceWithAuthHeader
      .get(`${url}`, {
        headers: {
          Authorization: await getSessAuthHeader()
        },
      })
      .then(handleResponse)
      .catch(handleError);
  },
  getWithAuthParam: async function (url, body) {
    return instanceWithAuthHeader
      .get(`${url}`, {
        params: body,
        headers: {
          Authorization: await getSessAuthHeader()
        }
      })
      .then(handleResponse)
      .catch(handleError);
  },
  postWithAuthParam: async function (url, body) {
    return instanceWithAuthHeader
      .post(url, body, {
        headers: {
          Authorization: await getSessAuthHeader()
        },
      })
      .then(handleResponse)
      .catch(handleError);
  },
  putWithAuthParams: async function (url, body) {
    return instanceWithAuthHeader
      .put(url, body, {
        headers: {
          Authorization: await getSessAuthHeader()
        },
      })
      .then(handleResponse)
      .catch(handleError);
  }
};

module.exports = HttpHelperUtil;
