
const client_id = import.meta.env.VITE_GITHUB_CLIENT_ID
const redirect_uri = import.meta.env.VITE_GITHUB_CALLBACK

export const githubOauthLogin = `
    https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}
    `