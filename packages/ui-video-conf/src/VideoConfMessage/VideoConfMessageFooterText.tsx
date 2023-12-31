import { Box } from '@rocket.chat/fuselage';
import type { ReactElement, ReactNode } from 'react';

const VideoConfMessageFooterText = ({ children }: { children: ReactNode }): ReactElement => (
	<Box fontScale='c1' mi={4}>
		{children}
	</Box>
);
export default VideoConfMessageFooterText;
