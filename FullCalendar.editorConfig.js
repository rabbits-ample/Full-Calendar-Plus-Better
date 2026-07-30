'use strict';

function getProperties(values, defaultProperties /* , target: Platform*/) {
  var _generalGroup$propert;
  // Show Custom toolbar list only when Toolbar = Custom
  var cloned = JSON.parse(JSON.stringify(defaultProperties));
  var generalGroup = cloned.find(function (group) {
    return group.caption === "General";
  });
  var calendarViewGroup = generalGroup === null || generalGroup === void 0 || (_generalGroup$propert = generalGroup.propertyGroups) === null || _generalGroup$propert === void 0 ? void 0 : _generalGroup$propert.find(function (g) {
    return g.caption === "Calendar View";
  });
  var calendarViewProps = calendarViewGroup === null || calendarViewGroup === void 0 ? void 0 : calendarViewGroup.properties;
  var toolbarModeProp = calendarViewProps === null || calendarViewProps === void 0 ? void 0 : calendarViewProps.find(function (p) {
    return p.key === "toolbarMode";
  });
  var customToolbarProp = calendarViewProps === null || calendarViewProps === void 0 ? void 0 : calendarViewProps.find(function (p) {
    return p.key === "customToolbar";
  });
  if (toolbarModeProp && customToolbarProp) {
    // When toolbarMode is not "custom", hide the customToolbar list from the property pane
    if (values.toolbarMode !== "custom") {
      calendarViewGroup.properties = calendarViewProps.filter(function (p) {
        return p.key !== "customToolbar";
      });
    }
  }
  return cloned;
}
// export function check(_values: FullCalendarPreviewProps): Problem[] {
//     const errors: Problem[] = [];
//     // Validate required properties and configurations
//     return errors;
// }
function getCustomCaption(values) {
  return "FullCalendarPlus" + (values.language ? " (" + values.language + ")" : "");
}
exports.getCustomCaption = getCustomCaption;
exports.getProperties = getProperties;
