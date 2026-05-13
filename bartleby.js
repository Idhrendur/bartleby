"use strict";

inputArea.onkeydown = function(event)
{
    if (event.key == "Enter")
    {
        let entry = inputArea.value;
        if (entry != "")
        {
            query.innerHTML = "";
            inputArea.value = "";

            let entryDiv = document.createElement('div');
            entryDiv.className = "entryDiv";
            entryDiv.innerHTML = `${entry}`;
            inputDiv.parentNode.insertBefore(entryDiv, inputDiv); 
            entryDiv.style.maxWidth = "fit-content";
            entryDiv.style.marginLeft = "auto";
            entryDiv.style.marginRight = 0;
            entryDiv.style.fontSize = "100%";
            entryDiv.style.fontWeight = "normal";
            entryDiv.style.minHeight = "30px";
            entryDiv.style.lineHeight = "30px";
            entryDiv.style.borderRadius = "30px";
            entryDiv.style.backgroundColor = "#954535";
            entryDiv.style.verticalAlign = "middle";

            let resultsDiv = document.createElement('div');
            resultsDiv.className = "resultsDiv";
            resultsDiv.innerHTML = "I would prefer not to.";
            inputDiv.parentNode.insertBefore(resultsDiv, inputDiv);

           
        }
    }
}