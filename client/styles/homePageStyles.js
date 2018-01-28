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

    .home-page-body {
        max-width: 1280px;    
        margin: auto;
    }

    #home-info-container {
        height: 305px;
        width: 100%;
        text-align: center;
        padding-top: 80px;
        background-color: #ffffff;
    }

    .home-column-containers {
        background-color: #f7ce3e;
        height: 150px;
        text-align: center;
        vertical-align: middle;
    }

    #quote-row {
        background-color: #ffffff;
        padding: 50px;
        margin: 0;
    }

@media screen and (max-width: 667px){
    #quote-row {
        padding: 35px 20px 35px 20px;
    }
}

`
