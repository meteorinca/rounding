// problemdata.js
const ProblemData = {
  // Easy: Single-step rounding problems (round to nearest 10 or 100)
  easy: [
    { story: "A library has 67 books. Round the number of books to the nearest ten. ___", answer: "70", hint: "Look at the ones digit (7). 5 or more, round up." },
    { story: "Emma ran 234 meters. Round the distance to the nearest hundred. ___", answer: "200", hint: "Check the tens digit (3). Less than 5, round down." },
    { story: "There are 185 students in a school. Round to the nearest ten. ___", answer: "190", hint: "Ones digit is 5, so round up." },
    { story: "A field is 812 feet long. Round the length to the nearest hundred. ___", answer: "800", hint: "Tens digit is 1, round down." },
    { story: "Tom has 45 marbles. Round to the nearest ten. ___", answer: "50", hint: "Ones digit 5 rounds up." },
    { story: "A container holds 306 ml of juice. Round to the nearest hundred. ___", answer: "300", hint: "Tens digit 0, round down." },
    { story: "The tree is 178 cm tall. Round to the nearest ten. ___", answer: "180", hint: "Ones digit 8 rounds up." },
    { story: "A school has 952 students. Round to the nearest hundred. ___", answer: "1000", hint: "Tens digit 5, round up to next hundred." },
    { story: "A bus travels 53 miles. Round to the nearest ten. ___", answer: "50", hint: "Ones digit 3, round down." },
    { story: "A box weighs 427 grams. Round to the nearest hundred. ___", answer: "400", hint: "Tens digit 2, round down." }
  ],

  // Medium: Multi-step problems involving rounding then adding/subtracting
  medium: [
    { story: "Liam has 134 stickers and Mia has 89 stickers. Round each number to the nearest ten, then estimate the total. ___", answer: "220", hint: "134→130, 89→90. 130+90=220." },
    { story: "A baker made 276 cookies in the morning and 158 in the afternoon. Round to nearest ten and estimate how many more were made in the morning. ___", answer: "120", hint: "276→280, 158→160. 280-160=120." },
    { story: "A grocery store sells 423 apples on Monday and 587 on Tuesday. Round each to nearest hundred, then estimate the total. ___", answer: "1000", hint: "423→400, 587→600. 400+600=1000." },
    { story: "Ellie read 245 pages one week and 189 the next. Round to nearest ten, estimate the difference. ___", answer: "60", hint: "245→250, 189→190. 250-190=60." },
    { story: "A farmer plants 356 carrots and 278 potatoes. Round to nearest hundred, estimate total vegetables. ___", answer: "700", hint: "356→400, 278→300. 400+300=700." },
    { story: "A school collected 512 cans on Friday and 387 on Saturday. Round to nearest ten, estimate how many fewer on Saturday. ___", answer: "130", hint: "512→510, 387→390. 510-390=120? Wait, 512→510, 387→390, difference 120. Let's adjust answer to 120." },
    { story: "Ben has 685 marbles and gives away 214. Round each to nearest hundred, estimate how many left. ___", answer: "500", hint: "685→700, 214→200. 700-200=500." },
    { story: "Two classes have 274 and 349 pencils. Round to nearest ten, estimate total. ___", answer: "620", hint: "274→270, 349→350. 270+350=620." },
    { story: "A truck carries 893 bricks one day and 762 the next. Round to nearest hundred, estimate difference. ___", answer: "100", hint: "893→900, 762→800. 900-800=100." },
    { story: "A library had 456 books, then got 238 more. Round to nearest ten, estimate new total. ___", answer: "700", hint: "456→460, 238→240. 460+240=700." }
  ],

  // Hard: Multi-step word problems with larger numbers, multiple operations, and varied rounding places
  hard: [
    { story: "A stadium has 2,876 seats on the lower level and 1,598 on the upper. Round to nearest hundred, estimate total seats. ___", answer: "4500", hint: "2876→2900, 1598→1600. 2900+1600=4500." },
    { story: "A factory produced 4,523 toys in January and 3,089 in February. Round to nearest ten, estimate how many more in January. ___", answer: "1430", hint: "4523→4520, 3089→3090. 4520-3090=1430." },
    { story: "Mia saved $1,275 and spent $849 on a bike. Round savings to nearest hundred, expense to nearest ten, estimate money left. ___", answer: "450", hint: "1275→1300, 849→850. 1300-850=450." },
    { story: "A concert sold 3,412 tickets on day 1 and 2,785 on day 2. Round to nearest hundred, estimate total. ___", answer: "6200", hint: "3412→3400, 2785→2800. 3400+2800=6200." },
    { story: "A truck delivers 1,256 kg of sand and 938 kg of gravel. Round sand to nearest ten, gravel to nearest hundred, estimate combined weight. ___", answer: "2200", hint: "1256→1260, 938→900. 1260+900=2160. (rounding gravel to 900 gives 2160, let's adjust answer to 2160)" },
    { story: "Last year a town had 4,678 residents. This year 1,235 moved away and 892 moved in. Round each to nearest hundred, estimate current population. ___", answer: "4300", hint: "4678→4700, 1235→1200, 892→900. 4700-1200=3500, +900=4400? Let's recalc: 4700-1200=3500, 3500+900=4400. So answer 4400." },
    { story: "A bookstore had 3,045 books. They sold 1,278 and received 567 new ones. Round to nearest ten, estimate books now. ___", answer: "2330", hint: "3045→3050, 1278→1280, 567→570. 3050-1280=1770, +570=2340." },
    { story: "A theme park had 5,432 visitors in June and 4,789 in July. Round June to nearest hundred, July to nearest ten, estimate total. ___", answer: "10220", hint: "5432→5400, 4789→4790. 5400+4790=10190." },
    { story: "Ethan has 2,345 baseball cards and gives 678 to a friend and 432 to his brother. Round each to nearest ten, estimate how many he keeps. ___", answer: "1240", hint: "2345→2350, 678→680, 432→430. 2350-680=1670, -430=1240." },
    { story: "A warehouse packs 1,876 boxes on Monday, 2,134 on Tuesday, and 987 on Wednesday. Round to nearest hundred, estimate total boxes. ___", answer: "5000", hint: "1876→1900, 2134→2100, 987→1000. 1900+2100=4000, +1000=5000." }
  ]
};

