export class GithubService {
  getUserInfo(userName) {
    return fetch(`https://api.github.com/users/${userName}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(`Looks like there was a problem. Status Code: ${response.status}`);
        }
        return response.json();
      });
  }
}
