import { useState, useEffect, useRef } from 'react';
import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Navbar06({
  components = [],
  sectionId = null,
}) {
  const defaultComponents = [
    {
      id: 'logo-nav06',
      type: 'heading',
      props: {
        content: 'TRANSGO LOGISTICS',
        level: 'h2',
        fontSize: '18px',
        fontWeight: '900',
        color: '#ffffff',
      },
    },
    {
      id: 'cta-nav06',
      type: 'button',
      props: {
        label: 'Track Shipment →',
        href: '#tracking',
        variant: 'primary',
        size: 'small',
        background: '#f97316',
        color: '#ffffff',
      },
    },
  ];

  const layoutComponents =
    components.length > 0 ? components : defaultComponents;

  const logoComps = layoutComponents.filter(
    (c) =>
      c.type === 'heading' ||
      c.type === 'text' ||
      c.type === 'image'
  );

  const actionComps = layoutComponents.filter(
    (c) => c.type === 'button'
  );

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {
    const el =
      navRef.current?.closest?.('[data-builder-canvas]') ||
      window;

    const handleScroll = () => {
      const scrollY =
        el === window ? window.scrollY : el.scrollTop;

      setIsScrolled(scrollY > 20);
    };

    el.addEventListener('scroll', handleScroll);

    return () => {
      el.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Solutions', href: '#services' },
    { label: 'Fleet', href: '#fleet' },
    { label: 'Coverage', href: '#coverage' },
    { label: 'About', href: '#stats' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      ref={navRef}
      className={`
        sticky
        top-0
        z-50
        w-full
        transition-all
        duration-300
        ${
          isScrolled
            ? 'bg-slate-950/95 backdrop-blur-xl shadow-xl border-b border-slate-800/80'
            : 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50'
        }
      `}
    >
      {/* ==============================
          MAIN NAVBAR
      ============================== */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          sm:px-6
          lg:px-8
          xl:px-10
        "
      >
        <div
          className="
            grid
            grid-cols-[minmax(0,1fr)_auto]
            xl:grid-cols-[minmax(180px,0.8fr)_minmax(0,1.5fr)_auto]
            items-center
            min-h-16
            py-2
            gap-4
            xl:gap-8
          "
        >
          {/* =================================
              LOGO
          ================================= */}
          <div
            className="
              min-w-0
              max-w-full
              overflow-hidden
            "
          >
            <div
              className="
                flex
                items-center
                min-w-0
                max-w-full
                overflow-hidden
              "
            >
              <div
                className="
                  min-w-0
                  max-w-full
                  overflow-hidden
                  [&_*]:max-w-full
                "
              >
                {renderLayoutComponents(
                  logoComps,
                  sectionId
                )}
              </div>
            </div>
          </div>

          {/* =================================
              DESKTOP NAVIGATION
          ================================= */}
          <div
            className="
              hidden
              xl:flex
              items-center
              justify-center
              min-w-0
              gap-5
              2xl:gap-7
            "
          >
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => e.preventDefault()}
                className="
                  relative
                  inline-flex
                  items-center
                  justify-center
                  whitespace-nowrap
                  shrink-0
                  px-1
                  py-2
                  text-[12px]
                  2xl:text-[13px]
                  font-semibold
                  tracking-wide
                  text-slate-400
                  hover:text-white
                  transition-colors
                  duration-200
                  group
                "
              >
                {link.label}

                <span
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-1
                    right-1
                    h-[2px]
                    origin-center
                    scale-x-0
                    rounded-full
                    bg-orange-500
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                  "
                />
              </a>
            ))}
          </div>

          {/* =================================
              RIGHT ACTIONS
          ================================= */}
          <div
            className="
              flex
              items-center
              justify-end
              gap-2
              sm:gap-3
              shrink-0
              min-w-0
            "
          >
            {/* Desktop / Tablet CTA */}
            <div
              className="
                hidden
                sm:flex
                items-center
                justify-end
                gap-2
                min-w-0
                [&_a]:whitespace-nowrap
                [&_a]:shrink-0
              "
            >
              {renderLayoutComponents(
                actionComps,
                sectionId
              )}
            </div>

            {/* Mobile Button */}
            <button
              type="button"
              onClick={() =>
                setMobileMenuOpen((prev) => !prev)
              }
              className="
                xl:hidden
                inline-flex
                items-center
                justify-center
                w-10
                h-10
                shrink-0
                rounded-xl
                border
                border-slate-700/70
                bg-slate-900/70
                text-slate-300
                hover:text-white
                hover:bg-slate-800
                hover:border-slate-600
                transition-all
                duration-200
              "
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <div
                className="
                  w-5
                  h-5
                  flex
                  flex-col
                  justify-center
                  gap-[4px]
                "
              >
                <span
                  className={`
                    block
                    h-[2px]
                    bg-current
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      mobileMenuOpen
                        ? 'rotate-45 translate-y-[6px]'
                        : ''
                    }
                  `}
                />

                <span
                  className={`
                    block
                    h-[2px]
                    bg-current
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      mobileMenuOpen
                        ? 'opacity-0 scale-x-0'
                        : ''
                    }
                  `}
                />

                <span
                  className={`
                    block
                    h-[2px]
                    bg-current
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      mobileMenuOpen
                        ? '-rotate-45 -translate-y-[6px]'
                        : ''
                    }
                  `}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* =================================
          MOBILE / TABLET MENU
      ================================= */}
      <div
        className={`
          xl:hidden
          overflow-hidden
          transition-all
          duration-300
          ease-in-out
          ${
            mobileMenuOpen
              ? 'max-h-[520px] opacity-100'
              : 'max-h-0 opacity-0'
          }
        `}
      >
        <div
          className="
            border-t
            border-slate-800/60
            bg-slate-950/98
            backdrop-blur-xl
            px-4
            sm:px-6
            lg:px-8
            pb-5
            pt-3
          "
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                }}
                className="
                  flex
                  items-center
                  min-h-11
                  px-3
                  py-2.5
                  rounded-xl
                  text-[14px]
                  font-semibold
                  text-slate-300
                  hover:text-white
                  hover:bg-slate-800/60
                  transition-all
                  duration-200
                "
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile CTA */}
          <div
            className="
              mt-3
              pt-3
              border-t
              border-slate-800/60
              flex
              flex-wrap
              items-center
              gap-2
              [&_a]:whitespace-nowrap
              [&_a]:shrink-0
            "
          >
            {renderLayoutComponents(
              actionComps,
              sectionId
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
