/* UI copy for both languages. `ar` is type-checked against `en`, so a missing
   or misnamed key in either language is a compile error. */
const en = {
    skip: "Skip to content",
    nav: { home: "Home", courses: "Courses", pricing: "Pricing", about: "About us", how: "How it works", contact: "Contact" },
    cta: { explore: "Explore courses", enroll: "Enroll now", how: "How it works", details: "View course", ask: "Ask about fees", inquire: "Send an inquiry", whatsapp: "Chat on WhatsApp", all: "See all courses", reset: "Clear filters", back: "Back to courses", compare: "Compare all fees" },
    langSwitch: "العربية", langLabel: "Switch to Arabic",
    menu: "Menu", close: "Close",
    tbc: "To be confirmed", sample: "Sample content", sampleNote: "This course is sample content showing how a subject page will look. Replace it with the school's real course details before launch.", feeTbc: "Fee on request", feeNote: "Fees are not yet published",
    ages: "Ages", age: "Age", level: "Level", format: "Format", duration: "Duration", sessions: "Sessions", sessionLength: "Session length", schedule: "Schedule", group: "Group size", language: "Language", intake: "Intake", cities: "Cities", certificate: "Certificate",
    certYes: "Certificate on passing", plus: "+",
    home: {
      eyebrow: "Al-Amal School · Learning for every age",
      title: ["A friendly school", "where children", "love to learn"],
      lead: "Small, live classes for ages 5 to adult. Patient teachers, clear programs and simple fees you can see before you enroll.",
      facts: [["Ages 5 to adult", "programs for every stage"], ["Many courses", "for every interest"], ["Small live classes", "with a real teacher"]],
      programsEyebrow: "Subjects", programsTitle: "What your child can learn with us",
      programsLead: "Pick a subject to see every course, with ages, levels and fees side by side.",
      coursesCount: (n: number) => `${n} courses`,
      featuredEyebrow: "Featured courses", featuredTitle: "Popular starting points for families",
      journeyEyebrow: "Learning for every age", journeyTitle: "Find courses by your child's age",
      journey: [["Early years", "Ages 5–7 · first reading, numbers and play"], ["Primary", "Ages 7–12 · strong basics in every subject"], ["Teens", "Ages 12–17 · deeper skills and real projects"], ["Adults", "18+ · Quran recitation and more"]],
      whyEyebrow: "Why parents choose us", whyTitle: "What your child can count on",
      why: [
        ["users", "Caring, qualified teachers", "Teachers who know their subject and know how to explain it to children."],
        ["route", "Clear programs", "Every course lists what your child will learn, for which age, and what comes next."],
        ["heart-handshake", "Personal attention", "Small groups matched by age and level, plus one-to-one options for adults."],
        ["monitor-smartphone", "Learn from home", "Live classes with a teacher, from wherever you are."],
        ["puzzle", "Joyful for children", "Stories, games and activities that make learning something children look forward to."],
        ["shield-check", "Clear requirements", "Every course lists who it's for and what's needed to join — no surprises."]
      ],
      howEyebrow: "How it works", howTitle: "Enrolling takes four simple steps",
      steps: [["Explore", "Browse courses by age and subject."], ["Choose", "Compare details and pick the right program."], ["Get in touch", "Send a short inquiry or message us on WhatsApp."], ["Begin learning", "We confirm the group and your child starts."]],
      methodEyebrow: "Our method", methodTitle: "How we teach",
      method: [
        ["Basics first", "We make sure each step is solid before moving on, so children don't fall behind."],
        ["Practice in every lesson", "Children try, make mistakes and get help right away from the teacher."],
        ["Small groups", "Groups are matched by age and level so every child gets attention."],
        ["Good character", "Respect, kindness and responsibility are part of every class."]
      ],
      teachersEyebrow: "Our teachers", teachersTitle: "Teachers who know how to teach",
      teachersBody: "Our teachers are chosen for their subject knowledge and their patience with children.",
      teachersPlaceholder: "Teacher profiles will appear here once names, photos and qualifications are confirmed.",
      faqEyebrow: "Questions", faqTitle: "Things parents often ask",
      finalTitle: "Not sure which course fits your child?",
      finalBody: "Tell us your child's age and what they already know. We'll suggest the right starting point.",
    },
    courses: {
      eyebrow: "Course catalogue", title: "Find the right course for your child",
      lead: "Filter by subject, age or level. Every card shows the essentials, so you can compare at a glance.",
      search: "Search courses", searchPh: "Try “tajweed”, “grammar” or “5–7”", category: "Subject", all: "All",
      ageGroup: "Age group", anyAge: "Any age", levelAny: "Any level", formatAny: "Any format",
      results: (n: number) => n === 1 ? "1 course" : `${n} courses`, filters: "Filters", showResults: (n: number) => `Show ${n} courses`,
      emptyTitle: "No courses match those filters", emptyBody: "Try removing a filter or searching for a different word.",
    },
    course: {
      breadcrumb: "Courses", about: "About the course", forWho: "Who it's for", outcomes: "By the end, your child will",
      learn: "What your child will learn", curriculum: "Curriculum", stage: "Stage", info: "Course information",
      pricing: "Pricing", priceIntro: "This program's fee hasn't been published yet. Send an inquiry and the school will reply with the current fee and payment options.",
      priceUnit: "Pricing unit", included: "Included", requirements: "Requirements to join", noReq: "No special requirements are listed.",
      teachers: "Teachers", teachersBody: "Taught by specialist teachers. Teacher names and qualifications for this course will be listed here once confirmed.",
      method: "How it's taught", faq: "Questions about this course", related: "Related courses", next: "Natural next step",
      noCurriculum: "A detailed curriculum for this course hasn't been published yet.",
      mobileFee: "Fee", enrollFor: "Enroll in",
      faqs: [
        ["How do I enroll?", "Send an inquiry from this page or message us on WhatsApp. We'll confirm a suitable group and the next start date."],
        ["Is there a placement check?", "Some programs require an interview or a short test — see “Requirements to join”. For others, the teacher assesses your child's level in the first sessions."],
        ["What does my child need for online classes?", "A device with a camera and microphone, and a reliable internet connection."]
      ]
    },
    pricing: {
      eyebrow: "Pricing", title: "Clear fees, program by program",
      lead: "This page lists every program with its pricing unit and what's included, so you can compare before you ask.",
      notice: "Fees haven't been published yet", noticeBody: "We don't show amounts until the school confirms them. Every row below will show its fee and unit as soon as they're available — until then, ask and we'll reply with current fees.",
      program: "Program", audience: "Audience", fee: "Fee", unit: "Unit", includes: "Includes",
      includedTitle: "Included in every program",
      included: [["video", "Live classes with a teacher"], ["book-marked", "A clear curriculum and practice"], ["users", "Small groups by level"], ["clipboard-check", "Progress updates for parents"]],
      teacherIncluded: "The exact details for each course are confirmed when you send an inquiry.",
      faqTitle: "Pricing questions",
      faqs: [
        ["Why can't I see a price?", "The school hasn't published fees for these programs yet. We'd rather show nothing than show a number that might be wrong."],
        ["Are there sibling or family discounts?", "None have been announced. Ask in your inquiry and we'll tell you what's currently available."],
        ["How will fees be shown once published?", "Each program will show the amount, the currency and the unit — per month, per level or per full course — on this page and on its course page."],
        ["Do I pay online on this site?", "No. This site doesn't take payments. The school confirms the fee and payment method with you directly."]
      ]
    },
    about: {
      eyebrow: "About us", title: "A school where children feel safe to learn",
      lead: "Al-Amal means hope. We teach languages, math, science, programming and Quran in small, friendly classes, and we care about who children become as much as what they know.",
      missionTitle: "Our mission", mission: "To help every child learn with confidence and good character, through caring teachers, clear programs and small classes.",
      philosophyTitle: "What we believe",
      philosophy: [
        ["Foundations first", "Strong basics in reading and numbers make every later subject easier."],
        ["Character matters", "Respect, honesty and kindness are taught alongside every subject."],
        ["Children learn best when they enjoy it", "Stories, games and activities are part of the method, not a reward at the end."]
      ],
      valuesTitle: "Our values", values: [["Care", "Patience and kindness with every learner"], ["Curiosity", "Questions are welcome in every class"], ["Honesty", "Clear with parents about progress and fees"], ["Step by step", "Steady progress that builds on itself"]],
      wherTitle: "Where we teach", where: [["Online classroom", "Live classes for students anywhere"], ["New locations", "To be announced"]],
      teachersTitle: "Our teachers",
      teachersBody: "Each subject is taught by a teacher who specialises in it and knows how to explain it to children.",
      trustTitle: "Why families trust us",
      trust: [["Requirements stated up front", "Every course lists its age, prerequisites and any interview or test."], ["Fees you can see", "Every course shows its fee and what it covers, once confirmed."], ["Honest information", "When something isn't confirmed yet, we say so instead of guessing."]],
      placeholders: "Founding year, team size and leadership profiles — to be added by the school."
    },
    how: {
      eyebrow: "How it works", title: "From first look to first lesson",
      lead: "Here's exactly what happens after you find a course you like.",
      steps: [
        ["search", "Explore courses", "Use filters for age, subject and level. Each course page lists outcomes, curriculum and requirements."],
        ["list-checks", "Choose the right program", "Check the requirements. Some programs need an interview or a short test; we'll guide you through it."],
        ["send", "Send a short inquiry", "Tell us your name, how to reach you, your child's age and the course. It takes about a minute."],
        ["calendar-check", "We confirm the details", "The school replies with the group, schedule, start date and current fee."],
        ["graduation-cap", "Your child begins", "Classes start live with the teacher. You'll hear about progress along the way."]
      ],
      faqTitle: "Frequently asked questions",
      faqs: [
        ["Are classes live or recorded?", "Online classes are live, with a teacher in real time."],
        ["How big are the groups?", "Groups are kept small and matched by age and level. Group size for each course is shown on its page when confirmed."],
        ["Which subjects can my child take?", "English, Arabic, math, physics, programming, and Quran & Islamic studies. A child can join more than one course."],
        ["What if my child doesn't speak Arabic?", "Choose Arabic & Quran for Non-Arabic Speakers. It starts from the alphabet and moves to Quran recitation."],
        ["When do new groups start?", "It depends on the course. Start dates are confirmed when you send an inquiry."]
      ]
    },
    contact: {
      eyebrow: "Contact & enrollment", title: "Let's find the right class for your child",
      lead: "Send a short inquiry and the school will reply with group options, schedule and fees. We only ask for what we need.",
      name: "Parent or guardian name", namePh: "Your full name",
      contactMethod: "How should we reach you?", phone: "Phone / WhatsApp", email: "Email", phonePh: "+90 5XX XXX XX XX", emailPh: "name@example.com",
      childAge: "Child's age", childAgePh: "Select age", adult: "Adult (18+)", years: "years",
      course: "Interested course", coursePh: "Select a course", notSure: "Not sure yet — please advise",
      prefLang: "Preferred language for our reply", ar: "Arabic", en: "English",
      message: "Message", optional: "optional", messagePh: "Anything we should know? e.g. your child already reads some Arabic.",
      privacy: "We use these details only to reply to your inquiry. We never ask for your child's name or photo here.",
      submit: "Send inquiry", sending: "Sending…",
      err: { name: "Please enter your name.", phone: "Enter a phone number with at least 8 digits.", email: "Enter a valid email, like name@example.com.", age: "Please select an age.", course: "Please choose a course, or “Not sure yet”." },
      errSummary: "Please fix the highlighted fields.",
      successTitle: "Thank you — your inquiry is ready", successBody: "In a live site this would go to the school. This prototype doesn't send anything.",
      summaryTitle: "Your inquiry", nextTitle: "What happens next", next: ["The school reviews your inquiry.", "They reply with group options, schedule and fees.", "You confirm, and your child begins."],
      another: "Send another inquiry",
      whatsTitle: "Prefer to chat?", whatsBody: "Message the school on WhatsApp.", whatsTbc: "WhatsApp number to be added",
      sideTitle: "Good to know", side: [["clock", "Replies usually include the next start date"], ["shield", "No payment is taken on this site"], ["users", "Groups are matched by age and level"]]
    },
    footer: {
      about: "Small, friendly classes where children love to learn.",
      explore: "Explore", programs: "Programs", project: "Project", research: "Reference research", system: "Design system",
      note: "Prototype · Course facts sourced from the reference site; unconfirmed details are marked.",
      rights: "All course information is subject to confirmation by the school."
    },
    audience: { kids: "Children", teens: "Teens", adults: "Adults", mixed: "Children & adults" }
  };

