import axios from "axios";
type User = { id: number; login: string; password: string };
export const AuthUser = (login: string, password: string) => {
  const isUser = axios
    .get(
      "https://my-json-server.typicode.com/VladislavSakhno13/json-server/users"
    )
    .then((response) => {
      /*response.data.forEach((element: User) => {
        if (element.login === login && element.password === password) {
          console.log(element);
          return element;
        }
        
      });*/
      return response.data;
    })
    .catch((response) => {
      console.error(response);
    });
  return isUser;
};
