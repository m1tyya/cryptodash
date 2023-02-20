import { FormatListBulleted } from '@mui/icons-material';
import { render, screen } from '@testing-library/react';

import { IconButton } from './icon-button';

describe(`${IconButton.name}`, () => {
	test('Renders with correct title', () => {
		render(<IconButton Icon={FormatListBulleted} label='Btn' size='40' />);
		expect(screen.getByTitle(/btn/i)).toBeDefined();
	});
});
