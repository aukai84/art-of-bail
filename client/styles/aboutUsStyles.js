import css from 'styled-jsx/css'

export default css`

    h1 {
        text-align: center;
        margin-bottom: 20px;
    }

    p {
        line-height: 28px;
    }

    h5 {
        text-align: center;
        margin-bottom: 20px;
    }

    .about-us-splash {
        background-color: #1a2930;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 432px;
    }

    .about-us-container {
        min-height: 100vh;
        max-width: 1100px;
        margin: auto;
        padding: 40px;
    }

    .about-text-container {
        margin-bottom: 40px;
    }

    .about-us-columns {
        text-align: center;
    }

@media screen and (max-width: 425px) {

    .about-us-splash {
        padding: 20px;
    }

        .about-us-container {
            text-align: center;
        }

}

`
