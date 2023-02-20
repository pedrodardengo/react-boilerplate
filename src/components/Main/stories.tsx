import Main from '.'
import { Meta, Story, Args } from '@storybook/react/types-6-0'
export default {
	title: 'MainPage',
	component: Main,
	args: {
		title: 'A title',
		description: 'A description'
	}
} as Meta

export const BasicPage: Story = (args: Args) => (
	<Main title={args.title} description={args.description} {...args} />
)
