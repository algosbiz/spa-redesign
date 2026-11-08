import type { Locale } from "./config";

/**
 * Each treatment's name in the visitor's own language, shown small under the
 * English name on the other language sites (owner, 8 Nov 2026: "go with
 * option 2"). The English name stays the title, as the 3 Nov rule wants: it
 * is the name visitors search for and use at the desk, and the package
 * savings are worked out from it. This line only explains it, in the
 * language's own script, which also helps people who search in it.
 *
 * Keyed by the English name exactly as the menu writes it. A name not listed
 * (a brand like Biokos) shows no second line. Draft names, to be checked by a
 * native speaker with the rest of the translations.
 */
type Names = Record<Exclude<Locale, "en">, string>;

const LOCAL_NAMES: Record<string, Names> = {
  // Massages
  "Balinese Massage": { ja: "バリニーズマッサージ", ko: "발리니즈 마사지", zh: "巴厘岛按摩", hi: "बालीनीज़ मसाज" },
  "Traditional Massage": { ja: "伝統マッサージ", ko: "전통 마사지", zh: "传统按摩", hi: "पारंपरिक मसाज" },
  "Deep Tissue Massage": { ja: "ディープティシューマッサージ", ko: "딥티슈 마사지", zh: "深层组织按摩", hi: "डीप टिशू मसाज" },
  "Sports Massage": { ja: "スポーツマッサージ", ko: "스포츠 마사지", zh: "运动按摩", hi: "स्पोर्ट्स मसाज" },
  "Sport Massage": { ja: "スポーツマッサージ", ko: "스포츠 마사지", zh: "运动按摩", hi: "स्पोर्ट्स मसाज" },
  "Thai Massage": { ja: "タイ古式マッサージ", ko: "타이 마사지", zh: "泰式按摩", hi: "थाई मसाज" },
  "Shiatsu Massage": { ja: "指圧マッサージ", ko: "지압 마사지", zh: "指压按摩", hi: "शियात्सु मसाज" },
  Shiatsu: { ja: "指圧", ko: "지압", zh: "指压", hi: "शियात्सु" },
  "Hot Stone Massage": { ja: "ホットストーンマッサージ", ko: "핫스톤 마사지", zh: "热石按摩", hi: "हॉट स्टोन मसाज" },
  "Lymphatic Massage": { ja: "リンパマッサージ", ko: "림프 마사지", zh: "淋巴按摩", hi: "लिम्फैटिक मसाज" },
  "Lymphatic Drainage Massage": { ja: "リンパドレナージュ", ko: "림프 배출 마사지", zh: "淋巴引流按摩", hi: "लिम्फैटिक ड्रेनेज मसाज" },
  "Cellulite Massage": { ja: "セルライトマッサージ", ko: "셀룰라이트 마사지", zh: "抗橘皮按摩", hi: "सेल्युलाइट मसाज" },
  "Coconut Oil Massage": { ja: "ココナッツオイルマッサージ", ko: "코코넛 오일 마사지", zh: "椰子油按摩", hi: "नारियल तेल मसाज" },
  "Virgin Cold-Press Coconut Oil Massage": {
    ja: "コールドプレス・ココナッツオイルマッサージ",
    ko: "냉압착 코코넛 오일 마사지",
    zh: "冷压初榨椰子油按摩",
    hi: "कोल्ड-प्रेस्ड नारियल तेल मसाज",
  },
  "Warm Candle Massage": { ja: "キャンドルマッサージ", ko: "캔들 마사지", zh: "暖烛按摩", hi: "वॉर्म कैंडल मसाज" },
  "Natural Warm Candle Massage": { ja: "ナチュラル・キャンドルマッサージ", ko: "내추럴 캔들 마사지", zh: "天然暖烛按摩", hi: "नेचुरल वॉर्म कैंडल मसाज" },
  "Aloe Vera Massage": { ja: "アロエベラマッサージ", ko: "알로에베라 마사지", zh: "芦荟按摩", hi: "एलोवेरा मसाज" },
  "Aromatherapy Massage": { ja: "アロマセラピーマッサージ", ko: "아로마테라피 마사지", zh: "芳香疗法按摩", hi: "अरोमाथेरेपी मसाज" },
  "Herbal Massage": { ja: "ハーバルマッサージ", ko: "허브 마사지", zh: "草本按摩", hi: "हर्बल मसाज" },
  "Back Massage": { ja: "背中マッサージ", ko: "등 마사지", zh: "背部按摩", hi: "बैक मसाज" },
  "Head Massage": { ja: "ヘッドマッサージ", ko: "헤드 마사지", zh: "头部按摩", hi: "हेड मसाज" },
  "Foot Massage": { ja: "フットマッサージ", ko: "발 마사지", zh: "足部按摩", hi: "फुट मसाज" },
  "Foot Reflexology": { ja: "足裏リフレクソロジー", ko: "발 반사요법", zh: "足底反射疗法", hi: "फुट रिफ्लेक्सोलॉजी" },
  "Four Hand Massage": { ja: "フォーハンドマッサージ", ko: "포핸드 마사지", zh: "四手按摩", hi: "फोर हैंड मसाज" },
  "Four Hand Warm Candle Massage": {
    ja: "フォーハンド・キャンドルマッサージ",
    ko: "포핸드 캔들 마사지",
    zh: "四手暖烛按摩",
    hi: "फोर हैंड वॉर्म कैंडल मसाज",
  },
  "Cupping Therapy": { ja: "カッピング療法", ko: "부항 요법", zh: "拔罐疗法", hi: "कपिंग थेरेपी" },
  "Sunburn Treatment": { ja: "日焼けケア", ko: "햇볕 화상 케어", zh: "晒伤护理", hi: "सनबर्न ट्रीटमेंट" },

  // Couples
  "Couple Massage": { ja: "カップルマッサージ", ko: "커플 마사지", zh: "情侣按摩", hi: "कपल मसाज" },
  "Couple Balinese Massage": { ja: "カップル・バリニーズマッサージ", ko: "커플 발리니즈 마사지", zh: "情侣巴厘岛按摩", hi: "कपल बालीनीज़ मसाज" },
  "Couple Massage Balinese": { ja: "カップル・バリニーズマッサージ", ko: "커플 발리니즈 마사지", zh: "情侣巴厘岛按摩", hi: "कपल बालीनीज़ मसाज" },
  "Couple Traditional Massage": { ja: "カップル伝統マッサージ", ko: "커플 전통 마사지", zh: "情侣传统按摩", hi: "कपल पारंपरिक मसाज" },
  "Couple Deep Tissue Massage": { ja: "カップル・ディープティシューマッサージ", ko: "커플 딥티슈 마사지", zh: "情侣深层组织按摩", hi: "कपल डीप टिशू मसाज" },
  "Couple Warm Candle Massage": { ja: "カップル・キャンドルマッサージ", ko: "커플 캔들 마사지", zh: "情侣暖烛按摩", hi: "कपल वॉर्म कैंडल मसाज" },

  // Body, face, hair and nails
  "Body Scrub": { ja: "ボディスクラブ", ko: "바디 스크럽", zh: "身体磨砂", hi: "बॉडी स्क्रब" },
  "Foot Scrub": { ja: "フットスクラブ", ko: "풋 스크럽", zh: "足部磨砂", hi: "फुट स्क्रब" },
  Facial: { ja: "フェイシャル", ko: "페이셜", zh: "面部护理", hi: "फेशियल" },
  "Bali Moon Facial": { ja: "オリジナルフェイシャル", ko: "시그니처 페이셜", zh: "招牌面部护理", hi: "सिग्नेचर फेशियल" },
  "Bali Moon Gold Facial": { ja: "ゴールドフェイシャル", ko: "골드 페이셜", zh: "黄金面部护理", hi: "गोल्ड फेशियल" },
  "Bali Moon Tea Tree Facial": { ja: "ティーツリーフェイシャル", ko: "티트리 페이셜", zh: "茶树面部护理", hi: "टी ट्री फेशियल" },
  "Ear Candle": { ja: "イヤーキャンドル", ko: "이어 캔들", zh: "耳烛", hi: "ईयर कैंडल" },
  Eyelash: { ja: "まつげエクステ", ko: "속눈썹 연장", zh: "嫁接睫毛", hi: "आईलैश एक्सटेंशन" },
  "Cream Bath": { ja: "クリームバス", ko: "크림배스", zh: "头发焗油护理", hi: "क्रीम बाथ" },
  "Hair Cream Bath": { ja: "ヘアクリームバス", ko: "헤어 크림배스", zh: "头发焗油护理", hi: "हेयर क्रीम बाथ" },
  "Creambath & Hair Mask": { ja: "クリームバス＆ヘアマスク", ko: "크림배스 & 헤어 마스크", zh: "焗油护理与发膜", hi: "क्रीम बाथ और हेयर मास्क" },
  "Hair Mask": { ja: "ヘアマスク", ko: "헤어 마스크", zh: "发膜", hi: "हेयर मास्क" },
  "Hair Braiding": { ja: "ヘアブレイド（編み込み）", ko: "머리 땋기", zh: "编发", hi: "हेयर ब्रेडिंग" },
  "Manicure Pedicure": { ja: "マニキュア・ペディキュア", ko: "매니큐어·페디큐어", zh: "手足护理", hi: "मैनीक्योर पेडीक्योर" },
  "Manicure & Pedicure": { ja: "マニキュア・ペディキュア", ko: "매니큐어·페디큐어", zh: "手足护理", hi: "मैनीक्योर पेडीक्योर" },
  Manicure: { ja: "マニキュア", ko: "매니큐어", zh: "手部护理", hi: "मैनीक्योर" },
  Pedicure: { ja: "ペディキュア", ko: "페디큐어", zh: "足部护理", hi: "पेडीक्योर" },
  "Nail Art": { ja: "ネイルアート", ko: "네일아트", zh: "美甲彩绘", hi: "नेल आर्ट" },
  Waxing: { ja: "ワックス脱毛", ko: "왁싱", zh: "蜜蜡脱毛", hi: "वैक्सिंग" },
};

