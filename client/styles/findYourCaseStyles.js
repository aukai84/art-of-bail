import css from 'styled-jsx/css'

export default css`
    .find-case-container {
        max-width: 1280px;
        margin: auto;
        padding: 40px;
        min-height: 100vh;
    }

    .search-container {
        padding: 40px;
        background-color: #f5f5f5;
    }

    .case-window-container {
        border: 1.5px solid #f5f5f5;
        min-height: 100vh;
    }

    .find-case-splash {
        padding: 120px 40px 40px 40px;
        text-align: center;
    }

@media screen and (max-width: 425px) {
    .find-case-container {
        padding: 20px;
    }

    .search-container {
        padding: 20px;
    }
}
`
