You are an award-winning Senior Product Designer and Frontend Architect from Apple, Linear, Stripe, Vercel, Arc Browser and Nothing.

Redesign my Weather App into a world-class premium weather experience.

Current issue:
The search box is always visible and takes too much attention.
The app feels like a form with weather data instead of a modern product.

Goal:
Create a futuristic, immersive weather experience where content is the hero and controls appear only when needed.

DESIGN PHILOSOPHY

- Minimal
- Elegant
- Premium
- Interactive
- Motion-first
- Apple-level polish
- Dribbble quality
- Awwwards quality
- Mobile-first
- Production-ready

--------------------------------------------------

BACKGROUND

Create a stunning atmospheric background.

Requirements:

- Deep navy gradient
- Dynamic weather-aware lighting
- Aurora-style glow effects
- Animated blurred blobs
- Subtle floating particles
- Mouse-responsive radial light

Example:

When mouse moves:
- Background glow follows cursor
- Soft lighting reacts to movement

No stock images.

Use only CSS gradients and effects.

--------------------------------------------------

SEARCH EXPERIENCE

REMOVE permanently visible search bar.

Instead create:

Default State:
- Only weather dashboard visible
- No search box

On hover near top center:
OR
On pressing "/"
OR
On clicking floating search icon

Animate a command-palette style search panel.

Inspired by:
- Raycast
- Arc Browser
- Spotlight Search
- Linear

Animation:

opacity
scale
blur
slide-down

Duration:
250ms

Search panel style:

- Glassmorphism
- 24px radius
- Strong blur
- Gradient border
- Floating effect

Inside:

Search Icon
Input
Recent Searches

Example:

Kolkata
Mumbai
Delhi
Bangalore

--------------------------------------------------

LAYOUT

Max width:
1200px

Perfect vertical rhythm

8px spacing system

Lots of breathing room

--------------------------------------------------

HERO SECTION

Large animated weather icon

Current condition

Current temperature

Example:

☀

31°

Clear Sky

Pune, India

Feels Like 34°

Make temperature the primary focus.

--------------------------------------------------

MAIN WEATHER CARD

Premium floating glass card

Requirements:

backdrop blur

gradient border

soft shadows

dynamic glow

weather-dependent colors

--------------------------------------------------

DASHBOARD SECTION

Create modern metric cards.

Grid:

Temperature
Humidity
Wind
Pressure
Visibility
UV Index

Each card:

glassmorphism

hover lift

animated number transitions

gradient accent

--------------------------------------------------

HOURLY FORECAST

Horizontal scroll section.

Each item:

Time
Weather Icon
Temperature

Smooth scrolling.

Snap behavior.

--------------------------------------------------

7 DAY FORECAST

Modern forecast list.

Each row:

Day
Weather Icon
Condition
Temperature

Animated hover state.

--------------------------------------------------

EXTRA PREMIUM SECTIONS

Sunrise
Sunset

Air Quality

Moon Phase

Rain Chance

Feels Like

--------------------------------------------------

MICRO INTERACTIONS

Every component must feel alive.

Add:

Button hover scale

Card hover lift

Parallax effects

Mouse-follow glow

Weather icon floating

Smooth page transitions

Animated counters

Animated gradients

--------------------------------------------------

CURSOR EFFECTS

When mouse moves:

Create soft radial spotlight.

Cursor should influence nearby cards.

Cards should slightly react to cursor position.

--------------------------------------------------

WEATHER THEMES

Dynamic UI based on weather.

Sunny:
Warm glow

Rain:
Blue glass

Cloudy:
Soft gray

Storm:
Purple accents

Night:
Dark blue aesthetic

--------------------------------------------------

LOADING EXPERIENCE

Replace spinner.

Create skeleton loading.

Shimmer animation.

Weather icon placeholder.

--------------------------------------------------

TYPOGRAPHY

Font:

Inter

Weights:

900 Hero Temperature

800 Headings

600 Labels

400 Body

Letter spacing optimized.

--------------------------------------------------

COLORS

Background:
#050816

Primary:
#4F8CFF

Secondary:
#7C5CFF

Accent:
#00E5FF

Text:
#FFFFFF

Muted:
#94A3B8

--------------------------------------------------

ANIMATIONS

Use Framer Motion.

Required:

Page reveal

Card stagger animation

Search palette animation

Metric card reveal

Floating weather icon

Mouse reactive effects

--------------------------------------------------

TECH STACK

React
Vite
TypeScript
Tailwind CSS
Framer Motion
Lucide React

Component Architecture:

HeroSection

WeatherOverview

MetricCards

HourlyForecast

WeeklyForecast

SearchPalette

WeatherBackground

AnimatedCursorGlow

ThemeProvider

--------------------------------------------------

OUTPUT

Generate production-ready code.

No placeholders.

No beginner styling.

No basic cards.

No generic weather app design.

The final result should look like a premium SaaS product that could win a Dribbble feature and impress senior frontend recruiters.

Create a floating command palette search.

Default:
No search box visible.

Press "/"
OR
Click floating search icon.

Search palette smoothly appears.

ESC closes it.

Recent searches are remembered.

Search feels identical to Raycast and Arc Browser.