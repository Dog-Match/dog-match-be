const temprData = [
  {
    id: 1,
    temprs: ['Stubborn', 'Curious', 'Playful', 'Adventurous', 'Active', 'Fun-loving']
  },
  {
    id: 2,
    temprs: ['Aloof', 'Clownish', 'Dignified', 'Independent', 'Happy']
  },
  {
    id: 3,
    temprs: ['Wild', 'Hardworking', 'Dutiful']
  },
  {
    id: 4,
    temprs: ['Outgoing', 'Friendly', 'Alert', 'Confident', 'Intelligent', 'Courageous']
  },
  {
    id: 5,
    temprs: ['Loyal', 'Independent', 'Intelligent', 'Brave']
  },
  {
    id: 8,
    temprs: ['Friendly', 'Energetic', 'Loyal', 'Gentle', 'Confident']
  },
  {
    id: 7,
    temprs: ['Loving', 'Protective', 'Trainable', 'Dutiful', 'Responsible']
  },
  {
    id: 9,
    temprs: ['Friendly', 'Affectionate', 'Devoted', 'Loyal', 'Dignified', 'Playful']
  },
  {
    id: 6,
    temprs: ['Docile', 'Alert', 'Responsive', 'Dignified', 'Composed', 'Friendly', 'Receptive', 'Faithful', 'Courageous']
  },
  {
    id: 11,
    temprs: ['Strong Willed', 'Stubborn', 'Friendly', 'Clownish', 'Affectionate', 'Loyal', 'Obedient', 'Intelligent', 'Courageous']
  },
  {
    id: 10,
    temprs: ['Friendly', 'Assertive', 'Energetic', 'Loyal', 'Gentle', 'Confident', 'Dominant']
  },
  {
    id: 13,
    temprs: ['Friendly', 'Alert', 'Reserved', 'Intelligent', 'Protective']
  },
  {
    id: 12,
    temprs: ['Friendly', 'Alert', 'Reserved', 'Intelligent', 'Protective']
  },
  {
    id: 14,
    temprs: ['Kind', 'Sweet-Tempered', 'Loyal', 'Independent', 'Intelligent', 'Loving']
  },
  {
    id: 16,
    temprs: ['Tenacious', 'Friendly', 'Devoted', 'Loyal', 'Attentive', 'Courageous']
  },
  {
    id: 15,
    temprs: ['Strong Willed', 'Stubborn', 'Friendly', 'Clownish', 'Affectionate', 'Loyal', 'Obedient', 'Intelligent', 'Courageous']
  },
  {
    id: 18,
    temprs: ['Steady', 'Bold', 'Independent', 'Confident', 'Intelligent', 'Proud']
  },
  {
    id: 17,
    temprs: ['Friendly', 'Energetic', 'Obedient', 'Intelligent', 'Protective', 'Trainable']
  },
  {
    id: 19,
    temprs: ['Reliable', 'Fearless', 'Energetic', 'Lively', 'Self-assured']
  },
  {
    id: 21,
    temprs: ['Cautious', 'Energetic', 'Loyal', 'Obedient', 'Protective', 'Brave']
  },
  {
    id: 22,
    temprs: ['Friendly', 'Energetic', 'Alert', 'Loyal', 'Intelligent', 'Eager']
  },
  {
    id: 23,
    temprs: ['Good-natured', 'Affectionate', 'Intelligent', 'Active', 'Protective']
  },
  {
    id: 24,
    temprs: ['Spirited', 'Alert', 'Loyal', 'Companionable', 'Even Tempered', 'Courageous']
  },
  {
    id: 25,
    temprs: ['Aloof', 'Affectionate', 'Attentive', 'Rugged', 'Fierce', 'Refined']
  },
  {
    id: 28,
    temprs: ['Affectionate', 'Energetic', 'Alert', 'Curious', 'Playful', 'Intelligent']
  },
  {
    id: 26,
    temprs: ['Obedient', 'Companionable', 'Intelligent', 'Joyful']
  },
  {
    id: 29,
    temprs: ['Affectionate', 'Lively', 'Agile', 'Curious', 'Happy', 'Active']
  },
  {
    id: 31,
    temprs: ['Amiable', 'Even Tempered', 'Excitable', 'Determined', 'Gentle', 'Intelligent']
  },
  {
    id: 33,
    temprs: ['Fearless', 'Friendly', 'Intelligent', 'Protective', 'Calm']
  },
  {
    id: 32,
    temprs: ['Self-confidence', 'Hardy', 'Lively', 'Alert', 'Intelligent', 'Active']
  },
  {
    id: 36,
    temprs: ['Watchful', 'Alert', 'Stubborn', 'Friendly', 'Confident', 'Hard-working', 'Active', 'Protective']
  },
  {
    id: 34,
    temprs: ['Affectionate', 'Spirited', 'Intelligent', 'Good-tempered']
  },
  {
    id: 41,
    temprs: ['Affectionate', 'Loyal', 'Intelligent', 'Faithful']
  },
  {
    id: 38,
    temprs: ['Energetic', 'Alert', 'Loyal', 'Intelligent', 'Attentive', 'Protective']
  },
  {
    id: 43,
    temprs: ['Easygoing', 'Gentle', 'Adaptable', 'Trusting', 'Even Tempered', 'Lovable']
  },
  {
    id: 30,
    temprs: ['Tenacious', 'Friendly', 'Affectionate', 'Devoted', 'Sweet-Tempered', 'Gentle']
  },
  {
    id: 42,
    temprs: ['Feisty', 'Affectionate', 'Cheerful', 'Playful', 'Gentle', 'Sensitive']
  },
  {
    id: 45,
    temprs: ['Stubborn', 'Affectionate', 'Gentle', 'Even Tempered']
  },
  {
    id: 47,
    temprs: ['Friendly', 'Intelligent', 'Active']
  },
  {
    id: 48,
    temprs: ['Obedient', 'Confident', 'Intelligent', 'Dominant', 'Territorial']
  },
  {
    id: 51,
    temprs: ['Fearless', 'Affectionate', 'Alert', 'Obedient', 'Intelligent', 'Even Tempered']
  },
  {
    id: 50,
    temprs: ['Tenacious', 'Keen', 'Energetic', 'Responsive', 'Alert', 'Intelligent']
  },
  {
    id: 53,
    temprs: ['Friendly', 'Lively', 'Intelligent']
  },
  {
    id: 54,
    temprs: ['Protective', 'Loyal', 'Gentle', 'Intelligent', 'Familial', 'Rational']
  },
  {
    id: 55,
    temprs: ['Devoted', 'Fearless', 'Friendly', 'Cheerful', 'Energetic', 'Loyal', 'Playful', 'Confident', 'Intelligent', 'Bright', 'Brave', 'Calm']
  },
  {
    id: 56,
    temprs: ['Friendly', 'Energetic', 'Companionable', 'Intelligent', 'Eager', 'Trainable']
  },
  {
    id: 57,
    temprs: ['Stubborn', 'Affectionate', 'Loyal', 'Playful', 'Companionable', 'Trainable']
  },
  {
    id: 58,
    temprs: ['Fearless', 'Loyal', 'Obedient', 'Intelligent', 'Faithful', 'Protective']
  },
  {
    id: 59,
    temprs: ['Agile', 'Adaptable', 'Quick', 'Intelligent', 'Attentive', 'Happy']
  },
  {
    id: 62,
    temprs: ['Trainable', 'Protective', 'Sweet-Tempered', 'Keen', 'Active', 'Territorial']
  },
  {
    id: 64,
    temprs: ['Docile', 'Reliable', 'Devoted', 'Alert', 'Loyal', 'Reserved', 'Loving', 'Protective', 'Powerful', 'Calm', 'Courageous']
  },
  {
    id: 61,
    temprs: ['Trainable', 'Protective', 'Sweet-Tempered', 'Keen', 'Active']
  },
  {
    id: 65,
    temprs: ['Hardy', 'Fearless', 'Assertive', 'Gay', 'Intelligent', 'Active']
  },
  {
    id: 67,
    temprs: ['Trainable', 'Reserved', 'Stable', 'Quiet', 'Even Tempered', 'Calm']
  },
  {
    id: 68,
    temprs: ['Affectionate', 'Devoted', 'Alert', 'Companionable', 'Intelligent', 'Active']
  },
  {
    id: 71,
    temprs: ['Fearless', 'Affectionate', 'Sociable', 'Patient', 'Playful', 'Adaptable']
  },
  {
    id: 69,
    temprs: ['Energetic', 'Inquisitive', 'Independent', 'Gentle', 'Intelligent', 'Loving']
  },
  {
    id: 70,
    temprs: ['Alert', 'Quick', 'Dominant', 'Powerful', 'Calm', 'Strong']
  },
  {
    id: 76,
    temprs: ['Affectionate', 'Intelligent', 'Quiet', 'Dominant', 'Happy', 'Protective']
  },
  {
    id: 78,
    temprs: ['Affectionate', 'Sweet-Tempered', 'Lively', 'Alert', 'Playful', 'Happy']
  },
  {
    id: 79,
    temprs: ['Suspicious', 'Affectionate', 'Devoted', 'Reserved', 'Independent', 'Loving']
  },
  {
    id: 80,
    temprs: ['Friendly', 'Alert', 'Dignified', 'Intelligent', 'Calm']
  },
  {
    id: 81,
    temprs: ['Aloof', 'Loyal', 'Independent', 'Quiet']
  },
  {
    id: 84,
    temprs: ['Affectionate', 'Loyal', 'Dignified', 'Gentle', 'Calm', 'Great-hearted']
  },
  {
    id: 86,
    temprs: ['Trainable', 'Friendly', 'Affectionate', 'Playful', 'Quiet', 'Faithful']
  },
  {
    id: 89,
    temprs: ['Affectionate', 'Lively', 'Playful', 'Intelligent', 'Trainable', 'Vocal']
  },
  {
    id: 92,
    temprs: ['Outgoing', 'Friendly', 'Energetic', 'Playful', 'Sensitive', 'Intelligent', 'Active']
  },
  {
    id: 94,
    temprs: ['Fearless', 'Energetic', 'Alert', 'Loyal', 'Obedient', 'Confident', 'Intelligent']
  },
  {
    id: 98,
    temprs: ['Reliable', 'Affectionate', 'Alert', 'Loyal', 'Obedient', 'Trainable']
  },
  {
    id: 87,
    temprs: ['Outgoing', 'Sociable', 'Trusting', 'Joyful', 'Even Tempered', 'Merry']
  },
  {
    id: 102,
    temprs: ['Kind', 'Energetic', 'Independent', 'Adaptable', 'Intelligent', 'Bossy']
  },
  {
    id: 95,
    temprs: ['Friendly', 'Affectionate', 'Cheerful', 'Loyal', 'Tolerant', 'Protective']
  },
  {
    id: 103,
    temprs: ['Affectionate', 'Cheerful', 'Alert', 'Intelligent', 'Attentive', 'Active']
  },
  {
    id: 104,
    temprs: ['Affectionate', 'Reserved', 'Playful', 'Gentle', 'Happy', 'Loving']
  },
  {
    id: 107,
    temprs: ['Alert', 'Reserved', 'Intelligent', 'Even Tempered', 'Watchful', 'Calm']
  },
  {
    id: 105,
    temprs: ['Stubborn', 'Alert', 'Companionable', 'Intelligent', 'Cunning', 'Trainable']
  },
  {
    id: 101,
    temprs: ['Strong Willed', 'Mischievous', 'Affectionate', 'Energetic', 'Playful', 'Companionable', 'Gentle', 'Hard-working', 'Intelligent', 'Eager', 'People-Oriented']
  },
  {
    id: 108,
    temprs: ['Docile', 'Cautious', 'Sociable', 'Sensitive', 'Adaptable', 'Familial']
  },
  {
    id: 110,
    temprs: ['Friendly', 'Keen', 'Faithful', 'Calm', 'Courageous']
  },
  {
    id: 111,
    temprs: ['Playful', 'Loyal', 'Independent', 'Intelligent', 'Happy', 'Vocal']
  },
  {
    id: 113,
    temprs: ['Playful', 'Affectionate', 'Keen', 'Sociable', 'Lively', 'Alert', 'Easygoing', 'Patient', 'Athletic', 'Bright']
  },
  {
    id: 114,
    temprs: ['Spirited', 'Lively', 'Intelligent', 'Loving', 'Even Tempered', 'Familial']
  },
  {
    id: 115,
    temprs: ['Alert', 'Loyal', 'Obedient', 'Curious', 'Confident', 'Intelligent', 'Watchful', 'Courageous']
  },
  {
    id: 116,
    temprs: ['Boisterous', 'Bold', 'Affectionate', 'Intelligent', 'Cooperative', 'Trainable']
  },
  {
    id: 119,
    temprs: ['Strong Willed', 'Kind', 'Loyal', 'Intelligent', 'Dominant', 'Powerful']
  },
  {
    id: 120,
    temprs: ['Spirited', 'Agile', 'Loyal', 'Gentle', 'Active', 'Courageous']
  },
  {
    id: 121,
    temprs: ['Intelligent', 'Kind', 'Reliable', 'Friendly', 'Trustworthy', 'Confident']
  },
  {
    id: 123,
    temprs: ['Fearless', 'Alert', 'Loyal', 'Confident', 'Gay', 'Eager']
  },
  {
    id: 124,
    temprs: ['Friendly', 'Devoted', 'Reserved', 'Gentle', 'Confident', 'Loving']
  },
  {
    id: 125,
    temprs: ['Strong Willed', 'Fearless', 'Affectionate', 'Patient', 'Gentle', 'Confident']
  },
  {
    id: 127,
    temprs: ['Affectionate', 'Athletic', 'Gentle', 'Intelligent', 'Quiet', 'Even Tempered']
  },
  {
    id: 128,
    temprs: ['Self-important', 'Inquisitive', 'Alert', 'Companionable', 'Sensitive', 'Watchful']
  },
  {
    id: 129,
    temprs: ['Outgoing', 'Friendly', 'Cheerful', 'Sweet-Tempered', 'Tolerant', 'Active']
  },
  {
    id: 134,
    temprs: ['Affectionate', 'Energetic', 'Lively', 'Independent', 'Playful', 'Companionable']
  },
  {
    id: 130,
    temprs: ['Affectionate', 'Responsive', 'Playful', 'Companionable', 'Gentle', 'Intelligent']
  },
  {
    id: 135,
    temprs: ['Respectful', 'Lively', 'Intelligent', 'Dominant', 'Protective', 'Trainable']
  },
  {
    id: 137,
    temprs: ['Sweet-Tempered', 'Loyal', 'Dignified', 'Patient', 'Thoughtful', 'Generous']
  },
  {
    id: 138,
    temprs: ['Mischievous', 'Affectionate', 'Agile', 'Athletic', 'Companionable', 'Intelligent']
  },
  {
    id: 140,
    temprs: ['Alert', 'Loyal', 'Independent', 'Intelligent', 'Loving', 'Cat-like']
  },
  {
    id: 141,
    temprs: ['Affectionate', 'Obedient', 'Playful', 'Companionable', 'Intelligent', 'Proud']
  },
  {
    id: 142,
    temprs: ['Agile', 'Obedient', 'Playful', 'Quick', 'Sturdy', 'Bright']
  },
  {
    id: 144,
    temprs: ['Steady', 'Fearless', 'Affectionate', 'Independent', 'Gentle', 'Calm']
  },
  {
    id: 145,
    temprs: ['Benevolent', 'Agile', 'Alert', 'Intelligent', 'Active', 'Territorial']
  },
  {
    id: 149,
    temprs: ['Kind', 'Outgoing', 'Agile', 'Gentle', 'Intelligent', 'Trusting', 'Even Tempered']
  },
  {
    id: 147,
    temprs: ['Clownish', 'Loyal', 'Patient', 'Independent', 'Intelligent', 'Protective']
  },
  {
    id: 151,
    temprs: ['Keen', 'Loyal', 'Companionable', 'Loving', 'Active', 'Trainable']
  },
  {
    id: 153,
    temprs: ['Clever', 'Friendly', 'Alert', 'Intelligent']
  },
  {
    id: 155,
    temprs: ['Obedient', 'Fearless', 'Loyal', 'Companionable', 'Adaptable', 'Loving']
  },
  {
    id: 156,
    temprs: ['Steady', 'Fearless', 'Friendly', 'Devoted', 'Assertive', 'Spirited', 'Energetic', 'Lively', 'Alert', 'Obedient', 'Playful', 'Intelligent']
  },
  {
    id: 161,
    temprs: ['Playful', 'Docile', 'Fearless', 'Affectionate', 'Sweet-Tempered', 'Lively', 'Responsive', 'Easygoing', 'Gentle', 'Intelligent', 'Active']
  },
  {
    id: 165,
    temprs: ['Energetic', 'Loyal', 'Intelligent', 'Trainable']
  },
  {
    id: 167,
    temprs: ['Clever', 'Outgoing', 'Friendly', 'Energetic', 'Responsive', 'Playful']
  },
  {
    id: 168,
    temprs: ['Fearless', 'Friendly', 'Spirited', 'Alert', 'Obedient', 'Intelligent']
  },
  {
    id: 171,
    temprs: ['Sweet-Tempered', 'Gentle', 'Trainable']
  },
  {
    id: 172,
    temprs: ['Self-confidence', 'Fearless', 'Spirited', 'Companionable', 'Happy', 'Lovable']
  },
  {
    id: 177,
    temprs: ['Outgoing', 'Alert', 'Patient', 'Intelligent', 'Loving']
  },
  {
    id: 176,
    temprs: ['Hardy', 'Affectionate', 'Energetic', 'Sensitive', 'Intelligent']
  },
  {
    id: 178,
    temprs: ['Sociable', 'Bubbly', 'Playful', 'Adaptable', 'Intelligent', 'Loving']
  },
  {
    id: 179,
    temprs: ['Friendly', 'Alert', 'Confident', 'Loving', 'Courageous', 'Strong']
  },
  {
    id: 181,
    temprs: ['Hardy', 'Friendly', 'Energetic', 'Alert', 'Intelligent', 'Happy']
  },
  {
    id: 183,
    temprs: ['Opinionated', 'Good-natured', 'Stubborn', 'Affectionate', 'Aggressive', 'Intelligent']
  },
  {
    id: 184,
    temprs: ['Tenacious', 'Outgoing', 'Friendly', 'Bold', 'Playful', 'Protective']
  },
  {
    id: 185,
    temprs: ['Strong Willed', 'Suspicious', 'Gentle', 'Dominant', 'Calm']
  },
  {
    id: 189,
    temprs: ['Bold', 'Alert', 'Loyal', 'Intelligent']
  },
  {
    id: 188,
    temprs: ['Affectionate', 'Sociable', 'Playful', 'Intelligent', 'Active', 'Trainable']
  },
  {
    id: 201,
    temprs: ['Docile', 'Clever', 'Charming', 'Stubborn', 'Sociable', 'Playful', 'Quiet', 'Attentive']
  },
  {
    id: 205,
    temprs: ['Lively', 'Reserved', 'Intelligent', 'Active', 'Protective', 'Vocal']
  },
  {
    id: 193,
    temprs: ['Extroverted', 'Friendly', 'Sociable', 'Playful', 'Intelligent', 'Active']
  },
  {
    id: 207,
    temprs: ['Affectionate', 'Lively', 'Inquisitive', 'Alert', 'Intelligent', 'Loving']
  },
  {
    id: 208,
    temprs: ['Affectionate', 'Energetic', 'Independent', 'Companionable', 'Familial', 'Unflappable']
  },
  {
    id: 210,
    temprs: ['Steady', 'Good-natured', 'Fearless', 'Devoted', 'Alert', 'Obedient', 'Confident', 'Self-assured', 'Calm', 'Courageous']
  },
  {
    id: 209,
    temprs: ['Strong Willed', 'Mischievous', 'Loyal', 'Dignified', 'Sensitive', 'Intelligent']
  },
  {
    id: 212,
    temprs: ['Friendly', 'Lively', 'Gentle', 'Watchful', 'Calm']
  },
  {
    id: 204,
    temprs: ['Energetic', 'Agile', 'Loyal', 'Obedient', 'Intelligent', 'Faithful']
  },
  {
    id: 213,
    temprs: ['Aloof', 'Reserved', 'Intelligent', 'Quiet']
  },
  {
    id: 214,
    temprs: ['Stubborn', 'Friendly', 'Sociable', 'Lively', 'Alert', 'Playful']
  },
  {
    id: 216,
    temprs: ['Fearless', 'Agile', 'Curious', 'Independent', 'Confident', 'Faithful']
  },
  {
    id: 218,
    temprs: ['Docile', 'Friendly', 'Dignified', 'Gentle']
  },
  {
    id: 221,
    temprs: ['Affectionate', 'Lively', 'Responsive', 'Alert', 'Loyal', 'Reserved', 'Playful', 'Gentle', 'Intelligent', 'Active', 'Trainable', 'Strong']
  },
  {
    id: 219,
    temprs: ['Feisty', 'Alert', 'Independent', 'Playful', 'Quick', 'Self-assured']
  },
  {
    id: 222,
    temprs: ['Charming', 'Fearless', 'Keen', 'Alert', 'Confident', 'Faithful']
  },
  {
    id: 223,
    temprs: ['Clever', 'Spunky', 'Outgoing', 'Friendly', 'Affectionate', 'Lively', 'Alert', 'Loyal', 'Independent', 'Playful', 'Gentle', 'Intelligent', 'Happy', 'Active', 'Courageous']
  },
  {
    id: 225,
    temprs: ['Outgoing', 'Loyal', 'Companionable', 'Gentle', 'Loving', 'Trainable']
  },
  {
    id: 226,
    temprs: ['Outgoing', 'Friendly', 'Alert', 'Gentle', 'Intelligent']
  },
  {
    id: 228,
    temprs: ['Friendly', 'Responsive', 'Inquisitive', 'Alert', 'Quick', 'Joyful']
  },
  {
    id: 232,
    temprs: ['Fearless', 'Affectionate', 'Alert', 'Playful', 'Intelligent', 'Active']
  },
  {
    id: 233,
    temprs: ['Affectionate', 'Spirited', 'Energetic', 'Playful', 'Intelligent', 'Faithful']
  },
  {
    id: 236,
    temprs: ['Docile', 'Friendly', 'Affectionate', 'Loyal', 'Patient', 'Gentle']
  },
  {
    id: 235,
    temprs: ['Trainable', 'Diligent', 'Affectionate', 'Loyal', 'Athletic', 'Intelligent']
  },
  {
    id: 238,
    temprs: ['Reliable', 'Fearless', 'Bold', 'Affectionate', 'Loyal', 'Intelligent', 'Courageous']
  },
  {
    id: 239,
    temprs: ['Trainable', 'Good-natured', 'Devoted', 'Lively', 'Playful', 'Intelligent']
  },
  {
    id: 242,
    temprs: ['Fearless', 'Friendly', 'Energetic', 'Alert', 'Intelligent', 'Watchful']
  },
  {
    id: 243,
    temprs: ['Protective', 'Loyal', 'Independent', 'Intelligent', 'Loving', 'Familial']
  },
  {
    id: 244,
    temprs: ['Strong Willed', 'Tenacious', 'Aloof', 'Stubborn', 'Intelligent', 'Protective']
  },
  {
    id: 245,
    temprs: ['Willful', 'Aloof', 'Assertive', 'Independent', 'Playful', 'Intelligent', 'Happy']
  },
  {
    id: 246,
    temprs: ['Affectionate', 'Energetic', 'Amiable', 'Reserved', 'Gentle', 'Sensitive']
  },
  {
    id: 248,
    temprs: ['Friendly', 'Spirited', 'Alert', 'Loyal', 'Playful', 'Intelligent']
  },
  {
    id: 250,
    temprs: ['Clever', 'Affectionate', 'Confident', 'Intelligent', 'Loving', 'Trainable']
  },
  {
    id: 251,
    temprs: ['Affectionate', 'Energetic', 'Loyal', 'Gentle', 'Quiet']
  },
  {
    id: 254,
    temprs: ['Stubborn', 'Friendly', 'Affectionate', 'Loyal', 'Playful', 'Active']
  },
  {
    id: 253,
    temprs: ['Steady', 'Aloof', 'Stubborn', 'Energetic', 'Alert', 'Intelligent', 'Powerful', 'Fast']
  },
  {
    id: 256,
    temprs: ['Hardy', 'Friendly', 'Alert', 'Independent', 'Gay', 'Active', 'Courageous']
  },
  {
    id: 258,
    temprs: ['Self-confidence', 'Aloof', 'Fearless', 'Alert', 'Companionable', 'Eager']
  },
  {
    id: 257,
    temprs: ['Friendly', 'Affectionate', 'Lively', 'Gentle', 'Intelligent', 'Quiet']
  },
  {
    id: 259,
    temprs: ['Fearless', 'Friendly', 'Bold', 'Keen', 'Alert', 'Quick']
  },
  {
    id: 260,
    temprs: ['Loyal', 'Gentle', 'Vigilant', 'Trainable', 'Proud']
  },
  {
    id: 264,
    temprs: ['Bold', 'Independent', 'Confident', 'Intelligent', 'Courageous']
  },
  {
    id: 262,
    temprs: ['Cheerful', 'Alert', 'Companionable', 'Intelligent', 'Protective', 'Calm']
  }
];

module.exports = {
  temprData
};