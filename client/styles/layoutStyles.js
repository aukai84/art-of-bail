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

    #layout {
        min-height: 100vh;
    }

    .navbar {
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

    #footer {
        height: 100px;
        color: #ffffff;
        background-color: #1a2930;
        text-align: center;
        vertical-align: middle;
        bottom: 0;
        width: 100%;
    }

@media screen and (max-width: 425px) {
    .navbar {
        padding-left: 35px;
        padding-right: 23px;
    }
}

`
