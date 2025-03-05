// Create a new dialog window
var dialog = new Window('dialog', 'Input Details');

// Create a scrollable group
var scrollGroup = dialog.add('group');
scrollGroup.orientation = 'row';
scrollGroup.alignChildren = 'top';
scrollGroup.size = [400, 600]; // Increased the height for the scrollable area

// Create a container for the scrollable content
var contentGroup = scrollGroup.add('group');
contentGroup.orientation = 'column';
contentGroup.alignChildren = 'left';
contentGroup.size = [380, 1800]; // Set a larger height for the content

// Add a scrollbar
var scrollbar = scrollGroup.add('scrollbar', undefined, 0, 0, 100);
scrollbar.size = [20, 600]; // Set the size of the scrollbar

// Function to add labeled input fields
function addInputField(parent, label) {
    var group = parent.add('group');
    group.orientation = 'row';
    group.add('statictext', undefined, label + ':');
    var input = group.add('edittext', undefined, '');
    input.characters = 30;
    return input;
}

// Add input fields
var styleInput = addInputField(contentGroup, 'Style');
var catalogInput = addInputField(contentGroup, 'Catalog');
var genderInput = addInputField(contentGroup, 'Gender');
var sizeInput = addInputField(contentGroup, 'Size');
var retailerInput = addInputField(contentGroup, 'Retailer');
var portfolioInput = addInputField(contentGroup, 'Portfolio');
var artworkInput = addInputField(contentGroup, 'Artwork');
var seasonInput = addInputField(contentGroup, 'Season');
var fabricInput = addInputField(contentGroup, 'Fabric');
var constructionInput = addInputField(contentGroup, 'Construction');
var artApplicationInput = addInputField(contentGroup, 'Art Application');
var sampleLabelInput = addInputField(contentGroup, 'Sample');
var sampleSizeRangeInput = addInputField(contentGroup, 'Sample Size Range');
var box01LabelInput = addInputField(contentGroup, 'box01label');
var box01Input = addInputField(contentGroup, 'box01');
var box02LabelInput = addInputField(contentGroup, 'box02label');
var box02Input = addInputField(contentGroup, 'box02');
var box03LabelInput = addInputField(contentGroup, 'box03label');
var box03Input = addInputField(contentGroup, 'box03');
var box04LabelInput = addInputField(contentGroup, 'box04label');
var box04Input = addInputField(contentGroup, 'box04');
var box05LabelInput = addInputField(contentGroup, 'box05label');
var box05Input = addInputField(contentGroup, 'box05');
var box06LabelInput = addInputField(contentGroup, 'box06label');
var box06Input = addInputField(contentGroup, 'box06');
var box07LabelInput = addInputField(contentGroup, 'box07label');
var box07Input = addInputField(contentGroup, 'box07');
var box08LabelInput = addInputField(contentGroup, 'box08label');
var box08Input = addInputField(contentGroup, 'box08');
var box09LabelInput = addInputField(contentGroup, 'box09label');
var box09Input = addInputField(contentGroup, 'box09');
var box10LabelInput = addInputField(contentGroup, 'box10label');
var box10Input = addInputField(contentGroup, 'box10');
var box11LabelInput = addInputField(contentGroup, 'box11label');
var box11Input = addInputField(contentGroup, 'box11');
var box12LabelInput = addInputField(contentGroup, 'box12label');
var box12Input = addInputField(contentGroup, 'box12');
var box13LabelInput = addInputField(contentGroup, 'box13label');
var box13Input = addInputField(contentGroup, 'box13');
var box14LabelInput = addInputField(contentGroup, 'box14label');
var box14Input = addInputField(contentGroup, 'box14');
var box15LabelInput = addInputField(contentGroup, 'box15label');
var box15Input = addInputField(contentGroup, 'box15');
var box16LabelInput = addInputField(contentGroup, 'box16label');
var box16Input = addInputField(contentGroup, 'box16');
var box17LabelInput = addInputField(contentGroup, 'box17label');
var box17Input = addInputField(contentGroup, 'box17');
var box18LabelInput = addInputField(contentGroup, 'box18label');
var box18Input = addInputField(contentGroup, 'box18');
var box19LabelInput = addInputField(contentGroup, 'box19label');
var box19Input = addInputField(contentGroup, 'box19');
var box20LabelInput = addInputField(contentGroup, 'box20label');
var box20Input = addInputField(contentGroup, 'box20');

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

