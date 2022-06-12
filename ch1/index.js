function OurApp() {
  return (
      <>
          <OurHeader />
          <TimeArea />
          <ul>
            <Pet name="Meowsalot" species="cat" age="5" />
            <Pet name="Barksalot" species="dog" age="2" />
            <Pet name="Fluffy" species="rabbit" age="3" />
          </ul>
          <Footer />
      </>
  )
};

const OurHeader = () => {
  return <h1 className="special">Our Amazing App Header Component</h1>;
};

const TimeArea = () => <p>The current time is {new Date().toLocaleString()}</p>;

const Footer = () => <small>Copyright Footer Text!!!</small>;

const Pet = (props) => <li>{props.name} is a {props.species} and is {props.age} years old.</li>


setInterval(() => {ReactDOM.render(<OurApp />, document.querySelector('#app'));}, 1000);
// ReactDOM.render(React.createElement(OurApp), document.querySelector('#app'));