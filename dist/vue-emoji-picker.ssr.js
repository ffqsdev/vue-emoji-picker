'use strict';var Vue=require('vue');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}var Vue__default=/*#__PURE__*/_interopDefaultLegacy(Vue);function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var emojis = {
  'Frequently used': {
    'thumbs_up': '👍',
    '-1': '👎',
    'sob': '😭',
    'confused': '😕',
    'neutral_face': '😐',
    'blush': '😊',
    'heart_eyes': '😍'
  },
  'People': {
    'smile': '😄',
    'smiley': '😃',
    'grinning': '😀',
    'blush': '😊',
    'wink': '😉',
    'heart_eyes': '😍',
    'kissing_heart': '😘',
    'kissing_closed_eyes': '😚',
    'kissing': '😗',
    'kissing_smiling_eyes': '😙',
    'stuck_out_tongue_winking_eye': '😜',
    'stuck_out_tongue_closed_eyes': '😝',
    'stuck_out_tongue': '😛',
    'flushed': '😳',
    'grin': '😁',
    'pensive': '😔',
    'relieved': '😌',
    'unamused': '😒',
    'disappointed': '😞',
    'persevere': '😣',
    'cry': '😢',
    'joy': '😂',
    'sob': '😭',
    'sleepy': '😪',
    'disappointed_relieved': '😥',
    'cold_sweat': '😰',
    'sweat_smile': '😅',
    'sweat': '😓',
    'weary': '😩',
    'tired_face': '😫',
    'fearful': '😨',
    'scream': '😱',
    'angry': '😠',
    'rage': '😡',
    'triumph': '😤',
    'confounded': '😖',
    'laughing': '😆',
    'yum': '😋',
    'mask': '😷',
    'sunglasses': '😎',
    'sleeping': '😴',
    'dizzy_face': '😵',
    'astonished': '😲',
    'worried': '😟',
    'frowning': '😦',
    'anguished': '😧',
    'imp': '👿',
    'open_mouth': '😮',
    'grimacing': '😬',
    'neutral_face': '😐',
    'confused': '😕',
    'hushed': '😯',
    'smirk': '😏',
    'expressionless': '😑',
    'man_with_gua_pi_mao': '👲',
    'man_with_turban': '👳',
    'cop': '👮',
    'construction_worker': '👷',
    'guardsman': '💂',
    'baby': '👶',
    'boy': '👦',
    'girl': '👧',
    'man': '👨',
    'woman': '👩',
    'older_man': '👴',
    'older_woman': '👵',
    'person_with_blond_hair': '👱',
    'angel': '👼',
    'princess': '👸',
    'smiley_cat': '😺',
    'smile_cat': '😸',
    'heart_eyes_cat': '😻',
    'kissing_cat': '😽',
    'smirk_cat': '😼',
    'scream_cat': '🙀',
    'crying_cat_face': '😿',
    'joy_cat': '😹',
    'pouting_cat': '😾',
    'japanese_ogre': '👹',
    'japanese_goblin': '👺',
    'see_no_evil': '🙈',
    'hear_no_evil': '🙉',
    'speak_no_evil': '🙊',
    'skull': '💀',
    'alien': '👽',
    'hankey': '💩',
    'fire': '🔥',
    'sparkles': '✨',
    'star2': '🌟',
    'dizzy': '💫',
    'boom': '💥',
    'anger': '💢',
    'sweat_drops': '💦',
    'droplet': '💧',
    'zzz': '💤',
    'dash': '💨',
    'ear': '👂',
    'eyes': '👀',
    'nose': '👃',
    'tongue': '👅',
    'lips': '👄',
    'thumbs_up': '👍',
    '-1': '👎',
    'ok_hand': '👌',
    'facepunch': '👊',
    'fist': '✊',
    'wave': '👋',
    'hand': '✋',
    'open_hands': '👐',
    'point_up_2': '👆',
    'point_down': '👇',
    'point_right': '👉',
    'point_left': '👈',
    'raised_hands': '🙌',
    'pray': '🙏',
    'clap': '👏',
    'muscle': '💪',
    'walking': '🚶',
    'runner': '🏃',
    'dancer': '💃',
    'couple': '👫',
    'family': '👪',
    'couplekiss': '💏',
    'couple_with_heart': '💑',
    'dancers': '👯',
    'ok_woman': '🙆',
    'no_good': '🙅',
    'information_desk_person': '💁',
    'raising_hand': '🙋',
    'massage': '💆',
    'haircut': '💇',
    'nail_care': '💅',
    'bride_with_veil': '👰',
    'person_with_pouting_face': '🙎',
    'person_frowning': '🙍',
    'bow': '🙇',
    'tophat': '🎩',
    'crown': '👑',
    'womans_hat': '👒',
    'athletic_shoe': '👟',
    'mans_shoe': '👞',
    'sandal': '👡',
    'high_heel': '👠',
    'boot': '👢',
    'shirt': '👕',
    'necktie': '👔',
    'womans_clothes': '👚',
    'dress': '👗',
    'running_shirt_with_sash': '🎽',
    'jeans': '👖',
    'kimono': '👘',
    'bikini': '👙',
    'briefcase': '💼',
    'handbag': '👜',
    'pouch': '👝',
    'purse': '👛',
    'eyeglasses': '👓',
    'ribbon': '🎀',
    'closed_umbrella': '🌂',
    'lipstick': '💄',
    'yellow_heart': '💛',
    'blue_heart': '💙',
    'purple_heart': '💜',
    'green_heart': '💚',
    'broken_heart': '💔',
    'heartpulse': '💗',
    'heartbeat': '💓',
    'two_hearts': '💕',
    'sparkling_heart': '💖',
    'revolving_hearts': '💞',
    'cupid': '💘',
    'love_letter': '💌',
    'kiss': '💋',
    'ring': '💍',
    'gem': '💎',
    'bust_in_silhouette': '👤',
    'speech_balloon': '💬',
    'footprints': '👣'
  },
  'Nature': {
    'dog': '🐶',
    'wolf': '🐺',
    'cat': '🐱',
    'mouse': '🐭',
    'hamster': '🐹',
    'rabbit': '🐰',
    'frog': '🐸',
    'tiger': '🐯',
    'koala': '🐨',
    'bear': '🐻',
    'pig': '🐷',
    'pig_nose': '🐽',
    'cow': '🐮',
    'boar': '🐗',
    'monkey_face': '🐵',
    'monkey': '🐒',
    'horse': '🐴',
    'sheep': '🐑',
    'elephant': '🐘',
    'panda_face': '🐼',
    'penguin': '🐧',
    'bird': '🐦',
    'baby_chick': '🐤',
    'hatched_chick': '🐥',
    'hatching_chick': '🐣',
    'chicken': '🐔',
    'snake': '🐍',
    'turtle': '🐢',
    'bug': '🐛',
    'bee': '🐝',
    'ant': '🐜',
    'beetle': '🐞',
    'snail': '🐌',
    'octopus': '🐙',
    'shell': '🐚',
    'tropical_fish': '🐠',
    'fish': '🐟',
    'dolphin': '🐬',
    'whale': '🐳',
    'racehorse': '🐎',
    'dragon_face': '🐲',
    'blowfish': '🐡',
    'camel': '🐫',
    'poodle': '🐩',
    'feet': '🐾',
    'bouquet': '💐',
    'cherry_blossom': '🌸',
    'tulip': '🌷',
    'four_leaf_clover': '🍀',
    'rose': '🌹',
    'sunflower': '🌻',
    'hibiscus': '🌺',
    'maple_leaf': '🍁',
    'leaves': '🍃',
    'fallen_leaf': '🍂',
    'herb': '🌿',
    'ear_of_rice': '🌾',
    'mushroom': '🍄',
    'cactus': '🌵',
    'palm_tree': '🌴',
    'chestnut': '🌰',
    'seedling': '🌱',
    'blossom': '🌼',
    'new_moon': '🌑',
    'first_quarter_moon': '🌓',
    'moon': '🌔',
    'full_moon': '🌕',
    'first_quarter_moon_with_face': '🌛',
    'crescent_moon': '🌙',
    'earth_asia': '🌏',
    'volcano': '🌋',
    'milky_way': '🌌',
    'stars': '🌠',
    'partly_sunny': '⛅',
    'snowman': '⛄',
    'cyclone': '🌀',
    'foggy': '🌁',
    'rainbow': '🌈',
    'ocean': '🌊'
  },
  'Objects': {
    'bamboo': '🎍',
    'gift_heart': '💝',
    'dolls': '🎎',
    'school_satchel': '🎒',
    'mortar_board': '🎓',
    'flags': '🎏',
    'fireworks': '🎆',
    'sparkler': '🎇',
    'wind_chime': '🎐',
    'rice_scene': '🎑',
    'jack_o_lantern': '🎃',
    'ghost': '👻',
    'santa': '🎅',
    'christmas_tree': '🎄',
    'gift': '🎁',
    'tanabata_tree': '🎋',
    'tada': '🎉',
    'confetti_ball': '🎊',
    'balloon': '🎈',
    'crossed_flags': '🎌',
    'crystal_ball': '🔮',
    'movie_camera': '🎥',
    'camera': '📷',
    'video_camera': '📹',
    'vhs': '📼',
    'cd': '💿',
    'dvd': '📀',
    'minidisc': '💽',
    'floppy_disk': '💾',
    'computer': '💻',
    'iphone': '📱',
    'telephone_receiver': '📞',
    'pager': '📟',
    'fax': '📠',
    'satellite': '📡',
    'tv': '📺',
    'radio': '📻',
    'loud_sound': '🔊',
    'bell': '🔔',
    'loudspeaker': '📢',
    'mega': '📣',
    'hourglass_flowing_sand': '⏳',
    'hourglass': '⌛',
    'alarm_clock': '⏰',
    'watch': '⌚',
    'unlock': '🔓',
    'lock': '🔒',
    'lock_with_ink_pen': '🔏',
    'closed_lock_with_key': '🔐',
    'key': '🔑',
    'mag_right': '🔎',
    'bulb': '💡',
    'flashlight': '🔦',
    'electric_plug': '🔌',
    'battery': '🔋',
    'mag': '🔍',
    'bath': '🛀',
    'toilet': '🚽',
    'wrench': '🔧',
    'nut_and_bolt': '🔩',
    'hammer': '🔨',
    'door': '🚪',
    'smoking': '🚬',
    'bomb': '💣',
    'gun': '🔫',
    'hocho': '🔪',
    'pill': '💊',
    'syringe': '💉',
    'moneybag': '💰',
    'yen': '💴',
    'dollar': '💵',
    'credit_card': '💳',
    'money_with_wings': '💸',
    'calling': '📲',
    'e-mail': '📧',
    'inbox_tray': '📥',
    'outbox_tray': '📤',
    'envelope_with_arrow': '📩',
    'incoming_envelope': '📨',
    'mailbox': '📫',
    'mailbox_closed': '📪',
    'postbox': '📮',
    'package': '📦',
    'memo': '📝',
    'page_facing_up': '📄',
    'page_with_curl': '📃',
    'bookmark_tabs': '📑',
    'bar_chart': '📊',
    'chart_with_upwards_trend': '📈',
    'chart_with_downwards_trend': '📉',
    'scroll': '📜',
    'clipboard': '📋',
    'date': '📅',
    'calendar': '📆',
    'card_index': '📇',
    'file_folder': '📁',
    'open_file_folder': '📂',
    'pushpin': '📌',
    'paperclip': '📎',
    'straight_ruler': '📏',
    'triangular_ruler': '📐',
    'closed_book': '📕',
    'green_book': '📗',
    'blue_book': '📘',
    'orange_book': '📙',
    'notebook': '📓',
    'notebook_with_decorative_cover': '📔',
    'ledger': '📒',
    'books': '📚',
    'book': '📖',
    'bookmark': '🔖',
    'name_badge': '📛',
    'newspaper': '📰',
    'art': '🎨',
    'clapper': '🎬',
    'microphone': '🎤',
    'headphones': '🎧',
    'musical_score': '🎼',
    'musical_note': '🎵',
    'notes': '🎶',
    'musical_keyboard': '🎹',
    'violin': '🎻',
    'trumpet': '🎺',
    'saxophone': '🎷',
    'guitar': '🎸',
    'space_invader': '👾',
    'video_game': '🎮',
    'black_joker': '🃏',
    'flower_playing_cards': '🎴',
    'mahjong': '🀄',
    'game_die': '🎲',
    'dart': '🎯',
    'football': '🏈',
    'basketball': '🏀',
    'soccer': '⚽',
    'baseball': '⚾',
    'tennis': '🎾',
    '8ball': '🎱',
    'bowling': '🎳',
    'golf': '⛳',
    'checkered_flag': '🏁',
    'trophy': '🏆',
    'ski': '🎿',
    'snowboarder': '🏂',
    'swimmer': '🏊',
    'surfer': '🏄',
    'fishing_pole_and_fish': '🎣',
    'tea': '🍵',
    'sake': '🍶',
    'beer': '🍺',
    'beers': '🍻',
    'cocktail': '🍸',
    'tropical_drink': '🍹',
    'wine_glass': '🍷',
    'fork_and_knife': '🍴',
    'pizza': '🍕',
    'hamburger': '🍔',
    'fries': '🍟',
    'poultry_leg': '🍗',
    'meat_on_bone': '🍖',
    'spaghetti': '🍝',
    'curry': '🍛',
    'fried_shrimp': '🍤',
    'bento': '🍱',
    'sushi': '🍣',
    'fish_cake': '🍥',
    'rice_ball': '🍙',
    'rice_cracker': '🍘',
    'rice': '🍚',
    'ramen': '🍜',
    'stew': '🍲',
    'oden': '🍢',
    'dango': '🍡',
    'egg': '🍳',
    'bread': '🍞',
    'doughnut': '🍩',
    'custard': '🍮',
    'icecream': '🍦',
    'ice_cream': '🍨',
    'shaved_ice': '🍧',
    'birthday': '🎂',
    'cake': '🍰',
    'cookie': '🍪',
    'chocolate_bar': '🍫',
    'candy': '🍬',
    'lollipop': '🍭',
    'honey_pot': '🍯',
    'apple': '🍎',
    'green_apple': '🍏',
    'tangerine': '🍊',
    'cherries': '🍒',
    'grapes': '🍇',
    'watermelon': '🍉',
    'strawberry': '🍓',
    'peach': '🍑',
    'melon': '🍈',
    'banana': '🍌',
    'pineapple': '🍍',
    'sweet_potato': '🍠',
    'eggplant': '🍆',
    'tomato': '🍅',
    'corn': '🌽'
  },
  'Places': {
    'house': '🏠',
    'house_with_garden': '🏡',
    'school': '🏫',
    'office': '🏢',
    'post_office': '🏣',
    'hospital': '🏥',
    'bank': '🏦',
    'convenience_store': '🏪',
    'love_hotel': '🏩',
    'hotel': '🏨',
    'wedding': '💒',
    'church': '⛪',
    'department_store': '🏬',
    'city_sunrise': '🌇',
    'city_sunset': '🌆',
    'japanese_castle': '🏯',
    'european_castle': '🏰',
    'tent': '⛺',
    'factory': '🏭',
    'tokyo_tower': '🗼',
    'japan': '🗾',
    'mount_fuji': '🗻',
    'sunrise_over_mountains': '🌄',
    'sunrise': '🌅',
    'night_with_stars': '🌃',
    'statue_of_liberty': '🗽',
    'bridge_at_night': '🌉',
    'carousel_horse': '🎠',
    'ferris_wheel': '🎡',
    'fountain': '⛲',
    'roller_coaster': '🎢',
    'ship': '🚢',
    'boat': '⛵',
    'speedboat': '🚤',
    'rocket': '🚀',
    'seat': '💺',
    'station': '🚉',
    'bullettrain_side': '🚄',
    'bullettrain_front': '🚅',
    'metro': '🚇',
    'railway_car': '🚃',
    'bus': '🚌',
    'blue_car': '🚙',
    'car': '🚗',
    'taxi': '🚕',
    'truck': '🚚',
    'rotating_light': '🚨',
    'police_car': '🚓',
    'fire_engine': '🚒',
    'ambulance': '🚑',
    'bike': '🚲',
    'barber': '💈',
    'busstop': '🚏',
    'ticket': '🎫',
    'traffic_light': '🚥',
    'construction': '🚧',
    'beginner': '🔰',
    'fuelpump': '⛽',
    'izakaya_lantern': '🏮',
    'slot_machine': '🎰',
    'moyai': '🗿',
    'circus_tent': '🎪',
    'performing_arts': '🎭',
    'round_pushpin': '📍',
    'triangular_flag_on_post': '🚩'
  },
  'Symbols': {
    'keycap_ten': '🔟',
    '1234': '🔢',
    'symbols': '🔣',
    'capital_abcd': '🔠',
    'abcd': '🔡',
    'abc': '🔤',
    'arrow_up_small': '🔼',
    'arrow_down_small': '🔽',
    'rewind': '⏪',
    'fast_forward': '⏩',
    'arrow_double_up': '⏫',
    'arrow_double_down': '⏬',
    'ok': '🆗',
    'new': '🆕',
    'up': '🆙',
    'cool': '🆒',
    'free': '🆓',
    'ng': '🆖',
    'signal_strength': '📶',
    'cinema': '🎦',
    'koko': '🈁',
    'u6307': '🈯',
    'u7a7a': '🈳',
    'u6e80': '🈵',
    'u5408': '🈴',
    'u7981': '🈲',
    'ideograph_advantage': '🉐',
    'u5272': '🈹',
    'u55b6': '🈺',
    'u6709': '🈶',
    'u7121': '🈚',
    'restroom': '🚻',
    'mens': '🚹',
    'womens': '🚺',
    'baby_symbol': '🚼',
    'wc': '🚾',
    'no_smoking': '🚭',
    'u7533': '🈸',
    'accept': '🉑',
    'cl': '🆑',
    'sos': '🆘',
    'id': '🆔',
    'no_entry_sign': '🚫',
    'underage': '🔞',
    'no_entry': '⛔',
    'negative_squared_cross_mark': '❎',
    'white_check_mark': '✅',
    'heart_decoration': '💟',
    'vs': '🆚',
    'vibration_mode': '📳',
    'mobile_phone_off': '📴',
    'ab': '🆎',
    'diamond_shape_with_a_dot_inside': '💠',
    'ophiuchus': '⛎',
    'six_pointed_star': '🔯',
    'atm': '🏧',
    'chart': '💹',
    'heavy_dollar_sign': '💲',
    'currency_exchange': '💱',
    'x': '❌',
    'exclamation': '❗',
    'question': '❓',
    'grey_exclamation': '❕',
    'grey_question': '❔',
    'o': '⭕',
    'top': '🔝',
    'end': '🔚',
    'back': '🔙',
    'on': '🔛',
    'soon': '🔜',
    'arrows_clockwise': '🔃',
    'clock12': '🕛',
    'clock1': '🕐',
    'clock2': '🕑',
    'clock3': '🕒',
    'clock4': '🕓',
    'clock5': '🕔',
    'clock6': '🕕',
    'clock7': '🕖',
    'clock8': '🕗',
    'clock9': '🕘',
    'clock10': '🕙',
    'clock11': '🕚',
    'heavy_plus_sign': '➕',
    'heavy_minus_sign': '➖',
    'heavy_division_sign': '➗',
    'white_flower': '💮',
    '100': '💯',
    'radio_button': '🔘',
    'link': '🔗',
    'curly_loop': '➰',
    'trident': '🔱',
    'small_red_triangle': '🔺',
    'black_square_button': '🔲',
    'white_square_button': '🔳',
    'red_circle': '🔴',
    'large_blue_circle': '🔵',
    'small_red_triangle_down': '🔻',
    'white_large_square': '⬜',
    'black_large_square': '⬛',
    'large_orange_diamond': '🔶',
    'large_blue_diamond': '🔷',
    'small_orange_diamond': '🔸',
    'small_blue_diamond': '🔹'
  }
};var escapeRegExp = function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

