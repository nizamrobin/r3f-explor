import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Cube from "./Cube";
import { useHelper, OrbitControls } from "@react-three/drei";
import { DirectionalLightHelper } from "three";

function App() {
	// const cubeArray2 = [
	// 	{ position: [0, 0, 0], size: [1, 1, 1], color: "hotpink" },
	// 	{ position: [0, 0, 0], size: [1, 1, 1], color: "green" },
	// 	{ position: [0, 0, 0], size: [1, 1, 1], color: "yellow" },
	// 	{ position: [0, 0, 0], size: [1, 1, 1], color: "purple" },
	// ];
	const cubeArray = [
		{ position: [-1, 1, 1], size: [1, 1, 1], color: "hotpink" },
		{ position: [1, 1, 0], size: [1, 1, 1], color: "green" },
		{ position: [1, -1, 1], size: [1, 1, 1], color: "yellow" },
		{ position: [-1, -1, 0], size: [1, 1, 1], color: "purple" },
	];

	// console.log(cubeRef.current);
	const cubeRef: any = useRef();
	function FuncAnimate() {
		useFrame(() => {
			let count = 0;
			cubeRef.current.parent.children.map((item: any) => {
				if (item.isMesh) {
					item.position.set(...cubeArray[count].position);

					item.rotation.x += Math.sin(3.14 * 7);
					item.rotation.y += Math.sin(3.14 * 7);
					count++;
				}
			});
		});
	}

	const Scene = () => {
		const dirLightRef = useRef();
		useHelper(dirLightRef, DirectionalLightHelper, 0.2, "white");
		return (
			<group>
				<directionalLight
					ref={dirLightRef}
					args={["white", 1]}
					position={[-1, -1, 3]}
				/>
				{cubeArray.map((arr) => (
					<Cube
						props={{
							position: arr.position,
							size: arr.size,
							color: arr.color,
						}}
						ref={cubeRef}
					/>
				))}
				<FuncAnimate />
				<OrbitControls />
			</group>
		);
	};

	return (
		<div className="w-full h-screen bg-black">
			<Canvas>
				<Scene />
			</Canvas>
		</div>
	);
}

export default App;
