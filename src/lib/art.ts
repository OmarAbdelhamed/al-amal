/* Illustration system: flat SVG scenes built as markup strings (our own static
   content, rendered with dangerouslySetInnerHTML). One subject palette each;
   the 8-point star appears only on Quran art. */
type Pal = { m: string; d: string; l: string; a: string };
export const PAL: Record<string, Pal> = {
  languages: { m: "#2F6FA3", d: "#1F4F78", l: "#E6EFF8", a: "#8EB8D9" },
  math:      { m: "#C4573D", d: "#9A3F2B", l: "#FBE9E3", a: "#F0A08A" },
  science:   { m: "#2F7D4F", d: "#1F5C39", l: "#E4F2E8", a: "#8CC9A0" },
  coding:    { m: "#6A55A8", d: "#4C3B80", l: "#EEEAF7", a: "#B3A6DB" },
  quran:     { m: "#11655E", d: "#0B4743", l: "#E3F1EE", a: "#7FC4B8" },
  teachers:  { m: "#B7791F", d: "#8A5A14", l: "#FBF1DC", a: "#F2C14E" }
};
PAL.arabic = PAL.languages; PAL.islamic = PAL.quran;
const INK = "#14233B", SUN = "#F2C14E", CORAL = "#E8755A", CREAM = "#FFFDF8";
const EN = "font-family:'Nunito',sans-serif;font-weight:800";
const AR = "font-family:'Tajawal','IBM Plex Sans Arabic',sans-serif;font-weight:700";

// 8-point star (two squares) centred at x,y with radius r
export const star = (x: number, y: number, r: number, fill: string, extra = ""): string => {
  const pts: string[] = [];
  for (let i = 0; i < 16; i++) {
    const ang = (Math.PI / 8) * i - Math.PI / 2;
    const rr = i % 2 === 0 ? r : r * 0.72;
    pts.push((x + rr * Math.cos(ang)).toFixed(1) + "," + (y + rr * Math.sin(ang)).toFixed(1));
  }
  return `<polygon points="${pts.join(" ")}" fill="${fill}" ${extra}/>`;
};
const sparkle = (x: number, y: number, s: number, fill: string): string =>
  `<path d="M${x} ${y - s} Q${x + s * 0.18} ${y - s * 0.18} ${x + s} ${y} Q${x + s * 0.18} ${y + s * 0.18} ${x} ${y + s} Q${x - s * 0.18} ${y + s * 0.18} ${x - s} ${y} Q${x - s * 0.18} ${y - s * 0.18} ${x} ${y - s}Z" fill="${fill}"/>`;

// Soft dot grid everywhere; the 8-point star appears only on Quran art.
const frame = (c: Pal, inner: string, id: string): string => `
  <svg viewBox="0 0 240 160" role="img" aria-hidden="true" class="spot" direction="ltr" preserveAspectRatio="xMidYMid slice">
    <defs><pattern id="pt-${id}" width="20" height="20" patternUnits="userSpaceOnUse">${c === PAL.quran ? star(10, 10, 4.5, "none", `stroke="${c.m}" stroke-opacity=".14" stroke-width="1"`) : `<circle cx="10" cy="10" r="1.6" fill="${c.m}" opacity=".16"/>`}</pattern></defs>
    <rect width="240" height="160" fill="${c.l}"/>
    <rect width="240" height="160" fill="url(#pt-${id})"/>
    <ellipse cx="120" cy="138" rx="78" ry="10" fill="${c.m}" opacity=".10"/>
    ${inner}
  </svg>`;

