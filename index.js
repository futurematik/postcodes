var data = require('./data');

exports.getPostcodeDistrict = function(code) {
  var d = data.districts[code];
  if (!d) {
    return;
  }
  var area = code.match(/^[A-Za-z]+/)[0];
  var areaInfo = area ? exports.getPostcodeArea(area) : undefined;
  return {
    code: code,
    name: d,
    area: areaInfo,
  };
};

exports.getPostcodeArea = function(code) {
  var a = data.areas[code];
  if (!a) {
    return;
  }
  return { code: code, name: a };
};
