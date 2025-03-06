// Create a new dialog window
var dialog = new Window('dialog', 'Art Pack Style Information Sheet');

// Add descriptive text at the top of the popup window
var description = dialog.add('statictext', undefined, 'Use this tool to quickly update the text fields in the MAIN art page. The input boxes should show what is currently written in the text objects in the Illustrator file. You can revise as needed, only changes will be updated.', {multiline: true});
description.alignment = 'left';
description.size = [760, 40]; // Adjust the size as needed to fit the text

// Create a scrollable group
var scrollGroup = dialog.add('group');
scrollGroup.orientation = 'row';
scrollGroup.alignChildren = 'top';
scrollGroup.size = [800, 600]; // Updated the size of the dialog window

// Create a container for the scrollable content
var contentGroup = scrollGroup.add('group');
contentGroup.orientation = 'column';
contentGroup.alignChildren = 'left';
contentGroup.size = [760, 2400]; // Adjusted the width for the content

// Add a scrollbar
var scrollbar = scrollGroup.add('scrollbar', undefined, 0, 0, 100);
scrollbar.size = [20, 600]; // Updated the size of the scrollbar

// Function to add labeled input fields with labels above the input fields
function addInputField(parent, label) {
    var group = parent.add('group');
    group.orientation = 'column';
    group.alignChildren = 'left';
    group.spacing = 2; // Add 2px of space between each input field
    var labelText = group.add('statictext', undefined, label + ':');
    var input = group.add('edittext', undefined, '', {multiline: true});
    input.size = [240, 50]; // first number is width, second is height (20px per line~)
    return input;
}

// Object to store references to input fields
var inputFields = {};

// Add input fields in a 3-across layout
function addInputFieldsInRows(parent, labels) {
    for (var i = 0; i < labels.length; i += 3) {
        var rowGroup = parent.add('group');
        rowGroup.orientation = 'row';
        rowGroup.alignChildren = 'top';
        rowGroup.spacing = 10; // Add some space between columns
        inputFields[labels[i]] = addInputField(rowGroup, labels[i]);
        if (i + 1 < labels.length) inputFields[labels[i + 1]] = addInputField(rowGroup, labels[i + 1]);
        if (i + 2 < labels.length) inputFields[labels[i + 2]] = addInputField(rowGroup, labels[i + 2]);
    }
}

// Labels for the input fields
var labels = [
    'Style', 'Catalog', 'Gender', 'Size', 'Retailer', 'Portfolio',
    'Artwork', 'Season', 'Fabric', 'Construction', 'Art Application',
    'Sample', 'Sample Size Range'
];

// Add the input fields to the content group
addInputFieldsInRows(contentGroup, labels);

// Add a spacer for 5px space above the descriptive text
var spacerAbove = contentGroup.add('group');
spacerAbove.size = [1, 5]; // 5px tall spacer

// Add descriptive text between 'Sample Size Range' and 'box01label'
var description = contentGroup.add('statictext', undefined, 'Use the inputs below to fill in the information in the colors and trims section of the MAIN art page. The boxes go from 01-10 in the first column, then 11-20 in the second column. The first input is the LABEL of that line, BOX is the information for that line.', {multiline: true});
description.alignment = 'left';
description.size = [760, 40]; // Adjust the size as needed to fit the text

// Function to add box label and input fields in a 2-across layout
function addBoxInputFieldsInRows(parent, labels) {
    for (var i = 0; i < labels.length; i += 2) {
        var rowGroup = parent.add('group');
        rowGroup.orientation = 'row';
        rowGroup.alignChildren = 'top';
        rowGroup.spacing = 10; // Add some space between columns
        inputFields[labels[i]] = addInputField(rowGroup, labels[i]);
        if (i + 1 < labels.length) inputFields[labels[i + 1]] = addInputField(rowGroup, labels[i + 1]);
    }
}

