import Head from 'next/head'
const HeadContent = ({title}) => {
    return(
    <Head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="x-ua-compatible" content={"ie=edge"} />
        <title>{title} | Bookshop Responsive Bootstrap4 Template</title>
        <meta name="description" content={""} />
        <meta name="viewport" content={"width=device-width, initial-scale=1"}/>    
        {/* Favicons */}
        <link rel="shortcut icon" href="/images/favicon.ico"/>
        <link rel="apple-touch-icon" href="/images/icon.png"/>
        {/* Google font (font-family: 'Roboto', sans-serif; Poppins ; Satisfy) */}
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet"/> 
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,600,600i,700,700i,800" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet"/>
        {/* Stylesheets */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/plugins.css" />
        <link rel="stylesheet" href="/style.css" />
        {/* Cusom css */}
        <link rel="stylesheet" href="/css/custom.css" />
        {/* Modernizer js */}
        <script src="/js/vendor/modernizr-3.5.0.min.js"></script>
    </Head>
    )
}

export default HeadContent