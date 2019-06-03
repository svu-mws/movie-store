import React from 'react'
import {capitalize} from "utils/StringUtils";

const withTitle = WrappedComponent => {
    return (props) => {
        const {type} = props;
        return (
            <>
                <h3 className="agile_w3_title"> {capitalize(type)} <span>Movies</span></h3>
                <WrappedComponent {...props} />
            </>
        );
    };
};

export default withTitle;