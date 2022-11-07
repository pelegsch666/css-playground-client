import { useEffect, useState } from 'react';

function getTheStyles(shapeProperties, defaultProperties) {
	let shapeStyles = {};
	for (const prop of shapeProperties) {
		shapeStyles = { ...shapeStyles, ...prop };
	}
	const allProperties = { ...shapeStyles, ...defaultProperties };
	return allProperties;
}

function Shape({ shapeProperties, defaultProperties, renderingKey }) {
	const [styles, setStyles] = useState({});
	useEffect(() => {
		setStyles(getTheStyles(shapeProperties, defaultProperties));
	}, [shapeProperties, defaultProperties]);
	switch (renderingKey) {
		case 'Flex': {
			return (
				<div style={styles}>
					<div
						style={{ width: '40px', height: '40px', backgroundColor: 'salmon' }}
					></div>
					<div
						style={{ width: '40px', height: '40px', backgroundColor: 'black' }}
					></div>
					<div
						style={{ width: '40px', height: '40px', backgroundColor: 'navy' }}
					></div>
				</div>
			);
		}
		case 'Box Model': {
			return (
				<div style={styles}>
					<div
						style={{ width: '100%', height: '100%', backgroundColor: 'navy' }}
					></div>
				</div>
			);
		}
		case 'Margin': {
			return (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<div
							style={{
								width: '50px',
								height: '50px',
								backgroundColor: 'salmon',
							}}
						></div>
					</div>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<div
							style={{
								width: '50px',
								height: '50px',
								backgroundColor: 'salmon',
							}}
						></div>
						<div style={styles}></div>
						<div
							style={{
								width: '50px',
								height: '50px',
								backgroundColor: 'salmon',
							}}
						></div>
					</div>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<div
							style={{
								width: '50px',
								height: '50px',
								backgroundColor: 'salmon',
							}}
						></div>
					</div>
				</div>
			);
		}
		case 'Rgb': {
			const { red: r, green: g, blue: b, width, height, border } = styles;
			return (
				<div
					style={{
						width,
						height,
						border,
						backgroundColor: `rgb(${r}, ${g}, ${b})`,
					}}
				></div>
			);
		}
		default: {
			return <div style={styles}></div>;
		}
	}
}
export default Shape;