// Update the content group's position based on the scrollbar value
scrollbar.onChanging = function() {
    contentGroup.location.y = -scrollbar.value * (contentGroup.size[1] - scrollGroup.size[1]) / 100;
};

// Add event listener for mouse scroll wheel
scrollGroup.addEventListener('mousewheel', function(event) {
    var delta = event.detail ? event.detail * -120 : event.wheelDelta;
    scrollbar.value -= delta / 120; // Adjust the scroll speed if necessary
    scrollbar.onChanging();
    event.preventDefault();
});

// Labels for the box input fields
var boxLabels = [
    'box01label', 'box01', 'box02label', 'box02', 'box03label', 'box03',
    'box04label', 'box04', 'box05label', 'box05', 'box06label', 'box06',
    'box07label', 'box07', 'box08label', 'box08', 'box09label', 'box09',
    'box10label', 'box10', 'box11label', 'box11', 'box12label', 'box12',
    'box13label', 'box13', 'box14label', 'box14', 'box15label', 'box15',
    'box16label', 'box16', 'box17label', 'box17', 'box18label', 'box18',
    'box19label', 'box19', 'box20label', 'box20'
];

// Add the box labels and inputs to the content group
addBoxInputFieldsInRows(contentGroup, boxLabels);

// Now you can access the input fields using inputFields object
var styleInput = inputFields['Style'];
var catalogInput = inputFields['Catalog'];
var genderInput = inputFields['Gender'];
var sizeInput = inputFields['Size'];
var retailerInput = inputFields['Retailer'];
var portfolioInput = inputFields['Portfolio'];
var artworkInput = inputFields['Artwork'];
var seasonInput = inputFields['Season'];
var fabricInput = inputFields['Fabric'];
var constructionInput = inputFields['Construction'];
var artApplicationInput = inputFields['Art Application'];
var sampleLabelInput = inputFields['Sample'];
var sampleSizeRangeInput = inputFields['Sample Size Range'];
var box01LabelInput = inputFields['box01label'];
var box01Input = inputFields['box01'];
var box02LabelInput = inputFields['box02label'];
var box02Input = inputFields['box02'];
var box03LabelInput = inputFields['box03label'];
var box03Input = inputFields['box03'];
var box04LabelInput = inputFields['box04label'];
var box04Input = inputFields['box04'];
var box05LabelInput = inputFields['box05label'];
var box05Input = inputFields['box05'];
var box06LabelInput = inputFields['box06label'];
var box06Input = inputFields['box06'];
var box07LabelInput = inputFields['box07label'];
var box07Input = inputFields['box07'];
var box08LabelInput = inputFields['box08label'];
var box08Input = inputFields['box08'];
var box09LabelInput = inputFields['box09label'];
var box09Input = inputFields['box09'];
var box10LabelInput = inputFields['box10label'];
var box10Input = inputFields['box10'];
var box11LabelInput = inputFields['box11label'];
var box11Input = inputFields['box11'];
var box12LabelInput = inputFields['box12label'];
var box12Input = inputFields['box12'];
var box13LabelInput = inputFields['box13label'];
var box13Input = inputFields['box13'];
var box14LabelInput = inputFields['box14label'];
var box14Input = inputFields['box14'];
var box15LabelInput = inputFields['box15label'];
var box15Input = inputFields['box15'];
var box16LabelInput = inputFields['box16label'];
var box16Input = inputFields['box16'];
var box17LabelInput = inputFields['box17label'];
var box17Input = inputFields['box17'];
var box18LabelInput = inputFields['box18label'];
var box18Input = inputFields['box18'];
var box19LabelInput = inputFields['box19label'];
var box19Input = inputFields['box19'];
var box20LabelInput = inputFields['box20label'];
var box20Input = inputFields['box20'];