const scenes: Record<string, (c: Pal) => string> = {
  sprout: (c) => `
    <path d="M92 104h56l-6 34a6 6 0 0 1-6 5h-32a6 6 0 0 1-6-5z" fill="${CORAL}"/>
    <rect x="88" y="98" width="64" height="12" rx="6" fill="${c.d}"/>
    <path d="M120 98V66" stroke="${c.m === PAL.arabic.m ? PAL.quran.m : c.m}" stroke-width="5" stroke-linecap="round"/>
    <path d="M120 76C120 58 104 48 86 50c0 18 14 28 34 26z" fill="${PAL.quran.m}"/>
    <path d="M120 70c0-20 16-32 38-30 0 22-16 32-38 30z" fill="${PAL.quran.a}"/>
    <g class="float" style="--d:.2s"><rect x="158" y="40" width="40" height="40" rx="12" fill="${CREAM}"/><text x="178" y="69" text-anchor="middle" font-size="24" fill="${c.m}" style="${AR}">ب</text></g>
    <g class="float" style="--d:.9s"><rect x="40" y="30" width="34" height="34" rx="10" fill="${SUN}"/><text x="57" y="55" text-anchor="middle" font-size="20" fill="${INK}" style="${AR}">أ</text></g>
    ${sparkle(206, 104, 6, SUN)}${sparkle(36, 96, 5, c.a)}`,

  letters: (c) => `
    <g transform="rotate(-8 74 96)"><rect x="46" y="68" width="56" height="56" rx="14" fill="${c.m}"/><text x="74" y="108" text-anchor="middle" font-size="32" fill="${CREAM}" style="${AR}">أ</text></g>
    <g transform="rotate(5 124 82)"><rect x="96" y="54" width="56" height="56" rx="14" fill="${SUN}"/><text x="124" y="94" text-anchor="middle" font-size="32" fill="${INK}" style="${AR}">ب</text></g>
    <g transform="rotate(-3 172 100)"><rect x="144" y="72" width="56" height="56" rx="14" fill="${CORAL}"/><text x="172" y="112" text-anchor="middle" font-size="32" fill="${CREAM}" style="${AR}">ت</text></g>
    ${sparkle(200, 42, 7, c.a)}${sparkle(40, 50, 5, SUN)}`,

  mushaf: (c) => `
    <path d="M86 140l58-62M154 140L96 78" stroke="${c.d}" stroke-width="10" stroke-linecap="round"/>
    <path d="M120 98c-14-10-34-12-52-6l-6-30c20-6 42-2 58 10z" fill="${CREAM}"/>
    <path d="M120 98c14-10 34-12 52-6l6-30c-20-6-42-2-58 10z" fill="${CREAM}"/>
    <path d="M120 72v26" stroke="${c.a}" stroke-width="2"/>
    <path d="M72 70c14-3 28-1 40 5M74 80c13-3 26-1 38 5M168 70c-14-3-28-1-40 5M166 80c-13-3-26-1-38 5" stroke="${c.a}" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <g class="float" style="--d:.4s">${star(190, 44, 14, SUN)}</g>
    ${sparkle(48, 44, 6, c.a)}`,

  star: (c) => `
    <g class="spin-slow" style="transform-origin:120px 82px">${star(120, 82, 54, c.m)}</g>
    ${star(120, 82, 36, c.l)}
    <path d="M120 98c-9-6-21-7-32-4l-3-18c12-4 25-1 35 6z" fill="${CREAM}"/>
    <path d="M120 98c9-6 21-7 32-4l3-18c-12-4-25-1-35 6z" fill="${CREAM}"/>
    ${sparkle(196, 40, 7, SUN)}${sparkle(44, 120, 5, SUN)}`,

  moon: (c) => `
    <circle cx="120" cy="74" r="42" fill="${SUN}"/>
    <circle cx="138" cy="62" r="38" fill="${c.l}"/>
    <path d="M120 128c-12-8-30-9-46-4l-4-22c17-5 36-2 50 8z" fill="${CREAM}"/>
    <path d="M120 128c12-8 30-9 46-4l4-22c-17-5-36-2-50 8z" fill="${CREAM}"/>
    <path d="M120 110v18" stroke="${c.a}" stroke-width="2"/>
    ${star(186, 46, 8, c.m)}${sparkle(56, 42, 6, c.m)}${sparkle(196, 96, 4, c.a)}`,

  mic: (c) => `
    <circle cx="86" cy="62" r="18" fill="#C68B67"/>
    <path d="M58 132c0-28 12-46 28-46s28 18 28 46z" fill="${c.m}"/>
    <path d="M124 92c-8-6-18-7-26-4" stroke="none"/>
    <rect x="128" y="78" width="60" height="48" rx="8" fill="${CREAM}"/>
    <path d="M158 78v48" stroke="${c.a}" stroke-width="2"/>
    <path d="M136 92h16M136 100h16M136 108h12M164 92h16M164 100h16M164 108h12" stroke="${c.a}" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M116 56q8 8 0 16M124 50q14 14 0 28" stroke="${c.m}" stroke-width="3" fill="none" stroke-linecap="round" class="pulse"/>
    ${sparkle(200, 50, 6, SUN)}`,

  globe: (c) => `
    <circle cx="108" cy="86" r="46" fill="${c.m}"/>
    <path d="M78 60c10 6 8 18 20 20s10 14 4 22-2 18-10 20M128 46c-4 10 6 14 14 16s8 14 0 18" stroke="${c.a}" stroke-width="7" fill="none" stroke-linecap="round" opacity=".9"/>
    <g class="float" style="--d:.1s"><path d="M160 34h44a10 10 0 0 1 10 10v24a10 10 0 0 1-10 10h-30l-12 10v-10h-2a10 10 0 0 1-10-10V44a10 10 0 0 1 10-10z" fill="${SUN}"/><text x="182" y="66" text-anchor="middle" font-size="22" fill="${INK}" style="${AR}">أ</text></g>
    <g class="float" style="--d:.8s"><path d="M34 100h30a10 10 0 0 1 10 10v16a10 10 0 0 1-10 10h-16l-10 8v-8h-4a10 10 0 0 1-10-10v-16a10 10 0 0 1 10-10z" fill="${CREAM}"/><text x="49" y="125" text-anchor="middle" font-size="18" fill="${c.m}" font-family="Nunito, sans-serif" font-weight="700">A</text></g>`,

  key: (c) => `
    <circle cx="84" cy="80" r="32" fill="${c.m}"/>
    <circle cx="84" cy="80" r="14" fill="${c.l}"/>
    <rect x="110" y="72" width="88" height="16" rx="8" fill="${c.m}"/>
    <rect x="168" y="84" width="12" height="22" rx="4" fill="${c.m}"/>
    <rect x="186" y="84" width="10" height="16" rx="4" fill="${c.m}"/>
    <g class="float" style="--d:.5s"><circle cx="150" cy="40" r="20" fill="${SUN}"/><text x="150" y="49" text-anchor="middle" font-size="22" fill="${INK}" style="${AR}">ن</text></g>
    ${sparkle(48, 128, 6, c.a)}${sparkle(208, 128, 5, CORAL)}`,

  lantern: (c) => `
    <path d="M120 22v14" stroke="${INK}" stroke-width="3"/>
    <path d="M104 38h32l-4 10h-24z" fill="${c.d}"/>
    <path d="M96 50h48l8 50-28 18h-8l-28-18z" fill="${c.m}"/>
    <path d="M110 58h20l4 40-14 9-14-9z" fill="${SUN}" class="glow"/>
    <path d="M100 118h40l-6 10h-28z" fill="${c.d}"/>
    ${star(176, 54, 10, c.a)}${sparkle(60, 60, 7, SUN)}${sparkle(190, 112, 5, CORAL)}`,

  board: (c) => `
    <path d="M78 140l14-30M162 140l-14-30" stroke="${c.d}" stroke-width="6" stroke-linecap="round"/>
    <rect x="56" y="34" width="128" height="82" rx="10" fill="${c.d}"/>
    <rect x="64" y="42" width="112" height="66" rx="6" fill="${PAL.quran.d}"/>
    <text x="150" y="80" text-anchor="middle" font-size="24" fill="${CREAM}" style="${AR}">أ ب</text>
    <path d="M76 90h44M76 98h30" stroke="${SUN}" stroke-width="3" stroke-linecap="round"/>
    <circle cx="96" cy="68" r="10" fill="none" stroke="${c.a}" stroke-width="3"/>
    ${sparkle(204, 40, 6, SUN)}`,

  scroll: (c) => `
    <rect x="66" y="40" width="108" height="86" rx="6" fill="${CREAM}"/>
    <rect x="58" y="32" width="124" height="16" rx="8" fill="${c.m}"/>
    <rect x="58" y="118" width="124" height="16" rx="8" fill="${c.m}"/>
    <path d="M160 64H82M160 76H90M160 88H82M160 100H100" stroke="${c.a}" stroke-width="3" stroke-linecap="round"/>
    <path d="M186 50l-34 52 6 4 34-52z" fill="${INK}"/>
    ${star(44, 52, 9, c.a)}${sparkle(206, 120, 6, SUN)}`,

  abc: (c) => `
    <g transform="rotate(-8 74 96)"><rect x="46" y="68" width="56" height="56" rx="14" fill="${c.m}"/><text x="74" y="108" text-anchor="middle" font-size="32" fill="${CREAM}" style="${EN}">A</text></g>
    <g transform="rotate(5 124 82)"><rect x="96" y="54" width="56" height="56" rx="14" fill="${SUN}"/><text x="124" y="94" text-anchor="middle" font-size="32" fill="${INK}" style="${EN}">B</text></g>
    <g transform="rotate(-3 172 100)"><rect x="144" y="72" width="56" height="56" rx="14" fill="${CORAL}"/><text x="172" y="112" text-anchor="middle" font-size="32" fill="${CREAM}" style="${EN}">C</text></g>
    ${sparkle(204, 42, 7, c.a)}${sparkle(38, 50, 5, SUN)}`,

  chat: (c) => `
    <g class="float" style="--d:.1s"><path d="M52 38h84a14 14 0 0 1 14 14v30a14 14 0 0 1-14 14H90l-18 14V96H52a14 14 0 0 1-14-14V52a14 14 0 0 1 14-14z" fill="${c.m}"/><text x="94" y="74" text-anchor="middle" font-size="22" fill="${CREAM}" style="${EN}">Hello!</text></g>
    <g class="float" style="--d:.9s"><path d="M120 84h62a14 14 0 0 1 14 14v18a14 14 0 0 1-14 14h-4v12l-16-12h-42a14 14 0 0 1-14-14V98a14 14 0 0 1 14-14z" fill="${SUN}"/><text x="151" y="113" text-anchor="middle" font-size="18" fill="${INK}" style="${EN}">Hi :)</text></g>
    ${sparkle(206, 46, 6, c.a)}`,

  shapes: (c) => `
    <circle cx="78" cy="92" r="32" fill="${c.m}"/>
    <rect x="120" y="58" width="58" height="58" rx="10" fill="${SUN}" transform="rotate(8 149 87)"/>
    <path d="M150 130l26-44 26 44z" fill="${PAL.languages.m}" opacity=".85"/>
    <text x="78" y="102" text-anchor="middle" font-size="28" fill="${CREAM}" style="${EN}">+</text>
    <text x="149" y="98" text-anchor="middle" font-size="26" fill="${INK}" style="${EN}">×</text>
    <g class="float" style="--d:.5s"><text x="48" y="46" font-size="22" fill="${c.d}" style="${EN}">1 2 3</text></g>
    ${sparkle(204, 40, 6, c.a)}`,

  graph: (c) => `
    <rect x="50" y="30" width="140" height="104" rx="12" fill="${CREAM}"/>
    <path d="M66 118h112M66 118V44" stroke="${INK}" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M70 110l26-18 24 8 26-30 28-14" stroke="${c.m}" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="174" cy="56" r="6" fill="${SUN}"/>
    <path d="M20 140l20-34 20 34z" fill="${c.a}"/>
    ${sparkle(212, 36, 6, c.a)}`,

  atom: (c) => `
    <g class="spin-slow" style="transform-origin:120px 82px">
      <ellipse cx="120" cy="82" rx="62" ry="22" fill="none" stroke="${c.m}" stroke-width="5"/>
      <ellipse cx="120" cy="82" rx="62" ry="22" fill="none" stroke="${c.a}" stroke-width="5" transform="rotate(60 120 82)"/>
      <ellipse cx="120" cy="82" rx="62" ry="22" fill="none" stroke="${c.m}" stroke-width="5" transform="rotate(-60 120 82)"/>
    </g>
    <circle cx="120" cy="82" r="13" fill="${SUN}"/>
    <circle cx="182" cy="82" r="6" fill="${CORAL}"/>
    ${sparkle(46, 40, 6, SUN)}${sparkle(204, 128, 5, c.a)}`,

  blocks: (c) => `
    <rect x="54" y="40" width="124" height="26" rx="8" fill="${SUN}"/><path d="M70 40v6h14v-6" fill="${c.l}"/>
    <rect x="70" y="70" width="104" height="26" rx="8" fill="${c.m}"/>
    <rect x="70" y="100" width="80" height="26" rx="8" fill="${CORAL}"/>
    <text x="66" y="58" font-size="13" fill="${INK}" style="${EN}">when ▶ clicked</text>
    <text x="84" y="88" font-size="13" fill="${CREAM}" style="${EN}">repeat 10</text>
    <text x="84" y="118" font-size="13" fill="${CREAM}" style="${EN}">move 10</text>
    <g class="float" style="--d:.4s"><circle cx="196" cy="48" r="14" fill="${c.a}"/></g>
    ${sparkle(36, 120, 6, c.a)}`,

  code: (c) => `
    <rect x="54" y="34" width="132" height="86" rx="10" fill="${INK}"/>
    <rect x="62" y="42" width="116" height="70" rx="6" fill="#22344F"/>
    <path d="M40 128h160l-10 10H50z" fill="${c.d}"/>
    <text x="74" y="66" font-size="13" fill="${c.a}" style="font-family:ui-monospace,Menlo,monospace">print("hi")</text>
    <rect x="74" y="76" width="56" height="6" rx="3" fill="${SUN}"/><rect x="74" y="90" width="80" height="6" rx="3" fill="${c.a}" opacity=".7"/>
    ${sparkle(206, 40, 6, SUN)}${sparkle(34, 50, 5, c.a)}`
};

