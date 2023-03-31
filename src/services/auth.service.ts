import userCredentials from "../utils/userCredentialsMock.json";

interface LoginCredentialsProps {
  email: string;
  password: string;
}

export const login = async ({
  email,
  password,
}: LoginCredentialsProps): Promise<void> => {

  const { user_email, user_password, access_token } = userCredentials

  const signInChecked = email === user_email && password === user_password;

  return new Promise((resolve, reject) => {
    if (signInChecked) resolve(
      localStorage.setItem('user', JSON.stringify({
        email: email,
        accessToken: access_token,
      }))
    );
    else reject();
  });
};

export const logout = async () => {
  localStorage.removeItem('user')
};
