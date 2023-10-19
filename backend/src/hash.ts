import * as crypto from "crypto";

export const hash = (password) =>
  new Promise((resolve, reject) => {
    const salt = crypto.randomBytes(16).toString("base64");
    crypto.scrypt(password, salt, 64, (err, result) => {
      if (err) reject(err);
      resolve(salt + ":" + result.toString("base64"));
    });
  });

export const verifyPassword = (enteredPassword, storedHash) =>
  new Promise((resolve, reject) => {
    const [salt, storedHashValue] = storedHash.split(":");
    crypto.scrypt(enteredPassword, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      const derivedHash = derivedKey.toString("base64");
      if (derivedHash === storedHashValue) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
