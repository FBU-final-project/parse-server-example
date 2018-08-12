const logger = require('parse-server').logger;

Parse.Cloud.define('hello', function(req, res) {
    res.success('Hi');
});

Parse.Cloud.define("pushsample", function (request, response) {
    Parse.Push.send({
            channels: ["News"],
            data: {
                title: "Hello from the Cloud Code",
                alert: "Back4App rocks!",
            }
       }, {
            success: function () {
                // Push was successful
                response.success("push sent");
                console.log("Success: push sent");
            },
            error: function (error) {
                // Push was unsucessful
                response.error("error with push: " + error);
                console.log("Error: " + error);
            },
            useMasterKey: true
       });
});

var query = new Parse.Query(Parse.Installation);
                   query.equalTo('installationId', parseInstallationId);

                      Parse.Push.send({
                        where: query, // Set our Installation query
                        data: {
                          alert: "Willie Hayes injured by own pop fly." 
                        }
                      }, {
                        success: function() {
                          // Push was successful
                          console.log('successful');
                        },
                        error: function(error) {
                          // Handle error
                          console.log('error');
                        }
                });
