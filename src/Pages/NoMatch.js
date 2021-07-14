
import React from "react";
import { useHistory } from 'react-router-dom';


function NoMatch() {
    const history = useHistory();

    return (

        <div className="nomatch">
            <h4>Page not found</h4>
            <h1>404</h1>
            <button onClick={() => history.push('/')}>Go Back</button>
        </div>

    );
}

export default NoMatch;