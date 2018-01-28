import css from 'styled-jsx/css'

export default css`

.dashboard-app {
    background-color: #1a2930;
}

.dashboard-container {
    max-width: 1280px;
    margin: auto;
    background-color: #1a2930;
    padding: 40px;
    min-height: 100vh;
}

.client-header {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}

.breadcrumb {
    padding: 0;
    margin: 0;
    /*border-bottom: 1.5px solid #f5f5f5;*/
    background-color: #ffffff; 
    border-bottom: 1.5px solid #f5f5f5;
    margin-bottom: 20px;
}

.breadcrumb-item {
    color: #999999;
    padding: 15px 0 15px 0;
    border-bottom: 1.5px solid #f5f5f5;
}

.breadcrumb-item:hover {
    cursor: pointer;
}

.is-active {
    color: #2c4551;
    border-color: #2c4551;
}

.not-active:hover{
    color: #777777;
}

.table-container {
    background-color: #ffffff;
    padding: 40px;
    min-height: 100vh;
}

table {
    border: 1.5px solid #f5f5f5;
    border-radius: 3px;
    line-height: normal;
}

th {
    background-color: #f5f5f5;
    padding: 10px;
}

td {
    padding: 10px;
        border-top: 1.5px solid #f5f5f5;
    }
    
.client-table {
    background-color: #ffffff;
    color: #28434f;
    width: 100%;
}

.client-name {
    color: #335260;
    font-weight: bold;
}

.client-name:hover {
    cursor: pointer;
}

.last-table-column {
    width: 13%;    
}

.hidden-x {
    opacity: 0;
}

.hidden-x:hover {
    opacity: .75;
    color: #ff2b2b;
    cursor: pointer;
}

@media screen and (max-width: 425px) {

    .dashboard-container {
        padding: 15px;
        font-size: .8rem;
    }

    .client-header {
        flex-direction: column-reverse;         
    }
        
    .table-container {
        padding: 20px;
    }

    td:nth-child(3), th:nth-child(3) {
        display: none;
    }

    .last-table-column {
        display: none;
    }

    td:nth-child(2), th:nth-child(2) {
        padding-left: 40px;
    }

    .hidden-x {
        opacity: 1;
        color: #bbbbbb;
        width: 10%;
    }

}


`
