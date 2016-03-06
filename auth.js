import passport from 'koa-passport';
import passport_local from 'passport-local';

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser(function (username, done) {
    done(null, {name: username});
});

var LocalStrategy= passport_local.Strategy;
passport.use(new LocalStrategy(
    (username, password, done) => {
        let user = await
        if(username === 'luodaxu' && password === '123456') {
            return done(null, {name: username});
        }
        return done(null, false, {message: 'Incorrect username or password'});
    }
));
