const breedTemprs = [
  {
    name: 'Affenpinscher',
    temprs: ['Stubborn', 'Curious', 'Playful', 'Adventurous', 'Active', 'Fun-loving']
  },
  {
    name: 'Airedale Terrier',
    temprs: ['Outgoing', 'Friendly', 'Alert', 'Confident', 'Intelligent', 'Courageous']
  },
  {
    name: 'Akita',
    temprs: ['Docile', 'Alert', 'Responsive', 'Dignified', 'Composed', 'Friendly', 'Receptive', 'Faithful', 'Courageous']
  },
  {
    name: 'American Bulldog',
    temprs: ['Friendly', 'Assertive', 'Energetic', 'Loyal', 'Gentle', 'Confident', 'Dominant']
  },
  {
    name: 'Alaskan Malamute',
    temprs: ['Friendly', 'Affectionate', 'Devoted', 'Loyal', 'Dignified', 'Playful']
  },
  {
    name: 'Afghan Hound',
    temprs: ['Aloof', 'Clownish', 'Dignified', 'Independent', 'Happy']
  },
  {
    name: 'American Bully',
    temprs: ['Strong Willed', 'Stubborn', 'Friendly', 'Clownish', 'Affectionate', 'Loyal', 'Obedient', 'Intelligent', 'Courageous']
  },
  {
    name: 'American Eskimo Dog',
    temprs: ['Friendly', 'Alert', 'Reserved', 'Intelligent', 'Protective']
  },
  {
    name: 'American Foxhound',
    temprs: ['Kind', 'Sweet-Tempered', 'Loyal', 'Independent', 'Intelligent', 'Loving']
  },
  {
    name: 'American Staffordshire Terrier',
    temprs: ['Tenacious', 'Friendly', 'Devoted', 'Loyal', 'Attentive', 'Courageous']
  },
  {
    name: 'American Water Spaniel',
    temprs: ['Friendly', 'Energetic', 'Obedient', 'Intelligent', 'Protective', 'Trainable']
  },
  {
    name: 'Australian Shepherd',
    temprs: ['Good-natured', 'Affectionate', 'Intelligent', 'Active', 'Protective']
  },
  {
    name: 'Australian Kelpie',
    temprs: ['Friendly', 'Energetic', 'Alert', 'Loyal', 'Intelligent', 'Eager']
  },
  {
    name: 'Australian Terrier',
    temprs: ['Spirited', 'Alert', 'Loyal', 'Companionable', 'Even Tempered', 'Courageous']
  },
  {
    name: 'Basenji',
    temprs: ['Affectionate', 'Energetic', 'Alert', 'Curious', 'Playful', 'Intelligent']
  },
  {
    name: 'Basset Hound',
    temprs: ['Tenacious', 'Friendly', 'Affectionate', 'Devoted', 'Sweet-Tempered', 'Gentle']
  },
  {
    name: 'Beagle',
    temprs: ['Amiable', 'Even Tempered', 'Excitable', 'Determined', 'Gentle', 'Intelligent']
  },
  {
    name: 'Bearded Collie',
    temprs: ['Self-confidence', 'Hardy', 'Lively', 'Alert', 'Intelligent', 'Active']
  },
  {
    name: 'Bichon Frise',
    temprs: ['Feisty', 'Affectionate', 'Cheerful', 'Playful', 'Gentle', 'Sensitive']
  },
  {
    name: 'Beauceron',
    temprs: ['Fearless', 'Friendly', 'Intelligent', 'Protective', 'Calm']
  },
  {
    name: 'Bernese Mountain Dog',
    temprs: ['Affectionate', 'Loyal', 'Intelligent', 'Faithful']
  },
  {
    name: 'Bloodhound',
    temprs: ['Stubborn', 'Affectionate', 'Gentle', 'Even Tempered']
  },
  {
    name: 'Bedlington Terrier',
    temprs: ['Affectionate', 'Spirited', 'Intelligent', 'Good-tempered']
  },
  {
    name: 'Border Collie',
    temprs: ['Tenacious', 'Keen', 'Energetic', 'Responsive', 'Alert', 'Intelligent']
  },
  {
    name: 'Border Terrier',
    temprs: ['Fearless', 'Affectionate', 'Alert', 'Obedient', 'Intelligent', 'Even Tempered']
  },
  {
    name: 'Boston Terrier',
    temprs: ['Friendly', 'Lively', 'Intelligent']
  },
  {
    name: 'Boerboel',
    temprs: ['Obedient', 'Confident', 'Intelligent', 'Dominant', 'Territorial']
  },
  {
    name: 'Bouvier des Flandres',
    temprs: ['Protective', 'Loyal', 'Gentle', 'Intelligent', 'Familial', 'Rational']
  },
  {
    name: 'Boxer',
    temprs: ['Devoted', 'Fearless', 'Friendly', 'Cheerful', 'Energetic', 'Loyal', 'Playful', 'Confident', 'Intelligent', 'Bright', 'Brave', 'Calm']
  },
  {
    name: 'Boykin Spaniel',
    temprs: ['Friendly', 'Energetic', 'Companionable', 'Intelligent', 'Eager', 'Trainable']
  },
  {
    name: 'Bull Terrier',
    temprs: ['Trainable', 'Protective', 'Sweet-Tempered', 'Keen', 'Active']
  },
  {
    name: 'Briard',
    temprs: ['Fearless', 'Loyal', 'Obedient', 'Intelligent', 'Faithful', 'Protective']
  },
  {
    name: 'Bullmastiff',
    temprs: ['Docile', 'Reliable', 'Devoted', 'Alert', 'Loyal', 'Reserved', 'Loving', 'Protective', 'Powerful', 'Calm', 'Courageous']
  },
  {
    name: 'Cane Corso',
    temprs: ['Trainable', 'Reserved', 'Stable', 'Quiet', 'Even Tempered', 'Calm']
  },
  {
    name: 'Cardigan Welsh Corgi',
    temprs: ['Affectionate', 'Devoted', 'Alert', 'Companionable', 'Intelligent', 'Active']
  },
  {
    name: 'Catahoula Leopard Dog',
    temprs: ['Energetic', 'Inquisitive', 'Independent', 'Gentle', 'Intelligent', 'Loving']
  },
  {
    name: 'Cavalier King Charles Spaniel',
    temprs: ['Fearless', 'Affectionate', 'Sociable', 'Patient', 'Playful', 'Adaptable']
  },
  {
    name: 'Cairn Terrier',
    temprs: ['Hardy', 'Fearless', 'Assertive', 'Gay', 'Intelligent', 'Active']
  },
  {
    name: 'Chesapeake Bay Retriever',
    temprs: ['Affectionate', 'Intelligent', 'Quiet', 'Dominant', 'Happy', 'Protective']
  },
  {
    name: 'Chinook',
    temprs: ['Friendly', 'Alert', 'Dignified', 'Intelligent', 'Calm']
  },
  {
    name: 'Clumber Spaniel',
    temprs: ['Affectionate', 'Loyal', 'Dignified', 'Gentle', 'Calm', 'Great-hearted']
  },
  {
    name: 'Chow Chow',
    temprs: ['Aloof', 'Loyal', 'Independent', 'Quiet']
  },
  {
    name: 'Cocker Spaniel',
    temprs: ['Trainable', 'Friendly', 'Affectionate', 'Playful', 'Quiet', 'Faithful']
  },
  {
    name: 'Coton de Tulear',
    temprs: ['Affectionate', 'Lively', 'Playful', 'Intelligent', 'Trainable', 'Vocal']
  },
  {
    name: 'Doberman Pinscher',
    temprs: ['Fearless', 'Energetic', 'Alert', 'Loyal', 'Obedient', 'Confident', 'Intelligent']
  },
  {
    name: 'Dalmatian',
    temprs: ['Outgoing', 'Friendly', 'Energetic', 'Playful', 'Sensitive', 'Intelligent', 'Active']
  },
  {
    name: 'Dutch Shepherd',
    temprs: ['Reliable', 'Affectionate', 'Alert', 'Loyal', 'Obedient', 'Trainable']
  },
  {
    name: 'Dogo Argentino',
    temprs: ['Friendly', 'Affectionate', 'Cheerful', 'Loyal', 'Tolerant', 'Protective']
  },
  {
    name: 'English Setter',
    temprs: ['Strong Willed', 'Mischievous', 'Affectionate', 'Energetic', 'Playful', 'Companionable', 'Gentle', 'Hard-working', 'Intelligent', 'Eager', 'People-Oriented']
  },
  {
    name: 'English Shepherd',
    temprs: ['Kind', 'Energetic', 'Independent', 'Adaptable', 'Intelligent', 'Bossy']
  },
  {
    name: 'English Springer Spaniel',
    temprs: ['Affectionate', 'Cheerful', 'Alert', 'Intelligent', 'Attentive', 'Active']
  },
  {
    name: 'English Toy Spaniel',
    temprs: ['Affectionate', 'Reserved', 'Playful', 'Gentle', 'Happy', 'Loving']
  },
  {
    name: 'Field Spaniel',
    temprs: ['Docile', 'Cautious', 'Sociable', 'Sensitive', 'Adaptable', 'Familial']
  },
  {
    name: 'Finnish Lapphund',
    temprs: ['Friendly', 'Keen', 'Faithful', 'Calm', 'Courageous']
  },
  {
    name: 'Finnish Spitz',
    temprs: ['Playful', 'Loyal', 'Independent', 'Intelligent', 'Happy', 'Vocal']
  },
  {
    name: 'French Bulldog',
    temprs: ['Playful', 'Affectionate', 'Keen', 'Sociable', 'Lively', 'Alert', 'Easygoing', 'Patient', 'Athletic', 'Bright']
  },
  {
    name: 'German Shepherd Dog',
    temprs: ['Alert', 'Loyal', 'Obedient', 'Curious', 'Confident', 'Intelligent', 'Watchful', 'Courageous']
  },
  {
    name: 'German Shorthaired Pointer',
    temprs: ['Boisterous', 'Bold', 'Affectionate', 'Intelligent', 'Cooperative', 'Trainable']
  },
  {
    name: 'Glen of Imaal Terrier',
    temprs: ['Spirited', 'Agile', 'Loyal', 'Gentle', 'Active', 'Courageous']
  },
  {
    name: 'German Pinscher',
    temprs: ['Spirited', 'Lively', 'Intelligent', 'Loving', 'Even Tempered', 'Familial']
  },
  {
    name: 'Giant Schnauzer',
    temprs: ['Strong Willed', 'Kind', 'Loyal', 'Intelligent', 'Dominant', 'Powerful']
  },
  {
    name: 'Great Dane',
    temprs: ['Friendly', 'Devoted', 'Reserved', 'Gentle', 'Confident', 'Loving']
  },
  {
    name: 'Golden Retriever',
    temprs: ['Intelligent', 'Kind', 'Reliable', 'Friendly', 'Trustworthy', 'Confident']
  },
  {
    name: 'Great Pyrenees',
    temprs: ['Strong Willed', 'Fearless', 'Affectionate', 'Patient', 'Gentle', 'Confident']
  },
  {
    name: 'Gordon Setter',
    temprs: ['Fearless', 'Alert', 'Loyal', 'Confident', 'Gay', 'Eager']
  },
  {
    name: 'Greyhound',
    temprs: ['Affectionate', 'Athletic', 'Gentle', 'Intelligent', 'Quiet', 'Even Tempered']
  },
  {
    name: 'Havanese',
    temprs: ['Affectionate', 'Responsive', 'Playful', 'Companionable', 'Gentle', 'Intelligent']
  },
  {
    name: 'Harrier',
    temprs: ['Outgoing', 'Friendly', 'Cheerful', 'Sweet-Tempered', 'Tolerant', 'Active']
  },
  {
    name: 'Irish Setter',
    temprs: ['Affectionate', 'Energetic', 'Lively', 'Independent', 'Playful', 'Companionable']
  },
  {
    name: 'Italian Greyhound',
    temprs: ['Mischievous', 'Affectionate', 'Agile', 'Athletic', 'Companionable', 'Intelligent']
  },
  {
    name: 'Japanese Chin',
    temprs: ['Alert', 'Loyal', 'Independent', 'Intelligent', 'Loving', 'Cat-like']
  },
  {
    name: 'Irish Terrier',
    temprs: ['Respectful', 'Lively', 'Intelligent', 'Dominant', 'Protective', 'Trainable']
  },
  {
    name: 'Irish Wolfhound',
    temprs: ['Sweet-Tempered', 'Loyal', 'Dignified', 'Patient', 'Thoughtful', 'Generous']
  },
  {
    name: 'Kuvasz',
    temprs: ['Clownish', 'Loyal', 'Patient', 'Independent', 'Intelligent', 'Protective']
  },
  {
    name: 'Komondor',
    temprs: ['Steady', 'Fearless', 'Affectionate', 'Independent', 'Gentle', 'Calm']
  },
  {
    name: 'Lancashire Heeler',
    temprs: ['Clever', 'Friendly', 'Alert', 'Intelligent']
  },
  {
    name: 'Labrador Retriever',
    temprs: ['Kind', 'Outgoing', 'Agile', 'Gentle', 'Intelligent', 'Trusting', 'Even Tempered']
  },
  {
    name: 'Lhasa Apso',
    temprs: ['Steady', 'Fearless', 'Friendly', 'Devoted', 'Assertive', 'Spirited', 'Energetic', 'Lively', 'Alert', 'Obedient', 'Playful', 'Intelligent']
  },
  {
    name: 'Keeshond',
    temprs: ['Agile', 'Obedient', 'Playful', 'Quick', 'Sturdy', 'Bright']
  },
  {
    name: 'Leonberger',
    temprs: ['Obedient', 'Fearless', 'Loyal', 'Companionable', 'Adaptable', 'Loving']
  },
  {
    name: 'Maltese',
    temprs: ['Playful', 'Docile', 'Fearless', 'Affectionate', 'Sweet-Tempered', 'Lively', 'Responsive', 'Easygoing', 'Gentle', 'Intelligent', 'Active']
  },
  {
    name: 'Norfolk Terrier',
    temprs: ['Self-confidence', 'Fearless', 'Spirited', 'Companionable', 'Happy', 'Lovable']
  },
  {
    name: 'Miniature Pinscher',
    temprs: ['Clever', 'Outgoing', 'Friendly', 'Energetic', 'Responsive', 'Playful']
  },
  {
    name: 'Miniature Schnauzer',
    temprs: ['Fearless', 'Friendly', 'Spirited', 'Alert', 'Obedient', 'Intelligent']
  },
  {
    name: 'Norwich Terrier',
    temprs: ['Hardy', 'Affectionate', 'Energetic', 'Sensitive', 'Intelligent']
  },
  {
    name: 'Nova Scotia Duck Tolling Retriever',
    temprs: ['Outgoing', 'Alert', 'Patient', 'Intelligent', 'Loving']
  },
  {
    name: 'Papillon',
    temprs: ['Hardy', 'Friendly', 'Energetic', 'Alert', 'Intelligent', 'Happy']
  },
  {
    name: 'Old English Sheepdog',
    temprs: ['Sociable', 'Bubbly', 'Playful', 'Adaptable', 'Intelligent', 'Loving']
  },
  {
    name: 'Pekingese',
    temprs: ['Opinionated', 'Good-natured', 'Stubborn', 'Affectionate', 'Aggressive', 'Intelligent']
  },
  {
    name: 'Pembroke Welsh Corgi',
    temprs: ['Tenacious', 'Outgoing', 'Friendly', 'Bold', 'Playful', 'Protective']
  },
  {
    name: 'Pug',
    temprs: ['Docile', 'Clever', 'Charming', 'Stubborn', 'Sociable', 'Playful', 'Quiet', 'Attentive']
  },
  {
    name: 'Puli',
    temprs: ['Energetic', 'Agile', 'Loyal', 'Obedient', 'Intelligent', 'Faithful']
  },
  {
    name: 'Pomeranian',
    temprs: ['Extroverted', 'Friendly', 'Sociable', 'Playful', 'Intelligent', 'Active']
  },
  {
    name: 'Rat Terrier',
    temprs: ['Affectionate', 'Lively', 'Inquisitive', 'Alert', 'Intelligent', 'Loving']
  },
  {
    name: 'Pharaoh Hound',
    temprs: ['Affectionate', 'Sociable', 'Playful', 'Intelligent', 'Active', 'Trainable']
  },
  {
    name: 'Rottweiler',
    temprs: ['Steady', 'Good-natured', 'Fearless', 'Devoted', 'Alert', 'Obedient', 'Confident', 'Self-assured', 'Calm', 'Courageous']
  },
  {
    name: 'Rhodesian Ridgeback',
    temprs: ['Strong Willed', 'Mischievous', 'Loyal', 'Dignified', 'Sensitive', 'Intelligent']
  },
  {
    name: 'Saluki',
    temprs: ['Aloof', 'Reserved', 'Intelligent', 'Quiet']
  },
  {
    name: 'Pumi',
    temprs: ['Lively', 'Reserved', 'Intelligent', 'Active', 'Protective', 'Vocal']
  },
  {
    name: 'Schipperke',
    temprs: ['Fearless', 'Agile', 'Curious', 'Independent', 'Confident', 'Faithful']
  },
  {
    name: 'Saint Bernard',
    temprs: ['Friendly', 'Lively', 'Gentle', 'Watchful', 'Calm']
  },
  {
    name: 'Samoyed',
    temprs: ['Stubborn', 'Friendly', 'Sociable', 'Lively', 'Alert', 'Playful']
  },
  {
    name: 'Shiba Inu',
    temprs: ['Charming', 'Fearless', 'Keen', 'Alert', 'Confident', 'Faithful']
  },
  {
    name: 'Scottish Terrier',
    temprs: ['Feisty', 'Alert', 'Independent', 'Playful', 'Quick', 'Self-assured']
  },
  {
    name: 'Shih Tzu',
    temprs: ['Clever', 'Spunky', 'Outgoing', 'Friendly', 'Affectionate', 'Lively', 'Alert', 'Loyal', 'Independent', 'Playful', 'Gentle', 'Intelligent', 'Happy', 'Active', 'Courageous']
  },
  {
    name: 'Smooth Fox Terrier',
    temprs: ['Fearless', 'Affectionate', 'Alert', 'Playful', 'Intelligent', 'Active']
  },
  {
    name: 'Siberian Husky',
    temprs: ['Outgoing', 'Friendly', 'Alert', 'Gentle', 'Intelligent']
  },
  {
    name: 'Scottish Deerhound',
    temprs: ['Docile', 'Friendly', 'Dignified', 'Gentle']
  },
  {
    name: 'Silky Terrier',
    temprs: ['Friendly', 'Responsive', 'Inquisitive', 'Alert', 'Quick', 'Joyful']
  },
  {
    name: 'Spinone Italiano',
    temprs: ['Docile', 'Friendly', 'Affectionate', 'Loyal', 'Patient', 'Gentle']
  },
  {
    name: 'Staffordshire Bull Terrier',
    temprs: ['Reliable', 'Fearless', 'Bold', 'Affectionate', 'Loyal', 'Intelligent', 'Courageous']
  },
  {
    name: 'Thai Ridgeback',
    temprs: ['Protective', 'Loyal', 'Independent', 'Intelligent', 'Loving', 'Familial']
  },
  {
    name: 'Standard Schnauzer',
    temprs: ['Trainable', 'Good-natured', 'Devoted', 'Lively', 'Playful', 'Intelligent']
  },
  {
    name: 'Swedish Vallhund',
    temprs: ['Fearless', 'Friendly', 'Energetic', 'Alert', 'Intelligent', 'Watchful']
  },
  {
    name: 'Tibetan Mastiff',
    temprs: ['Strong Willed', 'Tenacious', 'Aloof', 'Stubborn', 'Intelligent', 'Protective']
  },
  {
    name: 'Tibetan Spaniel',
    temprs: ['Willful', 'Aloof', 'Assertive', 'Independent', 'Playful', 'Intelligent', 'Happy']
  },
  {
    name: 'Spanish Water Dog',
    temprs: ['Trainable', 'Diligent', 'Affectionate', 'Loyal', 'Athletic', 'Intelligent']
  },
  {
    name: 'Toy Fox Terrier',
    temprs: ['Friendly', 'Spirited', 'Alert', 'Loyal', 'Playful', 'Intelligent']
  },
  {
    name: 'Tibetan Terrier',
    temprs: ['Affectionate', 'Energetic', 'Amiable', 'Reserved', 'Gentle', 'Sensitive']
  },
  {
    name: 'Vizsla',
    temprs: ['Affectionate', 'Energetic', 'Loyal', 'Gentle', 'Quiet']
  },
  {
    name: 'Weimaraner',
    temprs: ['Steady', 'Aloof', 'Stubborn', 'Energetic', 'Alert', 'Intelligent', 'Powerful', 'Fast']
  },
  {
    name: 'Welsh Springer Spaniel',
    temprs: ['Stubborn', 'Friendly', 'Affectionate', 'Loyal', 'Playful', 'Active']
  },
  {
    name: 'Whippet',
    temprs: ['Friendly', 'Affectionate', 'Lively', 'Gentle', 'Intelligent', 'Quiet']
  },
  {
    name: 'Wirehaired Pointing Griffon',
    temprs: ['Loyal', 'Gentle', 'Vigilant', 'Trainable', 'Proud']
  },
  {
    name: 'Wire Fox Terrier',
    temprs: ['Fearless', 'Friendly', 'Bold', 'Keen', 'Alert', 'Quick']
  },
  {
    name: 'Xoloitzcuintli',
    temprs: ['Cheerful', 'Alert', 'Companionable', 'Intelligent', 'Protective', 'Calm']
  },
  {
    name: 'Yorkshire Terrier',
    temprs: ['Bold', 'Independent', 'Confident', 'Intelligent', 'Courageous']
  }
];


module.exports = {
  breedTemprs
};