import css from 'styled-jsx/css'

export default css`

#quote-form-panel {
    padding: 30px;
    background-color: #f5f5f5;
}

.quote-form-button {
    background-color: #1a2930;
}

.required {
    color: red;
}

@media screen and (max-width: 425px) {
    #quote-form-panel {
        padding: 20px;
    }
}
`
