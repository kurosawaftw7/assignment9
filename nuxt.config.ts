// https://nuxt.com/docs/api/configuration/nuxt-config
export default 
{   
    css: [
        "~/node_modules/bootstrap/dist/css/bootstrap.min.css"
    ],
    plugins: [
        {src: '~/plugins/bootstrap.js', mode: 'client'}
    ],
}
