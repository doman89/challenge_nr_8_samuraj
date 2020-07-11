import { Rocket } from './Rocket';

export class RocketViewModel {
	public readonly company: string;
	public readonly country: string;
	public readonly description: string | undefined;
	public readonly id: string | undefined;
	public readonly name: string;
	public readonly type: string;
	public readonly wikipedia: string | undefined;

	constructor(data: Rocket) {
		this.company = data.company;
		this.country = data.country;
		this.description = data.description;
		this.id = data.id;
		this.name = data.name;
		this.type = data.type;
		this.wikipedia = data.wikipedia;
	}
}