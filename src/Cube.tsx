import { forwardRef, useState } from "react";
export default forwardRef(function Cube({ props }, ref) {
	// const cubeRef = () => ref;
	const { position, size, color } = props;
	const [isHovered, setIsHovered] = useState(false);
	// console.log({ position });
	return (
		<>
			<ambientLight args={["white", 0.1]} position={[0, 0, 5]} />
			<mesh
				position={position}
				ref={ref}
				onPointerEnter={(e) => {
					e.stopPropagation(), setIsHovered(true);
				}}
				onPointerLeave={(e) => {
					setIsHovered(false);
				}}
			>
				<boxGeometry args={size} />
				<meshStandardMaterial
					wireframe
					color={isHovered ? "red" : color}
				/>
			</mesh>
		</>
	);
});
