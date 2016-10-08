module.exports = {
    execute: function (intent, session, response) {

        var text = "Hello everyone. My name is Alexa and this is Christian, Diego and Nedim. Over the past 36 hours together, we have created a " +
            "revolutionary new meditation and prayer app called Alexa Daily Reflection. We are still working the kinks out in the name. " +
            "Shameless plug: We have hosted our site through Linode, and Microsoft Azure is supportng the backend. " +
            "Think of Daily Reflection as your companion, relieving your mind from stress and worry. " +
            "Using deep breathing techniques and contemplative reflection, you can begin to clear your mind and center yourself." +
            "Are you ready to begin?";
        var cardText = "Alexa has demoed";
        var heading = "DailyReflection Demo";

        response.tellWithCard(text, heading, cardText);

    }
};