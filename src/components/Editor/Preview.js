import React from "react";
import { renderMarkup } from '../../utils/utils'; 

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

export { Preview };
