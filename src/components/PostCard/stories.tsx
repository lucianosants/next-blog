import { ComponentStory, ComponentMeta } from '@storybook/react';
import PostCard from '.';

export default {
    title: 'PostCard',
    component: PostCard,
} as ComponentMeta<typeof PostCard>;

export const Primary: ComponentStory<typeof PostCard> = (args) => (
    <div style={{ background: '#fade' }}>
        <PostCard {...args} />
    </div>
);
