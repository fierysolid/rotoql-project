define(function defineCsvService() {

    function csvService() {
        var service = {};

        service.csvJSON = function(csv) {
            var lines = csv.split(/\n\r|\r\n|\r|\n/),
                result = [],
                headers = lines[0].split(","),
                i = 1,
                j = 0,
                tempObj,
                currentLine;

            for (; i < lines.length; i++) {
                if (lines[i]) {
                    tempObj = {};
                    currentLine = lines[i].split(",");

                    for (j = 0; j < headers.length; j++) {
                        tempObj[headers[j]] = currentLine[j];
                    }

                    result.push(tempObj);
                }
            }

            return result;
        };

        return service;
    }

    return [csvService];
});
