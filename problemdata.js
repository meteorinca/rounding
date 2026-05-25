/**
 * 🎯 ROUNDING TOOLKIT - PROBLEM DATA
 * Multi-step rounding word problems for 3rd/4th grade
 */

const PROBLEM_DATA = {
  easy: [
    {
      id: 'e1',
      type: 'round',
      question: 'Round 47 to the nearest ten.',
      context: null,
      steps: [
        { hint: 'Look at the tens place. 47 is between 40 and 50.' },
        { hint: 'Look at the ones digit (7). Is it 5 or more?' }
      ],
      answer: 50,
      roundTo: 'ten',
      explanation: '47 rounded to the nearest ten is 50 because the ones digit (7) is 5 or greater.'
    },
    {
      id: 'e2',
      type: 'round',
      question: 'Round 312 to the nearest hundred.',
      context: null,
      steps: [
        { hint: 'Think: 312 is between 300 and 400.' },
        { hint: 'Look at the tens digit (1). Is it 5 or more?' }
      ],
      answer: 300,
      roundTo: 'hundred',
      explanation: '312 rounded to the nearest hundred is 300 because the tens digit (1) is less than 5.'
    },
    {
      id: 'e3',
      type: 'round',
      question: 'Round 85 to the nearest ten.',
      context: null,
      steps: [
        { hint: '85 is exactly halfway between 80 and 90.' },
        { hint: 'When the digit is 5, we round up!' }
      ],
      answer: 90,
      roundTo: 'ten',
      explanation: '85 rounded to the nearest ten is 90. When the digit is exactly 5, we round up!'
    },
    {
      id: 'e4',
      type: 'round',
      question: 'Round 628 to the nearest ten.',
      context: null,
      steps: [
        { hint: '628 is between 620 and 630.' },
        { hint: 'Check the ones digit. Is 8 greater than or equal to 5?' }
      ],
      answer: 630,
      roundTo: 'ten',
      explanation: '628 rounded to the nearest ten is 630 because the ones digit (8) is 5 or greater.'
    },
    {
      id: 'e5',
      type: 'round',
      question: 'Round 1,549 to the nearest hundred.',
      context: null,
      steps: [
        { hint: '1,549 is between 1,500 and 1,600.' },
        { hint: 'Look at the tens digit (4). Is it 5 or more?' }
      ],
      answer: 1500,
      roundTo: 'hundred',
      explanation: '1,549 rounded to the nearest hundred is 1,500 because the tens digit (4) is less than 5.'
    },
    {
      id: 'e6',
      type: 'round',
      question: 'Round 73 to the nearest ten.',
      context: null,
      steps: [
        { hint: '73 is between 70 and 80.' },
        { hint: 'The ones digit is 3. Remember the rule: 0-4 stays the same, 5-9 goes up!' }
      ],
      answer: 70,
      roundTo: 'ten',
      explanation: '73 rounded to the nearest ten is 70 because the ones digit (3) is less than 5.'
    },
    {
      id: 'e7',
      type: 'round',
      question: 'Round 2,071 to the nearest hundred.',
      context: null,
      steps: [
        { hint: '2,071 is between 2,000 and 2,100.' },
        { hint: 'The tens digit is 7. What does that tell you?' }
      ],
      answer: 2100,
      roundTo: 'hundred',
      explanation: '2,071 rounded to the nearest hundred is 2,100 because the tens digit (7) is 5 or greater.'
    },
    {
      id: 'e8',
      type: 'round',
      question: 'Round 456 to the nearest ten.',
      context: null,
      steps: [
        { hint: 'Find where 456 fits between two tens: 450 and 460.' },
        { hint: 'The ones digit is 6. Is that in the "round up" group?' }
      ],
      answer: 460,
      roundTo: 'ten',
      explanation: '456 rounded to the nearest ten is 460 because the ones digit (6) is 5 or greater.'
    }
  ],

  medium: [
    {
      id: 'm1',
      type: 'wordProblem',
      scenario: 'Sarah is saving money to buy a video game.',
      question: 'Sarah saved $18 in September, $24 in October, and $31 in November. About how much money did she save in total? Round to the nearest ten.',
      context: 'Money saving over time',
      steps: [
        { hint: 'First, add all three amounts: $18 + $24 + $31.' },
        { hint: 'Now round your sum to the nearest ten.' },
        { hint: 'Look at the ones digit. Remember the rounding rule!' }
      ],
      answer: 70,
      intermediate: { sum: 73 },
      explanation: '18 + 24 + 31 = 73. 73 rounded to the nearest ten is 70 because the ones digit (3) is less than 5.'
    },
    {
      id: 'm2',
      type: 'wordProblem',
      scenario: 'A library is organizing books on shelves.',
      question: 'The library has 3 shelves with 28 books on each shelf. About how many books are there total? Round to the nearest ten.',
      context: 'Equal groups multiplication',
      steps: [
        { hint: 'First, multiply: 3 × 28 to find the exact number of books.' },
        { hint: 'Now round that number to the nearest ten.' },
        { hint: 'Is the ones digit 5 or more, or less than 5?' }
      ],
      answer: 80,
      intermediate: { product: 84 },
      explanation: '3 × 28 = 84 books. 84 rounded to the nearest ten is 80 because the ones digit (4) is less than 5.'
    },
    {
      id: 'm3',
      type: 'wordProblem',
      scenario: 'A school is ordering pizza for a party.',
      question: 'There are 146 students and 27 teachers attending. About how many people will be at the party? Round to the nearest ten.',
      context: 'Addition with larger numbers',
      steps: [
        { hint: 'Add the number of students and teachers: 146 + 27.' },
        { hint: 'Now round your answer to the nearest ten.' },
        { hint: 'Check the ones digit of your sum.' }
      ],
      answer: 170,
      intermediate: { sum: 173 },
      explanation: '146 + 27 = 173 people. 173 rounded to the nearest ten is 170 because the ones digit (3) is less than 5.'
    },
    {
      id: 'm4',
      type: 'wordProblem',
      scenario: 'Maya is reading a book series.',
      question: 'Maya read 185 pages the first week and 248 pages the second week. About how many pages did she read? Round to the nearest hundred.',
      context: 'Addition then rounding',
      steps: [
        { hint: 'First, add the pages: 185 + 248.' },
        { hint: 'Now round to the nearest hundred. Find which hundreds the number is between.' },
        { hint: 'Look at the tens digit of your sum to decide.' }
      ],
      answer: 400,
      intermediate: { sum: 433 },
      explanation: '185 + 248 = 433 pages. 433 rounded to the nearest hundred is 400 because the tens digit (3) is less than 5.'
    },
    {
      id: 'm5',
      type: 'wordProblem',
      scenario: 'A farmer is planting apple trees.',
      question: 'The farmer planted 15 rows with 12 trees in each row. About how many apple trees are there? Round to the nearest hundred.',
      context: 'Multiplication then rounding',
      steps: [
        { hint: 'Multiply to find the exact number: 15 × 12.' },
        { hint: 'Now round your answer to the nearest hundred.' },
        { hint: 'What two hundreds is your number between?' }
      ],
      answer: 200,
      intermediate: { product: 180 },
      explanation: '15 × 12 = 180 trees. 180 rounded to the nearest hundred is 200 because the tens digit (8) is 5 or greater.'
    },
    {
      id: 'm6',
      type: 'wordProblem',
      scenario: 'A bakery is counting cookies.',
      question: 'The bakery made 235 chocolate chip cookies and 178 sugar cookies. About how many cookies did they make? Round to the nearest hundred.',
      context: 'Addition then rounding',
      steps: [
        { hint: 'Add the two amounts: 235 + 178.' },
        { hint: 'Round your answer to the nearest hundred.' },
        { hint: 'Check the tens digit carefully!' }
      ],
      answer: 400,
      intermediate: { sum: 413 },
      explanation: '235 + 178 = 413 cookies. 413 rounded to the nearest hundred is 400 because the tens digit (1) is less than 5.'
    },
    {
      id: 'm7',
      type: 'wordProblem',
      scenario: 'A toy store is counting inventory.',
      question: 'There are 4 boxes with 165 toys in each box. About how many toys are there? Round to the nearest hundred.',
      context: 'Multiplication then rounding',
      steps: [
        { hint: 'First multiply: 4 × 165.' },
        { hint: 'Now round to the nearest hundred. Between which two hundreds is your answer?' },
        { hint: 'Look at the tens digit to decide whether to round up or down.' }
      ],
      answer: 700,
      intermediate: { product: 660 },
      explanation: '4 × 165 = 660 toys. 660 rounded to the nearest hundred is 700 because the tens digit (6) is 5 or greater.'
    },
    {
      id: 'm8',
      type: 'wordProblem',
      scenario: 'A school is collecting cans for a food drive.',
      question: 'Grade 3 collected 287 cans and Grade 4 collected 356 cans. About how many cans were collected? Round to the nearest hundred.',
      context: 'Addition then rounding',
      steps: [
        { hint: 'Add the two numbers: 287 + 356.' },
        { hint: 'Round the sum to the nearest hundred.' },
        { hint: 'Is the tens digit telling you to round up or stay the same?' }
      ],
      answer: 600,
      intermediate: { sum: 643 },
      explanation: '287 + 356 = 643 cans. 643 rounded to the nearest hundred is 600 because the tens digit (4) is less than 5.'
    }
  ],

  hard: [
    {
      id: 'h1',
      type: 'wordProblem',
      scenario: 'A school is planning a field trip.',
      question: 'There are 8 buses. Each bus holds 47 students. After filling all buses, 13 more students arrive and need to fit in. About how many students are going on the field trip? Round to the nearest hundred.',
      context: 'Multiplication, addition, then rounding',
      steps: [
        { hint: 'Step 1: Find how many students fit in the buses. Multiply 8 × 47.' },
        { hint: 'Step 2: Add the 13 extra students to that number.' },
        { hint: 'Step 3: Round your final answer to the nearest hundred. Find which two hundreds it falls between.' },
        { hint: 'Check the tens digit to decide the final rounding.' }
      ],
      answer: 400,
      intermediate: { product: 376, total: 389 },
      explanation: '8 × 47 = 376 students on buses. 376 + 13 = 389 students total. 389 rounded to the nearest hundred is 400 because the tens digit (8) is 5 or greater.'
    },
    {
      id: 'h2',
      type: 'wordProblem',
      scenario: 'A movie theater is counting weekend attendance.',
      question: 'On Friday, 1,247 people came. On Saturday, 1,893 people came. On Sunday, 1,562 people came. About how many people came to the theater that weekend? Round to the nearest thousand.',
      context: 'Three-number addition then rounding',
      steps: [
        { hint: 'Step 1: Add Friday and Saturday: 1,247 + 1,893.' },
        { hint: 'Step 2: Add Sunday to that sum: + 1,562.' },
        { hint: 'Step 3: Round your total to the nearest thousand.' },
        { hint: 'Look at the hundreds digit of your final sum.' }
      ],
      answer: 5000,
      intermediate: { step1Sum: 3140, total: 4702 },
      explanation: '1,247 + 1,893 = 3,140. 3,140 + 1,562 = 4,702 people. 4,702 rounded to the nearest thousand is 5,000 because the hundreds digit (7) is 5 or greater.'
    },
    {
      id: 'h3',
      type: 'wordProblem',
      scenario: 'A factory packages pencils.',
      question: 'The factory has 275 boxes. Each box contains 24 pencils. 138 pencils are damaged and must be removed. About how many good pencils are left? Round to the nearest thousand.',
      context: 'Multiplication, subtraction, then rounding',
      steps: [
        { hint: 'Step 1: Find the total pencils. Multiply 275 × 24.' },
        { hint: 'Step 2: Subtract the damaged pencils: - 138.' },
        { hint: 'Step 3: Round the remaining pencils to the nearest thousand.' },
        { hint: 'What two thousands is your number between? Check the hundreds digit.' }
      ],
      answer: 6000,
      intermediate: { product: 6600, remaining: 6462 },
      explanation: '275 × 24 = 6,600 pencils. 6,600 - 138 = 6,462 good pencils. 6,462 rounded to the nearest thousand is 6,000 because the hundreds digit (4) is less than 5.'
    },
    {
      id: 'h4',
      type: 'wordProblem',
      scenario: 'A sports store is tracking equipment sales.',
      question: 'The store sold 158 basketballs at $15 each and 246 soccer balls at $12 each. About how much money did the store make? Round to the nearest thousand.',
      context: 'Two multiplications, addition, then rounding',
      steps: [
        { hint: 'Step 1: Calculate basketball money: 158 × $15.' },
        { hint: 'Step 2: Calculate soccer ball money: 246 × $12.' },
        { hint: 'Step 3: Add both amounts together.' },
        { hint: 'Step 4: Round the total to the nearest thousand.' }
      ],
      answer: 5000,
      intermediate: { basketballTotal: 2370, soccerTotal: 2952, grandTotal: 5322 },
      explanation: '158 × $15 = $2,370 (basketballs). 246 × $12 = $2,952 (soccer balls). $2,370 + $2,952 = $5,322 total. $5,322 rounded to the nearest thousand is $5,000 because the hundreds digit (3) is less than 5.'
    },
    {
      id: 'h5',
      type: 'wordProblem',
      scenario: 'A concert venue is setting up chairs.',
      question: 'The venue sets up 28 rows with 36 chairs in each row. Then they add 5 more rows with 42 chairs each. About how many chairs are there? Round to the nearest hundred.',
      context: 'Two multiplications, addition, then rounding',
      steps: [
        { hint: 'Step 1: First section chairs: 28 × 36.' },
        { hint: 'Step 2: Second section chairs: 5 × 42.' },
        { hint: 'Step 3: Add both amounts for the total chairs.' },
        { hint: 'Step 4: Round to the nearest hundred. Check the tens digit!' }
      ],
      answer: 1200,
      intermediate: { firstSection: 1008, secondSection: 210, total: 1218 },
      explanation: '28 × 36 = 1,008 chairs. 5 × 42 = 210 chairs. 1,008 + 210 = 1,218 chairs total. 1,218 rounded to the nearest hundred is 1,200 because the tens digit (1) is less than 5.'
    },
    {
      id: 'h6',
      type: 'wordProblem',
      scenario: 'A water park counts visitors over spring break.',
      question: 'Monday: 2,847 visitors. Tuesday: 3,156 visitors. Wednesday: 1,978 visitors. Thursday: 2,639 visitors. About how many visitors came? Round to the nearest thousand.',
      context: 'Multiple addition then rounding',
      steps: [
        { hint: 'Step 1: Add Monday and Tuesday: 2,847 + 3,156.' },
        { hint: 'Step 2: Add Wednesday: + 1,978.' },
        { hint: 'Step 3: Add Thursday: + 2,639.' },
        { hint: 'Step 4: Round the grand total to the nearest thousand.' }
      ],
      answer: 11000,
      intermediate: { step1Sum: 6003, step2Sum: 7981, total: 10620 },
      explanation: '2,847 + 3,156 = 6,003. 6,003 + 1,978 = 7,981. 7,981 + 2,639 = 10,620 visitors. 10,620 rounded to the nearest thousand is 11,000 because the hundreds digit (6) is 5 or greater.'
    },
    {
      id: 'h7',
      type: 'wordProblem',
      scenario: 'A warehouse ships packages.',
      question: 'There are 156 packages. Each package weighs 18 pounds. The truck can carry 3,000 pounds. About how many more pounds can the truck carry? Round to the nearest hundred.',
      context: 'Multiplication, subtraction, then rounding',
      steps: [
        { hint: 'Step 1: Find total weight: 156 × 18.' },
        { hint: 'Step 2: Subtract from truck capacity: 3,000 - (your answer from step 1).' },
        { hint: 'Step 3: Round the remaining capacity to the nearest hundred.' },
        { hint: 'Look at the tens digit of your remaining capacity.' }
      ],
      answer: 200,
      intermediate: { totalWeight: 2808, remaining: 192 },
      explanation: '156 × 18 = 2,808 pounds. 3,000 - 2,808 = 192 pounds remaining. 192 rounded to the nearest hundred is 200 because the tens digit (9) is 5 or greater.'
    },
    {
      id: 'h8',
      type: 'wordProblem',
      scenario: 'A fundraiser sells raffle tickets.',
      question: 'Students sold 1,245 tickets in week 1, 2,178 in week 2, and 1,956 in week 3. Each ticket costs $3. About how much money was raised? Round to the nearest thousand.',
      context: 'Addition, multiplication, then rounding',
      steps: [
        { hint: 'Step 1: Find total tickets: 1,245 + 2,178 + 1,956.' },
        { hint: 'Step 2: Multiply total tickets by $3 to find money raised.' },
        { hint: 'Step 3: Round the money to the nearest thousand.' },
        { hint: 'Check the hundreds digit to decide your final answer.' }
      ],
      answer: 16000,
      intermediate: { totalTickets: 5379, moneyRaised: 16137 },
      explanation: '1,245 + 2,178 + 1,956 = 5,379 tickets. 5,379 × $3 = $16,137 raised. $16,137 rounded to the nearest thousand is $16,000 because the hundreds digit (1) is less than 5.'
    }
  ]
};
