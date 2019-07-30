
function Title({ title }) {
	return (
		<div style={{ fontSize: 50, backgroundColor: 'blue', }}>{title}</div>
	);
}

function AppFunctionalComponent() {
	return (
		<div style={{ marginTop: 24, }}>
			<Title title="App As Functional Component" />
		</div>
	);
}

class AppClassComponent extends React.Component {
	render() {
		return (
			<div style={{ marginTop: 24, }}>
				<Title title="App As Class Component" />
			</div>
		)
	}
}


ReactDOM.render(<AppClassComponent />, document.querySelector('#root'));