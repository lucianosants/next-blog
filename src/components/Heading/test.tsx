import { screen } from '@testing-library/dom';
import Heading from '.';
import { customRender } from '../../services/custom-render';

describe('<Heading />', () => {
    it('should render a heading', () => {
        customRender(<Heading>oi</Heading>);

        const element = screen.getByRole('heading', { name: /oi/i });

        expect(element).toHaveStyleRule('var(--text-xl)');
    });
});
