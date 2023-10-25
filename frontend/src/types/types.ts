export type Story = {
	title: string;
	description: string;
	category: string;
	subCategory: string;
	author: string;
	image: string;
	url: string;
	isFavorite: boolean;
	publishedDate: string;
	updatedAt: string;
	createdAt: string;
	id: string;
	type: string;
};

export type LatestStory = {
	publishedAt: string;
	title: string;
	url: string;
};
