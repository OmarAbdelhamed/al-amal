/* Course catalogue and organisation content.
   Course facts for the Quran, Arabic and teacher programs come from the
   reference site's public listings; anything unpublished is `null` and renders
   as "To be confirmed". No prices are invented: every `price` is null until the
   school confirms it. */
import type { AgeGroup, Category, Course, Facts, Format, L10n, LevelId } from "./types";



export const org = {
  name: { en: "Al-Amal School", ar: "مدرسة الأمل" },
  // Placeholder contact details — replace before launch.
  whatsapp: null as string | null,          // e.g. "+90 5XX XXX XX XX"
  email: null as string | null,             // e.g. "hello@example.org"
  currency: "USD"          // used once real fees are added
};

const allCategories: Category[] = [
  { id: "languages", icon: "languages",
    name: { en: "Languages", ar: "اللغات" },
    blurb: { en: "English and Arabic: reading, writing and speaking with confidence.", ar: "الإنجليزية والعربية: قراءة وكتابة وتحدّث بثقة." } },
  { id: "math", icon: "calculator",
    name: { en: "Mathematics", ar: "الرياضيات" },
    blurb: { en: "From counting and fractions to algebra and geometry.", ar: "من العدّ والكسور إلى الجبر والهندسة." } },
  { id: "science", icon: "atom",
    name: { en: "Science & Physics", ar: "العلوم والفيزياء" },
    blurb: { en: "Forces, energy and light, learned through simple experiments.", ar: "القوى والطاقة والضوء، بتجارب بسيطة." } },
  { id: "coding", icon: "blocks",
    name: { en: "Programming", ar: "البرمجة" },
    blurb: { en: "Logical thinking through Scratch, then real code in Python.", ar: "تفكير منطقي عبر سكراتش، ثم برمجة حقيقية ببايثون." } },
  { id: "quran", icon: "book-open",
    name: { en: "Quran & Islamic Studies", ar: "القرآن والتربية الإسلامية" },
    blurb: { en: "Recitation, tajweed, memorization and values.", ar: "تلاوة وتجويد وحفظ وقيم." } },
  { id: "teachers", icon: "presentation",
    name: { en: "Teacher Training", ar: "تأهيل المعلمين" },
    blurb: { en: "Certified courses for adults who teach.", ar: "دورات معتمدة لمن يعمل في التعليم." } }
];

export const ageGroups: AgeGroup[] = [
  { id: "5-7",   min: 5,  max: 7,  name: { en: "5–7 yrs",  ar: "5–7 سنوات" } },
  { id: "7-12",  min: 7,  max: 12, name: { en: "7–12 yrs", ar: "7–12 سنة" } },
  { id: "12-17", min: 12, max: 17, name: { en: "12–17 yrs", ar: "12–17 سنة" } },
  { id: "18",    min: 18, max: 99, name: { en: "Adults 18+", ar: "الكبار +18" } }
];

export const levels: Record<LevelId, L10n> = {
  beginner:     { en: "Beginner", ar: "مبتدئ" },
  intermediate: { en: "Intermediate", ar: "متوسط" },
  advanced:     { en: "Advanced", ar: "متقدم" },
  professional: { en: "Professional", ar: "مهني" }
};

export const formats: Record<Format, L10n> = {
  online:   { en: "Live online", ar: "مباشر عن بُعد" },
  inperson: { en: "In person", ar: "حضوري" }
};

