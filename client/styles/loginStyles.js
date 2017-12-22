import css from 'styled-jsx/css' 

export default css`

#login-page-container {
    text-align: center;
    background-color: #1a2930;
    height: 100vh;
    width: 100%;
    padding: 100px;
}

#login-panel {
    background-color: #f5f5f5;
    width: 428px;
    height: 364px;
    margin: auto;
    padding-top: 40px;
}

#login-panel-header {
    margin: 0;
}

#login-form {
    background-color: #f5f5f5;
    width: 100%;
    padding: 40px;
}

.loginButton {
    width: 100%;
    border-radius: 0;
    background-color: #0a1612;
}

.login-page-route-home {
    background-color: #dbdbdb;
    padding: 20px;
    border-top: 1px solid #b5b5b5;
}

@media screen and (max-width: 630px) {
    #login-page-container {
        padding: 50px;
    }
    #login-panel {
        width: 384px;
    }
}

@media (max-width: 480px) {
    #login-panel {
        height: 364px;
        width: 100%;
    }
    #login-page-container {
        padding: 45px 20px 20px 20px;
    }
}

`