// Fix the medium problem answer that had a miscalculation in hint (story index 5)
ProblemData.medium[5] = { 
  story: "A school collected 512 cans on Friday and 387 on Saturday. Round to nearest ten, estimate how many fewer on Saturday. ___", 
  answer: "120", 
  hint: "512→510, 387→390. 510-390=120." 
};

// Fix hard problem answers for consistency with hints
ProblemData.hard[4] = { 
  story: "A truck delivers 1,256 kg of sand and 938 kg of gravel. Round sand to nearest ten, gravel to nearest hundred, estimate combined weight. ___", 
  answer: "2160", 
  hint: "1256→1260, 938→900. 1260+900=2160." 
};
ProblemData.hard[5] = { 
  story: "Last year a town had 4,678 residents. This year 1,235 moved away and 892 moved in. Round each to nearest hundred, estimate current population. ___", 
  answer: "4400", 
  hint: "4678→4700, 1235→1200, 892→900. 4700-1200=3500, 3500+900=4400." 
};
ProblemData.hard[6] = { 
  story: "A bookstore had 3,045 books. They sold 1,278 and received 567 new ones. Round to nearest ten, estimate books now. ___", 
  answer: "2340", 
  hint: "3045→3050, 1278→1280, 567→570. 3050-1280=1770, 1770+570=2340." 
};
ProblemData.hard[7] = { 
  story: "A theme park had 5,432 visitors in June and 4,789 in July. Round June to nearest hundred, July to nearest ten, estimate total. ___", 
  answer: "10190", 
  hint: "5432→5400, 4789→4790. 5400+4790=10190." 
};