export type Dict = typeof en;

const ar: Dict = {
    skip: "تخطَّ إلى المحتوى",
    nav: { home: "الرئيسية", courses: "الدورات", pricing: "الرسوم", about: "من نحن", how: "كيف نعمل", contact: "تواصل معنا" },
    cta: { explore: "تصفّح الدورات", enroll: "سجّل الآن", how: "كيف نعمل", details: "تفاصيل الدورة", ask: "استفسر عن الرسوم", inquire: "أرسل استفسارك", whatsapp: "راسلنا على واتساب", all: "كل الدورات", reset: "مسح الفلاتر", back: "العودة إلى الدورات", compare: "قارن كل الرسوم" },
    langSwitch: "English", langLabel: "التبديل إلى الإنجليزية",
    menu: "القائمة", close: "إغلاق",
    tbc: "بانتظار التأكيد", sample: "محتوى توضيحي", sampleNote: "هذه الدورة محتوى توضيحي يبيّن شكل صفحة المادة، وتُستبدل بتفاصيل الدورة الحقيقية قبل الإطلاق.", feeTbc: "الرسوم عند الطلب", feeNote: "لم تُنشر الرسوم بعد",
    ages: "العمر", age: "العمر", level: "المستوى", format: "طريقة التعلّم", duration: "المدة", sessions: "عدد الأيام", sessionLength: "مدة الجلسة", schedule: "المواعيد", group: "حجم المجموعة", language: "لغة التدريس", intake: "مواعيد القبول", cities: "المدن", certificate: "الشهادة",
    certYes: "شهادة عند النجاح", plus: "+",
    home: {
      eyebrow: "مدرسة الأمل · تعلّم لكل الأعمار",
      title: ["مدرسة قريبة", "من قلب طفلك،", "يحبّ فيها التعلّم"],
      lead: "حصص مباشرة في مجموعات صغيرة، من عمر 5 سنوات حتى الكبار. معلّمون صبورون، وبرامج واضحة، ورسوم تعرفها قبل التسجيل.",
      facts: [["من 5 سنوات حتى الكبار", "برامج لكل مرحلة"], ["دورات متنوّعة", "لكل الاهتمامات"], ["حصص مباشرة صغيرة", "مع معلّم حقيقي"]],
      programsEyebrow: "المواد", programsTitle: "ماذا يمكن أن يتعلّم طفلك معنا",
      programsLead: "اختر مادة لترى كل دوراتها، مع العمر والمستوى والرسوم جنبًا إلى جنب.",
      coursesCount: (n: number) => n === 1 ? "دورة واحدة" : n === 2 ? "دورتان" : n <= 10 ? `${n} دورات` : `${n} دورة`,
      featuredEyebrow: "دورات مختارة", featuredTitle: "بدايات مناسبة لكثير من العائلات",
      journeyEyebrow: "تعلّم لكل عمر", journeyTitle: "ابحث عن الدورات حسب عمر طفلك",
      journey: [["الطفولة المبكرة", "5–7 سنوات · أول القراءة والأعداد واللعب"], ["المرحلة الابتدائية", "7–12 سنة · أساسيات قوية في كل مادة"], ["اليافعون", "12–17 سنة · مهارات أعمق ومشاريع حقيقية"], ["الكبار", "+18 · تلاوة القرآن وغيرها"]],
      whyEyebrow: "لماذا يختارنا الأهالي", whyTitle: "ما يمكن أن تطمئنّ إليه",
      why: [
        ["users", "معلّمون مؤهّلون ومهتمّون", "معلّمون يتقنون موادهم ويعرفون كيف يشرحونها للأطفال."],
        ["route", "برامج واضحة", "كل دورة تذكر ما سيتعلّمه طفلك، ولأي عمر، وما الخطوة التالية."],
        ["heart-handshake", "اهتمام شخصي", "مجموعات صغيرة حسب العمر والمستوى، وجلسات فردية للكبار."],
        ["monitor-smartphone", "تعلّم من البيت", "حصص مباشرة مع المعلّم، من أي مكان."],
        ["puzzle", "تعلّم يحبّه الأطفال", "قصص وألعاب وأنشطة تجعل الطفل ينتظر درسه بشوق."],
        ["shield-check", "شروط واضحة", "كل دورة تذكر الفئة المناسبة وشروط الالتحاق بوضوح."]
      ],
      howEyebrow: "كيف نعمل", howTitle: "التسجيل في أربع خطوات بسيطة",
      steps: [["تصفّح", "استعرض الدورات حسب العمر والمادة."], ["اختر", "قارن التفاصيل واختر البرنامج المناسب."], ["تواصل", "أرسل استفسارًا قصيرًا أو راسلنا على واتساب."], ["ابدأ التعلّم", "نؤكّد المجموعة ويبدأ طفلك."]],
      methodEyebrow: "منهجنا", methodTitle: "كيف ندرّس",
      method: [
        ["الأساس أولًا", "نتأكّد من ثبات كل خطوة قبل الانتقال إلى التالية، فلا يتأخّر الطفل."],
        ["تطبيق في كل حصة", "يحاول الطفل ويخطئ ويجد المساعدة من المعلّم فورًا."],
        ["مجموعات صغيرة", "المجموعات حسب العمر والمستوى، ليحظى كل طفل بالاهتمام."],
        ["أخلاق حسنة", "الاحترام واللطف والمسؤولية جزء من كل حصة."]
      ],
      teachersEyebrow: "معلّمونا", teachersTitle: "معلّمون يعرفون كيف يعلّمون",
      teachersBody: "نختار معلّمينا لإتقانهم موادهم وصبرهم مع الأطفال.",
      teachersPlaceholder: "ستظهر هنا بطاقات المعلّمين بعد تأكيد الأسماء والصور والمؤهّلات.",
      faqEyebrow: "أسئلة", faqTitle: "أسئلة يطرحها الأهالي كثيرًا",
      finalTitle: "لست متأكدًا أيّ دورة تناسب طفلك؟",
      finalBody: "أخبرنا بعمر طفلك وما يعرفه الآن، وسنقترح عليك نقطة البداية المناسبة.",
    },
    courses: {
      eyebrow: "دليل الدورات", title: "اعثر على الدورة المناسبة لطفلك",
      lead: "صفِّ الدورات حسب المادة أو العمر أو المستوى. كل بطاقة تعرض الأساسيات لتقارن بنظرة واحدة.",
      search: "ابحث في الدورات", searchPh: "جرّب «تجويد» أو «نحو» أو «5–7»", category: "المادة", all: "الكل",
      ageGroup: "الفئة العمرية", anyAge: "كل الأعمار", levelAny: "كل المستويات", formatAny: "كل الطرق",
      results: (n: number) => n === 1 ? "دورة واحدة" : n === 2 ? "دورتان" : (n >= 3 && n <= 10) ? `${n} دورات` : `${n} دورة`, filters: "الفلاتر", showResults: (n: number) => `عرض ${n} نتيجة`,
      emptyTitle: "لا توجد دورات تطابق هذه الفلاتر", emptyBody: "جرّب إزالة أحد الفلاتر أو البحث بكلمة أخرى.",
    },
    course: {
      breadcrumb: "الدورات", about: "عن الدورة", forWho: "لمن هذه الدورة", outcomes: "في نهاية الدورة، سيتمكّن طفلك من أن",
      learn: "ماذا سيتعلّم طفلك", curriculum: "المنهاج", stage: "المرحلة", info: "معلومات الدورة",
      pricing: "الرسوم", priceIntro: "لم تُنشر رسوم هذا البرنامج بعد. أرسل استفسارك وستردّ عليك المدرسة بالرسوم الحالية وطرق الدفع.",
      priceUnit: "وحدة التسعير", included: "يشمل", requirements: "شروط الالتحاق", noReq: "لا توجد شروط خاصة مذكورة.",
      teachers: "المعلّمون", teachersBody: "يدرّس هذه الدورة معلّمون مختصّون. ستُذكر أسماؤهم ومؤهّلاتهم هنا بعد التأكيد.",
      method: "طريقة التدريس", faq: "أسئلة حول الدورة", related: "دورات ذات صلة", next: "الخطوة التالية الطبيعية",
      noCurriculum: "لم يُنشر المنهاج التفصيلي لهذه الدورة بعد.",
      mobileFee: "الرسوم", enrollFor: "سجّل في",
      faqs: [
        ["كيف أسجّل؟", "أرسل استفسارًا من هذه الصفحة أو راسلنا على واتساب، وسنؤكّد المجموعة المناسبة وموعد البدء القادم."],
        ["هل يوجد اختبار لتحديد المستوى؟", "بعض البرامج تتطلّب مقابلة أو اختبارًا قصيرًا، كما في «شروط الالتحاق». وفي غيرها يقيّم المعلّم مستوى الطالب في الجلسات الأولى."],
        ["ماذا يحتاج طفلي للحصص عن بُعد؟", "جهازًا بكاميرا وميكروفون، واتصالًا جيدًا بالإنترنت."]
      ]
    },
    pricing: {
      eyebrow: "الرسوم", title: "رسوم واضحة لكل برنامج",
      lead: "تعرض هذه الصفحة كل البرامج مع وحدة التسعير وما تشمله، لتقارن قبل أن تسأل.",
      notice: "لم تُنشر الرسوم بعد", noticeBody: "لا نعرض أي مبلغ قبل أن تؤكّده المدرسة. سيظهر المبلغ ووحدته في كل صف فور توفّرها، وإلى ذلك الحين يسعدنا الرد على استفسارك بالرسوم الحالية.",
      program: "البرنامج", audience: "الفئة", fee: "الرسوم", unit: "الوحدة", includes: "يشمل",
      includedTitle: "يشمله كل برنامج",
      included: [["video", "حصص مباشرة مع معلّم"], ["book-marked", "منهاج واضح وتمارين"], ["users", "مجموعات صغيرة حسب المستوى"], ["clipboard-check", "متابعة دورية للأهل"]],
      teacherIncluded: "تُؤكَّد التفاصيل الدقيقة لكل دورة عند إرسال الاستفسار.",
      faqTitle: "أسئلة عن الرسوم",
      faqs: [
        ["لماذا لا أرى السعر؟", "لم تنشر المدرسة رسوم هذه البرامج بعد، ونفضّل ألا نعرض شيئًا على أن نعرض رقمًا قد يكون خاطئًا."],
        ["هل توجد خصومات للإخوة أو العائلات؟", "لم يُعلن عن أي خصومات. اسأل في استفسارك وسنخبرك بما هو متاح حاليًا."],
        ["كيف ستُعرض الرسوم عند نشرها؟", "سيظهر لكل برنامج المبلغ والعملة والوحدة — شهريًا أو لكل مستوى أو للدورة كاملة — في هذه الصفحة وفي صفحة الدورة."],
        ["هل أدفع عبر هذا الموقع؟", "لا. الموقع لا يستقبل مدفوعات، وتؤكّد المدرسة معك الرسوم وطريقة الدفع مباشرة."]
      ]
    },
    about: {
      eyebrow: "من نحن", title: "مدرسة يشعر فيها الطفل بالأمان ليتعلّم",
      lead: "نعلّم اللغات والرياضيات والعلوم والبرمجة والقرآن في حصص صغيرة وودودة، ونهتمّ بشخصية الطفل كما نهتمّ بما يعرفه.",
      missionTitle: "رسالتنا", mission: "أن يتعلّم كل طفل بثقة وأخلاق حسنة، مع معلّمين مهتمّين وبرامج واضحة وحصص صغيرة.",
      philosophyTitle: "ما نؤمن به",
      philosophy: [
        ["الأساس أولًا", "أساس قوي في القراءة والأعداد يجعل كل مادة لاحقة أسهل."],
        ["الأخلاق مهمّة", "الاحترام والصدق واللطف تُعلَّم مع كل مادة."],
        ["الطفل يتعلّم أفضل حين يستمتع", "القصص والألعاب والأنشطة جزء من المنهج، لا مكافأة في آخره."]
      ],
      valuesTitle: "قيمنا", values: [["الرعاية", "الصبر واللطف مع كل متعلّم"], ["حبّ الاستطلاع", "الأسئلة مرحّب بها في كل حصة"], ["الأمانة", "الوضوح مع الأهل في التقدّم والرسوم"], ["التدرّج", "تقدّم ثابت يبني بعضه على بعض"]],
      wherTitle: "أين ندرّس", where: [["الصف الإلكتروني", "حصص مباشرة للطلاب في أي مكان"], ["مواقع جديدة", "سيُعلن عنها لاحقًا"]],
      teachersTitle: "معلّمونا",
      teachersBody: "يدرّس كل مادة معلّم مختصّ بها ويعرف كيف يشرحها للأطفال.",
      trustTitle: "لماذا تثق بنا العائلات",
      trust: [["شروط معلنة مسبقًا", "كل دورة تذكر العمر والمتطلّبات وأي مقابلة أو اختبار."], ["رسوم واضحة", "كل دورة تعرض رسومها وما تشمله بعد تأكيدها."], ["معلومات صادقة", "إذا لم يتأكّد أمر بعد، نقول ذلك بدل التخمين."]],
      placeholders: "سنة التأسيس وحجم الفريق وتعريف الإدارة — تضيفها المدرسة لاحقًا."
    },
    how: {
      eyebrow: "كيف نعمل", title: "من أول نظرة إلى أول درس",
      lead: "هذا ما يحدث بالضبط بعد أن تجد الدورة المناسبة.",
      steps: [
        ["search", "تصفّح الدورات", "استخدم فلاتر العمر والمادة والمستوى. كل صفحة دورة تعرض النتائج والمنهاج والشروط."],
        ["list-checks", "اختر البرنامج المناسب", "راجع الشروط؛ بعض البرامج تتطلّب مقابلة أو اختبارًا قصيرًا وسنرشدك خلاله."],
        ["send", "أرسل استفسارًا قصيرًا", "اكتب اسمك ووسيلة التواصل وعمر طفلك والدورة. يستغرق ذلك دقيقة تقريبًا."],
        ["calendar-check", "نؤكّد التفاصيل", "تردّ المدرسة بالمجموعة والمواعيد وتاريخ البدء والرسوم الحالية."],
        ["graduation-cap", "يبدأ طفلك", "تبدأ الحصص مباشرة مع المعلّم، ونطلعك على التقدّم أولًا بأول."]
      ],
      faqTitle: "الأسئلة الشائعة",
      faqs: [
        ["هل الحصص مباشرة أم مسجّلة؟", "الحصص عن بُعد مباشرة مع المعلّم."],
        ["كم عدد الطلاب في المجموعة؟", "المجموعات صغيرة وتُبنى حسب العمر والمستوى، ويظهر حجم المجموعة في صفحة كل دورة عند تأكيده."],
        ["ما المواد التي يمكن لطفلي دراستها؟", "الإنجليزية والعربية والرياضيات والفيزياء والبرمجة والقرآن والتربية الإسلامية، ويمكن للطفل الانضمام لأكثر من دورة."],
        ["طفلي لا يتكلّم العربية، فماذا أختار؟", "اختر «العربية والقرآن للناطقين بغيرها»؛ يبدأ من الحروف وينتهي بتلاوة القرآن."],
        ["متى تبدأ المجموعات الجديدة؟", "يختلف ذلك حسب الدورة، وتُؤكَّد المواعيد عند إرسال الاستفسار."]
      ]
    },
    contact: {
      eyebrow: "التواصل والتسجيل", title: "لنجد الصف المناسب لطفلك معًا",
      lead: "أرسل استفسارًا قصيرًا وستردّ المدرسة بخيارات المجموعات والمواعيد والرسوم. نطلب ما نحتاجه فقط.",
      name: "اسم وليّ الأمر", namePh: "الاسم الكامل",
      contactMethod: "كيف نتواصل معك؟", phone: "هاتف / واتساب", email: "بريد إلكتروني", phonePh: "+90 5XX XXX XX XX", emailPh: "name@example.com",
      childAge: "عمر الطفل", childAgePh: "اختر العمر", adult: "بالغ (+18)", years: "سنوات",
      course: "الدورة المطلوبة", coursePh: "اختر الدورة", notSure: "لست متأكدًا — أرجو النصيحة",
      prefLang: "لغة الرد المفضّلة", ar: "العربية", en: "الإنجليزية",
      message: "رسالة", optional: "اختياري", messagePh: "هل هناك ما تودّ إخبارنا به؟ مثلًا: طفلي يقرأ بعض الكلمات العربية.",
      privacy: "نستخدم هذه البيانات للرد على استفسارك فقط، ولا نطلب هنا اسم طفلك أو صورته.",
      submit: "أرسل الاستفسار", sending: "جارٍ الإرسال…",
      err: { name: "يرجى كتابة الاسم.", phone: "اكتب رقم هاتف لا يقل عن 8 أرقام.", email: "اكتب بريدًا صحيحًا مثل name@example.com.", age: "يرجى اختيار العمر.", course: "يرجى اختيار دورة، أو «لست متأكدًا»." },
      errSummary: "يرجى تصحيح الحقول المحدّدة.",
      successTitle: "شكرًا لك، استفسارك جاهز", successBody: "في الموقع الفعلي يُرسَل الاستفسار إلى المدرسة. هذا النموذج الأولي لا يرسل شيئًا.",
      summaryTitle: "استفسارك", nextTitle: "ماذا بعد؟", next: ["تراجع المدرسة استفسارك.", "تردّ بخيارات المجموعات والمواعيد والرسوم.", "تؤكّد التسجيل ويبدأ طفلك."],
      another: "إرسال استفسار آخر",
      whatsTitle: "تفضّل المحادثة؟", whatsBody: "راسل المدرسة على واتساب.", whatsTbc: "رقم واتساب سيُضاف لاحقًا",
      sideTitle: "معلومات تهمّك", side: [["clock", "يتضمّن الرد عادةً موعد البدء القادم"], ["shield", "لا يُدفع أي مبلغ عبر هذا الموقع"], ["users", "المجموعات حسب العمر والمستوى"]]
    },
    footer: {
      about: "حصص صغيرة وودودة يحبّ فيها الأطفال التعلّم.",
      explore: "تصفّح", programs: "البرامج", project: "المشروع", research: "دراسة الموقع المرجعي", system: "نظام التصميم",
      note: "نموذج أولي · معلومات الدورات من الموقع المرجعي، وما لم يتأكّد مُعلَّم بوضوح.",
      rights: "جميع معلومات الدورات خاضعة لتأكيد المدرسة."
    },
    audience: { kids: "أطفال", teens: "يافعون", adults: "كبار", mixed: "صغار وكبار" }
  };

export const dictionaries = { en, ar } as const;
