import React from 'react';

// HOC to display alerts
const  withAlert = Component =>  {
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                alertTypeClassName: "alert alert-info", // bootstrap alert class
            };
        }

        render(){
            return(
                <Component alertTypeClassName={this.state.alertTypeClassName} {...this.props} />
            );
        }
    }
};

export { withAlert };
