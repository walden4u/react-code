const OurApp = () => {
  return (
      <>
          <OurHeader />
          <OurHeader />
          <TimeArea />
          <Footer />
      </>
  );
};


const OurHeader = () => {
  return <h1 className="special">Our Amazing App Header Component</h1>;
};

const TimeArea = () => <p>The current time is {new Date().toLocaleString()}</p>;

const Footer = () => <small>Copyright Footer Text!!!</small>;


setInterval(() => {ReactDOM.render(<OurApp />, document.querySelector('#app'));}, 1000);
// ReactDOM.render(React.createElement(OurApp), document.querySelector('#app'));