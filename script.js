document.addEventListener('DOMContentLoaded', () => {
    // --- Data Sources ---
    const originalVerbs = [
        { masu: 'おきます', jisho: 'おきる', te: 'おきて', nai: 'おきない', meaning: 'အိပ်ရာထသည်။' },
        { masu: 'ねます', jisho: 'ねる', te: 'ねて', nai: 'ねない', meaning: 'အိပ်သည်။' },
        { masu: 'はたらきます', jisho: 'はたらく', te: 'はたらいて', nai: 'はたらかない', meaning: 'အလုပ်လုပ်သည်။' },
        { masu: 'やすみます', jisho: 'やすむ', te: 'やすんで', nai: 'やすまない', meaning: 'အနားယူသည်။' },
        { masu: 'べんきょうします', jisho: 'べんきょうする', te: 'べんきょうして', nai: 'べんきょうしない', meaning: 'လေ့လာသည်။ ကျက်မှတ်သည်။' },
        { masu: 'おわります', jisho: 'おわる', te: 'おわって', nai: 'おわらない', meaning: 'ပြီးဆုံးသည်။' },
        { masu: 'いきます', jisho: 'いく', te: 'いって', nai: 'いかない', meaning: 'သွားသည်။' },
        { masu: 'きます', jisho: 'くる', te: 'きて', nai: 'こない', meaning: 'လာသည်။' },
        { masu: 'たべます', jisho: 'たべる', te: 'たべて', nai: 'たべない', meaning: 'စားသည်။' },
        { masu: 'のみます', jisho: 'のむ', te: 'のんで', nai: 'のまない', meaning: 'သောက်သည်။ (ရေ၊ အရက်)' },
        { masu: 'すいます', jisho: 'すう', te: 'すって', nai: 'すわない', meaning: 'ရှူသည်။ (ဆေးလိပ်)' },
        { masu: 'みます', jisho: 'みる', te: 'みて', nai: 'みない', meaning: 'ကြည့်သည်။' },
        { masu: 'ききます', jisho: 'きく', te: 'きいて', nai: 'きかない', meaning: 'နားထောင်သည်။ မေးမြန်းသည်။' },
        { masu: 'よみます', jisho: 'よむ', te: 'よんで', nai: 'よまない', meaning: 'ဖတ်သည်။' },
        { masu: 'かきます', jisho: 'かく', te: 'かいて', nai: 'かかない', meaning: 'ရေးသည်။ ရေးဆွဲသည်။' },
        { masu: 'かいます', jisho: 'かう', te: 'かって', nai: 'かわない', meaning: 'ဝယ်သည်။' },
        { masu: 'とります', jisho: 'とる', te: 'とって', nai: 'とらない', meaning: 'ရိုက်သည်။ (ဓာတ်ပုံ)' },
        { masu: 'します', jisho: 'する', te: 'して', nai: 'しない', meaning: 'လုပ်ဆောင်သည်။လုပ်သည်။' },
        { masu: 'あいます', jisho: 'あう', te: 'あって', nai: 'あわない', meaning: 'တွေ့ဆုံသည်။' },
        { masu: 'きります', jisho: 'きる', te: 'きって', nai: 'きらない', meaning: 'ဖြတ်သည်၊ လှီးသည်။' },
        { masu: 'おくります', jisho: 'おくる', te: 'おくって', nai: 'おくらない', meaning: 'ပို့သည်။ (ပစ္စည်း)' },
        { masu: 'あげます', jisho: 'あげる', te: 'あげて', nai: 'あげない', meaning: 'ပေးသည်။ (တခြားသူကို)' },
        { masu: 'もらいます', jisho: 'もらう', te: 'もらって', nai: 'もらわない', meaning: 'လက်ခံရယူသည်။' },
        { masu: 'かします', jisho: 'かす', te: 'かして', nai: 'かさない', meaning: 'ချေးပေးသည်။ (တခြားသူကို)' },
        { masu: 'かります', jisho: 'かりる', te: 'かりて', nai: 'かりない', meaning: 'ချေးယူသည်။ (မိမိက)' },
        { masu: 'おしえます', jisho: 'おしえる', te: 'おしえて', nai: 'おしえない', meaning: 'သင်ပေးသည်။ (တခြားသူကို)' },
        { masu: 'ならいます', jisho: 'ならう', te: 'ならって', nai: 'ならわない', meaning: 'သင်ယူသည်။ (မိမိက)' },
        { masu: 'かけます', jisho: 'かける', te: 'かけて', nai: 'かけない', meaning: 'ဆက်သည်။ (တယ်လီဖုန်း)' },
        { masu: 'わかります', jisho: 'わかる', te: 'わかって', nai: 'わからない', meaning: 'နားလည်သည်။ သဘောပေါက်သည်။' },
        { masu: 'あります', jisho: 'ある', te: 'あって', nai: 'ない', meaning: 'ရှိသည်။ (သက်မဲ့)' },
        { masu: 'います', jisho: 'いる', te: 'いて', nai: 'いない', meaning: 'ရှိသည်။ (သက်ရှိ)' },
        { masu: 'かかります', jisho: 'かかる', te: 'かかって', nai: 'かからない', meaning: 'ကြာသည်။ ကုန်ကျသည်။ (အချိန်၊ ငွေ)' },
        { masu: 'あそびます', jisho: 'あそぶ', te: 'あそんで', nai: 'あそばない', meaning: 'လျှောက်လည်သည်။ ကစားသည်။' },
        { masu: 'およぎます', jisho: 'およぐ', te: 'およいで', nai: 'およがない', meaning: 'ရေကူးသည်။' },
        { masu: 'むかえます', jisho: 'むかえる', te: 'むかえて', nai: 'むかえない', meaning: 'ကြိုဆိုသည်။' },
        { masu: 'つかれます', jisho: 'つかれる', te: 'つかれて', nai: 'つかれない', meaning: 'ပင်ပန်းသည်။' },
        { masu: 'けっこんします', jisho: 'けっこんする', te: 'けっこんして', nai: 'けっこんしない', meaning: 'လက်ထပ်သည်။ မင်္ဂလာဆောင်သည်။' },
        { masu: 'かいものします', jisho: 'かいものする', te: 'かいものして', nai: 'かいものしない', meaning: 'ဈေးဝယ်သည်။' },
        { masu: 'しょくじします', jisho: 'しょくじする', te: 'しょくじして', nai: 'しょくじしない', meaning: 'စားသောက်သည်။ ထမင်းစားသည်။' },
        { masu: 'さんぽします', jisho: 'さんぽする', te: 'さんぽして', nai: 'さんぽしない', meaning: 'လမ်းလျှောက်သည်။' },
        { masu: 'つけます', jisho: 'つける', te: 'つけて', nai: 'つけない', meaning: 'ဖွင့်သည်။ (မီး၊ aircon)' },
        { masu: 'けします', jisho: 'けす', te: 'けして', nai: 'けさない', meaning: 'ပိတ်သည်။ (မီး၊ aircon)' },
        { masu: 'あけます', jisho: 'あける', te: 'あけて', nai: 'あけない', meaning: 'ဖွင့်သည်။ (တံခါး၊ ပြတင်းပေါက်)' },
        { masu: 'しめます', jisho: 'しめる', te: 'しめて', nai: 'しめない', meaning: 'ပိတ်သည်။ (တံခါး၊ ပြတင်းပေါက်)' },
        { masu: 'いそぎます', jisho: 'いそぐ', te: 'いそいで', nai: 'いそがない', meaning: 'လောသည်။ အလျင်စလိုလုပ်သည်။' },
        { masu: 'まちます', jisho: 'まつ', te: 'まって', nai: 'またない', meaning: 'စောင့်သည်။' },
        { masu: 'もちます', jisho: 'もつ', te: 'もって', nai: 'もたない', meaning: 'ပိုင်ဆိုင်သည်။ သယ်ယူသည်။ ကိုင်ထားသည်။' },
        { masu: 'とります', jisho: 'とる', te: 'とって', nai: 'とらない', meaning: 'ယူသည်။' },
        { masu: 'てつだいます', jisho: 'てつだう', te: 'てつだって', nai: 'てつだわない', meaning: 'ကူညီသည်။' },
        { masu: 'よびます', jisho: 'よぶ', te: 'よんで', nai: 'よばない', meaning: 'ခေါ်သည်။ (Taxi)' },
        { masu: 'はなします', jisho: 'はなす', te: 'はなして', nai: 'はなさない', meaning: 'စကားပြောသည်။' },
        { masu: 'つかいます', jisho: 'つかう', te: 'つかって', nai: 'つかわない', meaning: 'သုံးသည်။အသုံးပြုသည်။' },
        { masu: 'とめます', jisho: 'とめる', te: 'とめて', nai: 'とめない', meaning: 'ရပ်သည်။ တားသည်။ (ကား)' },
        { masu: 'みせます', jisho: 'みせる', te: 'みせて', nai: 'みせない', meaning: 'ပြသည်။' },
        { masu: 'すわります', jisho: 'すわる', te: 'すわって', nai: 'すわらない', meaning: 'ထိုင်သည်။' },
        { masu: 'たちます', jisho: 'たつ', te: 'たって', nai: 'たたない', meaning: 'မတ်တပ်ရပ်သည်။' },
        { masu: 'はいります', jisho: 'はいる', te: 'はいって', nai: 'はいらない', meaning: 'ဝင်သည်။ (လက်ဖက်ရည်ဆိုင်သို့)' },
        { masu: 'でます', jisho: 'でる', te: 'でて', nai: 'でない', meaning: 'ထွက်သည်။ (လက်ဖက်ရည်ဆိုင်မှ)' },
        { masu: 'ふります', jisho: 'ふる', te: 'ふって', nai: 'ふらない', meaning: 'ရွာသည်။ (မိုး)' },
        { masu: 'コピーします', jisho: 'コピーする', te: 'コピーして', nai: 'コピーしない', meaning: 'ကော်ပီကူးသည်။' },
        { masu: 'おくります', jisho: 'おく', te: 'おいて', nai: 'おかない', meaning: 'ထားသည်။' },
        { masu: 'つくります', jisho: 'つくる', te: 'つくって', nai: 'つくらない', meaning: 'ပြုလုပ်သည်။တည်ဆောက်သည်။' },
        { masu: 'うります', jisho: 'うる', te: 'うって', nai: 'うらない', meaning: 'ရောင်းသည်။' },
        { masu: 'しります', jisho: 'しる', te: 'しって', nai: 'しらない', meaning: 'သိသည်။' },
        { masu: 'すみます', jisho: 'すむ', te: 'すんで', nai: 'すまない', meaning: 'နေထိုင်သည်။' },
        { masu: 'けんきゅうします', jisho: 'けんきゅうする', te: 'けんきゅうして', nai: 'けんきゅうしない', meaning: 'သုတေသနပြုသည်။' },
        { masu: 'のります', jisho: 'のる', te: 'のって', nai: 'のらない', meaning: 'စီးသည်။ (ရထား၊ ကား)' },
        { masu: 'おります', jisho: 'おりる', te: 'おりて', nai: 'おりない', meaning: 'ဆင်းသည်။ (ရထား၊ ကားမှ)' },
        { masu: 'のりかえます', jisho: 'のりかえる', te: 'のりかえて', nai: 'のりかえない', meaning: 'ပြောင်းစီးသည်။' },
        { masu: 'あびます', jisho: 'あびる', te: 'あびて', nai: 'あびない', meaning: 'ရေချိုးသည်။' },
        { masu: 'いれます', jisho: 'いれる', te: 'いれて', nai: 'いれない', meaning: 'သွင်းသည်။' },
        { masu: 'だします', jisho: 'だす', te: 'だして', nai: 'ださない', meaning: 'ထုတ်သည်။ထပ်သည်။တင်သည်။' },
        { masu: 'おろします', jisho: 'おろす', te: 'おろして', nai: 'おろさない', meaning: 'ထုတ်သည်။ (ငွေ)' },
        { masu: 'おします', jisho: 'おす', te: 'おして', nai: 'おさない', meaning: 'တွန်းသည်။ ဖိသည်။နှိပ်သည်။' },
        { masu: 'はじめます', jisho: 'はじめる', te: 'はじめて', nai: 'はじめない', meaning: 'စတင်သည်။' },
        { masu: 'けんがくします', jisho: 'けんがくする', te: 'けんがくして', nai: 'けんがくしない', meaning: 'ကြည့်ရှုလေ့လာသည်။' },
        { masu: 'でんわします', jisho: 'でんわする', te: 'でんわして', nai: 'でんわしない', meaning: 'တယ်လီဖုန်းဆက်သည်။' },
        { masu: 'おぼえます', jisho: 'おぼえる', te: 'おぼえて', nai: 'おぼえない', meaning: 'မှတ်မိသည်။' },
        { masu: 'わすれます', jisho: 'わすれる', te: 'わすれて', nai: 'わすれない', meaning: 'မေ့သည်။' },
        { masu: 'なくします', jisho: 'なくす', te: 'なくして', nai: 'なくさない', meaning: 'ပျောက်ဆုံးသည်။' },
        { masu: 'はらいます', jisho: 'はらう', te: 'はらって', nai: 'はらわない', meaning: 'ပေးချေသည်။ ပေးဆောင်သည်။' },
        { masu: 'かえします', jisho: 'かえす', te: 'かえして', nai: 'かえさない', meaning: 'ပြန်ပေးသည်။' },
        { masu: 'でかけます', jisho: 'でかける', te: 'でかけて', nai: 'でかけない', meaning: 'အပြင်ထွက်သည်။' },
        { masu: 'ぬぎます', jisho: 'ぬぐ', te: 'ぬいで', nai: 'ぬがない', meaning: 'ချွတ်သည်။ (အဝတ်အစား)' },
        { masu: 'もっていきます', jisho: 'もっていく', te: 'もっていって', nai: 'もっていかない', meaning: 'ယူသွားသည်။ (သက်မဲ့ပစ္စည်း)' },
        { masu: 'もってきます', jisho: 'もってくる', te: 'もってきて', nai: 'もってこない', meaning: 'ယူလာသည်။ (သက်မဲ့ပစ္စည်း)' },
        { masu: 'しんぱいします', jisho: 'しんぱいする', te: 'しんぱいして', nai: 'しんぱいしない', meaning: 'စိတ်ပူသည်။' },
        { masu: 'ざんぎょうします', jisho: 'ざんぎょうする', te: 'ざんぎょうして', nai: 'ざんぎょうしない', meaning: 'အလုပ်အချိန်ပိုဆင်းသည်။' },
        { masu: 'しゅっちょうします', jisho: 'しゅっちょうする', te: 'しゅっちょうして', nai: 'しゅっちょうしない', meaning: 'တာဝန်ဖြင့် ခရီးထွက်သည်။' },
        { masu: 'できます', jisho: 'できる', te: 'できて', nai: 'できない', meaning: 'လုပ်နိုင်သည်။ လုပ်တက်သည်။ ပေါ်ပေါက်လာသည်။' },
        { masu: 'あらいます', jisho: 'あらう', te: 'あらって', nai: 'あらわない', meaning: 'ဆေးကြောသည်။' },
        { masu: 'ひきます', jisho: 'ひく', te: 'ひいて', nai: 'ひかない', meaning: 'တီးခတ်သည်။ (ဂီတာ၊ စန္ဒရား)' },
        { masu: 'うたいます', jisho: 'うたう', te: 'うたって', nai: 'うたわない', meaning: 'သီချင်းဆိုသည်။' },
        { masu: 'あつめます', jisho: 'あつめる', te: 'あつめて', nai: 'あつめない', meaning: 'စုဆောင်းသည်။' },
        { masu: 'すてます', jisho: 'すてる', te: 'すてて', nai: 'すてない', meaning: 'လွှင့်ပစ်သည်။' },
        { masu: 'かえます', jisho: 'かえる', te: 'かえて', nai: 'かえない', meaning: 'လဲလှယ်သည်။ဖလှယ်သည်။' },
        { masu: 'うんてんします', jisho: 'うんてんする', te: 'うんてんして', nai: 'うんてんしない', meaning: 'မောင်းနှင်သည်။' },
        { masu: 'よやくします', jisho: 'よやくする', te: 'よやくして', nai: 'よやくしない', meaning: 'ကြိုတင်မှာသည်။ (Booking)' },
        { masu: 'のぼります', jisho: 'のぼる', te: 'のぼって', nai: 'のぼらない', meaning: 'တက်သည်။ (တောင်)' },
        { masu: 'とまります', jisho: 'とまる', te: 'とまって', nai: 'とまらない', meaning: 'တည်းခိုသည်။' },
        { masu: 'そうじします', jisho: 'そうじする', te: 'そうじして', nai: 'そうじしない', meaning: 'သန့်ရှင်းရေးလုပ်သည်။' },
        { masu: 'せんたくします', jisho: 'せんたくする', te: 'せんたくして', nai: 'せんたくしない', meaning: 'အဝတ်လျှော်သည်။' },
        { masu: 'なります', jisho: 'なる', te: 'なって', nai: 'ならない', meaning: 'ဖြစ်သည်။ဖြစ်လာသည်။' },
        { masu: 'いります', jisho: 'いる', te: 'いって', nai: 'いらない', meaning: 'လိုအပ်သည်။' },
        { masu: 'しらべます', jisho: 'しらべる', te: 'しらべて', nai: 'しらべない', meaning: 'ရှာဖွေသည်။ စစ်ဆေးသည်။' },
        { masu: 'しゅうりします', jisho: 'しゅうりする', te: 'しゅうりして', nai: 'しゅうりしない', meaning: 'ပြုပြင်သည်။' },
        { masu: 'おもいます', jisho: 'おもう', te: 'おもって', nai: 'おもわない', meaning: 'ထင်မြင်သည်။ တွေးတောသည်။' },
        { masu: 'いいます', jisho: 'いう', te: 'いって', nai: 'いわない', meaning: 'ပြောသည်။' },
        { masu: 'かちます', jisho: 'かつ', te: 'かって', nai: 'かたない', meaning: 'နိုင်သည်' },
        { masu: 'まけます', jisho: 'まける', te: 'まけて', nai: 'まけない', meaning: 'ရှုံးနိမ့်သည်။' },
        { masu: 'やくにたちます', jisho: 'やくにたつ', te: 'やくにたって', nai: 'やくにたたない', meaning: 'အသုံးဝင်သည်။အထောက်အကူပြုသည်။' },
        { masu: 'うごきます', jisho: 'うごく', te: 'うごいて', nai: 'うごかない', meaning: 'လှုပ်ရှားသည်။ လည်ပတ်သည်။' },
        { masu: 'やめます', jisho: 'やめる', te: 'やめて', nai: 'やめない', meaning: 'နှုတ်ထွက်သည်။' },
        { masu: 'きをつけます', jisho: 'きをつける', te: 'きをつけて', nai: 'きをつけない', meaning: 'သတိထားသည်။' },
        { masu: 'りゅうがくします', jisho: 'りゅうがくする', te: 'りゅうがくして', nai: 'りゅうがくしない', meaning: 'နိုင်ငံခြားပညာတော်သင်သွားသည်။' },
        { masu: 'うまれます', jisho: 'うまれる', te: 'うまれて', nai: 'うまれない', meaning: 'မွေးဖွားသည်။' },
        { masu: 'まわします', jisho: 'まわす', te: 'まわして', nai: 'まわさない', meaning: 'လှည့်သည်။' },
        { masu: 'さわります', jisho: 'さわる', te: 'さわって', nai: 'さわらない', meaning: 'ကိုင်သည်။ ထိသည်။' },
        { masu: 'あるきます', jisho: 'あるく', te: 'あるいて', nai: 'あるかない', meaning: 'လမ်းလျှောက်သည်။' },
        { masu: 'わたります', jisho: 'わたる', te: 'わたって', nai: 'わたらない', meaning: 'ဖြတ်ကူးသည်။ (တံတားကို)' },
        { masu: 'まがります', jisho: 'まがる', te: 'まがって', nai: 'まがらない', meaning: 'ချိုးကွေ့သည်။ (ညာသို့)' },
        { masu: 'くれます', jisho: 'くれる', te: 'くれて', nai: 'くれない', meaning: 'ပေးသည်။ (မိမိအား)' },
        { masu: 'なおします', jisho: 'なおす', te: 'なおして', nai: 'なおさない', meaning: 'အမှားပြင်သည်။ပြင်ပေးသည်။' },
        { masu: 'つれていきます', jisho: 'つれていく', te: 'つれていって', nai: 'つれていかない', meaning: 'ခေါ်သွားသည်။' },
        { masu: 'つれてきます', jisho: 'つれてくる', te: 'つれてきて', nai: 'つれてこない', meaning: 'ခေါ်လာသည်။' },
        { masu: 'しょうかいします', jisho: 'しょうかいする', te: 'しょうかいして', nai: 'しょうかいしない', meaning: 'မိတ်ဆက်သည်။' },
        { masu: 'あんないします', jisho: 'あんないする', te: 'あんないして', nai: 'あんないしない', meaning: 'လိုက်လံရှင်းပြသည်။' },
        { masu: 'せつめいします', jisho: 'せつめいする', te: 'せつめいして', nai: 'せつめいしない', meaning: 'ရှင်းပြသည်။' },
        { masu: 'じゅんびをします', jisho: 'じゅんびをする', te: 'じゅんびをして', nai: 'じゅんびをしない', meaning: 'ကြိုတင်ပြင်ဆင်သည်။' },
        { masu: 'かんがえます', jisho: 'かんがえる', te: 'かんがえて', nai: 'かんがえない', meaning: 'စဉ်းစားသည်။ တွေးခေါ်သည်။' },
        { masu: 'つきます', jisho: 'つく', te: 'ついて', nai: 'つかない', meaning: 'ဆိုက်ရောက်သည်။' },
        { masu: 'たります', jisho: 'たりる', te: 'たりて', nai: 'たりない', meaning: 'လုံလောက်သည်။' },
        { masu: 'がんばります', jisho: 'がんばる', te: 'がんばって', nai: 'がんばらない', meaning: 'ကြိုးစားသည်။' }
    ].map(verb => {
        verb.type = 'Verb';
        verb.masen = verb.masu.replace('ます', 'ません');
        verb.mashita = verb.masu.replace('ます', 'ました');
        verb.masen_deshita = verb.masu.replace('ます', 'ませんでした');
        if (verb.te.endsWith('て')) verb.ta = verb.te.slice(0, -1) + 'た';
        else if (verb.te.endsWith('で')) verb.ta = verb.te.slice(0, -1) + 'だ';
        else verb.ta = verb.te;
        return verb;
    });

    const adjectives = [
        { type: 'na', dictionary: 'ハンサムな', meaning: 'ခန့်ညားသော' },
        { type: 'na', dictionary: 'きれいな', meaning: 'လှပသော' },
        { type: 'na', dictionary: 'しずかな', meaning: 'တိတ်ဆိတ်သော' },
        { type: 'na', dictionary: 'にぎやかな', meaning: 'စည်ကားသော' },
        { type: 'na', dictionary: 'ゆうめいな', meaning: 'ကျော်ကြားသော' },
        { type: 'na', dictionary: 'しんせつな', meaning: 'ကြင်နာသော' },
        { type: 'na', dictionary: 'げんきな', meaning: 'ကျန်းမာသော' },
        { type: 'na', dictionary: 'ひまな', meaning: 'အားလပ်သော' },
        { type: 'na', dictionary: 'べんりな', meaning: 'အဆင်ပြေသော' },
        { type: 'na', dictionary: 'すてきな', meaning: 'ကောင်းမွန်သော' },
        { type: 'i', dictionary: 'おおきい', meaning: 'ကြီးသော' },
        { type: 'i', dictionary: 'ちいさい', meaning: 'သေးငယ်သော' },
        { type: 'i', dictionary: 'あたらしい', meaning: 'အသစ်ဖြစ်သော' },
        { type: 'i', dictionary: 'ふるい', meaning: 'ဟောင်းသော' },
        { type: 'i', dictionary: 'いい', meaning: 'ကောင်းသော' },
        { type: 'i', dictionary: 'わるい', meaning: 'ဆိုးသော' },
        { type: 'i', dictionary: 'あつい', meaning: 'ပူသော' },
        { type: 'i', dictionary: 'さむい', meaning: 'ချမ်းသော (ရာသီဥတု)' },
        { type: 'i', dictionary: 'つめたい', meaning: 'အေးသော (အစားအစာ)' },
        { type: 'i', dictionary: 'むずかしい', meaning: 'ခက်ခဲသော' },
        { type: 'i', dictionary: 'やさしい', meaning: 'လွယ်ကူသော' },
        { type: 'i', dictionary: 'たかい', meaning: 'မြင့်သော၊ ဈေးကြီးသော' },
        { type: 'i', dictionary: 'やすい', meaning: 'ဈေးပေါသော' },
        { type: 'i', dictionary: 'ひくい', meaning: 'နိမ့်သော' },
        { type: 'i', dictionary: 'おもしろい', meaning: 'စိတ်ဝင်စားဖွယ်ကောင်းသော' },
        { type: 'i', dictionary: 'おいしい', meaning: 'အရသာရှိသော' },
        { type: 'i', dictionary: 'いそがしい', meaning: 'အလုပ်များသော' },
        { type: 'i', dictionary: 'たのしい', meaning: 'ပျော်ရွှင်သော' },
        { type: 'i', dictionary: 'しろい', meaning: 'အဖြူရောင်' },
        { type: 'i', dictionary: 'くろい', meaning: 'အနက်ရောင်' },
        { type: 'i', dictionary: 'あかい', meaning: 'အနီရောင်' },
        { type: 'i', dictionary: 'あおい', meaning: 'အပြာရောင်' },
        { type: 'na', dictionary: 'すきな', meaning: 'ကြိုက်သော' },
        { type: 'na', dictionary: 'きらいな', meaning: 'မုန်းသော' },
        { type: 'na', dictionary: 'じょうずな', meaning: 'တော်သော' },
        { type: 'na', dictionary: 'へたな', meaning: 'ညံ့သော' },
        { type: 'na', dictionary: 'いろいろな', meaning: 'အမျိုးမျိုးသော' },
        { type: 'na', dictionary: 'かんたんな', meaning: 'လွယ်ကူသော' },
        { type: 'i', dictionary: 'ちかい', meaning: 'နီးသော' },
        { type: 'i', dictionary: 'とおい', meaning: 'ဝေးသော' },
        { type: 'i', dictionary: 'はやい', meaning: 'မြန်သော' },
        { type: 'i', dictionary: 'おそい', meaning: 'နှေးသော' },
        { type: 'i', dictionary: 'おおい', meaning: 'များသော (လူအရေအတွက်)' },
        { type: 'i', dictionary: 'すくない', meaning: 'နည်းသော (လူအရေအတွက်)' },
        { type: 'i', dictionary: 'あたたかい', meaning: 'နွေးထွေးသော' },
        { type: 'i', dictionary: 'すずしい', meaning: 'အေးမြသော' },
        { type: 'i', dictionary: 'あまい', meaning: 'ချိုသော' },
        { type: 'i', dictionary: 'からい', meaning: 'စပ်သော' },
        { type: 'i', dictionary: 'おもい', meaning: 'လေးသော' },
        { type: 'i', dictionary: 'かるい', meaning: 'ပေါ့သော' },
        { type: 'na', dictionary: 'たいへんな', meaning: 'ခက်ခဲပင်ပန်းသော' },
        { type: 'i', dictionary: 'ほしい', meaning: 'လိုချင်သော' },
        { type: 'i', dictionary: 'ひろい', meaning: 'ကျယ်သော' },
        { type: 'i', dictionary: 'せまい', meaning: 'ကျဉ်းသော' },
        { type: 'i', dictionary: 'わかい', meaning: 'ငယ်ရွယ်သော' },
        { type: 'i', dictionary: 'ながい', meaning: 'ရှည်သော' },
        { type: 'i', dictionary: 'みじかい', meaning: 'တိုသော' },
        { type: 'i', dictionary: 'あかるい', meaning: 'လင်းသော' },
        { type: 'i', dictionary: 'くらい', meaning: 'မှောင်သော' },
        { type: 'na', dictionary: 'たいせつな', meaning: 'အရေးကြီးသော' },
        { type: 'na', dictionary: 'だいじょうぶな', meaning: 'အဆင်ပြေသော' },
        { type: 'i', dictionary: 'あぶない', meaning: 'အန္တရာယ်ရှိသော' },
        { type: 'i', dictionary: 'ねむい', meaning: 'အိပ်ငိုက်သော' },
        { type: 'i', dictionary: 'つよい', meaning: 'အားကောင်းသော၊ ကြံ့ခိုင်သော' },
        { type: 'i', dictionary: 'よわい', meaning: 'အားနည်းသော' },
    ].map(adj => {
        adj.type = `${adj.type}-Adjective`;
        const base = adj.dictionary.slice(0, -1);
        if (adj.type.startsWith('i')) {
            adj.plain_negative = base + 'くない';
            adj.plain_past = base + 'かった';
            adj.plain_past_negative = base + 'くなかった';
            adj.polite_present = adj.dictionary + 'です';
            adj.polite_negative = base + 'くないです';
            adj.polite_past = base + 'かったです';
            adj.polite_past_negative = base + 'くなかったです';
            if (adj.dictionary === 'いい') {
                adj.plain_negative = 'よくない';
                adj.plain_past = 'よかった';
                adj.plain_past_negative = 'よくなかった';
                adj.polite_negative = 'よくないです';
                adj.polite_past = 'よかったです';
                adj.polite_past_negative = 'よくなかったです';
            }
        } else {
            adj.plain_negative = base + 'じゃない';
            adj.plain_past = base + 'だった';
            adj.plain_past_negative = base + 'じゃなかった';
            adj.polite_present = base + 'です';
            adj.polite_negative = base + 'じゃありません';
            adj.polite_past = base + 'でした';
            adj.polite_past_negative = base + 'じゃありませんでした';
        }
        return adj;
    });

    let currentQuestionIndex = 0;
    let score = 0;
    let currentItem;
    let currentQuestionType;
    let shuffledData = [];
    let currentUser = {};
    let activeQuizMode = 'flashcard';
    let activeSubMode = 'verb-plain';

    // UI Elements
    const userFormView = document.getElementById('user-form-view');
    const mainAppView = document.getElementById('main-app-view');
    const userNameInput = document.getElementById('user-name-input');
    const themeSelect = document.getElementById('theme-select');
    const startBtn = document.getElementById('start-btn');
    const welcomeName = document.getElementById('welcome-name');

    const tabGameBtn = document.getElementById('tab-game-btn');
    const tabGuideBtn = document.getElementById('tab-guide-btn');
    const gamePanel = document.getElementById('game-panel');
    const guidePanel = document.getElementById('guide-panel');
    
    const gameChoicePanel = document.getElementById('game-choice-panel');
    const choiceBtns = document.querySelectorAll('.choice-btn');
    const quizPanelsContainer = document.getElementById('quiz-panels-container');
    const quizSubTabs = document.querySelectorAll('.quiz-sub-tab');

    const flashcardPanel = document.getElementById('flashcard-panel');
    const typingQuizPanel = document.getElementById('typing-quiz-panel');

    const flashcard = document.getElementById('flashcard');
    const flashcardQStart = document.getElementById('flashcard-q-start');
    const flashcardQForm = document.getElementById('flashcard-q-form');
    const flashcardQMeaning = document.getElementById('flashcard-q-meaning');
    const flashcardQAnswer = document.getElementById('flashcard-q-answer');
    const flipBtn = document.getElementById('flip-btn');
    const feedbackButtons = document.getElementById('feedback-buttons');
    const correctBtn = document.getElementById('correct-btn');
    const incorrectBtn = document.getElementById('incorrect-btn');
    
    const typingQStart = document.getElementById('typing-q-start');
    const typingQForm = document.getElementById('typing-q-form');
    const typingQMeaning = document.getElementById('typing-q-meaning');
    const typingInput = document.getElementById('typing-input');
    const submitAnswerBtn = document.getElementById('submit-answer-btn');
    const nextQuestionBtn = document.getElementById('next-question-btn');
    const typingFeedback = document.getElementById('typing-feedback');

    const scoreDisplays = {
        flashcard: document.getElementById('flashcard-score'),
        typing: document.getElementById('typing-score')
    };
    const questionCountDisplays = {
        flashcard: document.getElementById('flashcard-question-count'),
        typing: document.getElementById('typing-question-count')
    };
    
    const endGameScreen = document.getElementById('end-game-screen');
    const finalScore = document.getElementById('final-score');
    const scorePercentage = document.getElementById('score-percentage');
    const congratsMessage = document.getElementById('congrats-message');
    const restartBtn = document.getElementById('restart-btn');

    // Question Type Definitions
    const verbPlainTypes = [ { start: 'jisho', ask: 'nai', ask_name: 'ない形' }, { start: 'jisho', ask: 'te', ask_name: 'て形' }, { start: 'jisho', ask: 'ta', ask_name: 'た形' }, ];
    const verbPoliteTypes = [ { start: 'jisho', ask: 'masu', ask_name: 'ます形' }, { start: 'masu', ask: 'masen', ask_name: 'ません形' }, { start: 'masu', ask: 'mashita', ask_name: 'ました形' }, { start: 'masu', ask: 'masen_deshita', ask_name: 'ませんでした形' }, ];
    const adjPlainTypes = [ { start: 'dictionary', ask: 'plain_negative', ask_name: 'Plain Negative' }, { start: 'dictionary', ask: 'plain_past', ask_name: 'Plain Past' }, { start: 'dictionary', ask: 'plain_past_negative', ask_name: 'Plain Past Negative' }, ];
    const adjPoliteTypes = [ { start: 'dictionary', ask: 'polite_present', ask_name: 'Polite Present' }, { start: 'dictionary', ask: 'polite_negative', ask_name: 'Polite Negative' }, { start: 'dictionary', ask: 'polite_past', ask_name: 'Polite Past' }, { start: 'dictionary', ask: 'polite_past_negative', ask_name: 'Polite Past Negative' }, ];

    function shuffleArray(array) { for (let i = array.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [array[i], array[j]] = [array[j], array[i]]; } return array; }
    function applyTheme(theme) { document.body.className = `theme-${theme}`; localStorage.setItem('theme', theme); }

    function initializeApp() {
        currentUser.name = userNameInput.value.trim() || 'အမည်မသိ';
        applyTheme(themeSelect.value);
        welcomeName.textContent = currentUser.name;
        userFormView.classList.add('hidden');
        mainAppView.classList.remove('hidden');
    }

    function switchMainTab(tab) {
        if (tab === 'game') {
            tabGameBtn.classList.add('active');
            tabGuideBtn.classList.remove('active');
            gamePanel.classList.remove('hidden');
            guidePanel.classList.add('hidden');
        } else {
            tabGameBtn.classList.remove('active');
            tabGuideBtn.classList.add('active');
            gamePanel.classList.add('hidden');
            guidePanel.classList.remove('hidden');
        }
    }

    function chooseGameMode(mode) {
        activeQuizMode = mode;
        gameChoicePanel.classList.add('hidden');
        quizPanelsContainer.classList.remove('hidden');
        if (mode === 'flashcard') {
            flashcardPanel.classList.remove('hidden');
            typingQuizPanel.classList.add('hidden');
        } else {
            flashcardPanel.classList.add('hidden');
            typingQuizPanel.classList.remove('hidden');
        }
        setSubMode('verb-plain');
    }
    
    function setSubMode(subMode) {
        activeSubMode = subMode;
        quizSubTabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.subMode === subMode);
        });
        
        let data = [];
        let questionTypes = [];

        switch(subMode) {
            case 'verb-plain': data = verbs; questionTypes = verbPlainTypes; break;
            case 'verb-polite': data = verbs; questionTypes = verbPoliteTypes; break;
            case 'adj-plain': data = adjectives; questionTypes = adjPlainTypes; break;
            case 'adj-polite': data = adjectives; questionTypes = adjPoliteTypes; break;
            case 'mixed-all': data = [...verbs, ...adjectives]; questionTypes = [...verbPlainTypes, ...verbPoliteTypes, ...adjPlainTypes, ...adjPoliteTypes]; break;
        }
        
        shuffledData = shuffleArray(data);
        activeQuestionTypes = questionTypes;
        startQuiz();
    }

    function startQuiz() {
        score = 0;
        currentQuestionIndex = 0;
        updateScore(0);
        endGameScreen.classList.add('hidden');
        quizPanelsContainer.classList.remove('hidden');
        loadQuestion();
    }

    function loadQuestion() {
        if (currentQuestionIndex >= shuffledData.length) { showEndGame(); return; }
        
        currentItem = shuffledData[currentQuestionIndex];
        
        let possibleQuestions = activeQuestionTypes.filter(q => currentItem[q.ask] !== undefined);
        if (possibleQuestions.length === 0) {
            if (currentItem.type === 'Verb') possibleQuestions = verbPlainTypes;
            else possibleQuestions = adjPlainTypes;
        }
        currentQuestionType = possibleQuestions[Math.floor(Math.random() * possibleQuestions.length)];

        if (activeQuizMode === 'flashcard') {
            flashcard.classList.remove('is-flipped');
            setTimeout(() => {
                flashcardQStart.textContent = currentItem[currentQuestionType.start];
                flashcardQForm.textContent = currentQuestionType.ask_name;
                flashcardQMeaning.textContent = `(${currentItem.meaning})`;
                flashcardQAnswer.textContent = currentItem[currentQuestionType.ask];
                flipBtn.classList.remove('hidden');
                feedbackButtons.classList.add('hidden');
            }, 300);
        } else { // Typing Quiz
            typingQStart.textContent = currentItem[currentQuestionType.start];
            typingQForm.textContent = currentQuestionType.ask_name;
            typingQMeaning.textContent = `(${currentItem.meaning})`;
            typingInput.value = '';
            typingInput.disabled = false;
            typingFeedback.textContent = '';
            typingFeedback.className = 'text-center h-8 my-2 font-bold';
            submitAnswerBtn.classList.remove('hidden');
            nextQuestionBtn.classList.add('hidden');
            typingInput.focus();
        }
        updateQuestionCount();
    }
    
    function flipCard() {
        flashcard.classList.add('is-flipped');
        flipBtn.classList.add('hidden');
        feedbackButtons.classList.remove('hidden');
    }

    function handleFlashcardFeedback(isCorrect) {
        if (isCorrect) { score++; updateScore(); }
        currentQuestionIndex++;
        loadQuestion();
    }
    
    function checkTypingAnswer() {
        const userAnswer = typingInput.value.trim();
        const correctAnswer = currentItem[currentQuestionType.ask];
        typingInput.disabled = true;
        
        if (userAnswer === correctAnswer) {
            score++;
            updateScore();
            typingFeedback.textContent = 'မှန်ပါတယ်!';
            typingFeedback.classList.add('is-correct');
        } else {
            typingFeedback.textContent = `မှားပါတယ်! အဖြေမှန်က: ${correctAnswer}`;
            typingFeedback.classList.add('is-incorrect');
        }
        
        submitAnswerBtn.classList.add('hidden');
        nextQuestionBtn.classList.remove('hidden');
    }
    
    function nextTypingQuestion() {
        currentQuestionIndex++;
        loadQuestion();
    }

    function updateScore() {
        scoreDisplays.flashcard.innerHTML = `<i class="fas fa-star text-yellow-400"></i> ${score}`;
        scoreDisplays.typing.innerHTML = `<i class="fas fa-star text-yellow-400"></i> ${score}`;
    }

    function updateQuestionCount() {
        const text = `${currentQuestionIndex + 1} / ${shuffledData.length}`;
        questionCountDisplays.flashcard.textContent = text;
        questionCountDisplays.typing.textContent = text;
    }

    function showEndGame() {
        quizPanelsContainer.classList.add('hidden');
        const percentage = shuffledData.length > 0 ? Math.round((score / shuffledData.length) * 100) : 0;
        finalScore.textContent = `${score} / ${shuffledData.length}`;
        scorePercentage.textContent = `(${percentage}%)`;
        congratsMessage.textContent = `ဂုဏ်ယူပါတယ်, ${currentUser.name}!`;
        if (percentage >= 80) {
            document.getElementById('trophy-icon').textContent = '🏆';
            if (typeof confetti === 'function') confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
        } else if (percentage >= 50) {
            document.getElementById('trophy-icon').textContent = '👍';
        } else {
            document.getElementById('trophy-icon').textContent = '💪';
        }
        endGameScreen.classList.remove('hidden');
    }

    function restartGame() {
        endGameScreen.classList.add('hidden');
        gameChoicePanel.classList.remove('hidden');
    }

    // --- Event Listeners ---
    const savedTheme = localStorage.getItem('theme') || 'light';
    themeSelect.value = savedTheme;
    applyTheme(savedTheme);

    themeSelect.addEventListener('change', (e) => applyTheme(e.target.value));
    startBtn.addEventListener('click', initializeApp);
    tabGameBtn.addEventListener('click', () => switchMainTab('game'));
    tabGuideBtn.addEventListener('click', () => switchMainTab('guide'));
    choiceBtns.forEach(btn => btn.addEventListener('click', () => chooseGameMode(btn.dataset.mode)));
    quizSubTabs.forEach(tab => tab.addEventListener('click', () => setSubMode(tab.dataset.subMode)));
    
    flipBtn.addEventListener('click', flipCard);
    correctBtn.addEventListener('click', () => handleFlashcardFeedback(true));
    incorrectBtn.addEventListener('click', () => handleFlashcardFeedback(false));
    
    submitAnswerBtn.addEventListener('click', checkTypingAnswer);
    typingInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') submitAnswerBtn.click(); });
    nextQuestionBtn.addEventListener('click', nextTypingQuestion);
    
    restartBtn.addEventListener('click', restartGame);
});
