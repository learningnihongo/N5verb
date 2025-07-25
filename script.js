document.addEventListener('DOMContentLoaded', () => {
    // prettier-ignore
    const originalVerbs = [
        { masu: 'おきます', jisho: 'おきる', te: 'おきて', nai: 'おきない', meaning: 'အိပ်ရာထသည်' },
        { masu: 'ねます', jisho: 'ねる', te: 'ねて', nai: 'ねない', meaning: 'အိပ်သည်' },
        { masu: 'はたらきます', jisho: 'はたらく', te: 'はたらいて', nai: 'はたらかない', meaning: 'အလုပ်လုပ်သည်' },
        { masu: 'やすみます', jisho: 'やすむ', te: 'やすんで', nai: 'やすまない', meaning: 'အနားယူသည်' },
        { masu: 'べんきょうします', jisho: 'べんきょうする', te: 'べんきょうして', nai: 'べんきょうしない', meaning: 'လေ့လာသည်။ ကျက်မှတ်သည်' },
        { masu: 'おわります', jisho: 'おわる', te: 'おわって', nai: 'おわらない', meaning: 'ပြီးဆုံးသည်' },
        { masu: 'いきます', jisho: 'いく', te: 'いって', nai: 'いかない', meaning: 'သွားသည်' },
        { masu: 'きます', jisho: 'くる', te: 'きて', nai: 'こない', meaning: 'လာသည်' },
        { masu: 'たべます', jisho: 'たべる', te: 'たべて', nai: 'たべない', meaning: 'စားသည်' },
        { masu: 'のみます', jisho: 'のむ', te: 'のんで', nai: 'のまない', meaning: 'သောက်သည်။ (ရေ၊ အရက်)' },
        { masu: 'すいます', jisho: 'すう', te: 'すって', nai: 'すわない', meaning: 'ရှူသည်။ (ဆေးလိပ်)' },
        { masu: 'みます', jisho: 'みる', te: 'みて', nai: 'みない', meaning: 'ကြည့်သည်' },
        { masu: 'ききます', jisho: 'きく', te: 'きいて', nai: 'きかない', meaning: 'နားထောင်သည်။ မေးမြန်းသည်' },
        { masu: 'よみます', jisho: 'よむ', te: 'よんで', nai: 'よまない', meaning: 'ဖတ်သည်' },
        { masu: 'かきます', jisho: 'かく', te: 'かいて', nai: 'かかない', meaning: 'ရေးသည်။ ရေးဆွဲသည်' },
        { masu: 'かいます', jisho: 'かう', te: 'かって', nai: 'かわない', meaning: 'ဝယ်သည်' },
        { masu: 'とります', jisho: 'とる', te: 'とって', nai: 'とらない', meaning: 'ရိုက်သည်။ (ဓာတ်ပုံ)' },
        { masu: 'します', jisho: 'する', te: 'して', nai: 'しない', meaning: 'လုပ်ဆောင်သည်။လုပ်သည်' },
        { masu: 'あいます', jisho: 'あう', te: 'あって', nai: 'あわない', meaning: 'တွေ့ဆုံသည်' },
        { masu: 'きります', jisho: 'きる', te: 'きって', nai: 'きらない', meaning: 'ဖြတ်သည်၊ လှီးသည်' },
        { masu: 'おくります', jisho: 'おくる', te: 'おくって', nai: 'おくらない', meaning: 'ပို့သည်။ (ပစ္စည်း)' },
        { masu: 'あげます', jisho: 'あげる', te: 'あげて', nai: 'あげない', meaning: 'ပေးသည်။ (တခြားသူကို)' },
        { masu: 'もらいます', jisho: 'もらう', te: 'もらって', nai: 'もらわない', meaning: 'လက်ခံရယူသည်' },
        { masu: 'かします', jisho: 'かす', te: 'かして', nai: 'かさない', meaning: 'ချေးပေးသည်။ (တခြားသူကို)' },
        { masu: 'かります', jisho: 'かりる', te: 'かりて', nai: 'かりない', meaning: 'ချေးယူသည်။ (မိမိက)' },
        { masu: 'おしえます', jisho: 'おしえる', te: 'おしえて', nai: 'おしえない', meaning: 'သင်ပေးသည်။ (တခြားသူကို)' },
        { masu: 'ならいます', jisho: 'ならう', te: 'ならって', nai: 'ならわない', meaning: 'သင်ယူသည်။ (မိမိက)' },
        { masu: 'かけます', jisho: 'かける', te: 'かけて', nai: 'かけない', meaning: 'ဆက်သည်။ (တယ်လီဖုန်း)' },
        { masu: 'わかります', jisho: 'わかる', te: 'わかって', nai: 'わからない', meaning: 'နားလည်သည်။ သဘောပေါက်သည်' },
        { masu: 'あります', jisho: 'ある', te: 'あって', nai: 'ない', meaning: 'ရှိသည်။ (သက်မဲ့)' },
        { masu: 'います', jisho: 'いる', te: 'いて', nai: 'いない', meaning: 'ရှိသည်။ (သက်ရှိ)' },
        { masu: 'かかります', jisho: 'かかる', te: 'かかって', nai: 'かからない', meaning: 'ကြာသည်။ ကုန်ကျသည်။ (အချိန်၊ ငွေ)' },
        { masu: 'やすみます', jisho: 'やすむ', te: 'やすんで', nai: 'やすまない', meaning: 'အနားယူသည်' },
        { masu: 'あそびます', jisho: 'あそぶ', te: 'あそんで', nai: 'あそばない', meaning: 'လျှောက်လည်သည်။ ကစားသည်' },
        { masu: 'およぎます', jisho: 'およぐ', te: 'およいで', nai: 'およがない', meaning: 'ရေကူးသည်' },
        { masu: 'むかえます', jisho: 'むかえる', te: 'むかえて', nai: 'むかえない', meaning: 'ကြိုဆိုသည်' },
        { masu: 'つかれます', jisho: 'つかれる', te: 'つかれて', nai: 'つかれない', meaning: 'ပင်ပန်းသည်' },
        { masu: 'けっこんします', jisho: 'けっこんする', te: 'けっこんして', nai: 'けっこんしない', meaning: 'လက်ထပ်သည်။ မင်္ဂလာဆောင်သည်' },
        { masu: 'かいものします', jisho: 'かいものする', te: 'かいものして', nai: 'かいものしない', meaning: 'ဈေးဝယ်သည်' },
        { masu: 'しょくじします', jisho: 'しょくじする', te: 'しょくじして', nai: 'しょくじしない', meaning: 'စားသောက်သည်။ ထမင်းစားသည်' },
        { masu: 'さんぽします', jisho: 'さんぽする', te: 'さんぽして', nai: 'さんぽしない', meaning: 'လမ်းလျှောက်သည်' },
        { masu: 'つけます', jisho: 'つける', te: 'つけて', nai: 'つけない', meaning: 'ဖွင့်သည်။ (မီး၊ aircon)' },
        { masu: 'けします', jisho: 'けす', te: 'けして', nai: 'けさない', meaning: 'ပိတ်သည်။ (မီး၊ aircon)' },
        { masu: 'あけます', jisho: 'あける', te: 'あけて', nai: 'あけない', meaning: 'ဖွင့်သည်။ (တံခါး၊ ပြတင်းပေါက်)' },
        { masu: 'しめます', jisho: 'しめる', te: 'しめて', nai: 'しめない', meaning: 'ပိတ်သည်။ (တံခါး၊ ပြတင်းပေါက်)' },
        { masu: 'いそぎます', jisho: 'いそぐ', te: 'いそいで', nai: 'いそがない', meaning: 'လောသည်။ အလျင်စလိုလုပ်သည်' },
        { masu: 'まちます', jisho: 'まつ', te: 'まって', nai: 'またない', meaning: 'စောင့်သည်' },
        { masu: 'もちます', jisho: 'もつ', te: 'もって', nai: 'もたない', meaning: 'ပိုင်ဆိုင်သည်။ သယ်ယူသည်။ ကိုင်ထားသည်' },
        { masu: 'とります', jisho: 'とる', te: 'とって', nai: 'とらない', meaning: 'ယူသည်' },
        { masu: 'てつだいます', jisho: 'てつだう', te: 'てつだって', nai: 'てつだわない', meaning: 'ကူညီသည်' },
        { masu: 'よびます', jisho: 'よぶ', te: 'よんで', nai: 'よばない', meaning: 'ခေါ်သည်။ (Taxi)' },
        { masu: 'はなします', jisho: 'はなす', te: 'はなして', nai: 'はなさない', meaning: 'စကားပြောသည်' },
        { masu: 'つかいます', jisho: 'つかう', te: 'つかって', nai: 'つかわない', meaning: 'သုံးသည်။အသုံးပြုသည်' },
        { masu: 'とめます', jisho: 'とめる', te: 'とめて', nai: 'とめない', meaning: 'ရပ်သည်။ တားသည်။ (ကား)' },
        { masu: 'みせます', jisho: 'みせる', te: 'みせて', nai: 'みせない', meaning: 'ပြသည်' },
        { masu: 'おしえます', jisho: 'おしえる', te: 'おしえて', nai: 'おしえない', meaning: 'ပြောပြသည်။ (လိပ်စာ)' },
        { masu: 'すわります', jisho: 'すわる', te: 'すわって', nai: 'すわらない', meaning: 'ထိုင်သည်' },
        { masu: 'たちます', jisho: 'たつ', te: 'たって', nai: 'たたない', meaning: 'မတ်တပ်ရပ်သည်' },
        { masu: 'はいります', jisho: 'はいる', te: 'はいって', nai: 'はいらない', meaning: 'ဝင်သည်။ (လက်ဖက်ရည်ဆိုင်သို့)' },
        { masu: 'でます', jisho: 'でる', te: 'でて', nai: 'でない', meaning: 'ထွက်သည်။ (လက်ဖက်ရည်ဆိုင်မှ)' },
        { masu: 'ふります', jisho: 'ふる', te: 'ふって', nai: 'ふらない', meaning: 'ရွာသည်။ (မိုး)' },
        { masu: 'コピーします', jisho: 'コピーする', te: 'コピーして', nai: 'コピーしない', meaning: 'ကော်ပီကူးသည်' },
        { masu: 'おきます', jisho: 'おく', te: 'おいて', nai: 'おかない', meaning: 'ထားသည်' },
        { masu: 'つくります', jisho: 'つくる', te: 'つくって', nai: 'つくらない', meaning: 'ပြုလုပ်သည်။တည်ဆောက်သည်' },
        { masu: 'うります', jisho: 'うる', te: 'うって', nai: 'うらない', meaning: 'ရောင်းသည်' },
        { masu: 'しります', jisho: 'しる', te: 'しって', nai: 'しらない', meaning: 'သိသည်' },
        { masu: 'すみます', jisho: 'すむ', te: 'すんで', nai: 'すまない', meaning: 'နေထိုင်သည်' },
        { masu: 'けんきゅうします', jisho: 'けんきゅうする', te: 'けんきゅうして', nai: 'けんきゅうしない', meaning: 'သုတေသနပြုသည်' },
        { masu: 'のります', jisho: 'のる', te: 'のって', nai: 'のらない', meaning: 'စီးသည်။ (ရထား၊ ကား)' },
        { masu: 'おります', jisho: 'おりる', te: 'おりて', nai: 'おりない', meaning: 'ဆင်းသည်။ (ရထား၊ ကားမှ)' },
        { masu: 'のりかえます', jisho: 'のりかえる', te: 'のりかえて', nai: 'のりかえない', meaning: 'ပြောင်းစီးသည်' },
        { masu: 'あびます', jisho: 'あびる', te: 'あびて', nai: 'あびない', meaning: 'ရေချိုးသည်။' },
        { masu: 'いれます', jisho: 'いれる', te: 'いれて', nai: 'いれない', meaning: 'သွင်းသည်' },
        { masu: 'だします', jisho: 'だす', te: 'だして', nai: 'ださない', meaning: 'ထုတ်သည်။ထပ်သည်။တင်သည်' },
        { masu: 'おろします', jisho: 'おろす', te: 'おろして', nai: 'おろさない', meaning: 'ထုတ်သည်။ (ငွေ)' },
        { masu: 'はいります', jisho: 'はいる', te: 'はいって', nai: 'はいらない', meaning: 'ဝင်သည်။ (တက္ကသိုလ်သို့)' },
        { masu: 'でます', jisho: 'でる', te: 'でて', nai: 'でない', meaning: 'ထွက်သည်။ဘွဲ့ရသည်။ (တက္ကသိုလ်မှ)' },
        { masu: 'おします', jisho: 'おす', te: 'おして', nai: 'おさない', meaning: 'တွန်းသည်။ ဖိသည်။နှိပ်သည်' },
        { masu: 'のみます', jisho: 'のむ', te: 'のんで', nai: 'のまない', meaning: 'သောက်သည်' },
        { masu: 'はじめます', jisho: 'はじめる', te: 'はじめて', nai: 'はじめない', meaning: 'စတင်သည်' },
        { masu: 'けんがくします', jisho: 'けんがくする', te: 'けんがくして', nai: 'けんがくしない', meaning: 'ကြည့်ရှုလေ့လာသည်' },
        { masu: 'でんわします', jisho: 'でんわする', te: 'でんわして', nai: 'でんわしない', meaning: 'တယ်လီဖုန်းဆက်သည်' },
        { masu: 'おぼえます', jisho: 'おぼえる', te: 'おぼえて', nai: 'おぼえない', meaning: 'မှတ်မိသည်' },
        { masu: 'わすれます', jisho: 'わすれる', te: 'わすれて', nai: 'わすれない', meaning: 'မေ့သည်' },
        { masu: 'なくします', jisho: 'なくす', te: 'なくして', nai: 'なくさない', meaning: 'ပျောက်ဆုံးသည်' },
        { masu: 'はらいます', jisho: 'はらう', te: 'はらって', nai: 'はらわない', meaning: 'ပေးချေသည်။ ပေးဆောင်သည်' },
        { masu: 'かえします', jisho: 'かえす', te: 'かえして', nai: 'かえさない', meaning: 'ပြန်ပေးသည်' },
        { masu: 'でかけます', jisho: 'でかける', te: 'でかけて', nai: 'でかけない', meaning: 'အပြင်ထွက်သည်' },
        { masu: 'ぬぎます', jisho: 'ぬぐ', te: 'ぬいで', nai: 'ぬがない', meaning: 'ချွတ်သည်။ (အဝတ်အစား)' },
        { masu: 'もっていきます', jisho: 'もっていく', te: 'もっていって', nai: 'もっていかない', meaning: 'ယူသွားသည်။ (သက်မဲ့ပစ္စည်း)' },
        { masu: 'もってきます', jisho: 'もってくる', te: 'もってきて', nai: 'もってこない', meaning: 'ယူလာသည်။ (သက်မဲ့ပစ္စည်း)' },
        { masu: 'しんぱいします', jisho: 'しんぱいする', te: 'しんぱいして', nai: 'しんぱいしない', meaning: 'စိတ်ပူသည်' },
        { masu: 'ざんぎょうします', jisho: 'ざんぎょうする', te: 'ざんぎょうして', nai: 'ざんぎょうしない', meaning: 'အလုပ်အချိန်ပိုဆင်းသည်' },
        { masu: 'しゅっちょうします', jisho: 'しゅっちょうする', te: 'しゅっちょうして', nai: 'しゅっちょうしない', meaning: 'တာဝန်ဖြင့် ခရီးထွက်သည်' },
        { masu: 'のみます', jisho: 'のむ', te: 'のんで', nai: 'のまない', meaning: 'သောက်သည်။ (ဆေး)' },
        { masu: 'できます', jisho: 'できる', te: 'できて', nai: 'できない', meaning: 'လုပ်နိုင်သည်။လုပ်တက်သည်။ပေါ်ပေါက်လာသည်' },
        { masu: 'あらいます', jisho: 'あらう', te: 'あらって', nai: 'あらわない', meaning: 'ဆေးကြောသည်' },
        { masu: 'ひきます', jisho: 'ひく', te: 'ひいて', nai: 'ひかない', meaning: 'တီးခတ်သည်။ (ဂီတာ၊ စန္ဒရား)' },
        { masu: 'うたいます', jisho: 'うたう', te: 'うたって', nai: 'うたわない', meaning: 'သီချင်းဆိုသည်' },
        { masu: 'あつめます', jisho: 'あつめる', te: 'あつめて', nai: 'あつめない', meaning: 'စုဆောင်းသည်။' },
        { masu: 'すてます', jisho: 'すてる', te: 'すてて', nai: 'すてない', meaning: 'လွှင့်ပစ်သည်' },
        { masu: 'かえます', jisho: 'かえる', te: 'かえて', nai: 'かえない', meaning: 'လဲလှယ်သည်။ဖလှယ်သည်' },
        { masu: 'うんてんします', jisho: 'うんてんする', te: 'うんてんして', nai: 'うんてんしない', meaning: 'မောင်းနှင်သည်' },
        { masu: 'よやくします', jisho: 'よやくする', te: 'よやくして', nai: 'よやくしない', meaning: 'ကြိုတင်မှာသည်။ (Booking)' },
        { masu: 'のぼります', jisho: 'のぼる', te: 'のぼって', nai: 'のぼらない', meaning: 'တက်သည်။ (တောင်)' },
        { masu: 'とまります', jisho: 'とまる', te: 'とまって', nai: 'とまらない', meaning: 'တည်းခိုသည်' },
        { masu: 'そうじします', jisho: 'そうじする', te: 'そうじして', nai: 'そうじしない', meaning: 'သန့်ရှင်းရေးလုပ်သည်' },
        { masu: 'せんたくします', jisho: 'せんたくする', te: 'せんたくして', nai: 'せんたくしない', meaning: 'အဝတ်လျှော်သည်' },
        { masu: 'なります', jisho: 'なる', te: 'なって', nai: 'ならない', meaning: 'ဖြစ်သည်။ဖြစ်လာသည်' },
        { masu: 'いります', jisho: 'いる', te: 'いって', nai: 'いらない', meaning: 'လိုအပ်သည်' },
        { masu: 'しらべます', jisho: 'しらべる', te: 'しらべて', nai: 'しらべない', meaning: 'ရှာဖွေသည်။ စစ်ဆေးသည်' },
        { masu: 'しゅうりします', jisho: 'しゅうりする', te: 'しゅうりして', nai: 'しゅうりしない', meaning: 'ပြုပြင်သည်' },
        { masu: 'おもいます', jisho: 'おもう', te: 'おもって', nai: 'おもわない', meaning: 'ထင်မြင်သည်။ တွေးတောသည်' },
        { masu: 'いいます', jisho: 'いう', te: 'いって', nai: 'いわない', meaning: 'ပြောသည်' },
        { masu: 'かちます', jisho: 'かつ', te: 'かって', nai: 'かたない', meaning: 'နိုင်သည်' },
        { masu: 'まけます', jisho: 'まける', te: 'まけて', nai: 'まけない', meaning: 'ရှုံးနိမ့်သည်' },
        { masu: 'あります', jisho: 'ある', te: 'あって', nai: 'ない', meaning: 'ရှိသည်' },
        { masu: 'やくにたちます', jisho: 'やくにたつ', te: 'やくにたって', nai: 'やくにたたない', meaning: 'အသုံးဝင်သည်။အထောက်အကူပြုသည်' },
        { masu: 'うごきます', jisho: 'うごく', te: 'うごいて', nai: 'うごかない', meaning: 'လှုပ်ရှားသည်။ လည်ပတ်သည်' },
        { masu: 'やめます', jisho: 'やめる', te: 'やめて', nai: 'やめない', meaning: 'နှုတ်ထွက်သည်' },
        { masu: 'きをつけます', jisho: 'きをつける', te: 'きをつけて', nai: 'きをつけない', meaning: 'သတိထားသည်' },
        { masu: 'りゅうがくします', jisho: 'りゅうがくする', te: 'りゅうがくして', nai: 'りゅうがくしない', meaning: 'နိုင်ငံခြားပညာတော်သင်သွားသည်' },
        { masu: 'きます', jisho: 'きる', te: 'きて', nai: 'きない', meaning: 'ဝတ်ဆင်သည်။ (ခါးအထက်ပိုင်းဝတ်ဆင်ရာတွင်သုံးသည်)' },
        { masu: 'はきます', jisho: 'はく', te: 'はいて', nai: 'はかない', meaning: 'ဝတ်ဆင်သည်။စွပ်သည်။ (ခါးအောက်ပိုင်း)' },
        { masu: 'かぶります', jisho: 'かぶる', te: 'かぶって', nai: 'かぶらない', meaning: 'ဆောင်းသည်။ (ဦးထုပ်)' },
        { masu: 'かけます', jisho: 'かける', te: 'かけて', nai: 'かけない', meaning: 'တပ်သည်။ချိတ်သည်။ (မျက်မှန်)' },
        { masu: 'します', jisho: 'する', te: 'して', nai: 'しない', meaning: 'လုပ်ဆောင်သည်' },
        { masu: 'うまれます', jisho: 'うまれる', te: 'うまれて', nai: 'うまれない', meaning: 'မွေးဖွားသည်' },
        { masu: 'ききます', jisho: 'きく', te: 'きいて', nai: 'きかない', meaning: 'မေးသည်' },
        { masu: 'まわします', jisho: 'まわす', te: 'まわして', nai: 'まわさない', meaning: 'လှည့်သည်' },
        { masu: 'ひきます', jisho: 'ひく', te: 'ひいて', nai: 'ひかない', meaning: 'ဆွဲထုတ်ယူသည်' },
        { masu: 'かえます', jisho: 'かえる', te: 'かえて', nai: 'かえない', meaning: 'လဲလှယ်သည်။ ပြောင်းသည်' },
        { masu: 'さわります', jisho: 'さわる', te: 'さわって', nai: 'さわらない', meaning: 'ကိုင်သည်။ ထိသည်' },
        { masu: 'でます', jisho: 'でる', te: 'でて', nai: 'でない', meaning: 'ထွက်သည်။ (အကြွေ)' },
        { masu: 'あるきます', jisho: 'あるく', te: 'あるいて', nai: 'あるかない', meaning: 'လမ်းလျှောက်သည်' },
        { masu: 'わたります', jisho: 'わたる', te: 'わたって', nai: 'わたらない', meaning: 'ဖြတ်ကူးသည်။ (တံတားကို)' },
        { masu: 'まがります', jisho: 'まがる', te: 'まがって', nai: 'まがらない', meaning: 'ချိုးကွေ့သည်။ (ညာသို့)' },
        { masu: 'くれます', jisho: 'くれる', te: 'くれて', nai: 'くれない', meaning: 'ပေးသည်။ (မိမိအား)' },
        { masu: 'なおします', jisho: 'なおす', te: 'なおして', nai: 'なおさない', meaning: 'အမှားပြင်သည်။ပြင်ပေးသည်' },
        { masu: 'つれていきます', jisho: 'つれていく', te: 'つれていって', nai: 'つれていかない', meaning: 'ခေါ်သွားသည်။ လူ သို့မဟုတ် တိရစ္ဆာန်ကို အတူတကွ ခေါ်ဆောင်ပြီး နေရာတစ်ခုသို့ သွားခြင်း။' },
        { masu: 'つれてきます', jisho: 'つれてくる', te: 'つれてきて', nai: 'つれてこない', meaning: 'ခေါ်လာသည်။' },
        { masu: 'おくります', jisho: 'おくる', te: 'おくって', nai: 'おくらない', meaning: 'လိုက်လံပို့ဆောင်သည်' },
        { masu: 'しょうかいします', jisho: 'しょうかいする', te: 'しょうかいして', nai: 'しょうかいしない', meaning: 'မိတ်ဆက်သည်' },
        { masu: 'あんないします', jisho: 'あんないする', te: 'あんないして', nai: 'あんないしない', meaning: 'လိုက်လံရှင်းပြသည်' },
        { masu: 'せつめいします', jisho: 'せつめいする', te: 'せつめいして', nai: 'せつめいしない', meaning: 'ရှင်းပြသည်။' },
        { masu: 'じゅんびをします', jisho: 'じゅんびをする', te: 'じゅんびをして', nai: 'じゅんびをしない', meaning: 'ကြိုတင်ပြင်ဆင်သည်' },
        { masu: 'かんがえます', jisho: 'かんがえる', te: 'かんがえて', nai: 'かんがえない', meaning: 'စဉ်းစားသည်။ တွေးခေါ်သည်' },
        { masu: 'つきます', jisho: 'つく', te: 'ついて', nai: 'つかない', meaning: 'ဆိုက်ရောက်သည်' },
        { masu: 'とります', jisho: 'とる', te: 'とって', nai: 'とらない', meaning: 'ရသည်။ယူသည်။ (အသက်- ရသည်။)' },
        { masu: 'たります', jisho: 'たりる', te: 'たりて', nai: 'たりない', meaning: 'လုံလောက်သည်' }
    ];

    const verbs = originalVerbs.map(verb => {
        verb.masen = verb.masu.replace('ます', 'ません');
        verb.mashita = verb.masu.replace('ます', 'ました');
        verb.masen_deshita = verb.masu.replace('ます', 'ませんでした');
        if (verb.te.endsWith('て')) {
            verb.ta = verb.te.slice(0, -1) + 'た';
        } else if (verb.te.endsWith('で')) {
            verb.ta = verb.te.slice(0, -1) + 'だ';
        } else {
            verb.ta = verb.te;
        }
        return verb;
    });

    let currentQuestionIndex = 0;
    let score = 0;
    let currentVerb;
    let currentQuestionType;
    let shuffledVerbs = [];
    let currentUser = { name: '', level: '' };
    let currentGameMode = 'mixed';
    let activeQuestionTypes = [];

    // UI Elements
    const userFormPanel = document.getElementById('user-form-panel');
    const mainGameContainer = document.getElementById('main-game-container');
    const userNameInput = document.getElementById('user-name-input');
    const levelInput = document.getElementById('level-input');
    const themeSelect = document.getElementById('theme-select');
    const startGameBtn = document.getElementById('start-game-btn');
    const scoreEl = document.getElementById('score');
    const questionCountEl = document.getElementById('question-count');
    const verbStartEl = document.getElementById('verb-start');
    const formTypeEl = document.getElementById('form-type');
    const verbMeaningEl = document.getElementById('verb-meaning');
    const flashcardContainer = document.getElementById('flashcard-container');
    const flashcardFront = document.getElementById('flashcard-front');
    const flashcardBack = document.getElementById('flashcard-back');
    const correctAnswerEl = document.getElementById('correct-answer');
    const flipBtn = document.getElementById('flip-btn');
    const feedbackButtons = document.getElementById('feedback-buttons');
    const correctBtn = document.getElementById('correct-btn');
    const incorrectBtn = document.getElementById('incorrect-btn');
    const quizMainView = document.getElementById('quiz-main-view');
    const endGameScreen = document.getElementById('end-game-screen');
    const finalScoreEl = document.getElementById('final-score');
    const scorePercentageEl = document.getElementById('score-percentage');
    const restartBtn = document.getElementById('restart-btn');
    const congratsMessageEl = document.getElementById('congrats-message');
    const trophyIconEl = document.getElementById('trophy-icon');
    const tabGuide = document.getElementById('tab-guide');
    const quizTabs = document.querySelectorAll('.quiz-tab');
    const panelQuiz = document.getElementById('panel-quiz');
    const panelGuide = document.getElementById('panel-guide');

    const mixedQuestionTypes = [{ start: 'masu', ask: 'jisho', ask_name: '辞書形' }, { start: 'masu', ask: 'te', ask_name: 'て形' }, { start: 'masu', ask: 'nai', ask_name: 'ない形' }, { start: 'jisho', ask: 'masu', ask_name: 'ます形' }, { start: 'jisho', ask: 'te', ask_name: 'て形' }, { start: 'jisho', ask: 'nai', ask_name: 'ない形' },];
    const plainQuestionTypes = [{ start: 'jisho', ask: 'nai', ask_name: 'ない形' }, { start: 'jisho', ask: 'te', ask_name: 'て形' }, { start: 'jisho', ask: 'ta', ask_name: 'た形' }, { start: 'nai', ask: 'jisho', ask_name: '辞書形' }, { start: 'te', ask: 'jisho', ask_name: '辞書形' },];
    const politeQuestionTypes = [{ start: 'masu', ask: 'masen', ask_name: 'Negative (ません)' }, { start: 'masu', ask: 'mashita', ask_name: 'Past (ました)' }, { start: 'masu', ask: 'masen_deshita', ask_name: 'Past Negative (ませんでした)' }, { start: 'jisho', ask: 'masu', ask_name: 'ます形' },];

    function shuffleArray(array) { for (let i = array.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[array[i], array[j]] = [array[j], array[i]]; } return array; }
    function applyTheme(theme) { document.body.className = `theme-${theme}`; localStorage.setItem('theme', theme); }

    function initializeGame() {
        currentUser.name = userNameInput.value.trim() || 'အမည်မသိ';
        currentUser.level = levelInput.value.trim();
        applyTheme(themeSelect.value);
        userFormPanel.classList.add('hidden');
        mainGameContainer.classList.remove('hidden');
        switchPanel('guide'); // Show guide by default
    }

    function switchPanel(panelName) {
        document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
        panelQuiz.classList.add('hidden');
        panelGuide.classList.add('hidden');

        if (panelName === 'guide') {
            tabGuide.classList.add('active');
            panelGuide.classList.remove('hidden');
        } else { // It's a quiz mode
            const activeTab = document.querySelector(`.quiz-tab[data-mode="${panelName}"]`);
            if (activeTab) activeTab.classList.add('active');
            panelQuiz.classList.remove('hidden');
            setGameMode(panelName);
        }
    }

    function setGameMode(mode) {
        currentGameMode = mode;
        switch (mode) {
            case 'plain': activeQuestionTypes = plainQuestionTypes; break;
            case 'polite': activeQuestionTypes = politeQuestionTypes; break;
            default: activeQuestionTypes = mixedQuestionTypes; break;
        }
        startGame();
    }

    function startGame() {
        score = 0;
        currentQuestionIndex = 0;
        shuffledVerbs = shuffleArray([...verbs]);
        scoreEl.textContent = score;
        questionCountEl.textContent = `0 / ${verbs.length}`;
        endGameScreen.classList.add('hidden');
        quizMainView.classList.remove('hidden');
        loadQuestion();
    }

    function loadQuestion() {
        if (currentQuestionIndex >= verbs.length) { endGame(); return; }
        flashcardFront.classList.remove('hidden');
        flashcardBack.classList.add('hidden');
        flipBtn.classList.remove('hidden');
        feedbackButtons.classList.add('hidden');
        currentVerb = shuffledVerbs[currentQuestionIndex];
        currentQuestionType = activeQuestionTypes[Math.floor(Math.random() * activeQuestionTypes.length)];
        verbStartEl.textContent = currentVerb[currentQuestionType.start];
        formTypeEl.textContent = currentQuestionType.ask_name;
        verbMeaningEl.textContent = `(${currentVerb.meaning})`;
        correctAnswerEl.textContent = currentVerb[currentQuestionType.ask];
        questionCountEl.textContent = `${currentQuestionIndex + 1} / ${verbs.length}`;
    }

    function flipCard() {
        flashcardFront.classList.add('hidden');
        flashcardBack.classList.remove('hidden');
        flipBtn.classList.add('hidden');
        feedbackButtons.classList.remove('hidden');
    }

    function handleFeedback(isCorrect) {
        if (isCorrect) { score++; scoreEl.textContent = score; }
        currentQuestionIndex++;
        loadQuestion();
    }

    function endGame() {
        quizMainView.classList.add('hidden');
        const percentage = Math.round((score / verbs.length) * 100);
        finalScoreEl.textContent = `${score} / ${verbs.length}`;
        scorePercentageEl.textContent = `(${percentage}%)`;
        congratsMessageEl.textContent = `ဂုဏ်ယူပါတယ်, ${currentUser.name}!`;
        if (percentage >= 80) {
            trophyIconEl.textContent = '🏆';
            if (typeof confetti === 'function') confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
        } else if (percentage >= 50) {
            trophyIconEl.textContent = '👍';
        } else {
            trophyIconEl.textContent = '💪';
        }
        endGameScreen.classList.remove('hidden');
    }

    function resetToTitleScreen() {
        mainGameContainer.classList.add('hidden');
        userFormPanel.classList.remove('hidden');
    }

    // --- Event Listeners ---
    const savedTheme = localStorage.getItem('theme') || 'light';
    themeSelect.value = savedTheme;
    applyTheme(savedTheme);

    themeSelect.addEventListener('change', (e) => applyTheme(e.target.value));
    startGameBtn.addEventListener('click', initializeGame);
    flipBtn.addEventListener('click', flipCard);
    flashcardContainer.addEventListener('click', () => !flipBtn.classList.contains('hidden') && flipCard());
    correctBtn.addEventListener('click', () => handleFeedback(true));
    incorrectBtn.addEventListener('click', () => handleFeedback(false));
    restartBtn.addEventListener('click', resetToTitleScreen);
    tabGuide.addEventListener('click', () => switchPanel('guide'));
    quizTabs.forEach(tab => {
        tab.addEventListener('click', () => switchPanel(tab.getAttribute('data-mode')));
    });
});