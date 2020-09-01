import React from 'react';

import Button from '../Button/Button';

const widget = (props) => {
    return (
        <div className="card mb-3">
            <div className="card-header">
                {props.title}
                <Button 
                    style={{float: "right"}}
                    btnsize="sm"
                    clicked={props.btnClicked}>{props.btnTitle}</Button>
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
};




export default widget;