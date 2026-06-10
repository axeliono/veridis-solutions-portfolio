import { useEffect, useRef, useState } from 'react';
import './Portfolio.css';
import {
	NAV,
	HERO,
	CREDENTIALS,
	ABOUT,
	FACTS,
	SKILLS,
	PROJECTS,
	HOW_I_WORK,
	EMAIL,
	SOCIALS,
	Icons,
	SkillIcons,
} from './NAV';

function Reveal({
	children,
	delay = 0,
	immediate = false,
	as: Tag = 'div',
	...rest
}) {
	const ref = useRef(null);
	const [shown, setShown] = useState(immediate);
	useEffect(() => {
		if (immediate) return;
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(
			([e]) => {
				if (e.isIntersecting) {
					setTimeout(() => setShown(true), delay);
					io.unobserve(el);
				}
			},
			{ threshold: 0.12 },
		);
		io.observe(el);
		return () => io.disconnect();
	}, [delay, immediate]);
	return (
		<Tag
			ref={ref}
			{...rest}
			style={{
				...rest.style,
				opacity: shown ? 1 : 0,
				transform: shown ? 'none' : 'translateY(24px)',
				transition: 'opacity .7s, transform .7s',
			}}
		>
			{children}
		</Tag>
	);
}

const html = (s) => ({ dangerouslySetInnerHTML: { __html: s } });

