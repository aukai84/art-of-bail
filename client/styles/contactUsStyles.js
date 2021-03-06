import css from 'styled-jsx/css'

export default css`

    h1 {
        margin-bottom: 20px;
    }

    h2 {
        margin-bottom: 20px;
    }

    img {
        margin-bottom: 20px;
    }

    a {
        text-decoration: none;
        color: #212529
    }

    a:hover {
        color: #f7ce3e;
    }

    p {
        margin: 0;
    }

    .contact-us-splash {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #0a1612;
        text-align: center;
        height: 432px;
        color: #ffffff;
    }

    .contact-us-splash-info {
    }
    
    .contact-us-container {
        max-width: 1100px;
        margin: auto;
        padding: 40px;
    }

    .contact-info {
        padding: 20px 0 20px 0;
        height: 100%;
        text-align: center;
        margin-bottom: 40px;
    }

    .contact-column {
        margin-bottom: 20px;
    }

    .google-maps-container {
        height: 100%; 
    }

@media screen and (max-width: 425px) {
    .contact-us-splash {
        padding: 0 20px 0 20px;
    }

    .contact-us-container {
        padding: 20px;
    }

    .contact-info {
        margin-bottom: 20px;
    }

        .google-maps-container {
        padding-top: 20px;
        height: 300px;
    }
}
`