var script = /*#__PURE__*/Vue__default["default"].extend({
  name: 'EmojiPicker',
  props: {
    search: {
      type: String,
      required: false,
      default: ''
    },
    emojiTable: {
      type: Object,
      required: false,
      default: function _default() {
        return emojis;
      }
    }
  },
  data: function data() {
    return {
      display: {
        x: 0,
        y: 0,
        visible: false
      }
    };
  },
  computed: {
    emojis: function emojis() {
      if (this.search) {
        var obj = {};

        for (var category in this.emojiTable) {
          obj[category] = {};

          for (var emoji in this.emojiTable[category]) {
            if (new RegExp(".*".concat(escapeRegExp(this.search), ".*")).test(emoji)) {
              obj[category][emoji] = this.emojiTable[category][emoji];
            }
          }

          if (Object.keys(obj[category]).length === 0) {
            delete obj[category];
          }
        }

        return obj;
      }

      return this.emojiTable;
    }
  },
  methods: {
    insert: function insert(emoji) {
      this.$emit('emoji', emoji);
    },
    toggle: function toggle(e) {
      this.display.visible = !this.display.visible;
      this.display.x = e.clientX;
      this.display.y = e.clientY;
      this.$emit('toggle', this.display.visible);
    },
    hide: function hide() {
      this.display.visible = false;
      this.$emit('toggle', this.display.visible);
    },
    escape: function escape(e) {
      if (this.display.visible === true && e.keyCode === 27) {
        this.display.visible = false;
      }
    }
  },
  mounted: function mounted() {
    document.addEventListener('keyup', this.escape);
  },
  destroyed: function destroyed() {
    document.removeEventListener('keyup', this.escape);
  }
});function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_vm._t("emoji-invoker", null, {
    "events": {
      click: function click(e) {
        return _vm.toggle(e);
      }
    }
  }), _vm._ssrNode(" "), _vm.display.visible ? _vm._ssrNode("<div>", "</div>", [_vm._t("emoji-picker", null, {
    "emojis": _vm.emojis,
    "insert": _vm.insert,
    "display": _vm.display
  })], 2) : _vm._e()], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = "data-v-4f361324";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);var component = /*#__PURE__*/(function () {
  var installable = __vue_component__;

  installable.install = function (Vue) {
    Vue.component('EmojiPicker', installable);
  };

  return installable;
})();var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,EmojiPicker:__vue_component__,'default':component});Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      exportName = _ref2[0],
      exported = _ref2[1];

  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;