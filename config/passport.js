const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const User = require("../models/User");

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_REDIRECT_URL,
      },
      function (accessToken, refreshToken, profile, cb) {
        User.findOrCreate(
          {
            oauthId: profile.id,
            oauthType: "Google",
            picture: profile.photos[0].value,
            email: profile.emails[0].value,
            first_name: profile.name.givenName,
            last_name: profile.name.familyName,
          },
          function (err, user) {
            return cb(err, user);
          }
        );
      }
    )
  );

  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: process.env.FACEBOOK_REDIRECT_URL,
      },
      function (accessToken, refreshToken, profile, cb) {
        console.log(profile);

        User.findOrCreate(
          {
            oauthId: profile.id,
            oauthType: "Facebook",
            picture: null,
            email: null,
            first_name: profile.displayName,
            last_name: null,
          },
          function (err, user) {
            return cb(err, user);
          }
        );
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
      done(null, user);
    });
  });
};
