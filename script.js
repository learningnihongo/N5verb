
document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    const verbsRaw = [
        { hiragana: "おきる", meaning: "အိပ်ရာထသည်" }, { hiragana: "ねる", meaning: "အိပ်သည်" }, { hiragana: "はたらく", meaning: "အလုပ်လုပ်သည်" },
        { hiragana: "やすむ", meaning: "အနားယူသည်" }, { hiragana: "べんきょうする", meaning: "လေ့လာသည်" }, { hiragana: "おわる", meaning: "ပြီးဆုံးသည်" },
        { hiragana: "いく", meaning: "သွားသည်" }, { hiragana: "くる", meaning: "လာသည်" }, { hiragana: "かえる", meaning: "ပြန်သည်" },
        { hiragana: "たべる", meaning: "စားသည်" }, { hiragana: "のむ", meaning: "သောက်သည်" }, { hiragana: "すう", meaning: "ရှူသည်" },
        { hiragana: "みる", meaning: "ကြည့်သည်" }, { hiragana: "きく", meaning: "နားထောင်သည်/မေးသည်" }, { hiragana: "よむ", meaning: "ဖတ်သည်" },
        { hiragana: "かく", meaning: "ရေးသည်" }, { hiragana: "かう", meaning: "ဝယ်သည်" }, { hiragana: "とる", meaning: "ရိုက်သည် (ဓာတ်ပုံ)" },
        { hiragana: "する", meaning: "လုပ်သည်" }, { hiragana: "あう", meaning: "တွေ့ဆုံသည်" }, { hiragana: "きる", meaning: "ဖြတ်သည်" },
        { hiragana: "おくる", meaning: "ပို့သည်" }, { hiragana: "あげる", meaning: "ပေးသည် (to others)" }, { hiragana: "もらう", meaning: "လက်ခံရယူသည်" },
        { hiragana: "かす", meaning: "ချေးပေးသည်" }, { hiragana: "かりる", meaning: "ချေးယူသည်" }, { hiragana: "おしえる", meaning: "သင်ပေးသည်" },
        { hiragana: "ならう", meaning: "သင်ယူသည်" }, { hiragana: "かける", meaning: "ဆက်သည် (ဖုန်း)" }, { hiragana: "わかる", meaning: "နားလည်သည်" },
        { hiragana: "ある", meaning: "ရှိသည် (သက်မဲ့)" }, { hiragana: "いる", meaning: "ရှိသည် (သက်ရှိ)" }, { hiragana: "かかる", meaning: "ကြာသည်/ကုန်ကျသည်" },
        { hiragana: "あそぶ", meaning: "ကစားသည်/လည်သည်" }, { hiragana: "およぐ", meaning: "ရေကူးသည်" }, { hiragana: "むかえる", meaning: "ကြိုဆိုသည်" },
        { hiragana: "つかれる", meaning: "ပင်ပန်းသည်" }, { hiragana: "けっこんする", meaning: "လက်ထပ်သည်" }, { hiragana: "かいものする", meaning: "ဈေးဝယ်သည်" },
        { hiragana: "しょくじする", meaning: "စားသောက်သည်" }, { hiragana: "さんぽする", meaning: "လမ်းလျှောက်သည်" }, { hiragana: "つける", meaning: "ဖွင့်သည် (မီး)" },
        { hiragana: "けす", meaning: "ပိတ်သည် (မီး)" }, { hiragana: "あける", meaning: "ဖွင့်သည် (တံခါး)" }, { hiragana: "しめる", meaning: "ပိတ်သည် (တံခါး)" },
        { hiragana: "いそぐ", meaning: "လောသည်" }, { hiragana: "まつ", meaning: "စောင့်သည်" }, { hiragana: "もつ", meaning: "ကိုင်သည်/ပိုင်ဆိုင်သည်" },
        { hiragana: "てつだう", meaning: "ကူညီသည်" }, { hiragana: "よぶ", meaning: "ခေါ်သည်" }, { hiragana: "はなす", meaning: "စကားပြောသည်" },
        { hiragana: "つかう", meaning: "သုံးသည်" }, { hiragana: "とめる", meaning: "ရပ်သည်" }, { hiragana: "みせる", meaning: "ပြသည်" },
        { hiragana: "すわる", meaning: "ထိုင်သည်" }, { hiragana: "たつ", meaning: "မတ်တပ်ရပ်သည်" }, { hiragana: "はいる", meaning: "ဝင်သည်" },
        { hiragana: "でる", meaning: "ထွက်သည်" }, { hiragana: "ふる", meaning: "ရွာသည် (မိုး)" }, { hiragana: "コピーする", meaning: "ကော်ပီကူးသည်" },
        { hiragana: "おく", meaning: "ထားသည်" }, { hiragana: "つくる", meaning: "ပြုလုပ်သည်" }, { hiragana: "うる", meaning: "ရောင်းသည်" },
        { hiragana: "しる", meaning: "သိသည်" }, { hiragana: "すむ", meaning: "နေထိုင်သည်" }, { hiragana: "けんきゅうする", meaning: "သုတေသနပြုသည်" },
        { hiragana: "のる", meaning: "စီးသည်" }, { hiragana: "おりる", meaning: "ဆင်းသည်" }, { hiragana: "のりかえる", meaning: "ပြောင်းစီးသည်" },
        { hiragana: "あびる", meaning: "ရေချိုးသည်" }, { hiragana: "いれる", meaning: "ထည့်သည်" }, { hiragana: "だす", meaning: "ထုတ်သည်" },
        { hiragana: "おろす", meaning: "ထုတ်သည် (ငွေ)" }, { hiragana: "おす", meaning: "တွန်းသည်/နှိပ်သည်" }, { hiragana: "はじめる", meaning: "စတင်သည်" },
        { hiragana: "けんがくする", meaning: "လေ့လာကြည့်ရှုသည်" }, { hiragana: "でんわする", meaning: "ဖုန်းဆက်သည်" }, { hiragana: "おぼえる", meaning: "မှတ်မိသည်" },
        { hiragana: "わすれる", meaning: "မေ့သည်" }, { hiragana: "なくす", meaning: "ပျောက်ဆုံးသည်" }, { hiragana: "はらう", meaning: "ပေးချေသည်" },
        { hiragana: "かえす", meaning: "ပြန်ပေးသည်" }, { hiragana: "でかける", meaning: "အပြင်ထွက်သည်" }, { hiragana: "ぬぐ", meaning: "ချွတ်သည်" },
        { hiragana: "もっていく", meaning: "ယူသွားသည်" }, { hiragana: "もってくる", meaning: "ယူလာသည်" }, { hiragana: "しんぱいする", meaning: "စိတ်ပူသည်" },
        { hiragana: "ざんぎょうする", meaning: "အချိန်ပိုဆင်းသည်" }, { hiragana: "しゅっちょうする", meaning: "ခရီးထွက်သည် (အလုပ်)" }, { hiragana: "できる", meaning: "လုပ်နိုင်သည်" },
        { hiragana: "あらう", meaning: "ဆေးကြောသည်" }, { hiragana: "ひく", meaning: "တီးခတ်သည်" }, { hiragana: "うたう", meaning: "သီချင်းဆိုသည်" },
        { hiragana: "あつめる", meaning: "စုဆောင်းသည်" }, { hiragana: "すてる", meaning: "လွှင့်ပစ်သည်" }, { hiragana: "かえる", meaning: "လဲလှယ်သည်" },
        { hiragana: "うんてんする", meaning: "မောင်းနှင်သည်" }, { hiragana: "よやくする", meaning: "ကြိုတင်မှာသည်" }, { hiragana: "のぼる", meaning: "တက်သည်" },
        { hiragana: "とまる", meaning: "တည်းခိုသည်" }, { hiragana: "そうじする", meaning: "သန့်ရှင်းရေးလုပ်သည်" }, { hiragana: "せんたくする", meaning: "အဝတ်လျှော်သည်" },
        { hiragana: "なる", meaning: "ဖြစ်လာသည်" }, { hiragana: "いる", meaning: "လိုအပ်သည်" }, { hiragana: "しらべる", meaning: "ရှာဖွေသည်/စစ်ဆေးသည်" },
        { hiragana: "しゅうりする", meaning: "ပြုပြင်သည်" }, { hiragana: "おもう", meaning: "ထင်သည်" }, { hiragana: "いう", meaning: "ပြောသည်" },
        { hiragana: "かつ", meaning: "နိုင်သည်" }, { hiragana: "まける", meaning: "ရှုံးသည်" }, { hiragana: "やくにたつ", meaning: "အသုံးဝင်သည်" },
        { hiragana: "うごく", meaning: "လှုပ်ရှားသည်" }, { hiragana: "やめる", meaning: "နှုတ်ထွက်သည်/ရပ်သည်" }, { hiragana: "きをつける", meaning: "သတိထားသည်" },
        { hiragana: "りゅうがくする", meaning: "ပညာတော်သင်သွားသည်" }, { hiragana: "きる", meaning: "ဝတ်ဆင်သည်" }, { hiragana: "はく", meaning: "ဝတ်ဆင်သည် (အောက်ပိုင်း)" },
        { hiragana: "かぶる", meaning: "ဆောင်းသည် (ဦးထုပ်)" }, { hiragana: "うまれる", meaning: "မွေးဖွားသည်" }, { hiragana: "まわす", meaning: "လှည့်သည်" },
        { hiragana: "ひく", meaning: "ဆွဲသည်" }, { hiragana: "さわる", meaning: "ထိသည်" }, { hiragana: "あるく", meaning: "လမ်းလျှောက်သည်" },
        { hiragana: "わたる", meaning: "ဖြတ်ကူးသည်" }, { hiragana: "まがる", meaning: "ချိုးကွေ့သည်" }, { hiragana: "くれる", meaning: "ပေးသည် (မိမိကို)" },
        { hiragana: "なおす", meaning: "ပြင်သည်" }, { hiragana: "つれていく", meaning: "ခေါ်သွားသည်" }, { hiragana: "つれてくる", meaning: "ခေါ်လာသည်" },
        { hiragana: "しょうかいする", meaning: "မိတ်ဆက်သည်" }, { hiragana: "あんないする", meaning: "လိုက်လံရှင်းပြသည်" }, { hiragana: "せつめいする", meaning: "ရှင်းပြသည်" },
        { hiragana: "じゅんびをする", meaning: "ပြင်ဆင်သည်" }, { hiragana: "かんがえる", meaning: "စဉ်းစားသည်" }, { hiragana: "つく", meaning: "ဆိုက်ရောက်သည်" },
        { hiragana: "たりる", meaning: "လုံလောက်သည်" }, { hiragana: "がんばる", meaning: "ကြိုးစားသည်" }
    ];
    const iAdjectivesRaw = [
        { dict: 'おおきい', meaning: 'ကြီးသော' }, { dict: 'ちいさい', meaning: 'သေးငယ်သော' }, { dict: 'あたらしい', meaning: 'အသစ်ဖြစ်သော' },
        { dict: 'ふるい', meaning: 'ဟောင်းသော' }, { dict: 'いい', meaning: 'ကောင်းသော' }, { dict: 'わるい', meaning: 'ဆိုးသော' },
        { dict: 'あつい', meaning: 'ပူသော' }, { dict: 'さむい', meaning: 'ချမ်းသော' }, { dict: 'つめたい', meaning: 'အေးသော' },
        { dict: 'むずかしい', meaning: 'ခက်ခဲသော' }, { dict: 'やさしい', meaning: 'လွယ်ကူသော' }, { dict: 'たかい', meaning: 'မြင့်သော/ဈေးကြီးသော' },
        { dict: 'やすい', meaning: 'ဈေးပေါသော' }, { dict: 'ひくい', meaning: 'နိမ့်သော' }, { dict: 'おもしろい', meaning: 'စိတ်ဝင်စားဖွယ်ကောင်းသော' },
        { dict: 'おいしい', meaning: 'အရသာရှိသော' }, { dict: 'いそがしい', meaning: 'အလုပ်များသော' }, { dict: 'たのしい', meaning: 'ပျော်ရွှင်သော' },
        { dict: 'しろい', meaning: 'အဖြူရောင်' }, { dict: 'くろい', meaning: 'အနက်ရောင်' }, { dict: 'あかい', meaning: 'အနီရောင်' },
        { dict: 'あおい', meaning: 'အပြာရောင်' }, { dict: 'ちかい', meaning: 'နီးသော' }, { dict: 'とおい', meaning: 'ဝေးသော' },
        { dict: 'はやい', meaning: 'မြန်သော' }, { dict: 'おそい', meaning: 'နှေးသော' }, { dict: 'おおい', meaning: 'များသော' },
        { dict: 'すくない', meaning: 'နည်းသော' }, { dict: 'あたたかい', meaning: 'နွေးထွေးသော' }, { dict: 'すずしい', meaning: 'အေးမြသော' },
        { dict: 'あまい', meaning: 'ချိုသော' }, { dict: 'からい', meaning: 'စပ်သော' }, { dict: 'おもい', meaning: 'လေးသော' },
        { dict: 'かるい', meaning: 'ပေါ့သော' }, { dict: 'ほしい', meaning: 'လိုချင်သော' }, { dict: 'ひろい', meaning: 'ကျယ်သော' },
        { dict: 'せまい', meaning: 'ကျဉ်းသော' }, { dict: 'わかい', meaning: 'ငယ်ရွယ်သော' }, { dict: 'ながい', meaning: 'ရှည်သော' },
        { dict: 'みじかい', meaning: 'တိုသော' }, { dict: 'あかるい', meaning: 'လင်းသော' }, { dict: 'くらい', meaning: 'မှောင်သော' },
        { dict: 'あぶない', meaning: 'အန္တရာယ်ရှိသော' }, { dict: 'ねむい', meaning: 'အိပ်ငိုက်သော' }, { dict: 'つよい', meaning: 'အားကောင်းသော' },
        { dict: 'よわい', meaning: 'အားနည်းသော' }
    ];
    const nAdjectivesRaw = [
        { dict: 'ハンサム', meaning: 'ခန့်ညားသော' }, { dict: 'きれい', meaning: 'လှပသော' }, { dict: 'しずか', meaning: 'တိတ်ဆိတ်သော' },
        { dict: 'にぎやか', meaning: 'စည်ကားသော' }, { dict: 'ゆうめい', meaning: 'ကျော်ကြားသော' }, { dict: 'しんせつ', meaning: 'ကြင်နာသော' },
        { dict: 'げんき', meaning: 'ကျန်းမာသော' }, { dict: 'ひま', meaning: 'အားလပ်သော' }, { dict: 'べんり', meaning: 'အဆင်ပြေသော' },
        { dict: 'すてき', meaning: 'ကောင်းမွန်သော' }, { dict: 'すき', meaning: 'ကြိုက်သော' }, { dict: 'きらい', meaning: 'မုန်းသော' },
        { dict: 'じょうず', meaning: 'တော်သော' }, { dict: 'へた', meaning: 'ညံ့သော' }, { dict: 'いろいろ', meaning: 'အမျိုးမျိုး' },
        { dict: 'かんたん', meaning: 'လွယ်ကူသော' }, { dict: 'たいへん', meaning: 'ခက်ခဲပင်ပန်းသော' }, { dict: 'たいせつ', meaning: 'အရေးကြီးသော' },
        { dict: 'だいじょうぶ', meaning: 'အဆင်ပြေသော' }
    ];

    // --- DATA PROCESSING ---
    const processVerb = (verb) => {
        const jisho = verb.hiragana;
        const last = jisho.slice(-1);
        const stem = jisho.slice(0, -1);
        let group, masu, nai, te;

        const isGroup2Ichidan = (v) => {
            if (!v.endsWith('る')) return false;
            const preStem = v.slice(0, -1);
            if (!preStem) return false;
            const preChar = preStem.slice(-1);
            const exceptions = ['はいる', 'はしる', 'しる', 'いる', 'ちる', 'きる', 'かえる', 'ける', 'へる', 'ひねる'];
            if (exceptions.includes(v)) return false;
            return 'いえ'.includes(preChar);
        };

        if (jisho === 'する' || jisho.endsWith('する')) group = 3;
        else if (jisho === 'くる' || jisho.includes('くる')) group = 3;
        else if (isGroup2Ichidan(jisho)) group = 2;
        else group = 1;

        if (group === 3) {
            const noun = jisho.replace('する', '').replace('くる', '');
            masu = noun + (jisho.includes('くる') ? 'きます' : 'します');
            nai = noun + (jisho.includes('くる') ? 'こない' : 'しない');
            te = noun + (jisho.includes('くる') ? 'きて' : 'して');
        } else if (group === 2) {
            masu = stem + 'ます';
            nai = stem + 'ない';
            te = stem + 'て';
        } else { // Group 1
            const uToI = { 'う': 'い', 'く': 'き', 'ぐ': 'ぎ', 'す': 'し', 'つ': 'ち', 'ぬ': 'に', 'ふ': 'ひ', 'ぶ': 'び', 'む': 'み', 'る': 'り' };
            masu = stem + uToI[last] + 'ます';
            const uToA = { 'う': 'わ', 'く': 'か', 'ぐ': 'が', 'す': 'さ', 'つ': 'た', 'ぬ': 'な', 'ふ': 'は', 'ぶ': 'ば', 'む': 'ま', 'る': 'ら' };
            nai = stem + uToA[last] + 'ない';

            if (jisho === 'いく') te = 'いって';
            else if ('うつる'.includes(last)) te = stem + 'って';
            else if ('むぶぬ'.includes(last)) te = stem + 'んで';
            else if (last === 'く') te = stem + 'いて';
            else if (last === 'ぐ') te = stem + 'いで';
            else if (last === 'す') te = stem + 'して';
            else te = stem + 'って'; // fallback
        }
        return { jisho, masu, te, nai, meaning: verb.meaning, type: 'verb' };
    };

    const verbs = verbsRaw.map(processVerb);
    const iAdjectives = iAdjectivesRaw.map(adj => {
        const base = adj.dict === 'いい' ? 'よ' : adj.dict.slice(0, -1);
        return { type: 'i-adj', meaning: adj.meaning, jisho: adj.dict, plain_past: base + 'かった', plain_negative: base + 'くない' };
    });
    const nAdjectives = nAdjectivesRaw.map(adj => {
        return { type: 'na-adj', meaning: adj.meaning, jisho: adj.dict, plain_past: adj.dict + 'だった', plain_negative: adj.dict + 'じゃない' };
    });

    const allData = [...verbs, ...iAdjectives, ...nAdjectives];
    let shuffledData = [];
    let currentDataItem;
    let currentQuestionType;
    let score = 0;
    let currentQuestionIndex = 0;
    let currentUser = {};
    let currentGameMode = 'flashcard';

    const questionTypes = {
        verb: [{ start: 'jisho', ask: 'masu', name: 'ます形' }, { start: 'masu', ask: 'te', name: 'て形' }, { start: 'jisho', ask: 'nai', name: 'ない形' }],
        'i-adj': [{ start: 'jisho', ask: 'plain_past', name: 'Plain Past (た形)' }, { start: 'jisho', ask: 'plain_negative', name: 'Plain Negative (ない形)' }],
        'na-adj': [{ start: 'jisho', ask: 'plain_past', name: 'Plain Past (た形)' }, { start: 'jisho', ask: 'plain_negative', name: 'Plain Negative (ない形)' }],
    };

    // --- UI Elements ---
    const getEl = (id) => document.getElementById(id);
    const UI = {
        userFormView: getEl('user-form-view'), mainAppView: getEl('main-app-view'), gamePanel: getEl('game-panel'),
        guidePanel: getEl('guide-panel'), gameChoicePanel: getEl('game-choice-panel'), quizPanelsContainer: getEl('quiz-panels-container'),
        endGameScreen: getEl('end-game-screen'), flashcardPanel: getEl('flashcard-panel'), typingQuizPanel: getEl('typing-quiz-panel'),
        userNameInput: getEl('user-name-input'), themeSelect: getEl('theme-select'), startBtn: getEl('start-btn'),
        choiceButtons: document.querySelectorAll('.choice-btn'), tabGameBtn: getEl('tab-game-btn'), tabGuideBtn: getEl('tab-guide-btn'),
        restartBtn: getEl('restart-btn'), flipBtn: getEl('flip-btn'), correctBtn: getEl('correct-btn'), incorrectBtn: getEl('incorrect-btn'),
        submitAnswerBtn: getEl('submit-answer-btn'), typingInput: getEl('typing-input')
    };

    // --- App Flow & UI ---
    const showView = (viewToShow) => {
        [UI.userFormView, UI.mainAppView].forEach(v => v.classList.add('hidden'));
        viewToShow.classList.remove('hidden');
        viewToShow.classList.add('panel-enter-active');
    };

    UI.startBtn.addEventListener('click', () => {
        currentUser.name = UI.userNameInput.value.trim() || 'အမည်မသိ';
        applyTheme(UI.themeSelect.value);
        showView(UI.mainAppView);
        getEl('welcome-name').textContent = currentUser.name;
        showGameChoice();
    });

    const switchMainTab = (activeTab) => {
        UI.guidePanel.classList.toggle('hidden', activeTab !== 'guide');
        UI.gamePanel.classList.toggle('hidden', activeTab !== 'game');
        UI.tabGuideBtn.classList.toggle('active', activeTab === 'guide');
        UI.tabGameBtn.classList.toggle('active', activeTab === 'game');
    };

    UI.tabGameBtn.addEventListener('click', () => switchMainTab('game'));
    UI.tabGuideBtn.addEventListener('click', () => switchMainTab('guide'));

    const showGameChoice = () => {
        switchMainTab('game');
        UI.quizPanelsContainer.classList.add('hidden');
        UI.endGameScreen.classList.add('hidden');
        UI.gameChoicePanel.classList.remove('hidden');
    };

    UI.restartBtn.addEventListener('click', showGameChoice);

    // --- Game Logic ---
    UI.choiceButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentGameMode = button.dataset.mode;
            startGame();
        });
    });

    const startGame = () => {
        score = 0;
        currentQuestionIndex = 0;
        shuffledData = shuffleArray([...allData]);
        UI.gameChoicePanel.classList.add('hidden');
        UI.quizPanelsContainer.classList.remove('hidden');

        const isFlashcard = currentGameMode === 'flashcard';
        UI.flashcardPanel.classList.toggle('hidden', !isFlashcard);
        UI.typingQuizPanel.classList.toggle('hidden', isFlashcard);

        isFlashcard ? loadFlashcardQuestion() : loadTypingQuestion();
    };

    const loadQuestion = () => {
        if (currentQuestionIndex >= shuffledData.length) { endGame(); return; }
        currentDataItem = shuffledData[currentQuestionIndex];
        const qBank = questionTypes[currentDataItem.type];
        currentQuestionType = qBank[Math.floor(Math.random() * qBank.length)];
    };

    const setQuestionUI = (mode, item, qType) => {
        getEl(`${mode}-score`).textContent = score;
        getEl(`${mode}-question-count`).textContent = `${currentQuestionIndex + 1} / ${shuffledData.length}`;
        getEl(`${mode}-q-start`).textContent = item[qType.start];
        getEl(`${mode}-q-form`).textContent = qType.name;
        getEl(`${mode}-q-meaning`).textContent = `(${item.meaning})`;
    };

    const loadFlashcardQuestion = () => {
        loadQuestion();
        if (!currentDataItem) return;
        getEl('flashcard').classList.remove('is-flipped');
        getEl('feedback-buttons').classList.add('hidden');
        UI.flipBtn.classList.remove('hidden');
        setQuestionUI('flashcard', currentDataItem, currentQuestionType);
        getEl('flashcard-q-answer').textContent = currentDataItem[currentQuestionType.ask];
    };

    UI.flipBtn.addEventListener('click', () => {
        getEl('flashcard').classList.add('is-flipped');
        UI.flipBtn.classList.add('hidden');
        getEl('feedback-buttons').classList.remove('hidden');
    });

    const handleFlashcardFeedback = (isCorrect) => {
        if (isCorrect) score++;
        currentQuestionIndex++;
        setTimeout(loadFlashcardQuestion, 300);
    };
    UI.correctBtn.addEventListener('click', () => handleFlashcardFeedback(true));
    UI.incorrectBtn.addEventListener('click', () => handleFlashcardFeedback(false));

    const loadTypingQuestion = () => {
        loadQuestion();
        if (!currentDataItem) return;
        setQuestionUI('typing', currentDataItem, currentQuestionType);
        UI.typingInput.value = '';
        UI.typingInput.focus();
        const feedbackEl = getEl('typing-feedback');
        feedbackEl.className = 'text-center h-8 my-2 font-bold';
        feedbackEl.textContent = '';
    };

    const checkTypingAnswer = () => {
        const userAnswer = UI.typingInput.value.trim().toLowerCase();
        const correctAnswer = currentDataItem[currentQuestionType.ask];
        const feedbackEl = getEl('typing-feedback');

        if (userAnswer === correctAnswer) {
            score++;
            feedbackEl.textContent = 'မှန်ပါတယ်!';
            feedbackEl.classList.add('is-correct');
            setTimeout(() => { currentQuestionIndex++; loadTypingQuestion(); }, 1200);
        } else {
            feedbackEl.textContent = `မှားပါတယ်! အဖြေမှန်: ${correctAnswer}`;
            feedbackEl.classList.add('is-incorrect');
        }
    };
    UI.submitAnswerBtn.addEventListener('click', checkTypingAnswer);
    UI.typingInput.addEventListener('keypress', (e) => e.key === 'Enter' && checkTypingAnswer());

    // --- End Game ---
    const endGame = () => {
        UI.quizPanelsContainer.classList.add('hidden');
        UI.endGameScreen.classList.remove('hidden');
        const percentage = shuffledData.length > 0 ? Math.round((score / shuffledData.length) * 100) : 0;
        getEl('final-score').textContent = `${score} / ${shuffledData.length}`;
        getEl('score-percentage').textContent = `(ရလဒ်: ${percentage}%)`;
        getEl('congrats-message').textContent = `ဂုဏ်ယူပါတယ်, ${currentUser.name}!`;
        const trophy = getEl('trophy-icon');
        trophy.className = 'text-6xl mb-4';
        if (percentage >= 80) {
            trophy.textContent = '🏆';
            trophy.classList.add('animate-bounce');
            if (typeof confetti === 'function') confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
        } else if (percentage >= 50) { trophy.textContent = '👍'; }
        else { trophy.textContent = '💪'; }
    };

    // --- Initial Setup ---
    const applyTheme = (theme) => {
        document.body.className = `theme-${theme}`;
        localStorage.setItem('theme', theme);
    };
    const shuffleArray = (array) => array.slice().sort(() => Math.random() - 0.5);

    UI.themeSelect.value = localStorage.getItem('theme') || 'light';
    applyTheme(UI.themeSelect.value);
    UI.themeSelect.addEventListener('change', (e) => applyTheme(e.target.value));
});
