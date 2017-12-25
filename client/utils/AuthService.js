import Cookies from 'js-cookie';
import fetch from 'isomorphic-unfetch';

export default class AuthService {
    constructor(domain){
        this.domain = domain || process.env.API_URL
        this.fetch = this.fetch.bind(this)
        this.login = this.login.bind(this)
        this.getProfile = this.getProfile.bind(this)
        this.logout = this.logout.bind(this)
    }

    login(username, password) {
        //Get a token
        return this.fetch(`${this.domain}/admin/signin`, {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            })
        })
            .then(res => {
                console.log('sucessful auth...', res)
                //set token on client cookies 
                this.setToken(res.token);
                return this.fetch(`${this.domain}/admin`, {
                    method: 'GET'
                })
            }).then(res => {
                this.setProfile(res.profile);
                return Promise.resolve(res)
            })
    }

    loggedIn(){
        //checks if there is a saved token and if it is still valid
        const token = this.getToken();
        return !!token  
    }

    setProfile(profile){
        //saves profile data to cookies 
        Cookies.set('profile', JSON.stringify(profile))
    }

    getProfile(){
        //retrives current profile data from cookies 
        const profile = Cookies.get('profile')
        return profile ? JSON.parse(Cookies.get('profile')) : {}
    }

    setToken(token){
        //saves admin token to cookies 
        Cookies.set('token', token)
    }

    getToken(){
        //retrieve token from cookies 
        return Cookies.get('token')
    }

    logout(){
        //clear user token and profile from cookies 
        Cookies.remove("token");
        Cookies.remove("profile");
        console.log('logged out...')
    }

    _checkStatus(response){
        //raises error if response is not successful
        if(response.status >= 200 && response.status < 300) {
            return response
        } else {
            let error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }

    fetch(url, options){
        //perform api call sending required auth headers
        if(options.enctype){
            options.headers = {'Accept': 'multipart/form-data'} 
        } else {
            options.headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            } 
        }
        
        if(this.loggedIn()){
            options.headers.authorization = this.getToken()
        }

        return fetch(url, options)
            .then(this._checkStatus)
            .then(response => response.json())
    }
}
