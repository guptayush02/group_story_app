import axios from "axios";
import { AsyncStorage } from "react-native";
import HttpHelper from "../utils/HttpHelperUtil";

function login(body) {
  console.log("body-->", body);
  return new Promise((resolve, reject) => {
    HttpHelper.postWithoutAuth("authenticate", body).then((res, err) => {
      if (err) return reject(err);
      return resolve(res);
    })
  })
};

export const authService = {
  login
};