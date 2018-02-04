import css from 'styled-jsx/css'

export default css`

    #black-background {
        background-color: black;
    }

    #splash-container {
        height: 532px;
        width: 100%;
        padding-top: 100px;
        padding-bottom: 80px;
        background-image: url('/static/images/suit-min-min.jpg');
        background-size: cover;
    }

    #splash-info-container {
        margin: auto;
        padding: 45px;
        width: 350px;
        height: 250px;
    }

    #splash-info {
        text-align: center;
        color: #ffffff;
    }

    .contact-us-button {
        background-color: #0a1612;
        border: 1px #f7ce3e solid;
        border-radius: 0;
    }

    .contact-us-button:hover {
        background-color: #f7ce3e;
    }

    .home-page-body {
        max-width: 1100px;    
        margin: auto;
    }

    .icon-container {
        padding: 80px 40px 0 40px;
        text-align: center;
    }

    .court-icon {
        height: 175px;
        width: 175px;
    }

    .home-info-container {
        text-align: center;
        height: 100%;
        width: 100%;
        padding: 80px 40px 80px 40px;
        background-color: #ffffff;
    }

    .home-info-container h6 {
        line-height: 28px;
    }

    .home-info-container a {
        text-decoration: none;
        color: #f7ce3e;
        font-weight: bold;
    }

    .home-info-container a:hover {
        color: #212529;
    } 

    .support-icon {
        height: 175px;
        width: 175px;
    }

    #quote-row {
        background-color: #ffffff;
        padding: 40px;
        margin: 0;
    }


    #quote-row h6 {
        padding: 80px;
        line-height: 28px;
        text-align: center;
    }

    #quote-row a {
        text-decoration: none;
        color: #f7ce3e;
        font-weight: bold;
    }

    #quote-row a:hover {
        color: #212529;
    }

@media screen and (max-width: 667px){
    #quote-row {
        display: flex;
        flex-flow: column-reverse;
        padding: 35px 20px 35px 20px;
    }
    #quote-row h6 {
        padding: 20px 20px 40px 20px;
    }
    .home-info-container img {
        margin-bottom: 60px;
    }
    .home-info-container {
        height: 100%;
        padding: 60px;
    }
    .support-row {
        display: flex;
        flex-flow: column-reverse;
    }
}
`
