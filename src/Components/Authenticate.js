import React from 'react';
import axios from "axios";

import { Link } from 'react-router-dom';


import SimpleReactFileUpload from './SimpleReactFileUpload';



class Authenticate extends React.Component {
    componentDidMount() {
        let token = sessionStorage.getItem('token_id');
        debugger;
        console.log(token);
        if (!token) {
            sessionStorage.setItem("token_id", 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjAifQ.eyJzY29wZSI6W10sImNsaWVudF9pZCI6Im9hc2lzcWEiLCJDb3VudHJ5IjoiaW4iLCJVc2VyTmFtZSI6Ik11bmlyYWogVGVqYXN3aW5pIiwiY2l0eSI6IkJhbmdhbG9yZSIsInVzZXJpZCI6ImEyNjQ4NjgiLCJlbWFpbCI6InRlamFzd2luaS5tdW5pcmFqQHZvbHZvLmNvbSIsImV4cCI6MTUyNDY1ODE1NH0.jPaDeNB5BMQSt9M56g_EG0rTV9gsOisYBhYDWErJT6S3PB0e4_Zx1EMCssmevcBuK8hMSazJ7umXU5muIYIo8YsKrvP0HsZb2zhTG_KGwRetNiqqj9ddo9BXh25mOeM_LhNRo2vkeMXYiOKNtA - QIVKF5QznPVnYv7CbVQC5t - jfutfsQsbjBoefipkZN8AZOPSVOcYfyPIQaxgCQkIrfOK7jKRhSX3zNdZQJiWQ - pQJFMdZUs3uSNr3sUvHkexOlBDkMCmwE6pYl1Tr72C6zSFJXO9WfVRCmZgcs7GgHUXGF257pd_9WESVtXfx52DNFahjmvRp0maWMHwyMmShLw');
            console.log(sessionStorage.getItem('token_id'));

            if (sessionStorage.getItem('token_id')) {
                debugger;
                this.props.history.push('/SimpleReactFileUpload');
            }
            axios.get(`https://federate-qa.volvo.com/as/authorization.oauth2?client_id=oasisqa&response_type=token&redirect_uri=https://oasis-qa.srv.volvo.com/redirect.html`)
                .then(res => {
                    console.log("hello");
            });

        } else {
            // <HashRouter>
            //   <div>
            //         <Route path='/SimpleReactFileUpload' component={SimpleReactFileUpload}/>
            //     </div>
            // </HashRouter >

            // <Link to="/SimpleReactFileUpload">SimpleReactFileUpload</Link>


        }

    }

    render() {
        return (
            <h4>Initializing the application.Please wait..</h4>

        )
    }
}

export default Authenticate