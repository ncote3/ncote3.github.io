export interface IExperienceItem {
	position: string;
	tenure: string;
	location: string;
	descriptionPoints: string[];
}

export type IEmployerCollection = {
	[key: string]: IExperienceItem[];
};
