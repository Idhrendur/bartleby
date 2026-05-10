"use strict";

inputArea.onkeydown = function(event)
{
    if (event.key == "Enter")
    {
        let entry = inputArea.value;
        if (entry != "")
        {
            let entryDiv = document.createElement('div');
            entryDiv.className = "entryDiv";
            entryDiv.innerHTML = `${entry}`;
            bartleby.append(entryDiv);

            let resultsDiv = document.createElement('div');
            resultsDiv.className = "resultsDiv";
            resultsDiv.innerHTML = "I would prefer not to.";
            query.replaceWith(resultsDiv);
        }
    }
}