// var myObject = [
//     {
//         top: 23,
//         bottom: 33,
//         left: 69,
//         right: 42
//     }
//     //the rest of cells...
// ];

var editor = CodeMirror.fromTextArea(document.getElementById('editor'),{
    mode: "javascript",
    theme: "default",
    lineNumbers: true,
    readOnly: true
});