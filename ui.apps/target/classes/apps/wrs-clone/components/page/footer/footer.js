// use(function() {
//
//     var CONST = {
//         PROP_COPYRIGHT_MESSAGE: "copyrightMessage",
//     };
//
//     var rootPage = currentPage.getAbsoluteParent(1);
//     var rootPageResource = rootPage.getContentResource();
//     var rootPageNode = rootPageResource.adaptTo(Packages.javax.jcr.Node);
//
//     var copyrightMessage = null;
//
//     if (rootPageNode.hasProperty(CONST.PROP_COPYRIGHT_MESSAGE)) {
//       copyrightMessage = rootPageNode.getProperty(CONST.PROP_COPYRIGHT_MESSAGE).getString();
//     }
//
//     var calendar = java.util.Calendar.getInstance();
//     var year = calendar.get(java.util.Calendar.YEAR).toString();
//
//     var newMessage = copyrightMessage;
//     newMessage = replaceYear(copyrightMessage);
//
//     return {
//         message: newMessage,
//     };
//
//     function replaceYear(message) {
//       var replacedMessage = message.replace("{ year }", year);
//       return replacedMessage;
//     }
// });
