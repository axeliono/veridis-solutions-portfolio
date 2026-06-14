const env = import.meta.env;
export const HERO = {
	label: 'Backend & Full-Stack Engineer · Available for freelance',
	headline: [
		'I build software that ',
		'quietly does its job',
		' — and keeps doing it.',
	],
	sub: "Five years untangling the systems that couldn't afford to break.",
};
export const CREDENTIALS = [
	{ label: 'Experience', value: '5+ years' },
	{ label: 'Core stack', value: 'C# / .NET' },
	{ label: 'Based in', value: 'DFW Metroplex' },
	{ label: 'Currently', value: 'Open to projects' },
];
export const ABOUT = {
	intro: [
		'The best software is the kind nobody notices — it just works, every time, even at 2am when something upstream catches fire.',
		'I spent the last several years building <strong>large-scale backend systems</strong> that connect huge platforms and absolutely cannot go down. That environment taught me to write code that holds: clean architecture, defensive thinking, and honest engineering over clever shortcuts.',
		'I bring that same standard to freelance work — <strong>no abandoned projects, no surprise invoices, no software you have to babysit.</strong>',
	],
	personalHeading: 'Beyond the code',
	personal:
		"A quick note, because I'd rather you know you're hiring a person and not a vendor: outside of work, most of my time goes to my wife and kids. When I get a quiet moment, I'm usually at the piano playing classical or worship music, or in the kitchen trying to cook something I haven't before. My path here wasn't a straight line either — I started in kinesiology before finding my way to software, which is part of why I care so much about making complex systems approachable.",
};
export const FACTS = [
	{ label: 'Years in production', value: '5', sup: '+' },
	{ label: 'Platforms integrated', value: '3' },
	{ label: 'Specialty', value: '.NET', small: true },
];
export const SKILLS = [
	{
		icon: 'server',
		title: 'Backend Systems',
		desc: 'APIs and services built to handle real load, written so the next person (often me, six months later) can follow what they do.',
		tags: ['C# / .NET', 'REST APIs', 'SQL Server'],
	},
	{
		icon: 'link',
		title: 'Integrations',
		desc: 'Wiring up platforms that were never meant to talk — cleanly, without the fragile glue.',
		tags: ['Salesforce', 'Boomi', 'JDE'],
	},
	{
		icon: 'layers',
		title: 'Full-Stack & Mobile',
		desc: 'End-to-end apps from database to interface, cross-platform mobile included.',
		tags: ['React Native', 'Supabase', 'Expo'],
	},
	{
		icon: 'gitBranch',
		title: 'DevOps & CI/CD',
		desc: 'Pipelines that ship code safely and automatically, so deploys stop being scary.',
		tags: ['CI/CD', 'Git', 'Automation'],
	},
	{
		icon: 'barChart',
		title: 'Database Tuning',
		desc: 'Hunting down slow queries and fixing them at the root — execution plans and all.',
		tags: ['Optimization', 'Indexing'],
	},
	{
		icon: 'layoutGrid',
		title: 'System Design',
		desc: 'Sketching the architecture before writing a line of code, so it still makes sense after a year of changes.',
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
		note: "Built this for our own church's needs; it grew from a weekend experiment into a real multi-tenant product.",
		tags: ['React Native', 'Supabase', 'Offline-first'],
		link: '#',
	},
	{
		icon: '📡',
		iconClass: 'pi2',
		cat: 'IoT & Hardware',
		title: 'SCP2 — Rehrig Pacific Co.',
		desc: 'A .NET system connecting an enterprise server to kiosk applications across the floor, where products are commissioned by scanning RFID tags and barcodes so they can be tracked through the supply chain from that point on.',
		note: 'Getting RFID readers and barcode scanners to talk reliably with the enterprise server — without dropping or duplicating a scan — was the part that took real care.',
		tags: ['C# / .NET', 'RFID', 'Barcode'],
		link: '#',
	},
	{
		icon: '🔌',
		iconClass: 'pi3',
		cat: 'Enterprise Integration',
		title: 'Production Integration Platform — Rehrig Pacific Co.',
		desc: 'Mission-critical integrations connecting Salesforce, Boomi, and JD Edwards — including a high-stakes outage recovery that kept order data flowing for a national operation.',
		note: 'When this integration went down, orders stopped flowing nationwide — getting it back up was one of the highest-pressure days of my career.',
		tags: ['Salesforce', 'Boomi', 'JD Edwards'],
		link: '#',
	},
];
export const HOW_I_WORK = {
	heading: 'How I work',
	steps: [
		{
			title: 'We start with a conversation',
			text: "Before any code gets written, I want to understand what you're actually trying to solve — not just the feature you've described, but the problem behind it. A short call is usually enough to scope things honestly, including telling you if something is bigger (or smaller) than it looks.",
		},
		{
			title: "You'll always know where things stand",
			text: "I send regular updates — what's done, what's next, and anything that's changed. No mystery silences followed by a surprise invoice. If something's going to take longer than planned, you'll hear about it as soon as I know.",
		},
		{
			title: 'Handoff means you can actually run it',
			text: "When a project wraps, you get more than working code — documentation, a walkthrough, and a clear picture of how to maintain or extend it. I don't disappear after the final commit, and I don't leave you with something only I can touch.",
		},
	],
};
export const NAV = [
	{ href: '#about', label: 'About' },
	{ href: '#skills', label: 'Skills' },
	{ href: '#projects', label: 'Work' },
	{ href: '#how-i-work', label: 'Process' },
];
export const EMAIL =
	import.meta.env.VITE_CONTACT_EMAIL || 'chandlergreen1997@gmail.com';
