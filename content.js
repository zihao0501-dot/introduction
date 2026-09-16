/** Replace these four values when your real destinations are ready. */
export const links = {
  github: 'GITHUB_URL_HERE',
  email: 'EMAIL_HERE',
  linkedin: 'LINKEDIN_URL_HERE',
  project: 'PROJECT_URL_HERE',
};

/** Add another object here to extend the project gallery. Keep both languages. */
export const projects = [{
  id: 'fortune',
  // Set a local image path here to replace the abstract preview.
  previewImage: null,
  demo: links.project,
  github: links.github,
  en: {
    title: 'Chinese Fortune & Bazi Web Application',
    description: 'A modern web application that transforms concepts from traditional Chinese Bazi and Five Elements theory into an interactive digital experience.',
    topics: ['Bazi / Chinese metaphysics', 'Five Elements', 'Daily fortune', 'Academic fortune', 'Wealth interpretations', 'Relationship interpretations'],
  },
  zh: {
    title: '中华运势与八字 Web 应用',
    description: '将传统八字与五行文化转化为交互式数字体验，探索传统理念与现代 Web 开发的结合。',
    topics: ['八字与传统命理', '五行', '每日运势', '学业运势', '财运解读', '感情解读'],
  },
}];

export const skillGroups = [
  { icon: 'code', title: { en: 'Languages', zh: '编程语言' }, items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Haskell', 'Bash'] },
  { icon: 'globe', title: { en: 'Web Development', zh: 'Web 开发' }, items: ['HTML / CSS', 'Node.js', 'Express', 'REST APIs', 'MongoDB'] },
  { icon: 'terminal', title: { en: 'Tools & Platforms', zh: '工具与平台' }, items: ['Git / GitHub', 'Google Cloud', 'Linux', 'Postman'] },
  { icon: 'network', title: { en: 'Computer Science', zh: '计算机科学' }, items: { en: ['Algorithms', 'Data Structures', 'Software Engineering', 'Functional Programming', 'Database Systems'], zh: ['算法', '数据结构', '软件工程', '函数式编程', '数据库系统'] } },
  {
    icon: 'compass',
    title: { en: 'AI Agent Collaboration', zh: 'AI Agent 协作' },
    description: {
      en: 'Proficient with AI agents such as Codex: breaking down tasks, setting clear goals, steering implementation and reviewing results.',
      zh: '熟练使用 Codex 等 AI Agent，善于拆解任务、明确目标、引导实现方向并检查结果。',
    },
  },
];

export const translations = {
  en: {
    skip: 'Skip to content', location: 'Melbourne, Australia',
    nav: { home: 'Home', about: 'About', education: 'Education', project: 'Project', skills: 'Skills', contact: 'Contact', main: 'Main navigation', mobile: 'Mobile navigation', open: 'Open menu', close: 'Close menu', language: 'Language', brand: 'Jerry Yang, home' },
    hero: { eyebrow: 'COMPUTER SCIENCE · MONASH UNIVERSITY', roles: 'Computer Science Student\nAlgorithms · Software Engineering · Full-Stack Development', intro: 'I’m a Computer Science student at Monash University focused on algorithms, software engineering, mathematics and web development. I enjoy building practical software products and exploring the ideas behind how software systems work.', project: 'View Project', about: 'About Me', scroll: 'SCROLL TO EXPLORE' },
    visual: { algorithms: 'algorithms', software: 'software engineering', mathematics: 'mathematics', fullstack: 'full-stack development', caption: 'Connecting ideas. Building software.' },
    about: { label: 'ABOUT ME', curiosity: 'curiosity', title: 'Curious about the theory.\nDriven to build.', p1: 'I’m Jerry, a Computer Science student at Monash University specialising in Algorithms and Software, with additional study in Mathematics and Web Development.', p2: 'I’m interested in the connection between theoretical computer science and practical development: understanding why an algorithm works, then turning that understanding into useful software. My focus is on algorithms, software engineering and building modern web applications.', p3: 'Alongside my independent projects, I’m maintaining a Distinction average of 70+ WAM.', interests: ['Algorithms', 'Software engineering', 'Full-stack development', 'Mathematics'] },
    education: { label: 'EDUCATION', title: 'A foundation in computer science.', university: 'Monash University', degree: 'Bachelor of Computer Science', specialisation: 'SPECIALISATION', specialisationValue: 'Algorithms and Software', study: 'MINOR', studyValue: 'Mathematics · Web Development', result: 'ACADEMIC RESULT', average: 'Distinction Average', wam: 'WAM', badge: 'Undergraduate' },
    project: { label: 'FEATURED PROJECT', title: 'From an idea to an application.', intro: 'An independent project at the intersection of culture and code.', independent: 'INDEPENDENT PROJECT', view: 'VIEW PROJECT', preview: 'Abstract project preview', demo: 'Live Demo', source: 'GitHub', bilingual: 'Bilingual experience', responsive: 'Responsive web interface', caption: 'TRADITION MEETS TECHNOLOGY', elements: 'FIVE ELEMENTS', wood: 'Wood', fire: 'Fire', earth: 'Earth', metal: 'Metal', water: 'Water' },
    skills: { label: 'SKILLS', title: 'The tools behind the ideas.', intro: 'My core languages, tools and areas of study.' },
    contact: { label: 'CONTACT', title: 'Let’s build\nsomething meaningful.', text: 'Interested in software, algorithms, web development, or potential opportunities? Feel free to get in touch.', email: 'Email', github: 'GitHub', linkedin: 'LinkedIn', placeholder: 'Contact details coming soon.', emailAria: 'Email — contact details coming soon', githubAria: 'GitHub — link coming soon', linkedinAria: 'LinkedIn — link coming soon', demoAria: 'Live Demo — link coming soon' },
    // Replace these paragraphs with your personal writing; clear status when ready.
    personal: {
      label: 'PERSONAL NOTES',
      title: 'Beyond the code.',
      paragraphs: ['A space for personal thoughts, everyday moments and things that catch my attention.'],
      status: 'More to come.',
    },
    footer: { study: 'Computer Science @ Monash University', top: 'Back to top', copyright: 'Jerry Yang' },
    notice: { email: 'Email contact details will be added soon.', link: 'This link will be added soon.' },
    meta: { title: 'Jerry Yang · 杨子豪 — Computer Science Portfolio', description: 'Jerry Yang is a Computer Science student at Monash University specialising in Algorithms and Software, with interests in mathematics and modern web development.', social: 'Algorithms, software engineering and modern web development. Explore Jerry Yang’s education, skills and independent project.' },
  },
  zh: {
    skip: '跳至正文', location: '澳大利亚 · 墨尔本',
    nav: { home: '首页', about: '关于我', education: '教育背景', project: '项目', skills: '技术栈', contact: '联系我', main: '主导航', mobile: '移动端导航', open: '展开菜单', close: '收起菜单', language: '选择语言', brand: '杨子豪，返回首页' },
    hero: { eyebrow: '计算机科学 · 莫纳什大学', roles: '计算机科学本科生\n算法 · 软件工程 · 全栈开发', intro: '我是莫纳什大学的计算机科学学生，专注于算法、软件工程、数学与 Web 开发。我喜欢把想法做成实用的软件产品，也乐于探索软件系统背后的原理。', project: '查看项目', about: '关于我', scroll: '向下探索' },
    visual: { algorithms: '算法', software: '软件工程', mathematics: '数学', fullstack: '全栈开发', caption: '连接想法，构建软件。' },
    about: { label: '关于我', curiosity: '好奇心', title: '探索理论，\n也把想法变成现实。', p1: '你好，我是杨子豪，就读于莫纳什大学计算机科学本科，专修算法与软件，同时学习数学和 Web 开发。', p2: '我对理论计算机科学与实际开发之间的联系充满兴趣：既想理解算法为什么有效，也希望把这些理解转化为有用的软件。目前，我尤其关注算法、软件工程与现代 Web 应用开发。', p3: '在推进个人项目的同时，我保持着 70+ WAM 的 Distinction 学业平均水平。', interests: ['算法', '软件工程', '全栈开发', '数学'] },
    education: { label: '教育背景', title: '扎实积累，持续探索。', university: '莫纳什大学', degree: '计算机科学学士', specialisation: '专业方向', specialisationValue: '算法与软件', study: '辅修（Minor）', studyValue: '数学 · Web 开发', result: '学业成绩', average: 'Distinction 平均水平', wam: '加权平均分', badge: '本科在读' },
    project: { label: '精选项目', title: '让想法成为可交互的应用。', intro: '一个融合传统文化与现代代码的独立项目。', independent: '独立开发项目', view: '查看项目', preview: '项目概念示意图', demo: '在线演示', source: 'GitHub', bilingual: '中英双语体验', responsive: '响应式 Web 界面', caption: '传统文化 × 现代技术', elements: '五行相生', wood: '木', fire: '火', earth: '土', metal: '金', water: '水' },
    skills: { label: '技术栈', title: '将想法落地的工具。', intro: '主要使用的语言、工具与学习领域。' },
    contact: { label: '联系我', title: '一起把想法，\n做成有价值的作品。', text: '如果你对软件、算法、Web 开发感兴趣，或希望交流潜在的合作与工作机会，欢迎联系我。', email: '邮箱', github: 'GitHub', linkedin: 'LinkedIn', placeholder: '联系方式即将补充。', emailAria: '邮箱 — 联系方式待补充', githubAria: 'GitHub — 链接待补充', linkedinAria: 'LinkedIn — 链接待补充', demoAria: '在线演示 — 链接待补充' },
    // 在 paragraphs 中填写个性化文字，每个字符串是一段；写好后可清空 status。
    personal: {
      label: '生活与随想',
      title: '另一面的我',
      paragraphs: ['这里会记录一些个人想法、生活片段，以及我感兴趣的事。'],
      status: '待续。',
    },
    footer: { study: '计算机科学 @ 莫纳什大学', top: '返回顶部', copyright: '杨子豪' },
    notice: { email: '邮箱地址待补充，敬请期待。', link: '链接待补充，敬请期待。' },
    meta: { title: '杨子豪 · Jerry Yang — 计算机科学个人作品集', description: '杨子豪就读于莫纳什大学计算机科学本科，专修算法与软件，同时学习数学与 Web 开发。了解他的教育背景、技术栈与独立项目。', social: '算法、软件工程与现代 Web 开发。了解杨子豪的教育背景、技术栈与独立项目。' },
  },
};
