
function Title({title}) {
  return (
    <div style={{ fontSize: 50, backgrounColor: 'blue', }}>{title}</div>
  );
}

function App() {
  return (
    <div style={{ marginTop: 24, }}>
      CDN v4-beta example
          <Title title="Some Title" />
    </div>
  );
}

class App2 extends React.Component {
  render() {
    return (
      <div style={{ marginTop: 24, }}>
        App2
      </div>
    )}
}


ReactDOM.render(<App />, document.querySelector('#root'));