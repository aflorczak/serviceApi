import app from './app.js';

app.set("PORT", process.env.PORT || 8080);
app.set("NODE_ENV", process.env.NODE_ENV || 'production');

app.listen(app.get('PORT'), () => {
    console.log(
`
Server running:
    - PORT: ${app.get('PORT')}
    - NODE_ENV: ${app.get('NODE_ENV')}
`
    );
});