/* ---------- Courses ---------- */
const C = (o: Course): Course => o;
const allCourses: Course[] = [
  C({
    slug: "little-sprouts", cat: "languages", art: "sprout", featured: true, source: 57,
    ageMin: 5, ageMax: 7, level: "beginner", format: "online",
    title: { en: "Little Sprouts", ar: "براعم الأمل" },
    tagline: { en: "First letters, first words — through stories and play.", ar: "أول الحروف وأول الكلمات، بالقصة واللعب." },
    summary: {
      en: "A dedicated early-years program for children aged 5 to 7. Children learn to read Arabic correctly using the spelling (tahjiya) method, practise writing letters and numerals, and build a love of learning through stories, videos, games and movement activities.",
      ar: "برنامج مخصّص للأطفال من 5 إلى 7 سنوات، يتعلّم فيه الطفل القراءة العربية السليمة بطريقة التهجية، ويتدرّب على كتابة الحروف والأرقام، ويحبّ التعلّم عبر القصص والفيديوهات والألعاب والأنشطة الحركية."
    },
    forWho: {
      en: "Children aged 5–7 who are starting to read Arabic, whether they speak Arabic at home or are just beginning.",
      ar: "أطفال بين 5 و7 سنوات في بداية رحلتهم مع القراءة العربية."
    },
    outcomes: [
      { en: "Reads Arabic letters and words correctly using tahjiya", ar: "يقرأ الحروف والكلمات قراءة صحيحة بطريقة التهجية" },
      { en: "Pronounces letters from their correct articulation points", ar: "ينطق الحروف من مخارجها الصحيحة" },
      { en: "Writes the Arabic letters and numerals", ar: "يكتب الحروف والأرقام العربية" },
      { en: "Moves on to Quran recitation once reading is secure", ar: "ينتقل إلى تلاوة القرآن بعد إتقان القراءة" }
    ],
    learn: [
      { en: "Spelling method, then fluent reading", ar: "التهجية ثم القراءة المتصلة" },
      { en: "Letter sounds and qualities, practically", ar: "مخارج الحروف وصفاتها عمليًا" },
      { en: "Gentle correction while reading aloud", ar: "تصحيح لطيف أثناء القراءة" },
      { en: "Writing letters and Arabic numerals", ar: "كتابة الحروف والأرقام العربية" },
      { en: "Core values and the basics of faith", ar: "أساسيات الدين وغرس القيم" },
      { en: "Stories, videos, games and activities", ar: "قصص وفيديوهات وألعاب وأنشطة" }
    ],
    curriculum: [
      { title: { en: "Letters and sounds", ar: "الحروف وأصواتها" },
        items: [{ en: "Recognising letter shapes", ar: "التعرّف على أشكال الحروف" }, { en: "Articulation points, practised aloud", ar: "مخارج الحروف بالتطبيق الصوتي" }] },
      { title: { en: "Spelling (tahjiya)", ar: "التهجية" },
        items: [{ en: "Building syllables and short words", ar: "تركيب المقاطع والكلمات القصيرة" }, { en: "Correcting common mistakes", ar: "تصحيح الأخطاء الشائعة" }] },
      { title: { en: "Fluent reading", ar: "القراءة المتصلة" },
        items: [{ en: "Reading connected text (darj)", ar: "قراءة الدَّرج" }, { en: "Performance notes from the teacher", ar: "ملاحظات الأداء من المعلّمة" }] },
      { title: { en: "Writing and numerals", ar: "الكتابة والأرقام" },
        items: [{ en: "Writing Arabic letters", ar: "كتابة الحروف العربية" }, { en: "Reading and writing Arabic numerals", ar: "قراءة الأرقام العربية وكتابتها" }] },
      { title: { en: "Values and play", ar: "القيم واللعب" },
        items: [{ en: "Basics of faith and good character", ar: "أساسيات الدين والأخلاق" }, { en: "Stories, videos and games", ar: "قصص وفيديوهات وألعاب تعليمية" }] }
    ],
    facts: { sessions: null, sessionLength: null, duration: null, schedule: null, groupSize: null, language: { en: "Arabic", ar: "العربية" }, intake: null },
    requirements: [],
    next: "quran-recitation",
    price: null, priceUnit: null
  }),

  C({
    slug: "arabic-reading", cat: "languages", art: "letters", featured: false, source: 32,
    ageMin: 7, ageMax: 12, level: "beginner", format: "online",
    title: { en: "Sound Arabic Reading", ar: "القراءة العربية السليمة" },
    tagline: { en: "Read Arabic correctly and confidently — live, in small groups.", ar: "قراءة عربية صحيحة وواثقة، مباشرةً وفي مجموعات صغيرة." },
    summary: {
      en: "Live online classes that teach children over seven to read Arabic correctly and write it soundly, with a values curriculum woven through every lesson. Groups are kept to a size that suits each child's age and level.",
      ar: "حصص مباشرة عن بُعد تعلّم الأطفال فوق السبع سنوات القراءة العربية السليمة ومبادئ الكتابة الصحيحة، مع منهاج تربوي يرافق كل درس. تُبنى المجموعات بأعداد تناسب أعمار الطلاب ومستوياتهم."
    },
    forWho: { en: "Children aged 7 and over who need a solid, correct foundation in reading Arabic.", ar: "الأطفال من عمر 7 سنوات فما فوق ممن يحتاجون أساسًا متينًا في القراءة." },
    outcomes: [
      { en: "Reads Arabic text accurately", ar: "يقرأ النص العربي قراءة صحيحة" },
      { en: "Writes Arabic using correct principles", ar: "يكتب وفق مبادئ الكتابة الصحيحة" },
      { en: "Is ready to begin Quran recitation", ar: "يصبح مستعدًا لبدء تلاوة القرآن" }
    ],
    learn: [
      { en: "Correct Arabic reading", ar: "القراءة العربية السليمة" },
      { en: "Principles of correct writing", ar: "مبادئ الكتابة الصحيحة" },
      { en: "Islamic values and manners", ar: "القيم والأخلاق الإسلامية" },
      { en: "Varied, hands-on teaching methods", ar: "أساليب تدريس متنوعة ومبتكرة" }
    ],
    curriculum: [
      { title: { en: "Reading foundations", ar: "أساسيات القراءة" }, items: [{ en: "Letters, vowels and sounds", ar: "الحروف والحركات والأصوات" }] },
      { title: { en: "Connected reading", ar: "القراءة المتصلة" }, items: [{ en: "Words, sentences and short passages", ar: "كلمات وجمل ونصوص قصيرة" }] },
      { title: { en: "Writing", ar: "الكتابة" }, items: [{ en: "Principles of correct Arabic writing", ar: "مبادئ الكتابة العربية الصحيحة" }] },
      { title: { en: "Values curriculum", ar: "المنهاج التربوي" }, items: [{ en: "Character and Islamic manners", ar: "الأخلاق والآداب الإسلامية" }] }
    ],
    facts: { sessions: null, sessionLength: null, duration: null, schedule: null, groupSize: { en: "Small groups by age and level", ar: "مجموعات صغيرة حسب العمر والمستوى" }, language: { en: "Arabic", ar: "العربية" }, intake: null },
    requirements: [{ en: "Age 7 or over", ar: "أن يكون العمر 7 سنوات فأكثر" }],
    next: "quran-recitation",
    price: null, priceUnit: null
  }),

  C({
    slug: "quran-recitation", cat: "quran", art: "mushaf", featured: true, source: 47,
    ageMin: 7, ageMax: 17, level: "intermediate", format: "online",
    title: { en: "Quran Recitation & Tajweed", ar: "تلاوة القرآن والتجويد" },
    tagline: { en: "Read the whole Quran from the mushaf, with tajweed applied as you go.", ar: "ختمة كاملة من المصحف، مع تطبيق التجويد أثناء القراءة." },
    summary: {
      en: "Students read a complete khatma of the Quran from the mushaf with a specialist teacher, learning tajweed both as theory and in practice. A simplified, complete tajweed curriculum comes with exercises and activities, alongside a values curriculum.",
      ar: "يقرأ الطالب ختمة كاملة من المصحف نظرًا مع معلّم مختص، ويتعلّم التجويد نظريًا وعمليًا، عبر منهاج تجويدي مبسّط ومتكامل مع تمارين وأنشطة مرافقة، ومنهاج تربوي يرافق الحلقة."
    },
    forWho: { en: "Children and teens who can already read Arabic and want to recite the Quran correctly.", ar: "الأطفال واليافعون الذين يقرؤون العربية ويريدون ضبط تلاوة القرآن." },
    outcomes: [
      { en: "Completes a full reading (khatma) of the Quran", ar: "يُتمّ ختمة كاملة نظرًا" },
      { en: "Applies tajweed rules while reciting", ar: "يطبّق أحكام التجويد أثناء التلاوة" },
      { en: "Understands the theory behind each rule", ar: "يفهم الجانب النظري لكل حكم" }
    ],
    learn: [
      { en: "A complete khatma from the mushaf", ar: "ختمة كاملة نظرًا" },
      { en: "Theoretical and practical tajweed", ar: "التجويد النظري والعملي" },
      { en: "Exercises and activities for each rule", ar: "تمارين وأنشطة لكل حكم" },
      { en: "Islamic values and manners", ar: "القيم والأخلاق الإسلامية" }
    ],
    curriculum: [
      { title: { en: "Correct recitation", ar: "ضبط التلاوة" }, items: [{ en: "Reading from the mushaf with the teacher", ar: "القراءة من المصحف مع المعلّم" }] },
      { title: { en: "Tajweed — theory", ar: "التجويد النظري" }, items: [{ en: "Simplified tajweed curriculum", ar: "منهاج تجويدي مبسّط" }] },
      { title: { en: "Tajweed — practice", ar: "التجويد العملي" }, items: [{ en: "Applying rules during each reading", ar: "تطبيق الأحكام أثناء القراءة" }] },
      { title: { en: "Values curriculum", ar: "المنهاج التربوي" }, items: [{ en: "Character and manners", ar: "الأخلاق والآداب" }] }
    ],
    facts: { sessions: null, sessionLength: null, duration: null, schedule: null, groupSize: { en: "Small groups by age and level", ar: "مجموعات صغيرة حسب العمر والمستوى" }, language: { en: "Arabic", ar: "العربية" }, intake: null },
    requirements: [{ en: "Able to read Arabic", ar: "إجادة القراءة العربية" }],
    next: "quran-memorization",
    price: null, priceUnit: null
  }),

  C({
    slug: "quran-memorization", cat: "quran", art: "star", featured: false, source: 60,
    ageMin: 13, ageMax: 99, level: "advanced", format: "online",
    title: { en: "Al-Maher: Full Quran Memorization", ar: "الماهر بالقرآن: حفظ القرآن كاملًا" },
    tagline: { en: "Memorize the entire Quran over two years, with tajweed and steady review.", ar: "حفظ القرآن كاملًا غيبًا خلال عامين، مع التجويد والمراجعة المنتظمة." },
    summary: {
      en: "A two-year program to memorize the entire Quran by heart, with theoretical and practical tajweed. Students review in pairs to secure what they memorize and sit regular cumulative tests. Classes run live on Zoom, and new groups open only twice a year.",
      ar: "برنامج لمدة عامين لحفظ القرآن الكريم كاملًا غيبًا مع التجويد النظري والعملي. يراجع الطلاب بالمدارسة الثنائية لتثبيت الحفظ، ويخضعون لاختبارات دورية تراكمية. الحلقات مباشرة عبر زوم، وتُفتتح مرتين في السنة فقط."
    },
    forWho: { en: "Students aged 13 and over whose recitation is already accurate and who are ready for a serious commitment.", ar: "الطلاب من عمر 13 سنة فما فوق، ممن أتقنوا التلاوة ومستعدون لالتزام جاد." },
    outcomes: [
      { en: "Memorizes the whole Quran by heart", ar: "يحفظ القرآن الكريم كاملًا غيبًا" },
      { en: "Secures memorization through structured review", ar: "يثبّت حفظه بالمراجعة المنظّمة" },
      { en: "Recites with applied tajweed", ar: "يتلو مع تطبيق أحكام التجويد" }
    ],
    learn: [
      { en: "Full memorization of the Quran", ar: "حفظ القرآن كاملًا غيبًا" },
      { en: "Theoretical and practical tajweed", ar: "التجويد النظري والعملي" },
      { en: "Pair review and consolidation", ar: "المدارسة الثنائية وتثبيت الحفظ" },
      { en: "Basics of Islam through a values curriculum", ar: "أساسيات الدين عبر منهاج تربوي" },
      { en: "Regular cumulative tests", ar: "اختبارات دورية تراكمية" }
    ],
    curriculum: [
      { title: { en: "Admission", ar: "القبول" }, items: [{ en: "Interview with the program team", ar: "مقابلة مع إدارة المشروع" }, { en: "Memorize one juz and pass its test within one week", ar: "حفظ جزء كامل واجتياز اختباره خلال أسبوع" }] },
      { title: { en: "Memorization", ar: "الحفظ" }, items: [{ en: "New memorization with the teacher", ar: "الحفظ الجديد مع المعلّم" }, { en: "Tajweed applied throughout", ar: "تطبيق التجويد طوال الوقت" }] },
      { title: { en: "Review and consolidation", ar: "المراجعة والتثبيت" }, items: [{ en: "Pair review (mudarasa)", ar: "المدارسة الثنائية" }, { en: "Cumulative tests at regular intervals", ar: "اختبارات تراكمية دورية" }] }
    ],
    facts: { sessions: null, sessionLength: null, duration: { en: "2 years", ar: "عامان" }, schedule: null, groupSize: { en: "Small groups by age and level", ar: "مجموعات صغيرة حسب العمر والمستوى" }, language: { en: "Arabic", ar: "العربية" }, intake: { en: "Twice a year — start and middle of the year", ar: "مرتان في السنة — بدايتها ومنتصفها" } },
    requirements: [
      { en: "Age 13 or over", ar: "ألا يقل العمر عن 13 سنة" },
      { en: "Accurate recitation with tajweed", ar: "أن تكون التلاوة متقنة ومجوّدة" },
      { en: "Pass an interview with the program team", ar: "النجاح في المقابلة" },
      { en: "Memorize one juz and pass its test within a week", ar: "حفظ جزء كامل والنجاح باختباره خلال أسبوع" },
      { en: "Commit to attending every session", ar: "الالتزام بالدوام في الحلقة" }
    ],
    price: null, priceUnit: null
  }),

  C({
    slug: "last-quarter", cat: "quran", art: "moon", featured: false, source: 64,
    ageMin: null, ageMax: null, level: null, format: "online",
    title: { en: "Memorizing the Last Quarter", ar: "حفظ الربع الأخير" },
    tagline: { en: "A focused memorization track for the final quarter of the Quran.", ar: "مسار حفظ مركّز للربع الأخير من القرآن الكريم." },
    summary: {
      en: "A memorization program covering the last quarter of the Quran. The reference site lists this program as open for registration but does not publish its details yet.",
      ar: "برنامج لحفظ الربع الأخير من القرآن الكريم. التسجيل متاح، وتفاصيل البرنامج لم تُنشر بعد."
    },
    forWho: null,
    outcomes: [{ en: "Memorizes the last quarter of the Quran", ar: "يحفظ الربع الأخير من القرآن الكريم" }],
    learn: [],
    curriculum: [],
    facts: { sessions: null, sessionLength: null, duration: null, schedule: null, groupSize: null, language: { en: "Arabic", ar: "العربية" }, intake: null },
    requirements: [],
    price: null, priceUnit: null
  }),

  C({
    slug: "adult-recitation", cat: "quran", art: "mic", featured: false, source: 59,
    ageMin: 18, ageMax: 99, level: null, format: "online",
    title: { en: "One-to-One Recitation for Adults", ar: "الإقراء الفردي للكبار" },
    tagline: { en: "Personal sessions to perfect your recitation, at your own pace.", ar: "جلسات فردية لضبط تلاوتك، بالوتيرة التي تناسبك." },
    summary: {
      en: "Individual online sessions for adults to read a complete khatma from the mushaf with a specialist teacher, learning practical and theoretical tajweed along the way.",
      ar: "جلسات فردية عن بُعد للكبار، يقرأ فيها المتعلّم ختمة كاملة من المصحف مع معلّم مختص، ويتعلّم التجويد العملي والنظري."
    },
    forWho: { en: "Parents and other adults who want personal attention to correct their recitation.", ar: "الآباء والأمهات وسائر الكبار ممن يريدون متابعة شخصية لضبط تلاوتهم." },
    outcomes: [
      { en: "Completes a full khatma with a teacher", ar: "يُتمّ ختمة كاملة مع معلّم" },
      { en: "Recites with correct tajweed", ar: "يتلو بأحكام تجويد صحيحة" }
    ],
    learn: [
      { en: "A complete khatma from the mushaf", ar: "ختمة كاملة نظرًا" },
      { en: "Theoretical and practical tajweed", ar: "التجويد النظري والعملي" },
      { en: "Exercises and activities", ar: "تمارين وأنشطة مرافقة" }
    ],
    curriculum: [
      { title: { en: "Individual recitation", ar: "الإقراء الفردي" }, items: [{ en: "One-to-one reading with the teacher", ar: "القراءة الفردية مع المعلّم" }] },
      { title: { en: "Tajweed", ar: "التجويد" }, items: [{ en: "Simplified, complete tajweed curriculum", ar: "منهاج تجويدي مبسّط ومتكامل" }] }
    ],
    facts: { sessions: null, sessionLength: null, duration: null, schedule: null, groupSize: { en: "One-to-one", ar: "فردي" }, language: { en: "Arabic", ar: "العربية" }, intake: null },
    requirements: [],
    price: null, priceUnit: null
  }),

  C({
    slug: "non-native", cat: "languages", art: "globe", featured: false, source: 62,
    ageMin: 7, ageMax: 99, level: "beginner", format: "online",
    title: { en: "Arabic & Quran for Non-Arabic Speakers", ar: "العربية والقرآن للناطقين بغيرها" },
    tagline: { en: "From the alphabet to Quran recitation, in groups of five.", ar: "من الحروف إلى تلاوة القرآن، في مجموعات من خمسة طلاب." },
    summary: {
      en: "An eight-month program for learners who don't speak Arabic. Learners master the letters and correct reading through live Zoom classes, pick up everyday Arabic sentences, and move on to reciting the Quran once their reading is accurate.",
      ar: "برنامج لمدة ثمانية أشهر لغير الناطقين بالعربية. يتقن المتعلّم الحروف والقراءة السليمة في حصص مباشرة عبر زوم، ويتعلّم جملًا عربية للاستخدام اليومي، ثم ينتقل إلى تلاوة القرآن بعد إتقان القراءة."
    },
    forWho: { en: "Children and adults whose first language isn't Arabic.", ar: "الصغار والكبار ممن لغتهم الأم ليست العربية." },
    outcomes: [
      { en: "Reads Arabic letters and words correctly", ar: "يقرأ الحروف والكلمات قراءة صحيحة" },
      { en: "Uses everyday Arabic sentences", ar: "يستخدم جملًا عربية يومية" },
      { en: "Begins reciting the Quran", ar: "يبدأ تلاوة القرآن الكريم" }
    ],
    learn: [
      { en: "Arabic letters and the spelling method", ar: "الحروف العربية وطريقة التهجية" },
      { en: "Correct pronunciation, practised live", ar: "تصحيح النطق عمليًا" },
      { en: "Everyday Arabic sentences", ar: "جمل عربية للحياة اليومية" },
      { en: "Writing letters and numerals", ar: "كتابة الحروف والأرقام" },
      { en: "Values and character lessons", ar: "دروس تربوية وأخلاقية" },
      { en: "Quran recitation after reading is secure", ar: "تلاوة القرآن بعد إتقان القراءة" }
    ],
    curriculum: [
      { title: { en: "Letters and sounds", ar: "الحروف والأصوات" }, items: [{ en: "Articulation and letter qualities", ar: "المخارج والصفات" }] },
      { title: { en: "Spelling to fluent reading", ar: "من التهجية إلى الدَّرج" }, items: [{ en: "Building words, then connected reading", ar: "تركيب الكلمات ثم القراءة المتصلة" }] },
      { title: { en: "Everyday Arabic", ar: "عربية الحياة اليومية" }, items: [{ en: "Useful sentences for daily life", ar: "جمل مفيدة للاستخدام اليومي" }] },
      { title: { en: "Quran recitation", ar: "تلاوة القرآن" }, items: [{ en: "Starts after accurate reading is reached", ar: "تبدأ بعد إتقان القراءة" }] }
    ],
    facts: { sessions: { en: "3 days a week", ar: "3 أيام أسبوعيًا" }, sessionLength: null, duration: { en: "8 months", ar: "8 أشهر" }, schedule: null, groupSize: { en: "5 learners per group", ar: "5 متعلّمين في المجموعة" }, language: null, intake: null },
    requirements: [
      { en: "A reliable internet connection", ar: "اتصال جيد بالإنترنت" },
      { en: "Commitment to the full course", ar: "الالتزام بحضور كامل الدورة" }
    ],
    price: null, priceUnit: null
  }),

  C({
    slug: "grammar-keys", cat: "languages", art: "key", featured: false, source: 70,
    ageMin: 12, ageMax: 99, level: "intermediate", format: "online",
    title: { en: "Keys to Arabic Grammar", ar: "مفاتيح النحو" },
    tagline: { en: "Step into nahw gently — and read, write and speak better for it.", ar: "مدخل ميسّر إلى النحو، يقوّي القراءة والكتابة والتعبير." },
    summary: {
      en: "An online program that introduces the principles of Arabic grammar (nahw) step by step, while strengthening reading comprehension, writing, and spoken expression. Girls are taught by female teachers and boys by male teachers.",
      ar: "برنامج إلكتروني يعلّم مبادئ علم النحو العربي بأسلوب تدريجي وميسّر، مع تقوية مهارات القراءة والفهم والكتابة والتعبير. تدرّس المعلمات الإناث ويدرّس المعلمون الذكور."
    },
    forWho: { en: "Students aged 12 and over who already read and write Arabic well.", ar: "الطلاب من عمر 12 سنة فما فوق ممن يجيدون القراءة والكتابة." },
    outcomes: [
      { en: "Understands the core principles of nahw", ar: "يفهم مبادئ النحو الأساسية" },
      { en: "Reads with better comprehension", ar: "يقرأ بفهم أعمق" },
      { en: "Writes and speaks more accurately", ar: "يكتب ويتحدّث بدقة أكبر" }
    ],
    learn: [
      { en: "Principles of Arabic grammar", ar: "مبادئ النحو العربي" },
      { en: "Reading and comprehension", ar: "القراءة والفهم" },
      { en: "Writing skills", ar: "مهارة الكتابة" },
      { en: "Expression and speaking", ar: "التعبير والتحدّث" }
    ],
    curriculum: [
      { title: { en: "Grammar foundations", ar: "أساسيات النحو" }, items: [{ en: "Gradual introduction to nahw", ar: "مدخل تدريجي إلى النحو" }] },
      { title: { en: "Language skills", ar: "المهارات اللغوية" }, items: [{ en: "Reading, writing and speaking practice", ar: "تدريب على القراءة والكتابة والتحدّث" }] }
    ],
    facts: { sessions: null, sessionLength: null, duration: null, schedule: null, groupSize: null, language: { en: "Arabic", ar: "العربية" }, intake: null },
    requirements: [
      { en: "Reads Arabic fluently and correctly", ar: "إجادة القراءة العربية السليمة" },
      { en: "Knows the basics of Arabic writing", ar: "إجادة أساسيات الكتابة العربية" },
      { en: "Age 12 or over", ar: "ألا يقل العمر عن 12 سنة" },
      { en: "Pass an interview", ar: "اجتياز المقابلة بنجاح" }
    ],
    price: null, priceUnit: null
  }),

  C({
    slug: "community-circles", cat: "quran", art: "lantern", featured: false, source: 61,
    ageMin: null, ageMax: null, level: null, format: "inperson",
    title: { en: "In-Person Learning Circles", ar: "الحلقات الحضورية" },
    tagline: { en: "Reading, Quran, fiqh and seerah — together, in your city.", ar: "قراءة وقرآن وفقه وسيرة، معًا في مدينتك." },
    summary: {
      en: "Seasonal in-person circles held in Gaziantep, Kahramanmaraş, Kilis and Nizip. Children study Arabic reading and writing, Quran reading, fiqh and seerah, with faith gatherings and a closing celebration.",
      ar: "حلقات حضورية موسمية في غازي عنتاب وكهرمان مرعش وكلس ونيزيب. يتعلّم فيها الأطفال القراءة والكتابة العربية وقراءة القرآن والفقه والسيرة، مع مجالس إيمانية وحفل ختامي."
    },
    forWho: { en: "Families living near one of the four city centres.", ar: "العائلات المقيمة قرب أحد المراكز الأربعة." },
    outcomes: [
      { en: "Reads and writes Arabic", ar: "يقرأ العربية ويكتبها" },
      { en: "Reads the Quran", ar: "يقرأ القرآن الكريم" },
      { en: "Learns foundations of fiqh and the Prophet's life", ar: "يتعلّم أساسيات الفقه والسيرة" }
    ],
    learn: [
      { en: "Arabic reading and writing", ar: "القراءة والكتابة العربية" },
      { en: "Quran reading", ar: "قراءة القرآن الكريم" },
      { en: "Fiqh and seerah", ar: "الفقه والسيرة" },
      { en: "Faith gatherings", ar: "مجالس إيمانية" },
      { en: "Closing celebration", ar: "حفل ختامي" }
    ],
    curriculum: [
      { title: { en: "Language", ar: "اللغة" }, items: [{ en: "Arabic reading and writing", ar: "القراءة والكتابة العربية" }] },
      { title: { en: "Quran", ar: "القرآن" }, items: [{ en: "Quran reading", ar: "قراءة القرآن الكريم" }] },
      { title: { en: "Islamic studies", ar: "العلوم الشرعية" }, items: [{ en: "Fiqh and seerah", ar: "الفقه والسيرة" }, { en: "Faith gatherings", ar: "مجالس إيمانية" }] }
    ],
    facts: { sessions: null, sessionLength: null, duration: { en: "Seasonal — last session ran 21 May to 20 Sep 2026", ar: "موسمية — آخر دورة من 21 أيار إلى 20 أيلول 2026" }, schedule: null, groupSize: null, language: { en: "Arabic", ar: "العربية" }, intake: { en: "Next season dates not yet announced", ar: "مواعيد الموسم القادم لم تُعلن بعد" }, cities: { en: "Gaziantep · Kahramanmaraş · Kilis · Nizip", ar: "غازي عنتاب · كهرمان مرعش · كلس · نيزيب" } },
    requirements: [],
    price: null, priceUnit: null
  }),

  /* ---------- Teacher training ---------- */
  C({
    slug: "reading-teacher", cat: "teachers", art: "board", featured: false, source: 15,
    ageMin: 18, ageMax: 99, level: "professional", format: "online",
    title: { en: "Arabic Reading Teacher Certificate", ar: "تأهيل معلّم القراءة العربية السليمة" },
    tagline: { en: "Learn to teach reading with the tahjiya method.", ar: "تعلّم تدريس القراءة بطريقة التهجية." },
    summary: { en: "A one-month training course that prepares teachers to teach the principles of correct Arabic reading using the spelling method, and to spot and correct students' common mistakes.", ar: "دورة تدريبية لمدة شهر تؤهّل المعلّم لتعليم مبادئ القراءة العربية السليمة بطريقة التهجية، واكتشاف أخطاء الطلاب الشائعة وتصحيحها." },
    forWho: { en: "Adults 18+ who teach, or want to teach, Arabic reading.", ar: "الكبار فوق 18 سنة ممن يعلّمون القراءة أو يرغبون في ذلك." },
    outcomes: [{ en: "Teaches reading with the tahjiya method", ar: "يدرّس القراءة بطريقة التهجية" }, { en: "Earns a certificate on passing the final exam", ar: "ينال شهادة عند اجتياز الاختبار النهائي" }],
    learn: [
      { en: "Correct articulation and letter qualities", ar: "تصحيح مخارج الحروف وصفاتها عمليًا" },
      { en: "The best way to teach reading (tahjiya)", ar: "الطريقة المثلى لتعليم القراءة (التهجية)" },
      { en: "Finding and fixing common mistakes", ar: "اكتشاف الأخطاء الشائعة وتصحيحها" },
      { en: "Exercises in every session", ar: "تدريبات مرافقة لجميع الجلسات" }
    ],
    curriculum: [],
    facts: { sessions: { en: "5 days a week", ar: "5 أيام أسبوعيًا" }, sessionLength: null, duration: { en: "1 month", ar: "شهر كامل" }, schedule: null, groupSize: null, language: { en: "Arabic", ar: "العربية" }, intake: null, certificate: true },
    requirements: [{ en: "Age 18 or over", ar: "تجاوز الثامنة عشرة" }, { en: "Attend the full course", ar: "الالتزام بحضور كامل الدورة" }, { en: "A reliable internet connection", ar: "اتصال جيد بالإنترنت" }],
    price: null, priceUnit: null
  }),
  C({
    slug: "quran-teacher", cat: "teachers", art: "board", featured: false, source: 51,
    ageMin: 18, ageMax: 99, level: "professional", format: "online",
    title: { en: "Quran Teacher Certificate", ar: "تأهيل معلّم القرآن الكريم" },
    tagline: { en: "Three levels, ten juz, and a full tajweed curriculum.", ar: "ثلاثة مستويات، وعشرة أجزاء، ومنهاج تجويد متكامل." },
    summary: { en: "A three-level course that prepares teachers to teach and correct Quran recitation and theoretical tajweed. Trainees recite ten juz across the three levels.", ar: "دورة من ثلاثة مستويات تؤهّل المعلّم لتعليم القرآن الكريم وإقرائه والتجويد النظري بكفاءة، ويُقرأ خلالها عشرة أجزاء." },
    forWho: { en: "Adults 18+ with good recitation.", ar: "الكبار فوق 18 سنة ممن يتقنون التلاوة." },
    outcomes: [{ en: "Detects and corrects recitation mistakes", ar: "يكتشف الأخطاء القرائية ويصحّحها" }, { en: "Earns a certificate on passing the final exam", ar: "ينال شهادة عند اجتياز الاختبار النهائي" }],
    learn: [
      { en: "Recitation of ten juz across three levels", ar: "إقراء عشرة أجزاء خلال المستويات الثلاثة" },
      { en: "Detecting and correcting mistakes", ar: "اكتشاف الأخطاء القرائية وتصحيحها" },
      { en: "A complete, simplified tajweed curriculum", ar: "منهاج تجويدي متكامل ومبسّط" },
      { en: "Tajweed applied during reading", ar: "تطبيق التجويد أثناء القراءة" }
    ],
    curriculum: [
      { title: { en: "Level 1", ar: "المستوى الأول" }, items: [{ en: "One month, 5 days a week", ar: "شهر كامل، 5 أيام أسبوعيًا" }] },
      { title: { en: "Level 2", ar: "المستوى الثاني" }, items: [{ en: "One month, 5 days a week", ar: "شهر كامل، 5 أيام أسبوعيًا" }] },
      { title: { en: "Level 3", ar: "المستوى الثالث" }, items: [{ en: "One month, 5 days a week", ar: "شهر كامل، 5 أيام أسبوعيًا" }] }
    ],
    facts: { sessions: { en: "5 days a week", ar: "5 أيام أسبوعيًا" }, sessionLength: null, duration: { en: "3 levels × 1 month", ar: "3 مستويات × شهر" }, schedule: null, groupSize: null, language: { en: "Arabic", ar: "العربية" }, intake: null, certificate: true },
    requirements: [{ en: "Age 18 or over", ar: "العمر 18 عامًا فأكثر" }, { en: "Good recitation", ar: "أن تكون التلاوة جيدة" }, { en: "Attend the full course", ar: "الالتزام بحضور كامل الدورة" }, { en: "A reliable internet connection", ar: "اتصال جيد بالإنترنت" }],
    price: null, priceUnit: null
  }),
  C({
    slug: "creative-teacher", cat: "teachers", art: "board", featured: false, source: 55,
    ageMin: 18, ageMax: 99, level: "professional", format: "online",
    title: { en: "The Creative Teacher: Teaching Skills", ar: "المعلّم المبدع: مهارات التدريس" },
    tagline: { en: "Plan lessons, use teaching aids, and assess well.", ar: "خطّط للدرس، ووظّف الوسائل، وقيّم بدقة." },
    summary: { en: "A one-month course combining theory and practice: lesson planning and objectives, teaching aids, delivering lessons, and building and marking tests.", ar: "دورة لمدة شهر تجمع النظري والعملي: التخطيط التربوي وأهداف الدرس، والوسائل التعليمية، وتنفيذ الدرس، وإعداد الاختبارات وتقويمها." },
    forWho: { en: "Adults 18+ who teach the companion lessons in Quran and Arabic programs.", ar: "الكبار فوق 18 سنة ممن يدرّسون الدروس المصاحبة." },
    outcomes: [{ en: "Builds a complete model lesson plan", ar: "يُعدّ خطة درس نموذجية متكاملة" }, { en: "Earns a certificate on passing the final exam", ar: "ينال شهادة عند اجتياز الاختبار النهائي" }],
    learn: [
      { en: "Lesson planning and objectives", ar: "التخطيط التربوي وأهداف الدرس" },
      { en: "Teaching aids and how to use them", ar: "الوسائل التعليمية وتوظيفها" },
      { en: "Writing and marking tests", ar: "إعداد الاختبارات وتقويمها" },
      { en: "Evaluating lessons against clear criteria", ar: "تقييم الدروس وفق معايير دقيقة" }
    ],
    curriculum: [
      { title: { en: "Theory", ar: "الجانب النظري" }, items: [{ en: "Planning, aids, delivery, assessment", ar: "التخطيط والوسائل والتنفيذ والتقويم" }] },
      { title: { en: "Practice", ar: "الجانب العملي" }, items: [{ en: "Model lesson plan, behavioural objectives, test design", ar: "خطة درس نموذجية، أهداف سلوكية، إعداد اختبارات" }] }
    ],
    facts: { sessions: { en: "3 days a week", ar: "3 أيام أسبوعيًا" }, sessionLength: null, duration: { en: "1 month", ar: "شهر كامل" }, schedule: null, groupSize: null, language: { en: "Arabic", ar: "العربية" }, intake: null, certificate: true },
    requirements: [{ en: "Age 18 or over", ar: "العمر 18 عامًا فأكثر" }, { en: "Attend the full course", ar: "الالتزام بحضور كامل الدورة" }, { en: "A reliable internet connection", ar: "اتصال جيد بالإنترنت" }],
    price: null, priceUnit: null
  }),
  C({
    slug: "circle-management", cat: "teachers", art: "board", featured: false, source: 58,
    ageMin: 18, ageMax: 99, level: "professional", format: "online",
    title: { en: "Running a Quran Circle", ar: "إدارة الحلقة القرآنية" },
    tagline: { en: "Manage in-person and online circles with confidence.", ar: "أدِر الحلقة الحضورية والإلكترونية بثقة." },
    summary: { en: "A one-month course that prepares teachers to manage students and run successful Quran and reading circles, both in person and online, with three days of practical training.", ar: "دورة لمدة شهر تؤهّل المعلّم لضبط الطلاب وإدارة حلقات القرآن والقراءة الحضورية والإلكترونية بنجاح، مع ثلاثة أيام تدريب عملي." },
    forWho: { en: "Adults 18+ who lead or will lead a circle.", ar: "الكبار فوق 18 سنة ممن يديرون حلقة أو سيديرونها." },
    outcomes: [{ en: "Runs a well-organised circle online or in person", ar: "يدير حلقة منظّمة حضوريًا أو إلكترونيًا" }, { en: "Earns a certificate on passing the test", ar: "ينال شهادة عند اجتياز الاختبار" }],
    learn: [
      { en: "Types of circles, goals and conditions", ar: "أنواع الحلقات وأهدافها وشروطها" },
      { en: "Core steps of running a circle", ar: "الخطوات الأساسية في إدارة الحلقة" },
      { en: "Activities, tests and measurement", ar: "الأنشطة والاختبارات وأدوات القياس" },
      { en: "Running circles in an online environment", ar: "إدارة الحلقة في البيئة الإلكترونية" }
    ],
    curriculum: [],
    facts: { sessions: { en: "3 days a week + 3 practical days", ar: "3 أيام أسبوعيًا + 3 أيام عملية" }, sessionLength: null, duration: { en: "1 month", ar: "شهر كامل" }, schedule: null, groupSize: null, language: { en: "Arabic", ar: "العربية" }, intake: null, certificate: true },
    requirements: [{ en: "Age 18 or over", ar: "تجاوز الثامنة عشرة" }, { en: "Attend the full course", ar: "الالتزام بحضور كامل الدورة" }, { en: "Pass an interview", ar: "اجتياز المقابلة" }],
    price: null, priceUnit: null
  }),
  C({
    slug: "learning-activities", cat: "teachers", art: "board", featured: false, source: 63,
    ageMin: 18, ageMax: 99, level: "professional", format: "online",
    title: { en: "Educational Activities", ar: "الأنشطة التربوية" },
    tagline: { en: "Fifty ready-made learning games — and how to invent your own.", ar: "خمسون لعبة تربوية جاهزة، وكيف تبتكر غيرها." },
    summary: { en: "A one-month course on using educational activities to break routine and combine learning with enjoyment, matched to each age stage.", ar: "دورة لمدة شهر عن دور الأنشطة التربوية في كسر الملل والجمع بين التعليم والمتعة، بما يناسب كل مرحلة عمرية." },
    forWho: { en: "Adults 18+ who teach children.", ar: "الكبار فوق 18 سنة ممن يعلّمون الأطفال." },
    outcomes: [{ en: "Designs activities suited to each age stage", ar: "يصمّم أنشطة تناسب كل مرحلة عمرية" }, { en: "Earns a certificate on passing the final exam", ar: "ينال شهادة عند اجتياز الاختبار النهائي" }],
    learn: [
      { en: "Types and value of learning activities", ar: "أنواع الأنشطة التربوية وأهميتها" },
      { en: "Planning criteria for activities", ar: "معايير إعداد الأنشطة والتخطيط لها" },
      { en: "Children's developmental stages", ar: "الخصائص النمائية للطلاب" },
      { en: "Fifty ready-made educational games", ar: "خمسون لعبة تربوية مجهّزة" }
    ],
    curriculum: [],
    facts: { sessions: { en: "3 days a week", ar: "3 أيام أسبوعيًا" }, sessionLength: null, duration: { en: "1 month", ar: "شهر كامل" }, schedule: null, groupSize: null, language: { en: "Arabic", ar: "العربية" }, intake: null, certificate: true },
    requirements: [{ en: "Age 18 or over", ar: "العمر 18 عامًا فأكثر" }, { en: "Attend every session", ar: "الالتزام بحضور جميع الجلسات" }],
    price: null, priceUnit: null
  }),
  C({
    slug: "teacher-provision", cat: "teachers", art: "scroll", featured: false, source: 69,
    ageMin: 18, ageMax: 99, level: "professional", format: "online",
    title: { en: "Zad: Islamic Sciences for Teachers", ar: "زاد المعلّم في العلوم الشرعية" },
    tagline: { en: "A firm grounding in fiqh and tafsir for those who teach.", ar: "أساس علمي متين في الفقه والتفسير لمن يعلّم." },
    summary: { en: "A course series that gives teachers a solid foundation in the Islamic sciences so they can teach them well and answer students' questions with clarity. The first course covers fiqh and tafsir.", ar: "سلسلة تمنح المعلّم أساسًا علميًا شرعيًا متينًا ليدرّس المواد الشرعية بإتقان ويجيب عن أسئلة طلابه بمنهجية واضحة. الدورة الأولى في الفقه والتفسير." },
    forWho: { en: "Adults 18+ who teach Islamic studies.", ar: "الكبار فوق 18 سنة ممن يدرّسون العلوم الشرعية." },
    outcomes: [{ en: "Teaches fiqh and tafsir with confidence", ar: "يدرّس الفقه والتفسير بثقة" }, { en: "Earns a certificate on passing the course test", ar: "ينال شهادة معتمدة عند اجتياز الاختبار" }],
    learn: [
      { en: "Fiqh", ar: "الفقه" }, { en: "Tafsir", ar: "التفسير" },
      { en: "Later in the series: aqeedah, seerah, hadith, character", ar: "لاحقًا في السلسلة: العقيدة، السيرة، الحديث، التزكية" }
    ],
    curriculum: [
      { title: { en: "Course 1 — Fiqh and Tafsir", ar: "الدورة الأولى — الفقه والتفسير" }, items: [{ en: "Two 2-hour sessions a week for two months", ar: "جلستان أسبوعيًا، ساعتان لكل جلسة، لمدة شهرين" }] }
    ],
    facts: { sessions: { en: "2 sessions a week", ar: "جلستان أسبوعيًا" }, sessionLength: { en: "2 hours", ar: "ساعتان" }, duration: { en: "2 months", ar: "شهران" }, schedule: null, groupSize: null, language: { en: "Arabic", ar: "العربية" }, intake: null, certificate: true },
    requirements: [{ en: "Age 18 or over", ar: "العمر 18 عامًا فأكثر" }, { en: "Attend the full course", ar: "الالتزام بحضور كامل الدورة" }, { en: "A reliable internet connection", ar: "اتصال جيد بالإنترنت" }],
    price: null, priceUnit: null
  })
];


