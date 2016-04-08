import passport from 'koa-passport';
import passport_local from 'passport-local';
import User from './models/user';
import co from 'co';

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id,done);
});

var LocalStrategy= passport_local.Strategy;
passport.use(new LocalStrategy(async function(username, password, done){
        let user = await User.getExistUser(username, password);
        if(user) {
            done(null, user);
        } else {
            done(null, false);
        }
}));
