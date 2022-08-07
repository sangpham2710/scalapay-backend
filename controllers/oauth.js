import jwt from "jsonwebtoken";
import secretToken from "../data/secretToken.js";

let refreshTokens = {};
export default {
  authorize: (req, res) => {
    const clientId = req.query.clientId;
    const redirectUri = req.query.redirect_uri;
    res.redirect(
      `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`
    );
  },

  token: (req, res) => {
    const redirectUri = req.query.redirect_uri;
    const grantType = req.query.grant_type;
    if (grantType === "authorization_code") {
      const code = req.query.code;
      const accessToken = jwt.sign(
        { code: code },
        secretToken.accessTokenSecret,
        {
          expiresIn: 900,
        }
      );
      const refreshToken = jwt.sign(
        { code: code },
        secretToken.refreshTokenSecret,
        {
          expiresIn: 86400,
        }
      );
      const response = {
        acessToken: accessToken,
        refreshToken: refreshToken,
        token_type: "bearer",
        exprires_in: 900,
        scope: "audit",
      };
      refreshTokens[refreshToken] = response;
      res.json(response);
    }

    if (grantType === "refresh_token") {
      const refreshToken = req.query.refresh_token;
      if (refreshTokens && refreshToken in refreshTokens) {
        const accessToken = jwt.sign(
          { refreshToken: refreshTokens[refreshToken].accessToken },
          secretToken.accessTokenSecret,
          {
            expiresIn: 900,
          }
        );
        refreshTokens[refreshToken].accessToken = accessToken;
        const response = {
          acessToken: accessToken,
          refreshToken: refreshToken,
          token_type: "bearer",
          exprires_in: 900,
          scope: "audit",
        };
        res.json(response);
      } else {
        res.send("Refresh token exriped");
      }
    }
  },
};