/* ---------- Sample courses (illustrative) ----------
   The reference site offers no English, math, science or coding
   programs, so these are SAMPLE content to show the layout.
   `sample: true` renders a visible "Sample content" label.
   Replace with the school's real details before launch. */
const SFACTS = (): Facts => ({ sessions: null, sessionLength: null, duration: null, schedule: null, groupSize: null, language: null, intake: null });
const li = (en: string, ar: string): L10n => ({ en, ar });
allCourses.push(
  C({ slug: "english-young", cat: "languages", art: "abc", featured: true, sample: true,
    ageMin: 6, ageMax: 9, level: "beginner", format: "online",
    title: li("English for Young Learners", "الإنجليزية للصغار"),
    tagline: li("Sounds, words and first sentences, through stories and games.", "أصوات وكلمات وأولى الجمل، بالقصص والألعاب."),
    summary: li("A gentle first English course: children learn letter sounds with phonics, build everyday vocabulary and start reading short sentences, with lots of speaking practice.", "مدخل لطيف إلى الإنجليزية: يتعلّم الطفل أصوات الحروف بالطريقة الصوتية، ويبني مفردات يومية، ويبدأ بقراءة جمل قصيرة مع تدريب كثير على التحدّث."),
    forWho: li("Children aged 6–9 who are new to English or know only a few words.", "الأطفال من 6 إلى 9 سنوات المبتدئون في الإنجليزية."),
    outcomes: [li("Knows the letter sounds (phonics)", "يعرف أصوات الحروف"), li("Reads simple words and sentences", "يقرأ كلمات وجملًا بسيطة"), li("Introduces themselves and talks about daily things", "يعرّف بنفسه ويتحدّث عن أشياء يومية")],
    learn: [li("Phonics and letter sounds", "الأصوات والحروف"), li("Everyday vocabulary", "مفردات الحياة اليومية"), li("Reading short sentences", "قراءة جمل قصيرة"), li("Speaking and listening games", "ألعاب للتحدّث والاستماع")],
    curriculum: [{ title: li("Sounds and letters", "الأصوات والحروف"), items: [li("Phonics, one sound at a time", "الأصوات صوتًا صوتًا")] }, { title: li("Words around me", "كلمات من حولي"), items: [li("Family, school, colours, numbers", "العائلة والمدرسة والألوان والأرقام")] }, { title: li("First sentences", "أولى الجمل"), items: [li("Reading and saying short sentences", "قراءة جمل قصيرة ونطقها")] }],
    facts: SFACTS(), requirements: [], price: null, priceUnit: null }),
  C({ slug: "english-teens", cat: "languages", art: "chat", featured: false, sample: true,
    ageMin: 12, ageMax: 17, level: "intermediate", format: "online",
    title: li("English Conversation & Writing", "الإنجليزية: محادثة وكتابة"),
    tagline: li("Speak more fluently and write clearly for school.", "تحدّث بطلاقة أكبر واكتب بوضوح لمدرستك."),
    summary: li("For teens who already know the basics: structured speaking practice, grammar in context, and short writing tasks with feedback.", "لليافعين الذين يعرفون الأساسيات: تدريب منظّم على المحادثة، وقواعد في سياقها، ومهام كتابة قصيرة مع ملاحظات."),
    forWho: li("Teens aged 12–17 with basic English.", "اليافعون من 12 إلى 17 سنة ممن لديهم أساسيات الإنجليزية."),
    outcomes: [li("Holds a conversation on everyday topics", "يجري محادثة في مواضيع يومية"), li("Writes a clear paragraph", "يكتب فقرة واضحة"), li("Uses common grammar correctly", "يستخدم القواعد الشائعة بشكل صحيح")],
    learn: [li("Conversation practice", "تدريب على المحادثة"), li("Grammar in context", "القواعد في سياقها"), li("Paragraph writing", "كتابة الفقرات"), li("Listening comprehension", "فهم المسموع")],
    curriculum: [], facts: SFACTS(), requirements: [li("Basic English reading", "قراءة إنجليزية أساسية")], price: null, priceUnit: null }),
  C({ slug: "math-foundations", cat: "math", art: "shapes", featured: true, sample: true,
    ageMin: 7, ageMax: 10, level: "beginner", format: "online",
    title: li("Math Foundations", "أساسيات الرياضيات"),
    tagline: li("Numbers that make sense: from place value to fractions.", "أرقام مفهومة: من القيمة المنزلية إلى الكسور."),
    summary: li("Builds a solid number sense with visual models: place value, the four operations, times tables, and a first look at fractions and shapes.", "يبني فهمًا متينًا للأعداد بالنماذج المرئية: القيمة المنزلية، والعمليات الأربع، وجدول الضرب، ومدخل إلى الكسور والأشكال."),
    forWho: li("Children aged 7–10 who need a stronger base, or want to get ahead.", "الأطفال من 7 إلى 10 سنوات ممن يحتاجون أساسًا أقوى أو يريدون التقدّم."),
    outcomes: [li("Adds, subtracts, multiplies and divides with confidence", "يجمع ويطرح ويضرب ويقسم بثقة"), li("Knows the times tables", "يحفظ جدول الضرب"), li("Understands simple fractions", "يفهم الكسور البسيطة")],
    learn: [li("Place value", "القيمة المنزلية"), li("The four operations", "العمليات الأربع"), li("Times tables", "جدول الضرب"), li("Fractions and shapes", "الكسور والأشكال")],
    curriculum: [{ title: li("Number sense", "حسّ الأعداد"), items: [li("Place value and comparing numbers", "القيمة المنزلية ومقارنة الأعداد")] }, { title: li("Operations", "العمليات"), items: [li("Adding, subtracting, multiplying, dividing", "الجمع والطرح والضرب والقسمة")] }, { title: li("Fractions and shapes", "الكسور والأشكال"), items: [li("Halves, quarters, and basic geometry", "الأنصاف والأرباع ومبادئ الهندسة")] }],
    facts: SFACTS(), requirements: [], price: null, priceUnit: null }),
  C({ slug: "algebra-geometry", cat: "math", art: "graph", featured: false, sample: true,
    ageMin: 12, ageMax: 15, level: "intermediate", format: "online",
    title: li("Algebra & Geometry", "الجبر والهندسة"),
    tagline: li("Equations, graphs and shapes, explained step by step.", "معادلات ورسوم بيانية وأشكال، بشرح خطوة بخطوة."),
    summary: li("Supports middle-school math: expressions and equations, graphs, angles, area and volume, with plenty of worked examples.", "يدعم رياضيات المرحلة المتوسطة: التعابير والمعادلات، والتمثيل البياني، والزوايا، والمساحة والحجم، مع أمثلة محلولة كثيرة."),
    forWho: li("Students aged 12–15.", "الطلاب من 12 إلى 15 سنة."),
    outcomes: [li("Solves linear equations", "يحلّ المعادلات الخطية"), li("Reads and draws graphs", "يقرأ الرسوم البيانية ويرسمها"), li("Calculates area and volume", "يحسب المساحة والحجم")],
    learn: [li("Expressions and equations", "التعابير والمعادلات"), li("Graphs", "التمثيل البياني"), li("Angles and triangles", "الزوايا والمثلثات"), li("Area and volume", "المساحة والحجم")],
    curriculum: [], facts: SFACTS(), requirements: [li("Comfortable with fractions", "إتقان الكسور")], price: null, priceUnit: null }),
  C({ slug: "physics-explorers", cat: "science", art: "atom", featured: true, sample: true,
    ageMin: 11, ageMax: 14, level: "beginner", format: "online",
    title: li("Physics Explorers", "مستكشفو الفيزياء"),
    tagline: li("Why things move, fall, float and shine, with experiments at home.", "لماذا تتحرّك الأشياء وتسقط وتطفو وتضيء؟ بتجارب في البيت."),
    summary: li("An introduction to physics through curiosity: forces and motion, energy, electricity, light and sound, each with a simple experiment students can do with household items.", "مدخل إلى الفيزياء عبر الفضول: القوى والحركة، والطاقة، والكهرباء، والضوء والصوت، ولكل موضوع تجربة بسيطة بأدوات من البيت."),
    forWho: li("Curious students aged 11–14.", "الطلاب الفضوليون من 11 إلى 14 سنة."),
    outcomes: [li("Explains forces and motion in everyday life", "يفسّر القوى والحركة في الحياة اليومية"), li("Plans and runs a simple experiment", "يخطّط لتجربة بسيطة وينفّذها"), li("Records and explains results", "يسجّل النتائج ويفسّرها")],
    learn: [li("Forces and motion", "القوى والحركة"), li("Energy", "الطاقة"), li("Electricity and circuits", "الكهرباء والدوائر"), li("Light and sound", "الضوء والصوت")],
    curriculum: [{ title: li("Forces and motion", "القوى والحركة"), items: [li("Push, pull, friction, gravity", "الدفع والسحب والاحتكاك والجاذبية")] }, { title: li("Energy", "الطاقة"), items: [li("Forms of energy and how it changes", "أشكال الطاقة وتحوّلاتها")] }, { title: li("Light and sound", "الضوء والصوت"), items: [li("Reflection, shadows, vibration", "الانعكاس والظلّ والاهتزاز")] }],
    facts: SFACTS(), requirements: [], price: null, priceUnit: null }),
  C({ slug: "scratch-kids", cat: "coding", art: "blocks", featured: true, sample: true,
    ageMin: 8, ageMax: 11, level: "beginner", format: "online",
    title: li("Coding with Scratch", "البرمجة مع سكراتش"),
    tagline: li("Make games and animated stories while learning to think step by step.", "اصنع ألعابًا وقصصًا متحركة وتعلّم التفكير خطوة بخطوة."),
    summary: li("Children use Scratch's colourful blocks to build small games and stories, learning sequences, loops, conditions and debugging along the way.", "يستخدم الأطفال مكعّبات سكراتش الملوّنة لبناء ألعاب وقصص صغيرة، ويتعلّمون التسلسل والتكرار والشروط وتصحيح الأخطاء."),
    forWho: li("Children aged 8–11; no experience needed.", "الأطفال من 8 إلى 11 سنة، دون خبرة سابقة."),
    outcomes: [li("Builds a small game from scratch", "يبني لعبة صغيرة من البداية"), li("Uses loops and conditions", "يستخدم التكرار والشروط"), li("Finds and fixes mistakes", "يجد الأخطاء ويصلحها")],
    learn: [li("Sequences", "التسلسل"), li("Loops", "التكرار"), li("Conditions and events", "الشروط والأحداث"), li("Debugging", "تصحيح الأخطاء")],
    curriculum: [], facts: SFACTS(), requirements: [li("A computer or laptop", "حاسوب أو حاسوب محمول")], price: null, priceUnit: null }),
  C({ slug: "python-teens", cat: "coding", art: "code", featured: false, sample: true,
    ageMin: 12, ageMax: 17, level: "beginner", format: "online",
    title: li("Python for Teens", "بايثون لليافعين"),
    tagline: li("Write real programs: quizzes, calculators and small games.", "اكتب برامج حقيقية: مسابقات وآلات حاسبة وألعاب صغيرة."),
    summary: li("A first text-based programming course: variables, conditions, loops and functions, applied in small projects students can show their family.", "أول دورة برمجة نصّية: المتغيرات والشروط والتكرار والدوال، مطبّقة في مشاريع صغيرة يعرضها الطالب على أسرته."),
    forWho: li("Teens aged 12–17. Scratch experience helps but isn't required.", "اليافعون من 12 إلى 17 سنة. خبرة سكراتش مفيدة وليست شرطًا."),
    outcomes: [li("Writes and runs Python programs", "يكتب برامج بايثون ويشغّلها"), li("Breaks a problem into steps", "يقسّم المشكلة إلى خطوات"), li("Completes a small project", "يُنجز مشروعًا صغيرًا")],
    learn: [li("Variables and data", "المتغيرات والبيانات"), li("Conditions and loops", "الشروط والتكرار"), li("Functions", "الدوال"), li("Mini projects", "مشاريع صغيرة")],
    curriculum: [], facts: SFACTS(), requirements: [li("A computer or laptop", "حاسوب أو حاسوب محمول")], price: null, priceUnit: null })
);

/* ---------- Feature switches ---------- */
/** In-person programs are hidden for now. */
export const SHOW_IN_PERSON = false;
/** Teacher Training category is hidden for now. */
export const SHOW_TEACHER_TRAINING = false;
/** Teacher profile sections (home, about, course pages) are hidden until profiles are ready. */
export const SHOW_TEACHERS = false;

export const categories: Category[] = allCategories.filter((c) => SHOW_TEACHER_TRAINING || c.id !== "teachers");

export const courses: Course[] = allCourses
  .filter((c) => SHOW_IN_PERSON || c.format !== "inperson")
  .filter((c) => SHOW_TEACHER_TRAINING || c.cat !== "teachers");

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);
export const getCategory = (id: string) => allCategories.find((c) => c.id === id);
export const coursesIn = (id: string) => courses.filter((c) => c.cat === id);
