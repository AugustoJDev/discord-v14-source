require("dotenv").config();

// Enable or disable console logs for this events
global.logs = {
    Errors: true,
    CommandsLoaded: true,
    EventsLoaded: true,
    Ready: true
}

module.exports = {
	Client: require("./src/config/client.js"),
    Events: require("./src/events/interactionCreate.js"),
    ErrorsCatch: require("./src/config/error.js")
};