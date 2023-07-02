import { useState, useEffect } from "react";
import { type IUser } from "../../modals";

interface AuthHookResult {
  isAuthenticated: boolean;
  user: IUser | null;
  logout: () => void;
}

export const useIsAuthenticated = (): AuthHookResult => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Check if the user is authenticated on component mount
  useEffect(() => {
    const checkAuthentication = (): void => {
      // Add your logic here to check if the user is authenticated,
      // such as verifying the presence of an access token or a valid session.
      // You can also make an API call to validate the token on the server.

      // For demonstration purposes, let's assume localStorage contains
      // a "accessToken" key if the user is authenticated.
      const accessToken = localStorage.getItem("accessToken");
      const authenticated = !(accessToken == null); // Convert to boolean

      setIsAuthenticated(authenticated);

      if (authenticated) {
        // Fetch user data if needed and store it in the user state
        fetchUserData();
      }
    };

    checkAuthentication();
  }, []);

  // Fetch user data from the API
  const fetchUserData = (): void => {
    // Make an API request to fetch user data using the access token
    // and store it in the user state
    // Example:
    // fetch('/api/user', {
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    // })
    //   .then(response => response.json())
    //   .then(data => setUser(data))
    //   .catch(error => console.error(error));
    // Note: Replace '/api/user' with your actual API endpoint

    // For demonstration purposes, let's assume the user data is stored
    // in localStorage under the "userData" key
    const userData = localStorage.getItem("userData");

    if (userData !== null) {
      setUser(JSON.parse(userData));
    }
  };

  // Perform the logout action
  const logout = (): void => {
    // Add your logout logic here, such as clearing the access token,
    // removing user data from localStorage, etc.
    // Example:
    // localStorage.removeItem('accessToken');
    // localStorage.removeItem('userData');
    // setIsAuthenticated(false);
    // setUser(null);

    // For demonstration purposes, let's assume we clear the localStorage
    // and reset the state.
    localStorage.clear();
    setIsAuthenticated(false);
    setUser(null);
  };

  return { isAuthenticated, user, logout };
};
