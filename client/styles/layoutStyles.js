import css from 'styled-jsx/css'

export default css `

    body {
        font-family: 'Open Sans', sans-serif !important;
        min-height: 100vh;
    }

    input {
        border-radius: 0 !important;
    }

    textarea {
        border-radius: 0 !important;
    }

    button {
        border-radius: 0 !important;
    }

    .body-nav {
        height: 56px;
        width: 100%;
        background-color: #0a1612;
        position: absolute;
    }

    #layout {
        min-height: 100vh;
    }

    .content-container {
        min-height: 100vh;
    }

    .navbar {
        max-width: 1100px;
        margin: auto;
        padding-left: 80px;
        padding-right: 68px;
    }

    .navbar-toggler {
        border: none !important;
    }

    .navbar-toggler-icon {
        width: 25px;
        height: 25px;
    }

    .navbar-dark {
        background-color: #0a1612;
    }

    #nav-items {
        padding-left: 0;
    }

    .footer-container {
        display: flex;
        align-items:center;
        height: 125px;
        color: #ffffff;
        background-color: #1a2930;
        width: 100%;
    }

    .footer-info {
        text-align: center;
        max-width: 1100px;
        margin: auto;
    }

@media screen and (max-width: 425px) {
    .navbar {
        padding-left: 35px;
        padding-right: 23px;
    }
}

`
