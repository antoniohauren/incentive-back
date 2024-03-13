import crypto from "node:crypto";

export function generateSalt() {
  return crypto.randomBytes(16).toString("hex");
}

export function generateHash(input: string, salt: string) {
  return crypto.pbkdf2Sync(input, salt, 100, 64, "sha512").toString("hex");
}

export function isValidHash(input: string, salt: string, hash: string) {
  const hashed = generateHash(input, salt);

  return hashed === hash;
}
