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
		case 'Box Model':{
			return(
			<div style={styles} >
               <div style={{width: '100%', height: '100%',backgroundColor: 'navy'}}></div>

			</div>)
		}
		default: {
			return <div style={styles}></div>;
		}
	}
}
export default Shape;
