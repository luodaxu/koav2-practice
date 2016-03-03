export default function() {
    return async function(ctx, next) {
        if(ctx.isAuthenticated()) {
            await next();
        } else {
            ctx.redirect('/login');
        }
    }
}
