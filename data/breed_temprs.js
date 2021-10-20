const breedTemprs = [
  {
    name: 'Affenpinscher',
    temprs: ['Stubborn', 'Curious', 'Playful', 'Adventurous', 'Active', 'Fun-loving']
  },
  {
    name: 'Afghan Hound',
    temprs: ['Aloof', 'Clownish', 'Dignified', 'Independent', 'Happy']
  },
  {
    name: 'African Hunting Dog',
    temprs: ['Wild', 'Hardworking', 'Dutiful']
  },
  {
    name: 'Airedale Terrier',
    temprs: ['Outgoing', 'Friendly', 'Alert', 'Confident', 'Intelligent', 'Courageous']
  },
  {
    name: 'Akbash Dog',
    temprs: ['Loyal', 'Independent', 'Intelligent', 'Brave']
  },
  {
    name: 'Akita',
    temprs: ['Docile', 'Alert', 'Responsive', 'Dignified', 'Composed', 'Friendly', 'Receptive', 'Faithful', 'Courageous']
  },
  {
    name: 'Alapaha Blue Blood Bulldog',
    temprs: ['Loving', 'Protective', 'Trainable', 'Dutiful', 'Responsible']
  },
  {
    name: 'Alaskan Husky',
    temprs: ['Friendly', 'Energetic', 'Loyal', 'Gentle', 'Confident']
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
    name: 'American Eskimo Dog',
    temprs: ['Friendly', 'Alert', 'Reserved', 'Intelligent', 'Protective']
  },
  {
    name: 'American Bully',
    temprs: ['Strong Willed', 'Stubborn', 'Friendly', 'Clownish', 'Affectionate', 'Loyal', 'Obedient', 'Intelligent', 'Courageous']
  },
  {
    name: 'American Eskimo Dog (Miniature)',
    temprs: ['Friendly', 'Alert', 'Reserved', 'Intelligent', 'Protective']
  },
  {
    name: 'American Foxhound',
    temprs: ['Kind', 'Sweet-Tempered', 'Loyal', 'Independent', 'Intelligent', 'Loving']
  },
  {
    name: 'American Pit Bull Terrier',
    temprs: ['Strong Willed', 'Stubborn', 'Friendly', 'Clownish', 'Affectionate', 'Loyal', 'Obedient', 'Intelligent', 'Courageous']
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
    name: 'Anatolian Shepherd Dog',
    temprs: ['Steady', 'Bold', 'Independent', 'Confident', 'Intelligent', 'Proud']
  },
  {
    name: 'Appenzeller Sennenhund',
    temprs: ['Reliable', 'Fearless', 'Energetic', 'Lively', 'Self-assured']
  },
  {
    name: 'Australian Cattle Dog',
    temprs: ['Cautious', 'Energetic', 'Loyal', 'Obedient', 'Protective', 'Brave']
  },
  {
    name: 'Australian Kelpie',
    temprs: ['Friendly', 'Energetic', 'Alert', 'Loyal', 'Intelligent', 'Eager']
  },
  {
    name: 'Australian Shepherd',
    temprs: ['Good-natured', 'Affectionate', 'Intelligent', 'Active', 'Protective']
  },
  {
    name: 'Australian Terrier',
    temprs: ['Spirited', 'Alert', 'Loyal', 'Companionable', 'Even Tempered', 'Courageous']
  },
  {
    name: 'Azawakh',
    temprs: ['Aloof', 'Affectionate', 'Attentive', 'Rugged', 'Fierce', 'Refined']
  },
  {
    name: 'Barbet',
    temprs: ['Obedient', 'Companionable', 'Intelligent', 'Joyful']
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
    name: 'Basset Bleu de Gascogne',
    temprs: ['Affectionate', 'Lively', 'Agile', 'Curious', 'Happy', 'Active']
  },
  {
    name: 'Beagle',
    temprs: ['Amiable', 'Even Tempered', 'Excitable', 'Determined', 'Gentle', 'Intelligent']
  },
  {
    name: 'Beauceron',
    temprs: ['Fearless', 'Friendly', 'Intelligent', 'Protective', 'Calm']
  },
  {
    name: 'Bearded Collie',
    temprs: ['Self-confidence', 'Hardy', 'Lively', 'Alert', 'Intelligent', 'Active']
  },
  {
    name: 'Belgian Malinois',
    temprs: ['Watchful', 'Alert', 'Stubborn', 'Friendly', 'Confident', 'Hard-working', 'Active', 'Protective']
  },
  {
    name: 'Belgian Tervuren',
    temprs: ['Energetic', 'Alert', 'Loyal', 'Intelligent', 'Attentive', 'Protective']
  },
  {
    name: 'Bichon Frise',
    temprs: ['Feisty', 'Affectionate', 'Cheerful', 'Playful', 'Gentle', 'Sensitive']
  },
  {
    name: 'Bernese Mountain Dog',
    temprs: ['Affectionate', 'Loyal', 'Intelligent', 'Faithful']
  },
  {
    name: 'Black and Tan Coonhound',
    temprs: ['Easygoing', 'Gentle', 'Adaptable', 'Trusting', 'Even Tempered', 'Lovable']
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
    name: 'Bluetick Coonhound',
    temprs: ['Friendly', 'Intelligent', 'Active']
  },
  {
    name: 'Boerboel',
    temprs: ['Obedient', 'Confident', 'Intelligent', 'Dominant', 'Territorial']
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
    name: 'Bracco Italiano',
    temprs: ['Stubborn', 'Affectionate', 'Loyal', 'Playful', 'Companionable', 'Trainable']
  },
  {
    name: 'Briard',
    temprs: ['Fearless', 'Loyal', 'Obedient', 'Intelligent', 'Faithful', 'Protective']
  },
  {
    name: 'Brittany',
    temprs: ['Agile', 'Adaptable', 'Quick', 'Intelligent', 'Attentive', 'Happy']
  },
  {
    name: 'Bull Terrier',
    temprs: ['Trainable', 'Protective', 'Sweet-Tempered', 'Keen', 'Active']
  },
  {
    name: 'Bull Terrier (Miniature)',
    temprs: ['Trainable', 'Protective', 'Sweet-Tempered', 'Keen', 'Active', 'Territorial']
  },
  {
    name: 'Bullmastiff',
    temprs: ['Docile', 'Reliable', 'Devoted', 'Alert', 'Loyal', 'Reserved', 'Loving', 'Protective', 'Powerful', 'Calm', 'Courageous']
  },
  {
    name: 'Cairn Terrier',
    temprs: ['Hardy', 'Fearless', 'Assertive', 'Gay', 'Intelligent', 'Active']
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
    name: 'Caucasian Shepherd (Ovcharka)',
    temprs: ['Alert', 'Quick', 'Dominant', 'Powerful', 'Calm', 'Strong']
  },
  {
    name: 'Cavalier King Charles Spaniel',
    temprs: ['Fearless', 'Affectionate', 'Sociable', 'Patient', 'Playful', 'Adaptable']
  },
  {
    name: 'Chesapeake Bay Retriever',
    temprs: ['Affectionate', 'Intelligent', 'Quiet', 'Dominant', 'Happy', 'Protective']
  },
  {
    name: 'Chinese Crested',
    temprs: ['Affectionate', 'Sweet-Tempered', 'Lively', 'Alert', 'Playful', 'Happy']
  },
  {
    name: 'Chinese Shar-Pei',
    temprs: ['Suspicious', 'Affectionate', 'Devoted', 'Reserved', 'Independent', 'Loving']
  },
  {
    name: 'Chinook',
    temprs: ['Friendly', 'Alert', 'Dignified', 'Intelligent', 'Calm']
  },
  {
    name: 'Chow Chow',
    temprs: ['Aloof', 'Loyal', 'Independent', 'Quiet']
  },
  {
    name: 'Clumber Spaniel',
    temprs: ['Affectionate', 'Loyal', 'Dignified', 'Gentle', 'Calm', 'Great-hearted']
  },
  {
    name: 'Cocker Spaniel',
    temprs: ['Trainable', 'Friendly', 'Affectionate', 'Playful', 'Quiet', 'Faithful']
  },
  {
    name: 'Cocker Spaniel (American)',
    temprs: ['Outgoing', 'Sociable', 'Trusting', 'Joyful', 'Even Tempered', 'Merry']
  },
  {
    name: 'Coton de Tulear',
    temprs: ['Affectionate', 'Lively', 'Playful', 'Intelligent', 'Trainable', 'Vocal']
  },
  {
    name: 'Dalmatian',
    temprs: ['Outgoing', 'Friendly', 'Energetic', 'Playful', 'Sensitive', 'Intelligent', 'Active']
  },
  {
    name: 'Doberman Pinscher',
    temprs: ['Fearless', 'Energetic', 'Alert', 'Loyal', 'Obedient', 'Confident', 'Intelligent']
  },
  {
    name: 'Dogo Argentino',
    temprs: ['Friendly', 'Affectionate', 'Cheerful', 'Loyal', 'Tolerant', 'Protective']
  },
  {
    name: 'Dutch Shepherd',
    temprs: ['Reliable', 'Affectionate', 'Alert', 'Loyal', 'Obedient', 'Trainable']
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
    name: 'English Toy Terrier',
    temprs: ['Stubborn', 'Alert', 'Companionable', 'Intelligent', 'Cunning', 'Trainable']
  },
  {
    name: 'Eurasier',
    temprs: ['Alert', 'Reserved', 'Intelligent', 'Even Tempered', 'Watchful', 'Calm']
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
    name: 'German Pinscher',
    temprs: ['Spirited', 'Lively', 'Intelligent', 'Loving', 'Even Tempered', 'Familial']
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
    name: 'Golden Retriever',
    temprs: ['Intelligent', 'Kind', 'Reliable', 'Friendly', 'Trustworthy', 'Confident']
  },
  {
    name: 'Great Dane',
    temprs: ['Friendly', 'Devoted', 'Reserved', 'Gentle', 'Confident', 'Loving']
  },
  {
    name: 'Giant Schnauzer',
    temprs: ['Strong Willed', 'Kind', 'Loyal', 'Intelligent', 'Dominant', 'Powerful']
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
    name: 'Griffon Bruxellois',
    temprs: ['Self-important', 'Inquisitive', 'Alert', 'Companionable', 'Sensitive', 'Watchful']
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
    name: 'Irish Terrier',
    temprs: ['Respectful', 'Lively', 'Intelligent', 'Dominant', 'Protective', 'Trainable']
  },
  {
    name: 'Japanese Chin',
    temprs: ['Alert', 'Loyal', 'Independent', 'Intelligent', 'Loving', 'Cat-like']
  },
  {
    name: 'Japanese Spitz',
    temprs: ['Affectionate', 'Obedient', 'Playful', 'Companionable', 'Intelligent', 'Proud']
  },
  {
    name: 'Irish Wolfhound',
    temprs: ['Sweet-Tempered', 'Loyal', 'Dignified', 'Patient', 'Thoughtful', 'Generous']
  },
  {
    name: 'Keeshond',
    temprs: ['Agile', 'Obedient', 'Playful', 'Quick', 'Sturdy', 'Bright']
  },
  {
    name: 'Komondor',
    temprs: ['Steady', 'Fearless', 'Affectionate', 'Independent', 'Gentle', 'Calm']
  },
  {
    name: 'Kooikerhondje',
    temprs: ['Benevolent', 'Agile', 'Alert', 'Intelligent', 'Active', 'Territorial']
  },
  {
    name: 'Kuvasz',
    temprs: ['Clownish', 'Loyal', 'Patient', 'Independent', 'Intelligent', 'Protective']
  },
  {
    name: 'Labrador Retriever',
    temprs: ['Kind', 'Outgoing', 'Agile', 'Gentle', 'Intelligent', 'Trusting', 'Even Tempered']
  },
  {
    name: 'Lagotto Romagnolo',
    temprs: ['Keen', 'Loyal', 'Companionable', 'Loving', 'Active', 'Trainable']
  },
  {
    name: 'Lancashire Heeler',
    temprs: ['Clever', 'Friendly', 'Alert', 'Intelligent']
  },
  {
    name: 'Leonberger',
    temprs: ['Obedient', 'Fearless', 'Loyal', 'Companionable', 'Adaptable', 'Loving']
  },
  {
    name: 'Lhasa Apso',
    temprs: ['Steady', 'Fearless', 'Friendly', 'Devoted', 'Assertive', 'Spirited', 'Energetic', 'Lively', 'Alert', 'Obedient', 'Playful', 'Intelligent']
  },
  {
    name: 'Maltese',
    temprs: ['Playful', 'Docile', 'Fearless', 'Affectionate', 'Sweet-Tempered', 'Lively', 'Responsive', 'Easygoing', 'Gentle', 'Intelligent', 'Active']
  },
  {
    name: 'Miniature American Shepherd',
    temprs: ['Energetic', 'Loyal', 'Intelligent', 'Trainable']
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
    name: 'Newfoundland',
    temprs: ['Sweet-Tempered', 'Gentle', 'Trainable']
  },
  {
    name: 'Norfolk Terrier',
    temprs: ['Self-confidence', 'Fearless', 'Spirited', 'Companionable', 'Happy', 'Lovable']
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
    name: 'Olde English Bulldogge',
    temprs: ['Friendly', 'Alert', 'Confident', 'Loving', 'Courageous', 'Strong']
  },
  {
    name: 'Old English Sheepdog',
    temprs: ['Sociable', 'Bubbly', 'Playful', 'Adaptable', 'Intelligent', 'Loving']
  },
  {
    name: 'Pembroke Welsh Corgi',
    temprs: ['Tenacious', 'Outgoing', 'Friendly', 'Bold', 'Playful', 'Protective']
  },
  {
    name: 'Pekingese',
    temprs: ['Opinionated', 'Good-natured', 'Stubborn', 'Affectionate', 'Aggressive', 'Intelligent']
  },
  {
    name: 'Plott',
    temprs: ['Bold', 'Alert', 'Loyal', 'Intelligent']
  },
  {
    name: 'Perro de Presa Canario',
    temprs: ['Strong Willed', 'Suspicious', 'Gentle', 'Dominant', 'Calm']
  },
  {
    name: 'Pomeranian',
    temprs: ['Extroverted', 'Friendly', 'Sociable', 'Playful', 'Intelligent', 'Active']
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
    name: 'Rat Terrier',
    temprs: ['Affectionate', 'Lively', 'Inquisitive', 'Alert', 'Intelligent', 'Loving']
  },
  {
    name: 'Pharaoh Hound',
    temprs: ['Affectionate', 'Sociable', 'Playful', 'Intelligent', 'Active', 'Trainable']
  },
  {
    name: 'Redbone Coonhound',
    temprs: ['Affectionate', 'Energetic', 'Independent', 'Companionable', 'Familial', 'Unflappable']
  },
  {
    name: 'Rhodesian Ridgeback',
    temprs: ['Strong Willed', 'Mischievous', 'Loyal', 'Dignified', 'Sensitive', 'Intelligent']
  },
  {
    name: 'Rottweiler',
    temprs: ['Steady', 'Good-natured', 'Fearless', 'Devoted', 'Alert', 'Obedient', 'Confident', 'Self-assured', 'Calm', 'Courageous']
  },
  {
    name: 'Saluki',
    temprs: ['Aloof', 'Reserved', 'Intelligent', 'Quiet']
  },
  {
    name: 'Saint Bernard',
    temprs: ['Friendly', 'Lively', 'Gentle', 'Watchful', 'Calm']
  },
  {
    name: 'Pumi',
    temprs: ['Lively', 'Reserved', 'Intelligent', 'Active', 'Protective', 'Vocal']
  },
  {
    name: 'Samoyed',
    temprs: ['Stubborn', 'Friendly', 'Sociable', 'Lively', 'Alert', 'Playful']
  },
  {
    name: 'Schipperke',
    temprs: ['Fearless', 'Agile', 'Curious', 'Independent', 'Confident', 'Faithful']
  },
  {
    name: 'Scottish Deerhound',
    temprs: ['Docile', 'Friendly', 'Dignified', 'Gentle']
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
    name: 'Shetland Sheepdog',
    temprs: ['Affectionate', 'Lively', 'Responsive', 'Alert', 'Loyal', 'Reserved', 'Playful', 'Gentle', 'Intelligent', 'Active', 'Trainable', 'Strong']
  },
  {
    name: 'Shih Tzu',
    temprs: ['Clever', 'Spunky', 'Outgoing', 'Friendly', 'Affectionate', 'Lively', 'Alert', 'Loyal', 'Independent', 'Playful', 'Gentle', 'Intelligent', 'Happy', 'Active', 'Courageous']
  },
  {
    name: 'Siberian Husky',
    temprs: ['Outgoing', 'Friendly', 'Alert', 'Gentle', 'Intelligent']
  },
  {
    name: 'Shiloh Shepherd',
    temprs: ['Outgoing', 'Loyal', 'Companionable', 'Gentle', 'Loving', 'Trainable']
  },
  {
    name: 'Smooth Fox Terrier',
    temprs: ['Fearless', 'Affectionate', 'Alert', 'Playful', 'Intelligent', 'Active']
  },
  {
    name: 'Soft Coated Wheaten Terrier',
    temprs: ['Affectionate', 'Spirited', 'Energetic', 'Playful', 'Intelligent', 'Faithful']
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
    name: 'Tibetan Terrier',
    temprs: ['Affectionate', 'Energetic', 'Amiable', 'Reserved', 'Gentle', 'Sensitive']
  },
  {
    name: 'Toy Fox Terrier',
    temprs: ['Friendly', 'Spirited', 'Alert', 'Loyal', 'Playful', 'Intelligent']
  },
  {
    name: 'Treeing Walker Coonhound',
    temprs: ['Clever', 'Affectionate', 'Confident', 'Intelligent', 'Loving', 'Trainable']
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
    name: 'West Highland White Terrier',
    temprs: ['Hardy', 'Friendly', 'Alert', 'Independent', 'Gay', 'Active', 'Courageous']
  },
  {
    name: 'Whippet',
    temprs: ['Friendly', 'Affectionate', 'Lively', 'Gentle', 'Intelligent', 'Quiet']
  },
  {
    name: 'White Shepherd',
    temprs: ['Self-confidence', 'Aloof', 'Fearless', 'Alert', 'Companionable', 'Eager']
  },
  {
    name: 'Wire Fox Terrier',
    temprs: ['Fearless', 'Friendly', 'Bold', 'Keen', 'Alert', 'Quick']
  },
  {
    name: 'Wirehaired Pointing Griffon',
    temprs: ['Loyal', 'Gentle', 'Vigilant', 'Trainable', 'Proud']
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