// Function to populate input fields based on existing text objects
function populateInputFields() {
    var doc = app.activeDocument;
    for (var i = 0; i < doc.pageItems.length; i++) {
        var item = doc.pageItems[i];
        if (item.typename === "TextFrame") {
            switch (item.note) {
                case "style":
                    styleInput.text = item.contents;
                    break;
                case "catalog":
                    catalogInput.text = item.contents;
                    break;
                case "gender":
                    genderInput.text = item.contents;
                    break;
                case "size":
                    sizeInput.text = item.contents;
                    break;
                case "retailer":
                    retailerInput.text = item.contents;
                    break;
                case "portfolio":
                    portfolioInput.text = item.contents;
                    break;
                case "artwork":
                    artworkInput.text = item.contents;
                    break;
                case "season":
                    seasonInput.text = item.contents;
                    break;
                case "fabric":
                    fabricInput.text = item.contents;
                    break;
                case "construction":
                    constructionInput.text = item.contents;
                    break;
                case "application":
                    artApplicationInput.text = item.contents;
                    break;
                case "samplelabel":
                    sampleLabelInput.text = item.contents;
                    break;
                case "sample":
                    sampleSizeRangeInput.text = item.contents;
                    break;
                case "box01label":
                    box01LabelInput.text = item.contents;
                    break;
                case "box01":
                    box01Input.text = item.contents;
                    break;
                case "box02label":
                    box02LabelInput.text = item.contents;
                    break;
                case "box02":
                    box02Input.text = item.contents;
                    break;
                case "box03label":
                    box03LabelInput.text = item.contents;
                    break;
                case "box03":
                    box03Input.text = item.contents;
                    break;
                case "box04label":
                    box04LabelInput.text = item.contents;
                    break;
                case "box04":
                    box04Input.text = item.contents;
                    break;
                case "box05label":
                    box05LabelInput.text = item.contents;
                    break;
                case "box05":
                    box05Input.text = item.contents;
                    break;
                case "box06label":
                    box06LabelInput.text = item.contents;
                    break;
                case "box06":
                    box06Input.text = item.contents;
                    break;
                case "box07label":
                    box07LabelInput.text = item.contents;
                    break;
                case "box07":
                    box07Input.text = item.contents;
                    break;
                case "box08label":
                    box08LabelInput.text = item.contents;
                    break;
                case "box08":
                    box08Input.text = item.contents;
                    break;
                case "box09label":
                    box09LabelInput.text = item.contents;
                    break;
                case "box09":
                    box09Input.text = item.contents;
                    break;
                case "box10label":
                    box10LabelInput.text = item.contents;
                    break;
                case "box10":
                    box10Input.text = item.contents;
                    break;
                case "box11label":
                    box11LabelInput.text = item.contents;
                    break;
                case "box11":
                    box11Input.text = item.contents;
                    break;
                case "box12label":
                    box12LabelInput.text = item.contents;
                    break;
                case "box12":
                    box12Input.text = item.contents;
                    break;
                case "box13label":
                    box13LabelInput.text = item.contents;
                    break;
                case "box13":
                    box13Input.text = item.contents;
                    break;
                case "box14label":
                    box14LabelInput.text = item.contents;
                    break;
                case "box14":
                    box14Input.text = item.contents;
                    break;
                case "box15label":
                    box15LabelInput.text = item.contents;
                    break;
                case "box15":
                    box15Input.text = item.contents;
                    break;
                case "box16label":
                    box16LabelInput.text = item.contents;
                    break;
                case "box16":
                    box16Input.text = item.contents;
                    break;
                case "box17label":
                    box17LabelInput.text = item.contents;
                    break;
                case "box17":
                    box17Input.text = item.contents;
                    break;
                case "box18label":
                    box18LabelInput.text = item.contents;
                    break;
                case "box18":
                    box18Input.text = item.contents;
                    break;
                case "box19label":
                    box19LabelInput.text = item.contents;
                    break;
                case "box19":   
                    box19Input.text = item.contents;
                    break;
                case "box20label":
                    box20LabelInput.text = item.contents;
                    break;
                case "box20":   
                    box20Input.text = item.contents;
                    break;
            }
        }
    }
}

