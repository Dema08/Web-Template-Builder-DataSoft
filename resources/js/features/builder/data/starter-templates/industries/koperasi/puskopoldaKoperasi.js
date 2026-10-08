/**
 * PUSKOPOLDA Company Profile — Clean Corporate Institutional Starter Template
 * Starter Template resmi untuk PUSKOPOLDA (Pusat Koperasi Kepolisian Daerah).
 * Fully compatible with Right Inspector selection and property editing for all components.
 */
export default {
  id: 'puskopolda-koperasi',
  name: 'PUSKOPOLDA Company Profile',
  description: 'Template website Company Profile resmi PUSKOPOLDA (Pusat Koperasi Kepolisian Daerah) berdesain Clean Corporate Institutional. Dilengkapi 11 section terstruktur: Navbar, Hero 2-kolom, Profil Singkat, Statistik, Visi & Misi, Layanan / Unit Usaha, Keunggulan, Berita & Kegiatan, Galeri Dokumentasi Grid, CTA, dan Footer.',
  thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
  tags: ['PUSKOPOLDA', 'Koperasi', 'Company Profile', 'Institusi', 'Polri', 'Formal', 'Corporate', 'Clean'],
  theme: {
    primaryColor: '#0f172a',
    secondaryColor: '#1e3a8a',
    accentColor: '#d97706',
    dark: false,
    surface: '#ffffff',
    text: '#334155',
    muted: '#64748b',
    border: '#e2e8f0',
    radius: 'md',
    font: 'Inter, Manrope, sans-serif',
  },
  animations: ['fade', 'hover-lift', 'smooth-transition'],
  sections: [
    // 1. NAVBAR
    {
      id: 'sec-puskopolda-nav',
      type: 'navbar',
      layout: 'navbar-01',
      components: [
        {
          id: 'puskopolda-nav-logo',
          type: 'heading',
          props: {
            content: 'PUSKOPOLDA',
            level: 'h2',
            fontSize: '20px',
            fontWeight: '800',
            color: '#0f172a',
            letterSpacing: '0.04em',
          }
        },
        {
          id: 'puskopolda-nav-1',
          type: 'button',
          props: {
            label: 'Beranda',
            href: '#hero',
            variant: 'ghost',
            size: 'small',
            background: 'transparent',
            color: '#334155',
            hasDropdown: false,
          }
        },
        {
          id: 'puskopolda-nav-2',
          type: 'button',
          props: {
            label: 'Tentang Kami',
            href: '#about',
            variant: 'ghost',
            size: 'small',
            background: 'transparent',
            color: '#334155',
            hasDropdown: false,
          }
        },
        {
          id: 'puskopolda-nav-3',
          type: 'button',
          props: {
            label: 'Layanan',
            href: '#services',
            variant: 'ghost',
            size: 'small',
            background: 'transparent',
            color: '#334155',
            hasDropdown: false,
          }
        },
        {
          id: 'puskopolda-nav-4',
          type: 'button',
          props: {
            label: 'Berita',
            href: '#news',
            variant: 'ghost',
            size: 'small',
            background: 'transparent',
            color: '#334155',
            hasDropdown: false,
          }
        },
        {
          id: 'puskopolda-nav-5',
          type: 'button',
          props: {
            label: 'Kontak',
            href: '#contact',
            variant: 'ghost',
            size: 'small',
            background: 'transparent',
            color: '#334155',
            hasDropdown: false,
          }
        },
        {
          id: 'puskopolda-nav-cta',
          type: 'button',
          props: {
            label: 'Hubungi Kami',
            href: '#contact',
            variant: 'primary',
            size: 'small',
            radius: 'md',
            background: '#0f172a',
            color: '#ffffff',
            fontWeight: '600',
            hasDropdown: false,
          }
        },
      ],
    },

    // 2. HERO
    {
      id: 'sec-puskopolda-hero',
      type: 'hero',
      layout: 'hero-02',
      components: [
        {
          id: 'puskopolda-hero-badge',
          type: 'badge',
          props: {
            text: 'PUSKOPOLDA',
            variant: 'outline',
            background: '#fffbe6',
            color: '#b45309',
            borderColor: '#fef3c7',
          }
        },
        {
          id: 'puskopolda-hero-title',
          type: 'heading',
          props: {
            content: 'Membangun Kesejahteraan Bersama',
            level: 'h1',
            fontSize: '44px',
            fontWeight: '800',
            color: '#0f172a',
            letterSpacing: '-0.02em',
          }
        },
        {
          id: 'puskopolda-hero-desc',
          type: 'text',
          props: {
            content: 'Pusat Koperasi Kepolisian Daerah hadir untuk mendukung kesejahteraan anggota melalui pengelolaan koperasi yang profesional, transparan, dan berkelanjutan.',
            fontSize: '17px',
            color: '#475569',
            lineHeight: '1.7',
          }
        },
        {
          id: 'puskopolda-hero-btn1',
          type: 'button',
          props: {
            label: 'Tentang Kami',
            href: '#about',
            variant: 'primary',
            size: 'large',
            radius: 'md',
            background: '#0f172a',
            color: '#ffffff',
            fontWeight: '600',
            hasDropdown: false,
          }
        },
        {
          id: 'puskopolda-hero-btn2',
          type: 'button',
          props: {
            label: 'Lihat Layanan',
            href: '#services',
            variant: 'outline',
            size: 'large',
            radius: 'md',
            background: '#ffffff',
            color: '#0f172a',
            borderColor: '#cbd5e1',
            fontWeight: '600',
            hasDropdown: false,
          }
        },
        {
          id: 'puskopolda-hero-card',
          type: 'card',
          props: {
            background: '#ffffff',
            borderColor: '#e2e8f0',
            borderWidth: '1px',
            borderRadius: '16px',
            padding: '12px',
            shadow: 'md',
          },
          childrenComponents: [
            {
              id: 'puskopolda-hero-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&auto=format&fit=crop&q=80',
                alt: 'Gedung Kantor Pusat PUSKOPOLDA',
                borderRadius: '12px',
                width: '100%',
                height: '360px',
                objectFit: 'cover',
              }
            }
          ]
        }
      ],
    },

    // 3. PROFIL SINGKAT
    {
      id: 'sec-puskopolda-about',
      type: 'about',
      layout: 'about-01',
      components: [
        {
          id: 'puskopolda-about-badge',
          type: 'badge',
          props: {
            text: 'PROFIL SINGKAT',
            variant: 'outline',
            background: '#f1f5f9',
            color: '#1e293b',
            borderColor: '#cbd5e1',
          }
        },
        {
          id: 'puskopolda-about-title',
          type: 'heading',
          props: {
            content: 'Mengenal PUSKOPOLDA',
            level: 'h2',
            fontSize: '34px',
            fontWeight: '800',
            color: '#0f172a',
            letterSpacing: '-0.02em',
          }
        },
        {
          id: 'puskopolda-about-desc',
          type: 'text',
          props: {
            content: 'PUSKOPOLDA merupakan wadah koperasi yang berperan dalam mendukung peningkatan kesejahteraan anggota melalui pengelolaan usaha dan pelayanan koperasi yang profesional, transparan, dan berorientasi pada kebutuhan anggota.',
            fontSize: '16px',
            color: '#475569',
            lineHeight: '1.8',
          }
        },
        {
          id: 'puskopolda-about-btn',
          type: 'button',
          props: {
            label: 'Selengkapnya',
            href: '#visi-misi',
            variant: 'primary',
            size: 'medium',
            radius: 'md',
            background: '#0f172a',
            color: '#ffffff',
            fontWeight: '600',
            hasDropdown: false,
          }
        },
        {
          id: 'puskopolda-about-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&auto=format&fit=crop&q=80',
            alt: 'Profil PUSKOPOLDA',
            borderRadius: '16px',
            width: '100%',
            height: '340px',
            objectFit: 'cover',
          }
        }
      ],
    },

    // 4. STATISTIK
    {
      id: 'sec-puskopolda-stats',
      type: 'statistics',
      layout: 'statistics-01',
      components: [
        {
          id: 'puskopolda-stat1-card',
          type: 'card',
          props: {
            background: '#f8fafc',
            borderColor: '#e2e8f0',
            borderWidth: '1px',
            borderRadius: '12px',
            padding: '24px',
            shadow: 'sm',
            textAlign: 'center',
          },
          childrenComponents: [
            {
              id: 'puskopolda-stat1-num',
              type: 'heading',
              props: {
                content: 'XXX+',
                level: 'h3',
                fontSize: '36px',
                fontWeight: '800',
                color: '#0f172a',
              }
            },
            {
              id: 'puskopolda-stat1-lbl',
              type: 'text',
              props: {
                content: 'Anggota',
                fontSize: '14px',
                color: '#64748b',
                fontWeight: '600',
              }
            },
          ]
        },
        {
          id: 'puskopolda-stat2-card',
          type: 'card',
          props: {
            background: '#f8fafc',
            borderColor: '#e2e8f0',
            borderWidth: '1px',
            borderRadius: '12px',
            padding: '24px',
            shadow: 'sm',
            textAlign: 'center',
          },
          childrenComponents: [
            {
              id: 'puskopolda-stat2-num',
              type: 'heading',
              props: {
                content: 'XX',
                level: 'h3',
                fontSize: '36px',
                fontWeight: '800',
                color: '#d97706',
              }
            },
            {
              id: 'puskopolda-stat2-lbl',
              type: 'text',
              props: {
                content: 'Unit Usaha',
                fontSize: '14px',
                color: '#64748b',
                fontWeight: '600',
              }
            },
          ]
        },
        {
          id: 'puskopolda-stat3-card',
          type: 'card',
          props: {
            background: '#f8fafc',
            borderColor: '#e2e8f0',
            borderWidth: '1px',
            borderRadius: '12px',
            padding: '24px',
            shadow: 'sm',
            textAlign: 'center',
          },
          childrenComponents: [
            {
              id: 'puskopolda-stat3-num',
              type: 'heading',
              props: {
                content: 'XX+',
                level: 'h3',
                fontSize: '36px',
                fontWeight: '800',
                color: '#0f172a',
              }
            },
            {
              id: 'puskopolda-stat3-lbl',
              type: 'text',
              props: {
                content: 'Tahun Berdiri',
                fontSize: '14px',
                color: '#64748b',
                fontWeight: '600',
              }
            },
          ]
        },
        {
          id: 'puskopolda-stat4-card',
          type: 'card',
          props: {
            background: '#f8fafc',
            borderColor: '#e2e8f0',
            borderWidth: '1px',
            borderRadius: '12px',
            padding: '24px',
            shadow: 'sm',
            textAlign: 'center',
          },
          childrenComponents: [
            {
              id: 'puskopolda-stat4-num',
              type: 'heading',
              props: {
                content: 'XX+',
                level: 'h3',
                fontSize: '36px',
                fontWeight: '800',
                color: '#0f172a',
              }
            },
            {
              id: 'puskopolda-stat4-lbl',
              type: 'text',
              props: {
                content: 'Mitra',
                fontSize: '14px',
                color: '#64748b',
                fontWeight: '600',
              }
            },
          ]
        },
      ],
    },

    // 5. VISI & MISI
    {
      id: 'sec-puskopolda-visimisi',
      type: 'features',
      layout: 'about-02',
      components: [
        {
          id: 'puskopolda-vm-title',
          type: 'heading',
          props: {
            content: 'Visi & Misi',
            level: 'h2',
            fontSize: '34px',
            fontWeight: '800',
            color: '#0f172a',
            letterSpacing: '-0.02em',
          }
        },
        {
          id: 'puskopolda-visi-card',
          type: 'card',
          props: {
            background: '#ffffff',
            borderColor: '#e2e8f0',
            borderWidth: '1px',
            borderRadius: '16px',
            padding: '28px',
            shadow: 'sm',
          },
          childrenComponents: [
            {
              id: 'puskopolda-visi-badge',
              type: 'badge',
              props: {
                text: 'VISI',
                variant: 'solid',
                background: '#0f172a',
                color: '#ffffff',
              }
            },
            {
              id: 'puskopolda-visi-heading',
              type: 'heading',
              props: {
                content: 'Visi PUSKOPOLDA',
                level: 'h3',
                fontSize: '20px',
                fontWeight: '700',
                color: '#0f172a',
              }
            },
            {
              id: 'puskopolda-visi-text',
              type: 'text',
              props: {
                content: 'Menjadi koperasi yang profesional, terpercaya, dan mampu memberikan kontribusi nyata terhadap peningkatan kesejahteraan anggota.',
                fontSize: '16px',
                color: '#334155',
                lineHeight: '1.7',
              }
            },
          ]
        },
        {
          id: 'puskopolda-misi-card',
          type: 'card',
          props: {
            background: '#ffffff',
            borderColor: '#e2e8f0',
            borderWidth: '1px',
            borderRadius: '16px',
            padding: '28px',
            shadow: 'sm',
          },
          childrenComponents: [
            {
              id: 'puskopolda-misi-badge',
              type: 'badge',
              props: {
                text: 'MISI',
                variant: 'solid',
                background: '#d97706',
                color: '#ffffff',
              }
            },
            {
              id: 'puskopolda-misi-heading',
              type: 'heading',
              props: {
                content: 'Misi PUSKOPOLDA',
                level: 'h3',
                fontSize: '20px',
                fontWeight: '700',
                color: '#0f172a',
              }
            },
            {
              id: 'puskopolda-misi-item1',
              type: 'text',
              props: {
                content: '• Meningkatkan kualitas pelayanan kepada anggota.',
                fontSize: '15px',
                color: '#334155',
                lineHeight: '1.7',
              }
            },
            {
              id: 'puskopolda-misi-item2',
              type: 'text',
              props: {
                content: '• Mengembangkan usaha koperasi secara profesional dan berkelanjutan.',
                fontSize: '15px',
                color: '#334155',
                lineHeight: '1.7',
              }
            },
            {
              id: 'puskopolda-misi-item3',
              type: 'text',
              props: {
                content: '• Mewujudkan pengelolaan koperasi yang transparan dan akuntabel.',
                fontSize: '15px',
                color: '#334155',
                lineHeight: '1.7',
              }
            },
            {
              id: 'puskopolda-misi-item4',
              type: 'text',
              props: {
                content: '• Membangun kerja sama yang memberikan manfaat bagi anggota.',
                fontSize: '15px',
                color: '#334155',
                lineHeight: '1.7',
              }
            },
          ]
        },
      ],
    },

    // 6. LAYANAN / UNIT USAHA
    {
      id: 'sec-puskopolda-services',
      type: 'services',
      layout: 'services-01',
      components: [
        {
          id: 'puskopolda-services-title',
          type: 'heading',
          props: {
            content: 'Layanan Kami',
            level: 'h2',
            fontSize: '34px',
            fontWeight: '800',
            color: '#0f172a',
            letterSpacing: '-0.02em',
          }
        },
        // Card 1
        {
          id: 'puskopolda-service-card1',
          type: 'card',
          props: {
            background: '#ffffff',
            borderColor: '#e2e8f0',
            borderWidth: '1px',
            borderRadius: '12px',
            padding: '24px',
            shadow: 'sm',
            hoverEffect: 'lift',
          },
          childrenComponents: [
            {
              id: 'puskopolda-srv1-icon',
              type: 'icon',
              props: {
                icon: 'FaHandHoldingUsd',
                size: '28px',
                color: '#0f172a',
              }
            },
            {
              id: 'puskopolda-srv1-title',
              type: 'heading',
              props: {
                content: 'Simpan Pinjam',
                level: 'h3',
                fontSize: '18px',
                fontWeight: '700',
                color: '#0f172a',
              }
            },
            {
              id: 'puskopolda-srv1-desc',
              type: 'text',
              props: {
                content: 'Mendukung kebutuhan finansial anggota sesuai dengan ketentuan koperasi.',
                fontSize: '14px',
                color: '#64748b',
                lineHeight: '1.6',
              }
            },
          ]
        },
        // Card 2
        {
          id: 'puskopolda-service-card2',
          type: 'card',
          props: {
            background: '#ffffff',
            borderColor: '#e2e8f0',
            borderWidth: '1px',
            borderRadius: '12px',
            padding: '24px',
            shadow: 'sm',
            hoverEffect: 'lift',
          },
          childrenComponents: [
            {
              id: 'puskopolda-srv2-icon',
              type: 'icon',
              props: {
                icon: 'FaStore',
                size: '28px',
                color: '#d97706',
              }
            },
            {
              id: 'puskopolda-srv2-title',
              type: 'heading',
              props: {
                content: 'Perdagangan',
                level: 'h3',
                fontSize: '18px',
                fontWeight: '700',
                color: '#0f172a',
              }
            },
            {
              id: 'puskopolda-srv2-desc',
              type: 'text',
              props: {
                content: 'Menyediakan kebutuhan anggota melalui unit usaha koperasi.',
                fontSize: '14px',
                color: '#64748b',
                lineHeight: '1.6',
              }
            },
          ]
        },
        // Card 3
        {
          id: 'puskopolda-service-card3',
          type: 'card',
          props: {
            background: '#ffffff',
            borderColor: '#e2e8f0',
            borderWidth: '1px',
            borderRadius: '12px',
            padding: '24px',
            shadow: 'sm',
            hoverEffect: 'lift',
          },
          childrenComponents: [
            {
              id: 'puskopolda-srv3-icon',
              type: 'icon',
              props: {
                icon: 'FaUserShield',
                size: '28px',
                color: '#0f172a',
              }
            },
            {
              id: 'puskopolda-srv3-title',
              type: 'heading',
              props: {
                content: 'Layanan Anggota',
                level: 'h3',
                fontSize: '18px',
                fontWeight: '700',
                color: '#0f172a',
              }
            },
            {
              id: 'puskopolda-srv3-desc',
              type: 'text',
              props: {
                content: 'Memberikan informasi dan pelayanan untuk mendukung kebutuhan anggota.',
                fontSize: '14px',
                color: '#64748b',
                lineHeight: '1.6',
              }
            },
          ]
        },
        // Card 4
        {
          id: 'puskopolda-service-card4',
          type: 'card',
          props: {
            background: '#ffffff',
            borderColor: '#e2e8f0',
            borderWidth: '1px',
            borderRadius: '12px',
            padding: '24px',
            shadow: 'sm',
            hoverEffect: 'lift',
          },
          childrenComponents: [
            {
              id: 'puskopolda-srv4-icon',
              type: 'icon',
              props: {
                icon: 'FaBuilding',
                size: '28px',
                color: '#d97706',
              }
            },
            {
              id: 'puskopolda-srv4-title',
              type: 'heading',
              props: {
                content: 'Unit Usaha',
                level: 'h3',
                fontSize: '18px',
                fontWeight: '700',
                color: '#0f172a',
              }
            },
            {
              id: 'puskopolda-srv4-desc',
              type: 'text',
              props: {
                content: 'Mengembangkan berbagai bidang usaha untuk mendukung keberlanjutan koperasi.',
                fontSize: '14px',
                color: '#64748b',
                lineHeight: '1.6',
              }
            },
          ]
        },
      ],
    },

    // 7. KEUNGGULAN
    {
      id: 'sec-puskopolda-keunggulan',
      type: 'features',
      layout: 'services-02',
      components: [
        {
          id: 'puskopolda-keunggulan-title',
          type: 'heading',
          props: {
            content: 'Mengapa PUSKOPOLDA?',
            level: 'h2',
            fontSize: '34px',
            fontWeight: '800',
            color: '#0f172a',
            letterSpacing: '-0.02em',
          }
        },
        // Item 1
        {
          id: 'puskopolda-kg1-card',
          type: 'card',
          props: {
            background: '#f8fafc',
            borderColor: '#e2e8f0',
            borderWidth: '1px',
            borderRadius: '12px',
            padding: '24px',
            shadow: 'sm',
          },
          childrenComponents: [
            {
              id: 'puskopolda-kg1-icon',
              type: 'icon',
              props: {
                icon: 'FaAward',
                size: '24px',
                color: '#0f172a',
              }
            },
            {
              id: 'puskopolda-kg1-title',
              type: 'heading',
              props: {
                content: 'Profesional',
                level: 'h3',
                fontSize: '18px',
                fontWeight: '700',
                color: '#0f172a',
              }
            },
            {
              id: 'puskopolda-kg1-desc',
              type: 'text',
              props: {
                content: 'Pengelolaan koperasi dengan mengedepankan profesionalisme.',
                fontSize: '14px',
                color: '#64748b',
                lineHeight: '1.6',
              }
            },
          ]
        },
        // Item 2
        {
          id: 'puskopolda-kg2-card',
          type: 'card',
          props: {
            background: '#f8fafc',
            borderColor: '#e2e8f0',
            borderWidth: '1px',
            borderRadius: '12px',
            padding: '24px',
            shadow: 'sm',
          },
          childrenComponents: [
            {
              id: 'puskopolda-kg2-icon',
              type: 'icon',
              props: {
                icon: 'FaSearch',
                size: '24px',
                color: '#d97706',
              }
            },
            {
              id: 'puskopolda-kg2-title',
              type: 'heading',
              props: {
                content: 'Transparan',
                level: 'h3',
                fontSize: '18px',
                fontWeight: '700',
                color: '#0f172a',
              }
            },
            {
              id: 'puskopolda-kg2-desc',
              type: 'text',
              props: {
                content: 'Mengutamakan keterbukaan dan akuntabilitas.',
                fontSize: '14px',
                color: '#64748b',
                lineHeight: '1.6',
              }
            },
          ]
        },
        // Item 3
        {
          id: 'puskopolda-kg3-card',
          type: 'card',
          props: {
            background: '#f8fafc',
            borderColor: '#e2e8f0',
            borderWidth: '1px',
            borderRadius: '12px',
            padding: '24px',
            shadow: 'sm',
          },
          childrenComponents: [
            {
              id: 'puskopolda-kg3-icon',
              type: 'icon',
              props: {
                icon: 'FaCheckCircle',
                size: '24px',
                color: '#0f172a',
              }
            },
            {
              id: 'puskopolda-kg3-title',
              type: 'heading',
              props: {
                content: 'Terpercaya',
                level: 'h3',
                fontSize: '18px',
                fontWeight: '700',
                color: '#0f172a',
              }
            },
            {
              id: 'puskopolda-kg3-desc',
              type: 'text',
              props: {
                content: 'Berkomitmen memberikan pelayanan yang dapat dipercaya.',
                fontSize: '14px',
                color: '#64748b',
                lineHeight: '1.6',
              }
            },
          ]
        },
        // Item 4
        {
          id: 'puskopolda-kg4-card',
          type: 'card',
          props: {
            background: '#f8fafc',
            borderColor: '#e2e8f0',
            borderWidth: '1px',
            borderRadius: '12px',
            padding: '24px',
            shadow: 'sm',
          },
          childrenComponents: [
            {
              id: 'puskopolda-kg4-icon',
              type: 'icon',
              props: {
                icon: 'FaChartLine',
                size: '24px',
                color: '#d97706',
              }
            },
            {
              id: 'puskopolda-kg4-title',
              type: 'heading',
              props: {
                content: 'Berkelanjutan',
                level: 'h3',
                fontSize: '18px',
                fontWeight: '700',
                color: '#0f172a',
              }
            },
            {
              id: 'puskopolda-kg4-desc',
              type: 'text',
              props: {
                content: 'Mengembangkan koperasi untuk memberikan manfaat jangka panjang.',
                fontSize: '14px',
                color: '#64748b',
                lineHeight: '1.6',
              }
            },
          ]
        },
      ],
    },

    // 8. BERITA & KEGIATAN
    {
      id: 'sec-puskopolda-news',
      type: 'blog',
      layout: 'services-03',
      components: [
        {
          id: 'puskopolda-news-title',
          type: 'heading',
          props: {
            content: 'Berita & Kegiatan',
            level: 'h2',
            fontSize: '34px',
            fontWeight: '800',
            color: '#0f172a',
            letterSpacing: '-0.02em',
          }
        },
        // Article 1
        {
          id: 'puskopolda-news-card1',
          type: 'card',
          props: {
            background: '#ffffff',
            borderColor: '#e2e8f0',
            borderWidth: '1px',
            borderRadius: '14px',
            padding: '16px',
            shadow: 'sm',
            hoverEffect: 'lift',
          },
          childrenComponents: [
            {
              id: 'puskopolda-news1-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80',
                alt: 'Rapat Anggota Tahunan PUSKOPOLDA',
                borderRadius: '10px',
                width: '100%',
                height: '200px',
                objectFit: 'cover',
              }
            },
            {
              id: 'puskopolda-news1-badge',
              type: 'badge',
              props: {
                text: 'Kegiatan',
                variant: 'solid',
                background: '#0f172a',
                color: '#ffffff',
              }
            },
            {
              id: 'puskopolda-news1-title',
              type: 'heading',
              props: {
                content: 'Rapat Anggota Tahunan PUSKOPOLDA',
                level: 'h3',
                fontSize: '18px',
                fontWeight: '700',
                color: '#0f172a',
              }
            },
            {
              id: 'puskopolda-news1-date',
              type: 'text',
              props: {
                content: '12 Oktober 2026',
                fontSize: '12px',
                color: '#94a3b8',
              }
            },
            {
              id: 'puskopolda-news1-desc',
              type: 'text',
              props: {
                content: 'Pelaksanaan Rapat Anggota Tahunan (RAT) PUSKOPOLDA untuk menyampaikan laporan pertanggungjawaban dan penyusunan rencana kerja operasional.',
                fontSize: '14px',
                color: '#64748b',
                lineHeight: '1.6',
              }
            },
            {
              id: 'puskopolda-news1-link',
              type: 'button',
              props: {
                label: 'Baca Selengkapnya →',
                href: '#news',
                variant: 'ghost',
                size: 'small',
                color: '#d97706',
                fontWeight: '600',
                hasDropdown: false,
              }
            }
          ]
        },
        // Article 2
        {
          id: 'puskopolda-news-card2',
          type: 'card',
          props: {
            background: '#ffffff',
            borderColor: '#e2e8f0',
            borderWidth: '1px',
            borderRadius: '14px',
            padding: '16px',
            shadow: 'sm',
            hoverEffect: 'lift',
          },
          childrenComponents: [
            {
              id: 'puskopolda-news2-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80',
                alt: 'Peningkatan Kualitas Pelayanan Koperasi',
                borderRadius: '10px',
                width: '100%',
                height: '200px',
                objectFit: 'cover',
              }
            },
            {
              id: 'puskopolda-news2-badge',
              type: 'badge',
              props: {
                text: 'Layanan',
                variant: 'solid',
                background: '#d97706',
                color: '#ffffff',
              }
            },
            {
              id: 'puskopolda-news2-title',
              type: 'heading',
              props: {
                content: 'Peningkatan Kualitas Pelayanan Koperasi',
                level: 'h3',
                fontSize: '18px',
                fontWeight: '700',
                color: '#0f172a',
              }
            },
            {
              id: 'puskopolda-news2-date',
              type: 'text',
              props: {
                content: '28 September 2026',
                fontSize: '12px',
                color: '#94a3b8',
              }
            },
            {
              id: 'puskopolda-news2-desc',
              type: 'text',
              props: {
                content: 'PUSKOPOLDA terus meningkatkan efisiensi dan kemudahan pelayanan bagi seluruh anggota melalui modernisasi sistem tata kelola.',
                fontSize: '14px',
                color: '#64748b',
                lineHeight: '1.6',
              }
            },
            {
              id: 'puskopolda-news2-link',
              type: 'button',
              props: {
                label: 'Baca Selengkapnya →',
                href: '#news',
                variant: 'ghost',
                size: 'small',
                color: '#d97706',
                fontWeight: '600',
                hasDropdown: false,
              }
            }
          ]
        },
        // Article 3
        {
          id: 'puskopolda-news-card3',
          type: 'card',
          props: {
            background: '#ffffff',
            borderColor: '#e2e8f0',
            borderWidth: '1px',
            borderRadius: '14px',
            padding: '16px',
            shadow: 'sm',
            hoverEffect: 'lift',
          },
          childrenComponents: [
            {
              id: 'puskopolda-news3-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&auto=format&fit=crop&q=80',
                alt: 'Pengembangan Unit Usaha PUSKOPOLDA',
                borderRadius: '10px',
                width: '100%',
                height: '200px',
                objectFit: 'cover',
              }
            },
            {
              id: 'puskopolda-news3-badge',
              type: 'badge',
              props: {
                text: 'Unit Usaha',
                variant: 'solid',
                background: '#0f172a',
                color: '#ffffff',
              }
            },
            {
              id: 'puskopolda-news3-title',
              type: 'heading',
              props: {
                content: 'Pengembangan Unit Usaha PUSKOPOLDA',
                level: 'h3',
                fontSize: '18px',
                fontWeight: '700',
                color: '#0f172a',
              }
            },
            {
              id: 'puskopolda-news3-date',
              type: 'text',
              props: {
                content: '15 September 2026',
                fontSize: '12px',
                color: '#94a3b8',
              }
            },
            {
              id: 'puskopolda-news3-desc',
              type: 'text',
              props: {
                content: 'Perluasan jaringan kemitraan unit usaha guna mendukung nilai tambah dan keberlanjutan ekonomi anggota secara optimal.',
                fontSize: '14px',
                color: '#64748b',
                lineHeight: '1.6',
              }
            },
            {
              id: 'puskopolda-news3-link',
              type: 'button',
              props: {
                label: 'Baca Selengkapnya →',
                href: '#news',
                variant: 'ghost',
                size: 'small',
                color: '#d97706',
                fontWeight: '600',
                hasDropdown: false,
              }
            }
          ]
        },
      ],
    },

    // 9. GALERI
    {
      id: 'sec-puskopolda-gallery',
      type: 'gallery',
      layout: 'gallery-01',
      components: [
        {
          id: 'puskopolda-gallery-title',
          type: 'heading',
          props: {
            content: 'Dokumentasi Kegiatan',
            level: 'h2',
            fontSize: '34px',
            fontWeight: '800',
            color: '#0f172a',
            letterSpacing: '-0.02em',
          }
        },
        {
          id: 'puskopolda-gal1',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80',
            alt: 'Kegiatan Rapat PUSKOPOLDA',
            borderRadius: '10px',
            width: '100%',
            height: '240px',
            objectFit: 'cover',
          }
        },
        {
          id: 'puskopolda-gal2',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80',
            alt: 'Kegiatan Koperasi',
            borderRadius: '10px',
            width: '100%',
            height: '240px',
            objectFit: 'cover',
          }
        },
        {
          id: 'puskopolda-gal3',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&auto=format&fit=crop&q=80',
            alt: 'Pelayanan Anggota',
            borderRadius: '10px',
            width: '100%',
            height: '240px',
            objectFit: 'cover',
          }
        },
        {
          id: 'puskopolda-gal4',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80',
            alt: 'Gedung Kantor PUSKOPOLDA',
            borderRadius: '10px',
            width: '100%',
            height: '240px',
            objectFit: 'cover',
          }
        },
        {
          id: 'puskopolda-gal5',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=600&auto=format&fit=crop&q=80',
            alt: 'Kegiatan Organisasi',
            borderRadius: '10px',
            width: '100%',
            height: '240px',
            objectFit: 'cover',
          }
        },
        {
          id: 'puskopolda-gal6',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&auto=format&fit=crop&q=80',
            alt: 'Kegiatan Sosial',
            borderRadius: '10px',
            width: '100%',
            height: '240px',
            objectFit: 'cover',
          }
        },
      ],
    },

    // 10. CTA
    {
      id: 'sec-puskopolda-cta',
      type: 'cta',
      layout: 'contact-01',
      components: [
        {
          id: 'puskopolda-cta-card',
          type: 'card',
          props: {
            background: '#0f172a',
            borderColor: '#1e293b',
            borderWidth: '1px',
            borderRadius: '20px',
            padding: '48px 32px',
            shadow: 'xl',
          },
          childrenComponents: [
            {
              id: 'puskopolda-cta-title',
              type: 'heading',
              props: {
                content: 'Bersama Membangun Koperasi yang Lebih Baik',
                level: 'h2',
                fontSize: '36px',
                fontWeight: '800',
                color: '#ffffff',
                letterSpacing: '-0.02em',
                textAlign: 'center',
              }
            },
            {
              id: 'puskopolda-cta-desc',
              type: 'text',
              props: {
                content: 'Temukan informasi mengenai layanan, kegiatan, dan berbagai program PUSKOPOLDA.',
                fontSize: '16px',
                color: '#cbd5e1',
                textAlign: 'center',
              }
            },
            {
              id: 'puskopolda-cta-btn',
              type: 'button',
              props: {
                label: 'Hubungi Kami',
                href: '#contact',
                variant: 'primary',
                size: 'large',
                radius: 'md',
                background: '#d97706',
                color: '#ffffff',
                fontWeight: '700',
                hasDropdown: false,
              }
            }
          ]
        }
      ],
    },

    // 11. FOOTER
    {
      id: 'sec-puskopolda-footer',
      type: 'footer',
      layout: 'footer-01',
      components: [
        {
          id: 'puskopolda-foot-title',
          type: 'heading',
          props: {
            content: 'PUSKOPOLDA',
            level: 'h3',
            fontSize: '20px',
            fontWeight: '800',
            color: '#0f172a',
            letterSpacing: '0.04em',
          }
        },
        {
          id: 'puskopolda-foot-desc',
          type: 'text',
          props: {
            content: 'Profesional, Transparan, dan Berorientasi pada Kesejahteraan Anggota.',
            fontSize: '14px',
            color: '#64748b',
          }
        },
        {
          id: 'puskopolda-foot-menu1',
          type: 'button',
          props: { label: 'Beranda', href: '#hero', variant: 'ghost', size: 'small', color: '#475569', hasDropdown: false }
        },
        {
          id: 'puskopolda-foot-menu2',
          type: 'button',
          props: { label: 'Tentang Kami', href: '#about', variant: 'ghost', size: 'small', color: '#475569', hasDropdown: false }
        },
        {
          id: 'puskopolda-foot-menu3',
          type: 'button',
          props: { label: 'Layanan', href: '#services', variant: 'ghost', size: 'small', color: '#475569', hasDropdown: false }
        },
        {
          id: 'puskopolda-foot-menu4',
          type: 'button',
          props: { label: 'Berita', href: '#news', variant: 'ghost', size: 'small', color: '#475569', hasDropdown: false }
        },
        {
          id: 'puskopolda-foot-menu5',
          type: 'button',
          props: { label: 'Kontak', href: '#contact', variant: 'ghost', size: 'small', color: '#475569', hasDropdown: false }
        },
        {
          id: 'puskopolda-foot-social1',
          type: 'button',
          props: { label: 'Instagram', href: 'https://instagram.com', variant: 'ghost', size: 'small', color: '#d97706', hasDropdown: false }
        },
        {
          id: 'puskopolda-foot-social2',
          type: 'button',
          props: { label: 'Facebook', href: 'https://facebook.com', variant: 'ghost', size: 'small', color: '#d97706', hasDropdown: false }
        },
        {
          id: 'puskopolda-foot-social3',
          type: 'button',
          props: { label: 'YouTube', href: 'https://youtube.com', variant: 'ghost', size: 'small', color: '#d97706', hasDropdown: false }
        },
        {
          id: 'puskopolda-foot-copy',
          type: 'text',
          props: {
            content: '© 2026 PUSKOPOLDA. All Rights Reserved.',
            fontSize: '13px',
            color: '#94a3b8',
          }
        },
      ],
    },
  ],
};