export function spot(art: string, cat: string, id?: string): string {
  const c = PAL[cat] || PAL.quran;
  return frame(c, (scenes[art] || scenes.mushaf)(c), id || art + "-" + cat);
}

export function hero(): string {
  const T = PAL.quran, B = PAL.languages, G = PAL.science;
  return `
  <svg viewBox="0 0 560 500" class="hero-art" direction="ltr" role="img" aria-labelledby="hero-art-t">
    <title id="hero-art-t">Three children learning together around a big open book, with floating letters, numbers and a small atom.</title>
    <defs>
      <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r="1.8" fill="${T.m}" opacity=".18"/></pattern>
      <clipPath id="blob"><path d="M92 250c-8-104 70-196 186-206 120-10 196 66 204 168 8 100-30 236-196 252C122 480 100 350 92 250z"/></clipPath>
    </defs>
    <path d="M92 250c-8-104 70-196 186-206 120-10 196 66 204 168 8 100-30 236-196 252C122 480 100 350 92 250z" fill="${T.l}"/>
    <g clip-path="url(#blob)"><rect width="560" height="500" fill="url(#dots)"/></g>
    <circle cx="420" cy="118" r="40" fill="${SUN}" class="glow"/>
    <rect x="40" y="420" width="480" height="58" rx="29" fill="#FBE9E3"/>

    <!-- plant -->
    <path d="M470 420h40l-5 -38h-30z" fill="${CORAL}"/>
    <path d="M490 382c0-30-14-46-30-50 0 24 12 40 30 50zM490 382c0-26 12-42 28-44 0 22-10 36-28 44z" fill="${G.m}"/>

    <!-- stack of books -->
    <rect x="44" y="388" width="70" height="16" rx="4" fill="${B.m}"/>
    <rect x="50" y="372" width="62" height="16" rx="4" fill="${SUN}"/>
    <rect x="40" y="404" width="80" height="16" rx="4" fill="${CORAL}"/>

    <!-- girl reading a big book (centre) -->
    <path d="M232 452c2-70 22-98 48-102 26 4 46 32 48 102z" fill="${CORAL}"/>
    <path d="M244 302c0-30 16-48 36-48s36 18 36 48l8 48c-28 12-60 12-88 0z" fill="#9A3F2B"/>
    <circle cx="280" cy="298" r="21" fill="#E8B796"/>
    <path d="M280 412c-22-14-50-16-78-8l-6-44c30-8 60-4 84 12z" fill="${CREAM}"/>
    <path d="M280 412c22-14 50-16 78-8l6-44c-30-8-60-4-84 12z" fill="${CREAM}"/>
    <path d="M280 372v40" stroke="${B.a}" stroke-width="2"/>
    <path d="M210 376c20-4 40-2 58 7M212 390c18-4 36-2 54 6M350 376c-20-4-40-2-58 7M348 390c-18-4-36-2-54 6" stroke="${B.a}" stroke-width="3" fill="none" stroke-linecap="round"/>

    <!-- boy pointing (left) -->
    <ellipse cx="150" cy="452" rx="56" ry="16" fill="${INK}"/>
    <path d="M112 452c1-60 16-84 38-88 22 4 37 28 38 88z" fill="${T.m}"/>
    <path d="M178 396l30-46" stroke="${T.m}" stroke-width="15" stroke-linecap="round"/>
    <circle cx="211" cy="345" r="9" fill="#C68B67"/>
    <circle cx="150" cy="336" r="25" fill="#C68B67"/>
    <path d="M125 334c0-20 11-30 25-30s25 10 25 30c-4-8-12-12-25-12s-21 4-25 12z" fill="${INK}"/>

    <!-- child with number block (right) -->
    <ellipse cx="410" cy="452" rx="52" ry="15" fill="${INK}"/>
    <path d="M374 452c1-56 15-80 36-84 21 4 35 28 36 84z" fill="${B.m}"/>
    <circle cx="410" cy="340" r="24" fill="#8D5A3F"/>
    <path d="M386 338c0-20 10-30 24-30s24 10 24 30c-6-10-14-14-24-14s-18 4-24 14z" fill="${INK}"/>
    <circle cx="388" cy="322" r="9" fill="${INK}"/>
    <g transform="rotate(-8 410 412)"><rect x="384" y="388" width="52" height="52" rx="14" fill="${SUN}"/><text x="410" y="425" text-anchor="middle" font-size="28" fill="${INK}" style="${EN}">3</text></g>

    <!-- floating tiles: mostly general, one Arabic letter -->
    <g class="float" style="--d:0s"><g transform="rotate(-10 140 200)"><rect x="112" y="172" width="56" height="56" rx="16" fill="${B.m}"/><text x="140" y="211" text-anchor="middle" font-size="30" fill="${CREAM}" style="${EN}">A</text></g></g>
    <g class="float" style="--d:1.2s"><g transform="rotate(7 228 136)"><rect x="204" y="112" width="48" height="48" rx="14" fill="${CREAM}"/><text x="228" y="146" text-anchor="middle" font-size="26" fill="${T.m}" style="${AR}">أ</text></g></g>
    <g class="float" style="--d:2s"><g transform="rotate(-4 452 250)"><rect x="428" y="226" width="48" height="48" rx="14" fill="${CORAL}"/><text x="452" y="259" text-anchor="middle" font-size="26" fill="${CREAM}" style="${EN}">π</text></g></g>
    <g class="float" style="--d:.6s"><g transform="translate(330 150)">
      <ellipse cx="0" cy="0" rx="26" ry="9" fill="none" stroke="${G.m}" stroke-width="3.5"/>
      <ellipse cx="0" cy="0" rx="26" ry="9" fill="none" stroke="${G.m}" stroke-width="3.5" transform="rotate(60)"/>
      <ellipse cx="0" cy="0" rx="26" ry="9" fill="none" stroke="${G.m}" stroke-width="3.5" transform="rotate(-60)"/>
      <circle r="5" fill="${CORAL}"/></g></g>
    <g class="twinkle">${sparkle(300, 92, 9, SUN)}${sparkle(122, 112, 6, T.a)}${sparkle(482, 186, 6, G.m)}${sparkle(372, 222, 5, CORAL)}</g>
  </svg>`;
}

// Small decorative empty-state scene
export function empty(): string {
  const c = PAL.arabic;
  return `<svg viewBox="0 0 200 140" aria-hidden="true" class="empty-art" direction="ltr">
    <ellipse cx="100" cy="124" rx="70" ry="8" fill="${c.m}" opacity=".1"/>
    <circle cx="88" cy="66" r="36" fill="${c.l}" stroke="${c.m}" stroke-width="8"/>
    <path d="M114 92l30 30" stroke="${c.m}" stroke-width="12" stroke-linecap="round"/>
    <text x="88" y="78" text-anchor="middle" font-size="30" fill="${c.m}" style="${AR}">؟</text>
    ${sparkle(156, 34, 7, SUN)}${sparkle(36, 30, 5, CORAL)}
  </svg>`;
}
