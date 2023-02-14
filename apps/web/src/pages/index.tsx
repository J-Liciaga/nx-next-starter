import { FC, ReactElement } from "react";

const styles = {
	container: "h-screen w-screen",
	wrapper: "h-full w-full flex justify-center items-center",
};

const IndexPage: FC = (): ReactElement => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>Hello World</div>
		</div>
	);
};

export default IndexPage;
