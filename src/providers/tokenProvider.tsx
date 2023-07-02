import React from "react";
import axiosClient from "../api/axiosClient";

interface ITokenProviderProps {
  children: React.ReactNode;
}

const TokenProvider = ({ children }: ITokenProviderProps): React.ReactElement => {
  const account = null; // Replace with your account or authentication logic

  axiosClient.interceptors.request.use(async (config) => {
    if (account !== null) {
      try {
        // Replace this code with your authentication logic to get the access token
        const accessToken = await getAccessToken();

        const bearer = `Bearer ${accessToken}`;
        config.headers.Authorization = bearer;
      } catch (e) {
        console.log(e);
        // Handle error if unable to get the access token
      }
    }

    return config;
  });

  return <>{children}</>;
};

export default TokenProvider;

const getAccessToken = async (): Promise<string> => {
  // Simulate an asynchronous operation to fetch the access token
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Replace this with your actual logic to obtain the access token
  // const accessToken = "your-access-token";
  const accessToken = generateFakeJwtV2Token({
    sub: "user123",
    name: "John Doe",
    role: "admin",
  });

  return accessToken;
};

interface JwtV2Header {
  alg: string;
  typ: string;
}

const generateFakeJwtV2Token = (payload: object): string => {
  const header: JwtV2Header = {
    alg: "HS256",
    typ: "JWT",
  };

  // Encode the header and payload
  const encodedHeader = Buffer.from(JSON.stringify(header)).toString("base64");
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString("base64");

  // Generate a fake signature (for demonstration purposes only)
  const signature = "fake_signature";

  // Concatenate the encoded header, payload, and signature with dots
  const token = `${encodedHeader}.${encodedPayload}.${signature}`;

  return token;
};
