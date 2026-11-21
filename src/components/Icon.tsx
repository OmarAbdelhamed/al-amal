import {
  ArrowRight, Atom, AudioLines, Award, Baby, BadgeCheck, Blocks, BookMarked, BookOpen, Calculator, CalendarCheck,
  CalendarDays, CalendarPlus, Check, ChevronDown, ChevronRight, CircleAlert, CircleCheckBig, CircleDashed, CirclePlay,
  ClipboardCheck, Clock, Copy, FlaskConical, Footprints, Globe, GraduationCap, Handshake, Heart, HeartHandshake,
  Hourglass, Info, Languages, Lightbulb, ListChecks, Lock, Mail, Map, MapPin, Menu, MessageCircle, MonitorSmartphone,
  Phone, Presentation, Puzzle, Receipt, RotateCcw, Route, Search, Send, Shield, ShieldCheck, Signal, SlidersHorizontal,
  Sparkles, SpellCheck, Target, Timer, UserRound, Users, UsersRound, Video, Wifi, X, type LucideIcon
} from "lucide-react";

/** Only the icons the site uses, so the bundle stays small. Names match the content files. */
const ICONS: Record<string, LucideIcon> = {
  "arrow-right": ArrowRight, atom: Atom, "audio-lines": AudioLines, award: Award, baby: Baby, "badge-check": BadgeCheck,
  blocks: Blocks, "book-marked": BookMarked, "book-open": BookOpen, calculator: Calculator, "calendar-check": CalendarCheck,
  "calendar-days": CalendarDays, "calendar-plus": CalendarPlus, check: Check, "chevron-down": ChevronDown,
  "chevron-right": ChevronRight, "circle-alert": CircleAlert, "circle-check-big": CircleCheckBig, "circle-dashed": CircleDashed,
  "circle-play": CirclePlay, "clipboard-check": ClipboardCheck, clock: Clock, copy: Copy, "flask-conical": FlaskConical,
  footprints: Footprints, globe: Globe, "graduation-cap": GraduationCap, handshake: Handshake, heart: Heart,
  "heart-handshake": HeartHandshake, hourglass: Hourglass, info: Info, languages: Languages, lightbulb: Lightbulb,
  "list-checks": ListChecks, lock: Lock, mail: Mail, map: Map, "map-pin": MapPin, menu: Menu, "message-circle": MessageCircle,
  "monitor-smartphone": MonitorSmartphone, phone: Phone, presentation: Presentation, puzzle: Puzzle, receipt: Receipt,
  "rotate-ccw": RotateCcw, route: Route, search: Search, send: Send, shield: Shield, "shield-check": ShieldCheck,
  signal: Signal, "sliders-horizontal": SlidersHorizontal, sparkles: Sparkles, "spell-check": SpellCheck, target: Target,
  timer: Timer, "user-round": UserRound, users: Users, "users-round": UsersRound, video: Video, wifi: Wifi, x: X
};

type Props = { name: string; className?: string };

export function Icon({ name, className = "" }: Props) {
  const C = ICONS[name] ?? CircleDashed;
  return <C className={`i ${className}`.trim()} aria-hidden="true" strokeWidth={2} />;
}

/** Directional arrow that mirrors in RTL. */
export function Arrow({ small = false }: { small?: boolean }) {
  return <Icon name="arrow-right" className={`flip arrow ${small ? "i-sm" : ""}`} />;
}
