export enum DonorType {
	INDIVIDUAL = 'individual',
	COMPANY = 'company'
}

export enum DonationFrequency {
	MONTHLY = 'monthly',
	SINGLE = 'single',
	SPONSORSHIP = 'sponsorship'
}

export const donationFrequency = Object.values(DonationFrequency);