// Call the function to populate input fields when the dialog is created
populateInputFields();

// Add OK and Cancel buttons
var buttonGroup = dialog.add('group');
buttonGroup.orientation = 'row';
var okButton = buttonGroup.add('button', undefined, 'OK');
var cancelButton = buttonGroup.add('button', undefined, 'Cancel');

// Function to update all text objects based on notes
function updateTextObjects(noteLabel, inputText) {
    if (inputText !== '') {
        var doc = app.activeDocument;
        for (var i = 0; i < doc.pageItems.length; i++) {
            var item = doc.pageItems[i];
            if (item.note === noteLabel && item.typename === "TextFrame") {
                item.contents = inputText;
            }
        }
    }
}

// Define button actions
okButton.onClick = function() {
    updateTextObjects("style", styleInput.text);
    updateTextObjects("catalog", catalogInput.text);
    updateTextObjects("gender", genderInput.text);
    updateTextObjects("size", sizeInput.text);
    updateTextObjects("retailer", retailerInput.text);
    updateTextObjects("portfolio", portfolioInput.text);
    updateTextObjects("artwork", artworkInput.text);
    updateTextObjects("season", seasonInput.text);
    updateTextObjects("fabric", fabricInput.text);
    updateTextObjects("construction", constructionInput.text);
    updateTextObjects("application", artApplicationInput.text);
    updateTextObjects("samplelabel", sampleLabelInput.text);
    updateTextObjects("sample", sampleSizeRangeInput.text);
    updateTextObjects("box01label", box01LabelInput.text);
    updateTextObjects("box01", box01Input.text);
    updateTextObjects("box02label", box02LabelInput.text);
    updateTextObjects("box02", box02Input.text);
    updateTextObjects("box03label", box03LabelInput.text);
    updateTextObjects("box03", box03Input.text);
    updateTextObjects("box04label", box04LabelInput.text);
    updateTextObjects("box04", box04Input.text);
    updateTextObjects("box05label", box05LabelInput.text);
    updateTextObjects("box05", box05Input.text);
    updateTextObjects("box06label", box06LabelInput.text);
    updateTextObjects("box06", box06Input.text);
    updateTextObjects("box07label", box07LabelInput.text);
    updateTextObjects("box07", box07Input.text);
    updateTextObjects("box08label", box08LabelInput.text);
    updateTextObjects("box08", box08Input.text);
    updateTextObjects("box09label", box09LabelInput.text);
    updateTextObjects("box09", box09Input.text);
    updateTextObjects("box10label", box10LabelInput.text);
    updateTextObjects("box10", box10Input.text);
    updateTextObjects("box11label", box11LabelInput.text);
    updateTextObjects("box11", box11Input.text);
    updateTextObjects("box12label", box12LabelInput.text);
    updateTextObjects("box12", box12Input.text);
    updateTextObjects("box13label", box13LabelInput.text);
    updateTextObjects("box13", box13Input.text);
    updateTextObjects("box14label", box14LabelInput.text);
    updateTextObjects("box14", box14Input.text);
    updateTextObjects("box15label", box15LabelInput.text);
    updateTextObjects("box15", box15Input.text);
    updateTextObjects("box16label", box16LabelInput.text);
    updateTextObjects("box16", box16Input.text);
    updateTextObjects("box17label", box17LabelInput.text);
    updateTextObjects("box17", box17Input.text);
    updateTextObjects("box18label", box18LabelInput.text);
    updateTextObjects("box18", box18Input.text);
    updateTextObjects("box19label", box19LabelInput.text);
    updateTextObjects("box19", box19Input.text);
    updateTextObjects("box20label", box20LabelInput.text);
    updateTextObjects("box20", box20Input.text);
    alert('Information Updated');
    dialog.close();
};

cancelButton.onClick = function() {
    dialog.close();
};

// Show the dialog
dialog.show();
