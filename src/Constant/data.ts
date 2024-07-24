import { v4 as uuidv4 } from "uuid";

export const data = { name: "test@gmail.com", password: "12345" };
export const generateUUID = (): string => {
  return uuidv4();
};

// git checkout gh-pages
// git rm -rf .
// git commit -m "Clean gh-pages branch"
// git push origin gh-pages
// git checkout main

// git config --global user.name "Your Name"
// git config --global user.email "you@example.com"
// npm install gh-pages --save-dev
