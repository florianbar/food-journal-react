import React from 'react';

import classes from './Widget.module.css';

const widget = (props) => {
    return (
        <div className={classes.Widget}>
            <div className={classes.WidgetHeader}>
                {props.title}
            </div>
            <div className={classes.WidgetBody}>
                {props.children}
            </div>
        </div>
    );
};

export default widget;