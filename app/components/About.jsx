var React = require("react");

/*var About = React.createClass({
    render: function(){
        return(
            <h3>About Component</h3>
        );
    }
});*/

var About = (props) => {
    return(
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This is a weather application build on React.</p>
            <p>Here are some of the tool I used:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
                </li>
                <li>
                    <a href="https://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
                </li>
            </ul>
        </div>
    );
};

module.exports = About;