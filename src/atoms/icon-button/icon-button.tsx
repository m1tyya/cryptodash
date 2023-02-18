import { type SvgIconComponent } from '@mui/icons-material';
import { Button, Stack } from '@mui/material';

type Props = {
	Icon: SvgIconComponent;
	label: string;
	onClick?: () => void;
	size: string;
};

export function IconButton({ Icon, onClick, size }: Props) {
	return (
		<Button onClick={onClick} variant='outlined'>
			<Stack
				alignItems='center'
				// border='2px solid white'
				borderRadius={2}
				fontSize={size}
				height={size}
				justifyContent='center'
				width={size}>
				<Icon sx={{ fontSize: '60%' }} />
			</Stack>
		</Button>
	);
}
