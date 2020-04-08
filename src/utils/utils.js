import React from 'react';

// Sets innerHTML when markup string is given
// Returns a div containing html ready to be rendered
export function renderMarkup(htmlString){
    return <div dangerouslySetInnerHTML={{ __html: `${htmlString}`}} />
}
