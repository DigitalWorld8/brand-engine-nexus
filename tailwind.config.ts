
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Brand Engine custom colors - Updated with brand guidelines values
				"brand": {
					"primary": "#1B1464", // Primary Color - P102-8C
					"accent-blue": "#09A4D5", // Accent Color 1 - P11-15C
					"accent-violet": "#778DFC", // Accent Color 2 - P106-8C
					"secondary": "#596AE9", // Secondary Color - P112-7C
					"light-gray": "#F5F7FA",
					"light-blue": "#EDF2FA", // Light blue background for services menu
					"text": "#2B2E3A",
					"accent-yellow": "#FFD166", // Additional accent color for variety
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)',
					},
					'50%': {
						transform: 'translateY(-10px)',
					},
				},
				'gradient-x': {
					'0%, 100%': {
						'background-position': '0% 50%',
					},
					'50%': {
						'background-position': '100% 50%',
					},
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
				},
				'gradient-glow': {
					'0%': {
						'background-position': '0% 50%',
						'box-shadow': '0 0 15px rgba(9, 164, 213, 0.7), 0 0 30px rgba(9, 164, 213, 0.5), 0 0 45px rgba(9, 164, 213, 0.3)'
					},
					'50%': {
						'background-position': '100% 50%',
						'box-shadow': '0 0 15px rgba(119, 141, 252, 0.7), 0 0 30px rgba(119, 141, 252, 0.5), 0 0 45px rgba(119, 141, 252, 0.3)'
					},
					'100%': {
						'background-position': '0% 50%',
						'box-shadow': '0 0 15px rgba(255, 209, 102, 0.7), 0 0 30px rgba(255, 209, 102, 0.5), 0 0 45px rgba(255, 209, 102, 0.3)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'gradient-x': 'gradient-x 10s ease infinite',
				'fade-in-up': 'fade-in-up 0.7s ease-out',
				'gradient-glow': 'gradient-glow 6s ease infinite'
			},
			fontFamily: {
				'sans': ['Inter Tight', 'Inter', 'sans-serif'],
				'heading': ['Inter Tight', 'sans-serif'],
			},
			fontWeight: {
				'book': '400',
				'medium': '500',
				'semibold': '600',
				'bold': '700',
				'black': '900',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
