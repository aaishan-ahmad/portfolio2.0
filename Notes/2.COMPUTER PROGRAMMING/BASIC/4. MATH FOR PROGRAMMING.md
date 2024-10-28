### Bitwise
- Bitwise is a level of operation that involves working with individual bits which are the smallest units of data in a computing system.
- Each bit has single binary value of 0 or 1. 
- Most programming languages manipulate groups of 8, 16 or 32 bits. These bit multiples are known as bytes
(1 byte = 8 bits).

### Bitwise operator
- Bitwise operators are operators used in computer programming to perform operations on individual bits or binary digits of integers (0 and 1).
- They are used to manipulate binary data at the bit level.

- There are six standard bitwise operators

  1. AND (&)
  2. OR (|)
  3. XOR (^)
  4. NOT (~)
  5. Left Shift (<<)
  6. Right Shift (>>)

### 1. Bitwise AND (&)
- The output of bitwise AND is 1 if both oprands is 1 , otherwise 0.
- The truth table.

    | a | b | a & b |
    |:-:|:-:|:-----:|
    | 0 | 0 |   0   |
    | 0 | 1 |   0   |
    | 1 | 0 |   0   |
    | 1 | 1 |   1   |

### 2. Bitwise OR (&)
- The output of bitwise OR is 1 if at least one corresponding bit of two operands is 1, otherwise 0.
- The truth table.

    | a | b | a or b |
    |:-:|:-:|:-----:|
    | 0 | 0 |   0   |
    | 0 | 1 |   1   |
    | 1 | 0 |   1   |
    | 1 | 1 |   1   |

### 3. Bitwise XOR (^)
- The output of bitwise XOR is 1 if both operands is not same , otherwise 0.
- The truth table.

    | a | b | a ^ b |
    |:-:|:-:|:-----:|
    | 0 | 0 |   0   |
    | 0 | 1 |   1   |
    | 1 | 0 |   1   |
    | 1 | 1 |   0   |


### 4. Bitwise NOT (~)
- Bitwise NOT is a unary operator that takes one input
- output is invert to input.
- The truth table.<br>

    | a | ~a |
    |:-:|:--:|
    | 0 |  1 |
    | 1 |  0 |

### 5. Left Shift (<<)
- a << b means shift bits of a in left direction  b times and blank place contain 0.
- a << b =  a * 2<sup>b</sup>
- example- 00011 << 8 = 110000000

### 6. Right Shift (>>)
- a >> b means shift bits of a in right direction  b times
and blank place contain 0.
- a >> b =  a / 2<sup>b</sup>
- example- 00011 >> 8 = 0


#### NOTE : All operator follow Associativity 
            means a * b * c = b * a * c  , where * is operator






<h1 align="center">Number System</h1>

### Number system
- Number system is defined as a system of writing to express numbers.
- The value of any number can be determined by:
  - The digit
  - Its position in the number
  - The base of the number system

### Number 
- A number is a mathmatical value used for counting or measuring or labelling on objects.
- Number are used to performing arithmetic calculation.

### Types of Number system
- The 4 most common number system types are:
  1. Binary number system (Base 2)
      - uses 10 digits from 0 and 1 , for express the number.
      - example - (0101001)<sub>2</sub> is represent a binary number. 
      - counting - 0, 1 , 10 , 11 , 100 , 101 , 110, 111, 1000

  2. Octal number system (Base 8)
     - uses 8 digits from 0 to 7 ,for express the number.
     - example - (1720)<sub>8</sub> is represent a octal number.
     - counting - 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 10 , 11 , 12 , 13 , 14 

  3. Decimal number system (Base 10)
     - uses 10 digits from 0 to 9 ,for express a decimal number.
     - example - (1920)<sub>10</sub> is represent a decimal number.
     - counting - 0 , 1, 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 
  
  4. Hexadecimal number system (Base 16)
     - uses 16 digits 0 to 9 and a to f ,for express a Hexadecimal number.
     - example - (3a8fb)<sub>16</sub> is represent a hexadecimal.
     - counting - 0 , 1, 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , a , b , c , d , e , f , 10 , 11 

### Conversion
- Two thing u should know , then you can convert a number any base to any base.

  1. Decimal to base b conversion
  2. Base b to Decimal conversion

  #### 1. Decimal to base b conversion
   - (x)<sub>10</sub> to base b
   - x keep dividing by base b , take reminder write in 
   opposite.
   - (18)<sub>10</sub> = (10010)<sub>2</sub> 

   #### 2. Base b to Decimal conversion
   - (x)<sub>b</sub> to decimal
   -  multiply & add the power of base b with digit of x .
   - example (10010)<sub>2</sub> to decimal
     - (2<sup>0</sup> * 0 )+ (2<sup>1</sup> * 1) + (2<sup>2</sup> * 0) + (2<sup>3</sup> * 0)+ (2<sup>4</sup> * 1 ) = 18
   - (10010)<sub>2</sub> =  (18)<sub>10</sub>

### Represent Negative number
- If i have n bits for repersent a number
- Then first bit from the left side ,represent the sign of number. (1 means -ve & 0 means +ve)
- And other (n-1) bits represent the value.

### Range
- The range of any data type depend , the number of bit that use.
- if a data type use n bits for repersent a number 
- then range -> -2<sup>(n-1)</sup> to 2<sup>(n-1)</sup> - 1


 


## Syllabus

### 1.Algebra basic to higher level

### 2.Calculus basic to higher level

### 3.Basic geometric

### 4.Introduction of mathmatics in programming
   - Boolean Algebra and bitwise operator
   - Number System

### 5.Discrete Mathmatics

### 6.Theory of Computations

### 7.Elemments of Analysis


[link with basic](BASIC)
