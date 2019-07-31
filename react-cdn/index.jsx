
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


// class TitleComponent extends React.Component {
// 	render() {
// 		return (
// 			<div style={{ fontSize: 50, backgroundColor: 'blue', }}>
// 				<h1>Some Title</h1>
// 			</div>
// 		)
// 	}
// }

// class ButtonComponent extends React.Component {
// 	render() {
// 		return (
// 			<div onClick={this.props.onButtonClicked}>Click Me!</div>
// 		);
// 	}
// }

// class SomeParentComponent extends React.Component {
// 	render() {
// 		return (
// 			<ButtonComponent onButtonClicked={() => console.log('Title clicked')} />
// 		)
// 	}
// }