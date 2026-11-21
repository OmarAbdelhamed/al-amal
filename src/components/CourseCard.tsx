import Link from "next/link";
import { formats, getCategory } from "@/lib/content";
import { ageShort, durationShort, fmtPrice, getDict, href, levelName, tr } from "@/lib/i18n";
import type { Course, Lang } from "@/lib/types";
import { Arrow, Icon } from "./Icon";
import { Spot } from "./ui";

export function CourseCard({ c, lang, index = 0, className = "" }: { c: Course; lang: Lang; index?: number; className?: string }) {
  const t = getDict(lang);
  const k = getCategory(c.cat)!;
  const price = fmtPrice(c, lang);
  const age = ageShort(c, lang);
  const lvl = levelName(c, lang);
  const dur = durationShort(c, lang);
  return (
    <article className={`ccard c-${c.cat} ${className}`} style={{ ["--i" as string]: index }}>
      <div className="thumb">
        <Spot art={c.art} cat={c.cat} id={`cc-${c.slug}`} />
        <div className="thumb-tags">
          <span className={`badge cat-${c.cat}`}><Icon name={k.icon} />{tr(k.name, lang)}</span>
          <span className="badge fmt"><Icon name={c.format === "online" ? "video" : "map-pin"} />{tr(formats[c.format], lang)}</span>
        </div>
      </div>
      <div className="body">
        <h3><Link href={href.course(lang, c.slug)}>{tr(c.title, lang)}</Link></h3>
        <p className="desc">{tr(c.tagline, lang)}</p>
        <dl className="facts-row">
          <div><dt>{t.age}</dt><dd className={age ? "" : "muted"}>{age ? <bdi>{age}</bdi> : "—"}</dd></div>
          <div><dt>{t.level}</dt><dd className={lvl ? "" : "muted"}>{lvl ?? "—"}</dd></div>
          <div><dt>{t.duration}</dt><dd className={dur ? "" : "muted"} title={tr(c.facts.duration, lang) ?? t.tbc}>{dur ? <bdi>{dur}</bdi> : "—"}</dd></div>
        </dl>
        <div className="foot">
          <div className="price">
            <small>{t.pricing.fee}</small>
            {price ? <b className="num">{price}</b> : <b className="pending">{t.feeTbc}</b>}
          </div>
          <Link className="view" href={href.course(lang, c.slug)} tabIndex={-1} aria-hidden="true">{t.cta.details}<Arrow small /></Link>
        </div>
      </div>
    </article>
  );
}
