// ----------------------------------------------------------------
// Dev: Win Paing Soe | Game: N5 Master Quiz (Final Version - Complete)
// Contact: 09790340242, 0619623368 | sysadm.winpaingsoe@gmail.com
// ----------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    // --- DATA STRINGS (Complete) ---
    const rawAdjData = `No	Hiragana	Kanji	Burmese\n1	ハンサムな	(none)	ခန့်ညားသော\n2	きれいな	綺麗な	လှပသော\n3	しずかな	静かな	တိတ်ဆိတ်သော\n4	にぎやかな	賑やかな	စည်ကားသော\n5	ゆうめいな	有名な	ကျော်ကြားသော\n6	しんせつな	親切な	ကြင်နာသော\n7	げんきな	元気な	ကျန်းမာသော\n8	ひまな	暇な	အားလပ်သော\n9	べんりな	便利な	အဆင်ပြေသော\n10	すてきな	素敵な	ကောင်းမွန်သော\n11	おおきい	大きい	ကြီးသော\n12	ちいさい	小さい	သေးငယ်သော\n13	あたらしい	新しい	အသစ်ဖြစ်သော\n14	ふるい	古い	ဟောင်းသော\n15	いい / よい	良い	ကောင်းသော\n16	わるい	悪い	ဆိုးသော\n17	あつい	暑い/熱い	ပူသော\n18	さむい	寒い	ချမ်းသော (ရာသီဥတု)\n19	つめたい	冷たい	အေးသော (အစားအစာ)\n20	むずかしい	難しい	ခက်ခဲသော\n21	やさしい	易しい	လွယ်ကူသော\n22	たかい	高い	မြင့်သော၊ဈေးကြီးသော\n23	やすい	安い	ဈေးပေါသော\n24	ひくい	低い	နိမ့်သော\n25	おもしろい	面白い	စိတ်ဝင်စားဖွယ်ကောင်းသော\n26	おいしい	美味しい	အရသာရှိသော\n27	いそがしい	忙しい	အလုပ်များသော\n28	たのしい	楽しい	ပျော်ရွှင်သော\n29	しろい	白い	အဖြူရောင်\n30	くろい	黒い	အနက်ရောင်\n31	あかい	赤い	အနီရောင်\n32	あおい	青い	အပြာရောင်\n33	すきな	好きな	ကြိုက်သော\n34	きらいな	嫌いな	မုန်းသော\n35	じょうずな	上手な	တော်သော\n36	へたな	下手な	ညံ့သော\n37	いろいろな	色々な	အမျိုးမျိုးသော\n38	かんたんな	簡単な	လွယ်ကူသော\n39	ちかい	近い	နီးသော\n40	とおい	遠い	ဝေးသော\n41	はやい	速い/早い	မြန်သော\n42	おそい	遅い	နှေးသော\n43	おおい	多い	များသော (လူအရေအတွက်)\n44	すくない	少ない	နည်းသော (လူအရေအတွက်)\n45	あたたかい	温かい	နွေးထွေးသော\n46	すずしい	涼しい	အေးမြသော\n47	あまい	甘い	ချိုသော\n48	からい	辛い	စပ်သော\n49	おもい	重い	လေးသော\n50	かるい	軽い	ပေါ့သော\n51	たいへんな	大変な	ခက်ခဲပင်ပန်းသော\n52	ほしい	欲しい	လိုချင်သော\n53	ひろい	広い	ကျယ်သော\n54	せまい	狭い	ကျဉ်းသော\n55	わかい	若い	ငယ်ရွယ်သော\n56	ながい	長い	ရှည်သော\n57	みじかい	短い	တိုသော\n58	あかるい	明るい	လင်းသော\n59	くらい	暗い	မှောင်သော\n60	たいせつな	大切な	အရေးကြီးသော\n61	だいじょうぶな	大丈夫な	အဆင်ပြေသော\n62	あぶない	危ない	အန္တရာယ်ရှိသော\n63	ねむい	眠い	အိပ်ငိုက်သော\n64	つよい	強い	အားကောင်းသော၊ ကြံ့ခိုင်သော\n65	よわい	弱い	အားနည်းသော`;
    const rawVerbData = `No.	Hiragana	Kanji	မြန်မာအဓိပ္ပာယ်\n1	おきる	起きる	အိပ်ရာထသည်။\n2	ねる	寝る	အိပ်သည်။\n3	はたらく	働く	အလုပ်လုပ်သည်။\n4	やすむ	休む	အနားယူသည်။\n5	べんきょうする	勉強する	လေ့လာသည်။ ကျက်မှတ်သည်။\n6	おわる	終わる	ပြီးဆုံးသည်။\n7	いく	行く	သွားသည်။\n8	くる	来る	လာသည်။\n9	たべる	食べる	စားသည်။\n10	のむ	飲む	သောက်သည်။ (ရေ၊ အရက်)\n11	すう	吸う	ရှူသည်။ (ဆေးလိပ်)\n12	みる	見る	ကြည့်သည်။\n13	きく	聞く	နားထောင်သည်။ မေးမြန်းသည်။\n14	よむ	読む	ဖတ်သည်။\n15	かく	書く	ရေးသည်။  ရေးဆွဲသည်။\n16	かう	買う	ဝယ်သည်။\n17	とる	撮る	ရိုက်သည်။ (ဓာတ်ပုံ)\n18	する	する	လုပ်ဆောင်သည်။လုပ်သည်။\n19	あう	会う	တွေ့ဆုံသည်။\n20	きる	切る	ဖြတ်သည်၊ လှီးသည်။\n21	おくる	送る	ပို့သည်။ (ပစ္စည်း)\n22	あげる	あげる	ပေးသည်။ (တခြားသူကို)\n23	もらう	もらう	လက်ခံရယူသည်။\n24	かす	貸す	ချေးပေးသည်။ (တခြားသူကို)\n25	かりる	借りる	ချေးယူသည်။ (မိမိက)\n26	おしえる	教える	သင်ပေးသည်။ (တခြားသူကို)\n27	ならう	習う	သင်ယူသည်။ (မိမိက)\n28	かける	かける	ဆက်သည်။ (တယ်လီဖုန်း)\n29	わかる	分かる	နားလည်သည်။ သဘောပေါက်သည်။\n30	ある	ある	ရှိသည်။ (သက်မဲ့)\n31	いる	いる	ရှိသည်။ (သက်ရှိ)\n32	かかる	かかる	ကြာသည်။ ကုန်ကျသည်။ (အချိန်၊ ငွေ)\n33	やすむ	休む	အနားယူသည်။\n34	あそぶ	遊ぶ	လျှောက်လည်သည်။ ကစားသည်။\n35	およぐ	泳ぐ	ရေကူးသည်။\n36	むかえる	迎える	ကြိုဆိုသည်။\n37	つかれる	疲れる	ပင်ပန်းသည်။\n38	けっこんする	結婚する	လက်ထပ်သည်။ မင်္ဂလာဆောင်သည်။\n39	かいものする	買い物する	ဈေးဝယ်သည်။\n40	しょくじする	食事する	စားသောက်သည်။ ထမင်းစားသည်။\n41	さんぽする	散歩する	လမ်းလျှောက်သည်။\n42	つける	つける	ဖွင့်သည်။ (မီး၊ aircon)\n43	けす	消す	ပိတ်သည်။ (မီး၊ aircon)\n44	あける	開ける	ဖွင့်သည်။ (တံခါး၊ ပြတင်းပေါက်)\n45	しめる	閉める	ပိတ်သည်။ (တံခါး၊ ပြတင်းပေါက်)\n46	いそぐ	急ぐ	လောသည်။ အလျင်စလိုလုပ်သည်။\n47	まつ	待つ	စောင့်သည်။\n48	もつ	持つ	ပိုင်ဆိုင်သည်။ သယ်ယူသည်။ ကိုင်ထားသည်။\n49	とる	取る	ယူသည်။\n50	てつだう	手伝う	ကူညီသည်။\n51	よぶ	呼ぶ	ခေါ်သည်။ (Taxi)\n52	はなす	話す	စကားပြောသည်။\n53	つかう	使う	သုံးသည်။အသုံးပြုသည်။\n54	とめる	止める	ရပ်သည်။ တားသည်။ (ကား)\n55	みせる	見せる	ပြသည်။\n56	おしえる	教える	ပြောပြသည်။ (လိပ်စာ)\n57	すわる	座る	ထိုင်သည်။\n58	たつ	立つ	မတ်တပ်ရပ်သည်။\n59	はいる	入る	ဝင်သည်။ (လက်ဖက်ရည်ဆိုင်သို့)\n60	でる	出る	ထွက်သည်။ (လက်ဖက်ရည်ဆိုင်မှ)\n61	ふる	降る	ရွာသည်။ (မိုး)\n62	コピーする	コピーする	ကော်ပီကူးသည်။\n63	おく	置く	ထားသည်။\n64	つくる	作る	ပြုလုပ်သည်။တည်ဆောက်သည်။\n65	うる	売る	ရောင်းသည်။\n66	しる	知る	သိသည်။\n67	すむ	住む	နေထိုင်သည်။\n68	けんきゅうする	研究する	သုတေသနပြုသည်။\n69	のる	乗る	စီးသည်။ (ရထား၊ ကား)\n70	おりる	降りる	ဆင်းသည်။ (ရထား၊ ကားမှ)\n71	のりかえる	乗り換える	ပြောင်းစီးသည်။\n72	あびる	浴びる	ရေချိုးသည်။\n73	いれる	入れる	သွင်းသည်။\n74	だす	出す	ထုတ်သည်။ထပ်သည်။တင်သည်။\n75	おろす	下ろす	ထုတ်သည်။ (ငွေ)\n76	はいる	入る	ဝင်သည်။ (တက္ကသိုလ်သို့)\n77	でる	出る	ထွက်သည်။ဘွဲ့ရသည်။ (တက္ကသိုလ်မှ)\n78	おす	押す	တွန်းသည်။ ဖိသည်။နှိပ်သည်။\n79	のむ	飲む	သောက်သည်။\n80	はじめる	始める	စတင်သည်။\n81	けんがくする	見学する	ကြည့်ရှုလေ့လာသည်။\n82	でんわする	電話する	တယ်လီဖုန်းဆက်သည်။\n83	おぼえる	覚える	မှတ်မိသည်။\n84	わすれる	忘れる	မေ့သည်။\n85	なくす	なくす	ပျောက်ဆုံးသည်။\n86	はらう	払う	ပေးချေသည်။ ပေးဆောင်သည်။\n87	かえす	返す	ပြန်ပေးသည်။\n88	でかける	出かける	အပြင်ထွက်သည်။\n89	ぬぐ	脱ぐ	ချွတ်သည်။ (အဝတ်အစား)\n90	もっていく	持って行く	ယူသွားသည်။ (သက်မဲ့ပစ္စည်း)\n91	もってくる	持って来る	ယူလာသည်။ (သက်မဲ့ပစ္စည်း)\n92	しんぱいする	心配する	စိတ်ပူသည်။\n93	ざんぎょうする	残業する	အလုပ်အချိန်ပိုဆင်းသည်။\n94	しゅっちょうする	出張する	တာဝန်ဖြင့် ခရီးထွက်သည်။\n95	のむ	飲む	သောက်သည်။ (ဆေး)\n96	できる	できる	လုပ်နိုင်သည်။လုပ်တက်သည်။ပေါ်ပေါက်လာသည်။\n97	あらう	洗う	ဆေးကြောသည်။\n98	ひく	弾く	တီးခတ်သည်။ (ဂီတာ၊ စန္ဒရား)\n99	うたう	歌う	သီချင်းဆိုသည်။\n100	あつめる	集める	စုဆောင်းသည်။\n101	すてる	捨てる	လွှင့်ပစ်သည်။\n102	かえる	換える	လဲလှယ်သည်။ဖလှယ်သည်။\n103	うんてんする	運転する	မောင်းနှင်သည်။\n104	よやくする	予約する	ကြိုတင်မှာသည်။ (Booking)\n105	のぼる	登る	တက်သည်။ (တောင်)\n106	とまる	泊まる	တည်းခိုသည်။\n107	そうじする	掃除する	သန့်ရှင်းရေးလုပ်သည်။\n108	せんたくする	洗濯する	အဝတ်လျှော်သည်။\n109	なる	なる	ဖြစ်သည်။ဖြစ်လာသည်။\n110	いる	要る	လိုအပ်သည်။\n111	しらべる	調べる	ရှာဖွေသည်။ စစ်ဆေးသည်။\n112	しゅうりする	修理する	ပြုပြင်သည်။\n113	おもう	思う	ထင်မြင်သည်။ တွေးတောသည်။\n114	いう	言う	ပြောသည်။\n115	かつ	勝つ	နိုင်သည်\n116	まける	負ける	ရှုံးနိမ့်သည်။\n117	ある	ある	ရှိသည်။\n118	やくにたつ	役に立つ	အသုံးဝင်သည်။အထောက်အကူပြုသည်။\n119	うごく	動く	လှုပ်ရှားသည်။ လည်ပတ်သည်။\n120	やめる	やめる	နှုတ်ထွက်သည်။\n121	きをつける	気をつける	သတိထားသည်။\n122	りゅうがくする	留学する	နိုင်ငံခြားပညာတော်သင်သွားသည်။\n123	きる	着る	ဝတ်ဆင်သည်။ (ခါးအထက်ပိုင်းဝတ်ဆင်ရာတွင်သုံးသည်)\n124	はく	はく	ဝတ်ဆင်သည်။စွပ်သည်။ (ခါးအောက်ပိုင်း။။။။။။။။။။။။။)\n125	かぶる	かぶる	ဆောင်းသည်။ (ဦးထုပ်)\n126	かける	かける	တပ်သည်။ချိတ်သည်။ (မျက်မှန်)\n127	する	する	လုပ်ဆောင်သည်။\n128	Noun + する	Noun + する	Noun ကို ပြုလုပ်သည်။\n129	うまれる	生まれる	မွေးဖွားသည်။\n130	きく	聞く	မေးသည်။\n131	まわす	回す	လှည့်သည်။\n132	ひく	引く	ဆွဲထုတ်ယူသည်။\n133	かえる	変える	လဲလှယ်သည်။ ပြောင်းသည်။\n134	さわる	触る	ကိုင်သည်။ ထိသည်။\n135	でる	出る	ထွက်သည်။ (အကြွေ)\n136	あるく	歩く	လမ်းလျှောက်သည်။\n137	わたる	渡る	ဖြတ်ကူးသည်။ (တံတားကို)\n138	まがる	曲がる	ချိုးကွေ့သည်။ (ညာသို့)\n139	くれる	くれる	ပေးသည်။ (မိမိအား)\n140	なおす	直す	အမှားပြင်သည်။ပြင်ပေးသည်။\n141	つれていく	連れて行く	ခေါ်သွားသည်။ လူ သို့မဟုတ် တိရစ္ဆာန်ကို အတူတကွ ခေါ်ဆောင်ပြီး နေရာတစ်ခုသို့ သွားခြင်း။\n142	つれてくる	連れて来る	ခေါ်လာသည်။ ။။။-----------။။\n143	おくる	送る	လိုက်လံပို့ဆောင်သည်။\n144	しょうかいする	紹介する	မိတ်ဆက်သည်။\n145	あんないする	案内する	လိုက်လံရှင်းပြသည်။\n146	せつめいする	説明する	ရှင်းပြသည်။\n147	じゅんびをする	準備をする	ကြိုတင်ပြင်ဆင်သည်။\n148	かんがえる	考える	စဉ်းစားသည်။ တွေးခေါ်သည်။\n149	つく	着く	ဆိုက်ရောက်သည်။\n150	とる	取る	ရသည်။ယူသည်။ (အသက်- ရသည်။)\n151	たりる	足りる	လုံလောက်သည်။\n152	がんばる	がんばる	ကြိုးစားသည်။`;
    const guideText = `<h3><i class="fa-solid fa-layer-group"></i> Verb များကို Group ခွဲခြင်း</h3><h4>Group 1</h4><p><code>う</code>, <code>つ</code>, <code>る</code>, <code>む</code>, <code>ぬ</code>, <code>ぶ</code>, <code>く</code>, <code>ぐ</code>, <code>す</code> တို့ဖြင့် အဆုံးသတ်သော verb များ။</p><strong>Group 1 ခြွင်းချက်များ:</strong><ul><li><code>まいる</code> - လာသည်။</li><li><code>はいる</code> - ဝင်သည်။</li><li><code>はしる</code> - ပြေးသည်။</li><li><code>しる</code> - သိသည်။</li><li><code>いる</code> - လိုအပ်သည်။</li><li><code>ちる</code> - ကြွေကျသည်။</li><li><code>きる</code> - လှီးဖြတ်သည်။</li><li><code>かえる</code> - ပြန်သည်။</li><li><code>ける</code> - ကန်သည်။ (ဘောလုံး)</li><li><code>へる</code> - လျော့နည်းသည်။</li><li><code>ひねる</code> - လှဲ့သည်။ လိမ်သည်။</li></ul><h4>Group 2</h4><p><code>る</code> ဖြင့်အဆုံးသတ်ပြီး ၎င်း၏ရှေ့တွင် <strong>い-row</strong> သို့မဟုတ် <strong>え-row</strong> သံထွက်ရှိသော verb များ။ (ဥပမာ: <code>たべる</code>, <code>みる</code>)</p><h4>Group 3</h4><p><code>する</code> နှင့် <code>くる</code></p><h3><i class="fa-solid fa-wand-magic-sparkles"></i> Dictionary Form မှ Masu Form သို့ပြောင်းခြင်း</h3><ul><li><strong>Group 1:</strong> နောက်ဆုံးစာလုံးကို <code>い</code> လိုင်းသို့ပြောင်း <code>ます</code> ပေါင်းပါ။ (ဥပမာ: <code>のむ → のみます</code>)</li><li><strong>Group 2:</strong> <code>る</code> ကိုဖြုတ်၍ <code>ます</code> ပေါင်းပါ။ (ဥပမာ: <code>たべる → たべます</code>)</li><li><strong>Group 3:</strong> <code>する → します</code>, <code>くる → きます</code></li></ul><h3><i class="fa-solid fa-people-arrows"></i> て / た Form ပြောင်းခြင်း</h3><ul><li><strong>Group 1:</strong><ul><li><code>う, つ, る</code> → <code>って / った</code> (<code>かう → かって</code>)</li><li><code>む, ぬ, ぶ</code> → <code>んで / んだ</code> (<code>のむ → のんで</code>)</li><li><code>く</code> → <code>いて / いた</code> (<code>かく → かいて</code>)</li><li><code>ぐ</code> → <code>いで / いだ</code> (<code>およぐ → およいで</code>)</li><li><code>す</code> → <code>して / した</code> (<code>はなす → はなして</code>)</li><li>ခြွင်းချက်: <code>いく → いって / いった</code></li></ul></li><li><strong>Group 2:</strong> <code>る</code> ကိုဖြုတ်၍ <code>て / た</code> ပေါင်းပါ။ (<code>みる → みて / みた</code>)</li><li><strong>Group 3:</strong> <code>くる → きて / きた</code>, <code>する → して / した</code></li></ul><h3><i class="fa-solid fa-thumbs-down"></i> Nai Form (အငြင်းပုံစံ) ပြောင်းခြင်း</h3><ul><li><strong>Group 1:</strong> နောက်ဆုံးစာလုံးကို <code>あ</code> လိုင်းသို့ပြောင်း <code>ない</code> ပေါင်းပါ။ (<code>いく → いかない</code>)<ul><li><strong>＊</strong> <code>う</code> ဖြင့်ဆုံးလျှင် <code>わ</code> သို့ပြောင်းပါ။ (<code>あう → あわない</code>)</li></ul></li><li><strong>Group 2:</strong> <code>る</code> ကိုဖြုတ်၍ <code>ない</code> ပေါင်းပါ။ (<code>たべる → たべない</code>)</li><li><strong>Group 3:</strong> <code>くる → こない</code>, <code>する → しない</code></li><li><strong>＊</strong> ခြွင်းချက်: <code>ある → ない</code></li></ul><h3 id="contact-guide"><i class="fa-solid fa-paper-plane"></i> Developer သို့ ဆက်သွယ်ရန်</h3><p>ဂိမ်းနှင့်ပတ်သက်၍ အကြံပြုလိုပါက အောက်ပါနည်းလမ်းများဖြင့် ဆက်သွယ်နိုင်ပါသည်။</p><ul><li><strong>Phone:</strong> 09790340242, 0619623368</li><li><strong>Email:</strong> sysadm.winpaingsoe@gmail.com</li></ul>`;

    const localization = {
        mission: "မစ်ရှင်",
        questionTemplate: "<span class='highlight'>{word}</span> ကို <span class='highlight'>{form}</span> သို့ပြောင်းပါ",
        politePlainQuestionTemplate: "<span class='highlight'>{word}</span> ကို <span class='highlight'>{politeness} {form}</span> form သို့ပြောင်းပါ",
        feedbackCorrect: '<i class="fa-solid fa-check-circle"></i> မှန်ပါသည်!',
        feedbackIncorrect: '<i class="fa-solid fa-times-circle"></i> မှားပါသည်! အဖြေမှန်မှာ: <span class="highlight">{answer}</span>',
        endCongrats: "ဂုဏ်ယူပါတယ်, {user}!",
        endEarly: "{user}, သင်သည် ဂိမ်းကို စောစီးစွာ ရပ်တန့်လိုက်ပါသည်။",
        alertNoItems: "ရွေးချယ်ထားသော အကြောင်းအရာအတွက် data မရှိပါ။ ကျေးဇူးပြု၍ အခြားအကြောင်းအရာကို ရွေးချယ်ပါ။"
    };

    // --- DOM Elements ---
    const allDOMElements = {
        screens: { start: document.getElementById('start-screen'), game: document.getElementById('game-screen'), end: document.getElementById('end-screen') },
        usernameInput: document.getElementById('username'), studyMethodSelect: document.getElementById('study-method'), quizTopicSelect: document.getElementById('quiz-topic'),
        startGameBtn: document.getElementById('start-game-btn'), guideBtn: document.getElementById('guide-btn'), guideModal: document.getElementById('guide-modal'),
        guideContent: document.getElementById('guide-content'), closeModalBtn: document.querySelector('.close-button'),
        progressText: document.getElementById('progress-text'), progressBar: document.getElementById('progress-bar'), scoreDisplay: document.getElementById('score'),
        endGameEarlyBtn: document.getElementById('end-game-early-btn'), flashcardContainer: document.getElementById('flashcard-container'),
        quizContainer: document.getElementById('quiz-container'), flashcard: document.getElementById('flashcard'), flashcardFront: document.getElementById('flashcard-front'),
        flashcardBack: document.getElementById('flashcard-back'), prevCardBtn: document.getElementById('prev-card-btn'), flipCardBtn: document.getElementById('flip-card-btn'),
        nextCardBtn: document.getElementById('next-card-btn'), quizQuestionEl: document.getElementById('quiz-question'), typingWrapper: document.getElementById('typing-wrapper'),
        typingAnswerInput: document.getElementById('typing-answer'), submitTypingBtn: document.getElementById('submit-typing-answer-btn'),
        mcqChoicesEl: document.getElementById('mcq-choices'), quizFeedbackEl: document.getElementById('quiz-feedback'), endMessage: document.getElementById('end-message'),
        finalScore: document.getElementById('final-score'), incorrectAnswersContainer: document.getElementById('incorrect-answers-container'),
        incorrectAnswersList: document.getElementById('incorrect-answers-list'), playAgainBtn: document.getElementById('play-again-btn'),
        themeSwitcher: document.getElementById('theme-switcher'), themeToggleBtn: document.getElementById('theme-toggle-btn'), themeMenu: document.getElementById('theme-menu'),
    };

    // --- Game State & Data ---
    let masterData = { adjectives: [], verbs: [] };
    let gameState = { currentItems: [], currentIndex: 0, score: 0, incorrectAnswers: [], username: '', studyMethod: '', quizTopic: '', quizType: '' };

    // --- Core Logic Module ---
    const logic = {
        getVerbGroup(h) { if (h === 'する' || h.endsWith('する')) return 3; if (h === 'くる') return 3; const ex = ['まいる', 'はいる', 'はしる', 'しる', 'いる', 'ちる', 'きる', 'かえる', 'ける', 'へる', 'ひねる']; if (ex.includes(h)) return 1; if (h.endsWith('る')) { const s = h.slice(0, -1); const l = s.slice(-1); if (['い', 'え', 'き', 'し', 'ち', 'に', 'ひ', 'み', 'り', 'げ', 'ぜ', 'で', 'べ', 'ぺ'].includes(l)) return 2; } return 1; },
        conjugate(w, f, p = 'plain') { if (!w || !w.type) return ''; const { type } = w; if (type === 'verb') { const { hiragana: h, group: g } = w; const u = h.slice(-1); const s = h.slice(0, -1); const mS = (g === 1) ? s + 'いきしちにひみり'['うくすつぬふむる'.indexOf(u)] : (g === 2) ? s : (h === 'くる') ? 'き' : h.replace(/する$/, 'し'); if (f === 'masu') return mS + 'ます'; if (f === 'te') { if (h === 'いく') return 'いって'; if (g === 1) { if (['う', 'つ', 'る'].includes(u)) return s + 'って'; if (['む', 'ぬ', 'ぶ'].includes(u)) return s + 'んで'; if (u === 'く') return s + 'いて'; if (u === 'ぐ') return s + 'いで'; if (u === 'す') return s + 'して'; } else if (g === 2) return s + 'て'; else return (h === 'くる') ? 'きて' : h.replace(/する$/, 'して'); } const tF = this.conjugate(w, 'te'); if (f === 'ta') return tF.endsWith('て') ? tF.slice(0, -1) + 'た' : tF.slice(0, -1) + 'だ'; if (p === 'plain') { if (f === 'present') return h; if (f === 'negative' || f === 'nai') { if (h === 'ある') return 'ない'; if (g === 1) { if (u === 'う') return s + 'わない'; const a = { 'く': 'か', 'ぐ': 'が', 'す': 'さ', 'つ': 'た', 'ぬ': 'な', 'ぶ': 'ば', 'む': 'ま', 'る': 'ら' }[u]; return s + a + 'ない'; } else if (g === 2) return s + 'ない'; else return (h === 'くる') ? 'こない' : h.replace(/する$/, 'しない'); } if (f === 'past') return this.conjugate(w, 'ta'); if (f === 'past-negative') return this.conjugate(w, 'nai').slice(0, -1) + 'かった'; } else if (p === 'polite') { if (f === 'present') return mS + 'ます'; if (f === 'negative') return mS + 'ません'; if (f === 'past') return mS + 'ました'; if (f === 'past-negative') return mS + 'ませんでした'; } } else if (type === 'adjective') { const { base, adjType } = w; const cB = (base === 'いい' && f !== 'present') ? 'よ' : base.slice(0, -1); if (adjType === 'i') { if (p === 'plain') { if (f === 'present') return base; if (f === 'negative') return (base === 'いい' ? 'よくない' : cB + 'くない'); if (f === 'past') return (base === 'いい' ? 'よかった' : cB + 'かった'); if (f === 'past-negative') return (base === 'いい' ? 'よくなかった' : cB + 'くなかった'); } else if (p === 'polite') { if (f === 'present') return base + 'です'; if (f === 'negative') return (base === 'いい' ? 'よくないです' : cB + 'くないです'); if (f === 'past') return (base === 'いい' ? 'よかったです' : cB + 'かったです'); if (f === 'past-negative') return (base === 'いい' ? 'よくなかったです' : cB + 'くなかったです'); } } else if (adjType === 'na') { if (p === 'plain') { if (f === 'present') return base + 'だ'; if (f === 'negative') return base + 'じゃない'; if (f === 'past') return base + 'だった'; if (f === 'past-negative') return base + 'じゃなかった'; } else if (p === 'polite') { if (f === 'present') return base + 'です'; if (f === 'negative') return base + 'じゃありません'; if (f === 'past') return base + 'でした'; if (f === 'past-negative') return base + 'じゃありませんでした'; } } } return ''; },
        parseData(d, t) { return d.trim().split('\n').slice(1).map(l => { const p = l.split('\t').map(x => x.trim()); if (p.length < 4) return null; const e = { id: parseInt(p[0].replace('.', '')), hiragana: p[1].includes('/') ? p[1].split(' / ')[0] : p[1], kanji: p[2] === '(none)' ? null : p[2], burmese: p[3], type: t, }; if (t === 'adjective') { e.adjType = e.hiragana.endsWith('な') ? 'na' : 'i'; e.base = e.adjType === 'na' ? e.hiragana.slice(0, -1) : e.hiragana; } else if (t === 'verb') { e.group = this.getVerbGroup(e.hiragana); } return e; }).filter(Boolean); },
        shuffleArray(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } }
    };

    // --- UI & Event Handler Module ---
    const ui = {
        init() {
            masterData.adjectives = logic.parseData(rawAdjData, 'adjective');
            masterData.verbs = logic.parseData(rawVerbData, 'verb');
            this.setupEventListeners();
            this.theme.init();
        },
        setupEventListeners() {
            const el = allDOMElements;
            el.startGameBtn.addEventListener('click', () => this.game.start());
            el.guideBtn.addEventListener('click', () => this.modal.show());
            el.closeModalBtn.addEventListener('click', () => this.modal.hide());
            window.addEventListener('click', (e) => { if (e.target === el.guideModal) this.modal.hide(); });
            el.playAgainBtn.addEventListener('click', () => this.game.reset());
            el.endGameEarlyBtn.addEventListener('click', () => this.game.end(true));
            el.flipCardBtn.addEventListener('click', () => this.flashcard.flip());
            el.flashcard.addEventListener('click', (e) => { if (!e.target.closest('button')) this.flashcard.flip() });
            el.nextCardBtn.addEventListener('click', () => this.flashcard.navigate(1));
            el.prevCardBtn.addEventListener('click', () => this.flashcard.navigate(-1));
            el.submitTypingBtn.addEventListener('click', () => this.quiz.checkTypingAnswer());
            el.typingAnswerInput.addEventListener('keyup', (e) => { if (e.key === 'Enter') this.quiz.checkTypingAnswer(); });
        },
        updateProgress() {
            const total = gameState.currentItems.length; if (total === 0) return;
            allDOMElements.progressText.textContent = `${localization.mission} ${gameState.currentIndex + 1} / ${total}`;
            allDOMElements.progressBar.style.width = `${((gameState.currentIndex + 1) / total) * 100}%`;
        },
        modal: {
            show() { allDOMElements.guideModal.classList.add('active'); allDOMElements.guideContent.innerHTML = guideText; },
            hide() { allDOMElements.guideModal.classList.remove('active'); }
        },
        game: {
            start() {
                gameState.username = allDOMElements.usernameInput.value.trim() || 'ကစားသူ';
                gameState.studyMethod = allDOMElements.studyMethodSelect.value;
                gameState.quizTopic = allDOMElements.quizTopicSelect.value;
                gameState.quizType = gameState.quizTopic === 'verb-conjugation' ? 'typing' : 'mcq';
                let items = [];
                switch (gameState.quizTopic) {
                    case 'vocabulary': items = [...masterData.adjectives, ...masterData.verbs]; break;
                    case 'verb-conjugation': items = masterData.verbs; break;
                    case 'adjective-conjugation': items = masterData.adjectives; break;
                    case 'polite-plain-all': items = [...masterData.adjectives, ...masterData.verbs]; break;
                }
                if (items.length === 0) { alert(localization.alertNoItems); return; }
                gameState.currentItems = items; logic.shuffleArray(gameState.currentItems);
                gameState.currentIndex = 0; gameState.score = 0; gameState.incorrectAnswers = [];
                allDOMElements.scoreDisplay.textContent = gameState.score;
                allDOMElements.screens.start.classList.remove('active'); allDOMElements.screens.game.classList.add('active');
                ui.flashcard.hide(); ui.quiz.hide();
                if (gameState.studyMethod === 'flashcard') {
                    ui.flashcard.show(); ui.flashcard.display();
                } else if (gameState.studyMethod === 'quiz') { ui.quiz.show(); ui.quiz.nextQuestion(); }
                ui.updateProgress();
            },
            end(isEarly = false) {
                allDOMElements.screens.game.classList.remove('active'); allDOMElements.screens.end.classList.add('active');
                allDOMElements.endMessage.textContent = isEarly ? localization.endEarly.replace('{user}', gameState.username) : localization.endCongrats.replace('{user}', gameState.username);
                const total = gameState.currentItems.length > 0 ? (isEarly ? gameState.currentIndex : gameState.currentItems.length) : 0;
                const percentage = total > 0 ? Math.round((gameState.score / total) * 100) : 0;
                allDOMElements.finalScore.innerHTML = `${gameState.score} / ${total} (${percentage}%)`;
                allDOMElements.incorrectAnswersContainer.style.display = gameState.incorrectAnswers.length > 0 ? 'block' : 'none';
                allDOMElements.incorrectAnswersList.innerHTML = gameState.incorrectAnswers.map(item => `<li><div class="question-text">${item.question}</div><div>သင်၏အဖြေ: <span class="user-answer">${item.userAnswer || '<i>(အဖြေမရှိ)</i>'}</span></div><div>အဖြေမှန်: <span class="correct-answer">${item.correctAnswer}</span></div></li>`).join('');
            },
            reset() { allDOMElements.screens.end.classList.remove('active'); allDOMElements.screens.start.classList.add('active'); }
        },
        flashcard: {
            show() { allDOMElements.flashcardContainer.classList.add('active'); },
            hide() { allDOMElements.flashcardContainer.classList.remove('active'); },
            flip() { allDOMElements.flashcard.classList.toggle('flipped'); },
            display() {
                if (gameState.currentIndex >= gameState.currentItems.length) { ui.game.end(); return; }
                const item = gameState.currentItems[gameState.currentIndex]; allDOMElements.flashcard.classList.remove('flipped');
                let frontHTML = '', backHTML = '';
                switch (gameState.quizTopic) {
                    case 'verb-conjugation': const vForms = ['nai', 'te', 'ta', 'masu']; const vForm = vForms[Math.floor(Math.random() * vForms.length)];
                        frontHTML = `<h2>${item.hiragana}</h2><p class="highlight">(${vForm} form?)</p>`; backHTML = `<h2>${logic.conjugate(item, vForm)}</h2>`; break;
                    case 'adjective-conjugation': case 'polite-plain-all': const aForms = ['present', 'negative', 'past', 'past-negative']; const aPoliteness = ['plain', 'polite'];
                        const aForm = aForms[Math.floor(Math.random() * aForms.length)]; const aPol = aPoliteness[Math.floor(Math.random() * aPoliteness.length)];
                        frontHTML = `<h2>${item.hiragana}</h2><p class="highlight">(${aPol} ${aForm.replace('-', ' ')}?)</p>`; backHTML = `<h2>${logic.conjugate(item, aForm, aPol)}</h2>`; break;
                    default: frontHTML = `<h2>${item.hiragana}</h2><p>${item.kanji || ''}</p>`; backHTML = `<h3>${item.burmese}</h3>`; break;
                }
                allDOMElements.flashcardFront.innerHTML = frontHTML; allDOMElements.flashcardBack.innerHTML = backHTML; ui.updateProgress();
            },
            navigate(direction) { gameState.currentIndex += direction; if (gameState.currentIndex < 0) gameState.currentIndex = 0; this.display(); }
        },
        quiz: {
            show() {
                allDOMElements.quizContainer.classList.add('active');
                allDOMElements.typingWrapper.classList.toggle('active', gameState.quizType === 'typing');
                allDOMElements.mcqChoicesEl.classList.toggle('active', gameState.quizType === 'mcq');
            },
            hide() { allDOMElements.quizContainer.classList.remove('active'); },
            nextQuestion() {
                if (gameState.currentIndex >= gameState.currentItems.length) { ui.game.end(); return; }
                allDOMElements.quizFeedbackEl.innerHTML = '';
                if (gameState.quizType === 'typing') this.generateTypingQuestion(); else this.generateMCQQuestion();
                ui.updateProgress();
            },
            generateTypingQuestion() {
                const verb = gameState.currentItems[gameState.currentIndex]; const forms = ['nai', 'te', 'ta', 'masu']; const targetForm = forms[Math.floor(Math.random() * forms.length)];
                verb.currentQuestion = { answer: logic.conjugate(verb, targetForm) };
                allDOMElements.quizQuestionEl.innerHTML = localization.questionTemplate.replace('{word}', verb.hiragana).replace('{form}', targetForm + '-form');
                allDOMElements.typingAnswerInput.value = ''; allDOMElements.typingAnswerInput.focus();
            },
            checkTypingAnswer() { const userAnswer = allDOMElements.typingAnswerInput.value.trim().toLowerCase(); const correctAnswer = gameState.currentItems[gameState.currentIndex].currentQuestion.answer; this.handleResult(userAnswer === correctAnswer, userAnswer, correctAnswer); },
            generateMCQQuestion() {
                const item = gameState.currentItems[gameState.currentIndex]; const forms = ['present', 'negative', 'past', 'past-negative']; const politenessLevels = ['plain', 'polite'];
                const targetForm = forms[Math.floor(Math.random() * forms.length)]; const targetPoliteness = politenessLevels[Math.floor(Math.random() * politenessLevels.length)];
                allDOMElements.quizQuestionEl.innerHTML = localization.politePlainQuestionTemplate.replace('{word}', item.hiragana).replace('{politeness}', targetPoliteness).replace('{form}', targetForm.replace('-', ' '));
                const correctAnswer = logic.conjugate(item, targetForm, targetPoliteness);
                let choices = new Set([correctAnswer]); const combinedData = [...masterData.adjectives, ...masterData.verbs];
                while (choices.size < 4) {
                    const randomItem = combinedData[Math.floor(Math.random() * combinedData.length)];
                    const randomForm = forms[Math.floor(Math.random() * forms.length)]; const randomPoliteness = politenessLevels[Math.floor(Math.random() * politenessLevels.length)];
                    const distractor = logic.conjugate(randomItem, randomForm, randomPoliteness); if (distractor && distractor.length > 0) choices.add(distractor);
                }
                const shuffledChoices = Array.from(choices); logic.shuffleArray(shuffledChoices);
                allDOMElements.mcqChoicesEl.innerHTML = '';
                shuffledChoices.forEach(choice => {
                    const button = document.createElement('button'); button.className = 'choice-btn'; button.textContent = choice;
                    button.onclick = () => {
                        const isCorrect = choice === correctAnswer;
                        allDOMElements.mcqChoicesEl.querySelectorAll('.choice-btn').forEach(b => {
                            b.disabled = true; if (b.textContent === correctAnswer) b.classList.add('correct');
                        });
                        if (!isCorrect) button.classList.add('incorrect');
                        this.handleResult(isCorrect, choice, correctAnswer);
                    };
                    allDOMElements.mcqChoicesEl.appendChild(button);
                });
            },
            handleResult(isCorrect, userAnswer, correctAnswer) {
                if (isCorrect) {
                    gameState.score++; allDOMElements.scoreDisplay.textContent = gameState.score;
                    allDOMElements.quizFeedbackEl.className = 'feedback-correct'; allDOMElements.quizFeedbackEl.innerHTML = localization.feedbackCorrect;
                } else {
                    allDOMElements.quizFeedbackEl.className = 'feedback-incorrect';
                    allDOMElements.quizFeedbackEl.innerHTML = localization.feedbackIncorrect.replace('{answer}', correctAnswer);
                    gameState.incorrectAnswers.push({ question: allDOMElements.quizQuestionEl.innerText, userAnswer, correctAnswer });
                }
                setTimeout(() => { gameState.currentIndex++; this.nextQuestion(); }, 1800);
            }
        },
        theme: {
            init() {
                const savedTheme = localStorage.getItem('theme') || 'system'; this.set(savedTheme);
                allDOMElements.themeToggleBtn.addEventListener('click', () => { allDOMElements.themeMenu.classList.toggle('hidden'); });
                document.addEventListener('click', (e) => { if (!allDOMElements.themeSwitcher.contains(e.target)) allDOMElements.themeMenu.classList.add('hidden'); });
                allDOMElements.themeMenu.addEventListener('click', (e) => {
                    const themeOption = e.target.closest('.theme-option');
                    if (themeOption) { const newTheme = themeOption.dataset.theme; this.set(newTheme); allDOMElements.themeMenu.classList.add('hidden'); }
                });
            },
            set(themeName) { document.documentElement.setAttribute('data-theme', themeName); localStorage.setItem('theme', themeName); }
        }
    };

    // Initialize the app
    ui.init();
});