/**
 * The language's own script, to tell whether a text already reads in it.
 * Japanese leaves out the middle dot (・), which joins names ("Bali・Seminyak")
 * without making them Japanese.
 */
const SCRIPTS: Record<Exclude<Locale, "en">, RegExp> = {
  ja: /[ぁ-ゟァ-ヺー一-鿿]/,
  ko: /[가-힯]/,
  zh: /[一-鿿]/,
  hi: /[ऀ-ॿ]/,
};

/**
 * The treatment's name in `locale`, or undefined (English, or a name not
 * listed). A variant after " - " ("Balinese Massage - Relaxing") takes the
 * treatment's name; the variant itself is translated in the title.
 */
export function localName(englishName: string, locale: Locale): string | undefined {
  if (locale === "en") return undefined;
  const name = englishName.trim();
  const entry = LOCAL_NAMES[name] ?? LOCAL_NAMES[name.split(" - ")[0]];
  return entry?.[locale];
}

/**
 * The small words the translations use to join names ("Bali Seminyakの…",
 * "…의", "…的", "Seminyak, Bali में"): a heading with only these and names in
 * it does not read in the language yet.
 */
const JOINERS: Record<Exclude<Locale, "en">, RegExp> = {
  ja: /[のと]/g,
  ko: /의/g,
  zh: /[的和]/g,
  hi: /(में|का|की|के|और)/g,
};

/** Whether `text` already has words in `locale`'s own script, beyond joining words (English: always). */
export function readsInLanguage(text: string, locale: Locale): boolean {
  return locale === "en" || SCRIPTS[locale].test(text.replace(JOINERS[locale], ""));
}
