// ============================================================
//  EDIT YOUR CONTENT HERE
// ============================================================
export const HERO = {
	label: 'Backend & Full-Stack Engineer · Available for freelance',
	headline: [
		'I build software that ',
		'quietly does its job',
		' — and keeps doing it.',
	],
	sub: 'Five years turning fragile, tangled systems into backends that hold up under real production pressure.',
};
export const CREDENTIALS = [
	{ label: 'Experience', value: '5+ years' },
	{ label: 'Core stack', value: 'C# / .NET' },
	{ label: 'Based in', value: 'DFW Metroplex' },
	{ label: 'Currently', value: 'Available' },
];
export const ABOUT = {
	intro: [
		'The best software is the kind nobody notices — it just works, every time, even at 2am when something upstream catches fire.',
		'I spent the last several years building <strong>enterprise backend systems</strong> that connect huge platforms and absolutely cannot go down. That environment taught me to write code that holds: clean architecture, defensive thinking, and honest engineering over clever shortcuts.',
		'I bring that same standard to freelance work — <strong>no abandoned projects, no surprise invoices, no software you have to babysit.</strong>',
	],
	personalHeading: 'Beyond the code',
	personal:
		"A quick note, because I'd rather you know you're hiring a person and not a vendor: outside of work, most of my time goes to my wife and kids. When I get a quiet moment, I'm usually at the piano playing classical or worship music, or in the kitchen trying to cook something I haven't before. My path here wasn't a straight line either — I started in kinesiology before finding my way to software, which is part of why I care so much about making complex systems approachable.",
};
export const FACTS = [
	{ label: 'Years in production', value: '5', sup: '+' },
	{ label: 'Platforms integrated', value: '3' },
	{ label: 'Projects shipped', value: '100', sup: '%' },
	{ label: 'Specialty', value: '.NET', small: true },
];
export const SKILLS = [
	{
		icon: '⚙️',
		title: 'Backend Systems',
		desc: 'Robust APIs and services built to scale, with the reliability enterprise work demands.',
		tags: ['C# / .NET', 'REST APIs', 'SQL Server'],
	},
	{
		icon: '🔗',
		title: 'Integrations',
		desc: 'Wiring up platforms that were never meant to talk — cleanly, without the fragile glue.',
		tags: ['Salesforce', 'Boomi', 'JDE'],
	},
	{
		icon: '📱',
		title: 'Full-Stack & Mobile',
		desc: 'End-to-end apps from database to interface, cross-platform mobile included.',
		tags: ['React Native', 'Supabase', 'Expo'],
	},
	{
		icon: '🚀',
		title: 'DevOps & CI/CD',
		desc: 'Pipelines that ship code safely and automatically, so deploys stop being scary.',
		tags: ['CI/CD', 'Git', 'Automation'],
	},
	{
		icon: '🗄️',
		title: 'Database Tuning',
		desc: 'Hunting down slow queries and fixing them at the root — execution plans and all.',
		tags: ['Optimization', 'Indexing'],
	},
	{
		icon: '🧩',
		title: 'System Design',
		desc: 'Architecture considered first, so the foundation holds gracefully as things grow.',
		tags: ['Architecture', 'Multi-tenancy', 'Scale'],
	},
];
export const PROJECTS = [
	{
		icon: '📝',
		iconClass: 'pi1',
		cat: 'Mobile Application',
		title: 'Sermon Notes App',
		desc: 'A cross-platform mobile app for taking and organizing sermon notes — offline-first sync, multi-tenancy, and Planning Center integration, built on a carefully phased architecture.',
		tags: ['React Native', 'Supabase', 'Offline-first'],
		link: '#',
	},
	{
		icon: '🌡️',
		iconClass: 'pi2',
		cat: 'IoT & Hardware',
		title: 'Church HVAC Controller',
		desc: "A control system bridging a Raspberry Pi to a building's BACnet/IP system, giving non-technical staff simple control over heating and cooling through a clean middleware layer.",
		tags: ['Python', 'FastAPI', 'BACnet'],
		link: '#',
	},
	{
		icon: '🔌',
		iconClass: 'pi3',
		cat: 'Enterprise Integration',
		title: 'Production Integration Platform',
		desc: 'Mission-critical integrations connecting Salesforce, Boomi, and JD Edwards — including a high-stakes outage recovery that kept order data flowing for a national operation.',
		tags: ['Salesforce', 'Boomi', 'JD Edwards'],
		link: '#',
	},
];
export const TESTIMONIALS = [
	{
		quote:
			'Chandler took a problem nobody else wanted to touch and just quietly solved it. Reliable, thoughtful, and great to work with.',
		initials: 'JD',
		name: 'Your Client Name',
		role: 'Role, Company',
	},
	{
		quote:
			'Clear communication, realistic timelines, and code that actually held up in production. Would absolutely hire again.',
		initials: 'AM',
		name: 'Your Client Name',
		role: 'Role, Company',
	},
];
export const NAV = [
	{ href: '#about', label: 'About' },
	{ href: '#skills', label: 'Skills' },
	{ href: '#projects', label: 'Work' },
	{ href: '#testimonials', label: 'Praise' },
];
export const EMAIL = 'you@email.com';
export const SOCIALS = { github: '#', linkedin: '#' };
export const Icons = {
	github: (
		<svg viewBox='0 0 24 24' aria-hidden='true'>
			<path d='M12 .5C5.37.5 0 5.78 0 12.29c0 5.2 3.44 9.6 8.21 11.16.6.11.82-.25.82-.58 0-.29-.01-1.04-.02-2.05-3.34.71-4.04-1.58-4.04-1.58-.55-1.36-1.33-1.73-1.33-1.73-1.09-.73.08-.71.08-.71 1.2.08 1.83 1.22 1.83 1.22 1.07 1.8 2.81 1.28 3.5.98.11-.76.42-1.28.76-1.58-2.67-.3-5.47-1.31-5.47-5.83 0-1.29.47-2.34 1.23-3.17-.12-.3-.53-1.51.12-3.15 0 0 1-.32 3.3 1.21a11.6 11.6 0 0 1 6 0c2.28-1.53 3.29-1.21 3.29-1.21.65 1.64.24 2.85.12 3.15.77.83 1.23 1.88 1.23 3.17 0 4.53-2.81 5.53-5.49 5.82.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .33.21.7.82.58A12.01 12.01 0 0 0 24 12.29C24 5.78 18.63.5 12 .5z' />
		</svg>
	),
	linkedin: (
		<svg viewBox='0 0 24 24' aria-hidden='true'>
			<path d='M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z' />
		</svg>
	),
	email: (
		<svg viewBox='0 0 24 24' aria-hidden='true'>
			<path d='M22 4H2v16h20V4zm-2 2v.4l-8 5.33L4 6.4V6h16zM4 18V8.6l7.45 4.97a1 1 0 0 0 1.1 0L20 8.6V18H4z' />
		</svg>
	),
};