// Update the content group's position based on the scrollbar value
scrollbar.onChanging = function() {
    contentGroup.location.y = -scrollbar.value * (contentGroup.size[1] - scrollGroup.size[1]) / 100;
};

// Add OK and Cancel buttons
var buttonGroup = dialog.add('group');
buttonGroup.orientation = 'row';
var okButton = buttonGroup.add('button', undefined, 'OK');
var cancelButton = buttonGroup.add('button', undefined, 'Cancel');

// Function to update text objects based on notes
function updateTextObject(noteLabel, inputText) {
    if (inputText !== '') {
        var doc = app.activeDocument;
        for (var i = 0; i < doc.pageItems.length; i++) {
            var item = doc.pageItems[i];
            if (item.note === noteLabel && item.typename === "TextFrame") {
                item.contents = inputText;
                break;
            }
        }
    }
}

// Define button actions
okButton.onClick = function() {
    updateTextObject("style", styleInput.text);
    updateTextObject("catalog", catalogInput.text);
    updateTextObject("gender", genderInput.text);
    updateTextObject("size", sizeInput.text);
    updateTextObject("retailer", retailerInput.text);
    updateTextObject("portfolio", portfolioInput.text);
    updateTextObject("artwork", artworkInput.text);
    updateTextObject("season", seasonInput.text);
    updateTextObject("fabric", fabricInput.text);
    updateTextObject("construction", constructionInput.text);
    updateTextObject("application", artApplicationInput.text);
    updateTextObject("samplelabel", sampleLabelInput.text);
    updateTextObject("sample", sampleSizeRangeInput.text);
    updateTextObject("box01label", box01LabelInput.text);
    updateTextObject("box01", box01Input.text);
    updateTextObject("box02label", box02LabelInput.text);
    updateTextObject("box02", box02Input.text);
    updateTextObject("box03label", box03LabelInput.text);
    updateTextObject("box03", box03Input.text);
    updateTextObject("box04label", box04LabelInput.text);
    updateTextObject("box04", box04Input.text);
    updateTextObject("box05label", box05LabelInput.text);
    updateTextObject("box05", box05Input.text);
    updateTextObject("box06label", box06LabelInput.text);
    updateTextObject("box06", box06Input.text);
    updateTextObject("box07label", box07LabelInput.text);
    updateTextObject("box07", box07Input.text);
    updateTextObject("box08label", box08LabelInput.text);
    updateTextObject("box08", box08Input.text);
    updateTextObject("box09label", box09LabelInput.text);
    updateTextObject("box09", box09Input.text);
    updateTextObject("box10label", box10LabelInput.text);
    updateTextObject("box10", box10Input.text);
    updateTextObject("box11label", box11LabelInput.text);
    updateTextObject("box11", box11Input.text);
    updateTextObject("box12label", box12LabelInput.text);
    updateTextObject("box12", box12Input.text);
    updateTextObject("box13label", box13LabelInput.text);
    updateTextObject("box13", box13Input.text);
    updateTextObject("box14label", box14LabelInput.text);
    updateTextObject("box14", box14Input.text);
    updateTextObject("box15label", box15LabelInput.text);
    updateTextObject("box15", box15Input.text);
    updateTextObject("box16label", box16LabelInput.text);
    updateTextObject("box16", box16Input.text);
    updateTextObject("box17label", box17LabelInput.text);
    updateTextObject("box17", box17Input.text);
    updateTextObject("box18label", box18LabelInput.text);
    updateTextObject("box18", box18Input.text);
    updateTextObject("box19label", box19LabelInput.text);
    updateTextObject("box19", box19Input.text);
    updateTextObject("box20label", box20LabelInput.text);
    updateTextObject("box20", box20Input.text);
    alert('Text objects updated.');
    dialog.close();
};

cancelButton.onClick = function() {
    dialog.close();
};

// Show the dialog
dialog.show();
