import React from "react";
import PropTypes from 'prop-types';

import './style.css';
import { renderMarkup } from '../../utils/utils'; 


/**
 * Renders html given html string.
 * @param {String} htmlString 
 */
const Preview = ({ htmlString }) => {
    return(
        // TODO: This inline style works but css doesn't!! Why??
        <div style={{ "overflowWrap": "break-word" }}>
            <p>Content preview</p>
            <div className="Editor-Preview-markup-wrapper">
                {renderMarkup(htmlString)}
            </div>
        </div>
    );
};

Preview.propTypes = {
    htmlString: PropTypes.string.isRequired
};

export { Preview };
