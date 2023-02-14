import { FC, ReactElement } from "react";

type LayoutProps = {
	children: ReactElement;
};

const Layout: FC<LayoutProps> = ({ children }): ReactElement => {
	return (
		<>
			<main>{children}</main>
		</>
	);
};

export default Layout;