export default function Portfolio() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<div className='cw-root'>
			<nav className={scrolled ? 'cw-nav scrolled' : 'cw-nav'}>
				<div className='cw-wrap cw-nav-inner'>
					<div className='cw-logo'>
						<span className='cw-logo-dot' />
						Chandler
					</div>
					<ul className={menuOpen ? 'cw-nav-links open' : 'cw-nav-links'}>
						{NAV.map((n) => (
							<li key={n.href}>
								<a href={n.href} onClick={() => setMenuOpen(false)}>
									{n.label}
								</a>
							</li>
						))}
						<li>
							<a
								href='#contact'
								className='cw-nav-cta'
								onClick={() => setMenuOpen(false)}
							>
								Contact
							</a>
						</li>
					</ul>
					<button
						className={menuOpen ? 'cw-nav-toggle open' : 'cw-nav-toggle'}
						onClick={() => setMenuOpen((o) => !o)}
						aria-label='Toggle menu'
					>
						<span />
						<span />
						<span />
					</button>
				</div>
			</nav>

			<header className='cw-header'>
				<div className='cw-blob cw-blob-1' />
				<div className='cw-wrap'>
					<div className='cw-hero-label'>
						<span className='cw-dot' />
						{HERO.label}
					</div>
					<div className='cw-hero-grid'>
						<Reveal immediate>
							<h1 className='cw-h1'>
								{HERO.headline[0]}
								<em>{HERO.headline[1]}</em>
								{HERO.headline[2]}
							</h1>
							<p className='cw-hero-sub'>{HERO.sub}</p>
							<div className='cw-hero-cta'>
								<a href='#projects' className='cw-btn cw-btn-primary'>
									See my work &rarr;
								</a>
								<a href='#contact' className='cw-btn cw-btn-ghost'>
									Let's talk
								</a>
							</div>
						</Reveal>
						<Reveal immediate className='cw-hero-card'>
							{CREDENTIALS.map((c) => (
								<div className='cw-hc-row' key={c.label}>
									<span>{c.label}</span>
									<b>{c.value}</b>
								</div>
							))}
						</Reveal>
					</div>
				</div>
			</header>

			<section id='about'>
				<div className='cw-wrap'>
					<Reveal className='cw-sec-head'>
						<span className='cw-sec-num'>01</span>
						<h2 className='cw-h2'>
							An engineer who <em>sweats the details</em>.
						</h2>
					</Reveal>
					<div className='cw-about-grid'>
						<Reveal className='cw-about-text'>
							{ABOUT.intro.map((p, i) => (
								<p key={i} {...html(p)} />
							))}
							<div className='cw-about-personal'>
								<h3>{ABOUT.personalHeading}</h3>
								<p>{ABOUT.personal}</p>
							</div>
						</Reveal>
						<Reveal delay={120} className='cw-about-side'>
							{FACTS.map((f) => (
								<div className='cw-fact' key={f.label}>
									<span className='cw-f-label'>{f.label}</span>
									<span
										className='cw-f-val'
										style={f.small ? { fontSize: '1.1rem' } : undefined}
									>
										{f.value}
										{f.sup && <small>{f.sup}</small>}
									</span>
								</div>
							))}
						</Reveal>
					</div>
				</div>
			</section>

			<section id='skills'>
				<div className='cw-wrap'>
					<Reveal className='cw-sec-head'>
						<span className='cw-sec-num'>02</span>
						<h2 className='cw-h2'>
							What I bring to <em>the table</em>.
						</h2>
					</Reveal>
					<div className='cw-skills-grid'>
						{SKILLS.map((s, i) => (
							<Reveal
								delay={(i % 3) * 70}
								className='cw-skill-card'
								key={s.title}
							>
								<div className='cw-skill-top'>
									<div className='cw-skill-icon'>{SkillIcons[s.icon]}</div>
									<h3>{s.title}</h3>
								</div>
								<p>{s.desc}</p>
								<div className='cw-tags'>
									{s.tags.map((t) => (
										<span className='cw-tag' key={t}>
											{t}
										</span>
									))}
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<section id='projects'>
				<div className='cw-wrap'>
					<Reveal className='cw-sec-head'>
						<span className='cw-sec-num'>03</span>
						<h2 className='cw-h2'>
							Projects I'm <em>proud of</em>.
						</h2>
					</Reveal>
					{PROJECTS.map((p) => (
						<Reveal className='cw-proj' key={p.title}>
							<div className={`cw-proj-icon ${p.iconClass}`}>{p.icon}</div>
							<div>
								<div className='cw-proj-cat'>{p.cat}</div>
								<h3>{p.title}</h3>
								<p>{p.desc}</p>
								<p className='cw-proj-note'>{p.note}</p>
								<div className='cw-proj-meta'>
									{p.tags.map((t) => (
										<span className='cw-tag' key={t}>
											{t}
										</span>
									))}
								</div>
							</div>
							<a href={p.link} className='cw-proj-link'>
								&rarr;
							</a>
						</Reveal>
					))}
				</div>
			</section>

			<section id='how-i-work'>
				<div className='cw-wrap'>
					<Reveal className='cw-sec-head'>
						<span className='cw-sec-num'>04</span>
						<h2 className='cw-h2'>{HOW_I_WORK.heading}</h2>
					</Reveal>
					<div className='cw-how-grid'>
						{HOW_I_WORK.steps.map((step, i) => (
							<Reveal delay={i * 80} className='cw-how-card' key={step.title}>
								<h3>{step.title}</h3>
								<p>{step.text}</p>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<section id='contact'>
				<div className='cw-wrap'>
					<Reveal className='cw-contact-card'>
						<div className='cw-blob cw-blob-3' />
						<h2 className='cw-h2' style={{ color: 'var(--bg)' }}>
							Let's build something <em>that lasts</em>.
						</h2>
						<p>
							Have a project in mind, or just want to say hi? I'd love to hear
							about it.
						</p>
						<a href={`mailto:${EMAIL}`} className='cw-btn cw-btn-gold'>
							Say hello &rarr;
						</a>
					</Reveal>
				</div>
			</section>

			<footer className='cw-footer'>
				<div className='cw-wrap'>
					<div className='cw-footer-inner'>
						<p className='cw-footer-copy'>
							&copy; 2026 Chandler. All rights reserved.
						</p>
						<div className='cw-footer-socials'>
							<a href={SOCIALS.github}>{Icons.github}GitHub</a>
							<a href={SOCIALS.linkedin}>{Icons.linkedin}LinkedIn</a>
							<a href={`mailto:${EMAIL}`}>{Icons.email}Email</a>
						</div>
						<p className='cw-footer-loc'>
							Dallas&ndash;Fort Worth Metroplex &middot; Available remotely
						</p>
						<p className='cw-footer-email'>{EMAIL}</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