export const SOCIALS = {
	github: import.meta.env.VITE_GITHUB_URL || 'https://www.github.com/axeliono',
	linkedin:
		import.meta.env.VITE_LINKEDIN_URL ||
		'https://www.linkedin.com/in/chandleregreen',
};
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

const stroke = {
	fill: 'none',
	stroke: 'currentColor',
	strokeWidth: 1.8,
	strokeLinecap: 'round',
	strokeLinejoin: 'round',
};

export const SkillIcons = {
	server: (
		<svg viewBox='0 0 24 24' aria-hidden='true' {...stroke}>
			<rect x='2' y='3' width='20' height='8' rx='2' />
			<rect x='2' y='13' width='20' height='8' rx='2' />
			<line x1='6' y1='7' x2='6.01' y2='7' />
			<line x1='6' y1='17' x2='6.01' y2='17' />
		</svg>
	),
	link: (
		<svg viewBox='0 0 24 24' aria-hidden='true' {...stroke}>
			<path d='M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L11.5 4.5' />
			<path d='M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 0 0 7.07 7.07L12.5 19.5' />
		</svg>
	),
	layers: (
		<svg viewBox='0 0 24 24' aria-hidden='true' {...stroke}>
			<polygon points='12 2 2 7 12 12 22 7 12 2' />
			<polyline points='2 17 12 22 22 17' />
			<polyline points='2 12 12 17 22 12' />
		</svg>
	),
	gitBranch: (
		<svg viewBox='0 0 24 24' aria-hidden='true' {...stroke}>
			<line x1='6' y1='3' x2='6' y2='15' />
			<circle cx='18' cy='6' r='3' />
			<circle cx='6' cy='18' r='3' />
			<path d='M18 9a9 9 0 0 1-9 9' />
		</svg>
	),
	barChart: (
		<svg viewBox='0 0 24 24' aria-hidden='true' {...stroke}>
			<line x1='12' y1='20' x2='12' y2='10' />
			<line x1='18' y1='20' x2='18' y2='4' />
			<line x1='6' y1='20' x2='6' y2='16' />
		</svg>
	),
	layoutGrid: (
		<svg viewBox='0 0 24 24' aria-hidden='true' {...stroke}>
			<rect x='3' y='3' width='7' height='7' rx='1' />
			<rect x='14' y='3' width='7' height='7' rx='1' />
			<rect x='14' y='14' width='7' height='7' rx='1' />
			<rect x='3' y='14' width='7' height='7' rx='1' />
		</svg>
	),
};
