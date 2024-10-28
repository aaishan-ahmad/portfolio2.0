## TOPICS
#### 1. Digital Logic Circuits:
Digital computers – Logic gates – Boolean algebra – Map simplification – Combinational circuits – Flip-flops – Digital Components: Integrated circuits – Decoders – Multiplexers – Registers.
#### 2. Data Representation: 
Data types – Complements – Fixed point representation – Floating point representation. Register Transfer and Microoperations: Register transfer language– Register transfer –Bus and memory transfers – Arithmetic microoperations – Logic Microoperations – Shift Microoperations – Arithmetic logic shift unit.
#### 3. Central Processing Unit: 
Introduction, General Register Organization, Stack Organization, Instruction Format, Addressing Modes, Data Transfer and Manipulation, Program Control, Reduced Instruction Set Computer.
#### 4. Computer Arithmetic: 
 Introduction, Addition and Subtraction, Multiplication Algorithms, Division Algorithm, Floating-Point Arithmetic Operation, Decimal Arithmetic Unit.
#### 5. Input-Output Organization:
Peripheral Devices, Input-Output Interface, Asynchronous Data Transfer, Modes of Transfer, Direct Memory Access, Input-Output Processor.
#### 6. Memory Organization:
Memory Hierarchy, Associative Memory, Cache Memory, Virtual Memory.

## LABS
#### Introduction What is linux/unix Operating systems 
a) Difference between linux/unix and other operating systems b) Features and Architecture c) Various Distributions available in the market d) Installation, Booting and shutdown process e) System processes (an overview) f) External and internal commands g) Creation of partitions in OS h) Processes and its creation phases – Fork, Exec, wait
#### User Management and the File System 
a) Types of Users, Creating users, Granting rights b) User management commands c) File quota and various file systems available d) File System Management and Layout, File permissions e) Login process, Managing Disk Quotas f) Links (hard links, symbolic links)
#### Shell introduction and Shell scripting 
a) What is shell and various type of shell, Various editors present in linux 
b) Different modes of operation in vi editor c) What is shell script, Writing and executing the shell script d) Shell variable (user defined and system variables) e) System calls, Using system calls f) Pipes and Filters g) Decision making in Shell Scripts (If else, switch), Loops in shell h) Functions i) Utility programs (cut, paste, join, tr , uniq utilities) j) Pattern matching utility (grep)

## BOOKS

#### Topics
Text Book: 
1. M.Morris Mano-Computer System Architecture, 3rdEdition, Pearson Education, New Delhi, 2006. Recommended Books:
 Reference Books: 
 1. W. Stallings- Computer Organization & Architecture, 7thEdition, Pearson Education, New Delhi, 2006 2.N. Carter- Computer Architecture, Schaums Outline Series, TMH, New Delhi, 200

#### LAB
Text Book: 
1. Sumitabha, Das, Unix Concepts And Applications, Tata McGraw-Hill Education, 2006
 Reference Books: 
1. Michael Jang RHCSA/ RHCE Red Hat Linux Certification: Exams (Ex200 & Ex300) (Certification Press), 2011 
2. Nemeth Synder& Hein, Linux Administration Handbook, Pearson Education, 2nd Edition ,2010 
3. W. Richard Stevens, Bill Fenner, Andrew M. Rudoff, Unix Network Programming, The sockets Networking API, Vol. 1, 3rd Edition,2014

////////////////////////////////////////////
## **Syllabus: Computer System Architecture and Organization**

### **1. Digital Logic Circuits**

- **Introduction to Digital Logic Circuits**
    - Number Systems: Binary, Octal, Decimal, Hexadecimal
    - Logic Gates: AND, OR, NOT, NAND, NOR, XOR
    - Boolean Algebra: Basic Theorems and Properties
- **Simplification Techniques**
    - Karnaugh Maps (K-Map)
    - Quine-McCluskey Method
- **Combinational Circuits**
    - Adders, Subtractors
    - Multiplexers, Demultiplexers
    - Encoders, Decoders
    - Comparators
- **Sequential Circuits**
    - Flip-Flops: SR, D, JK, T
    - Counters: Synchronous and Asynchronous
    - Shift Registers

---

### **2. Data Representation**

- **Data Types and Number Representation**
    - Unsigned and Signed Numbers
    - Complements: 1’s and 2’s Complements
- **Fixed Point and Floating Point Representation**
    - IEEE 754 Standard
    - Precision and Accuracy in Floating Point Operations
    - Normalization and Denormalization

---

### **3. Register Transfer and Microoperations**

- **Register Transfer Language (RTL)**
    - Basic Microoperations: Arithmetic, Logical, and Shift Microoperations
    - Bus and Memory Transfers
- **Arithmetic Logic Shift Unit**
    - Design and Implementation
    - Arithmetic Microoperations: Addition, Subtraction
    - Logical Microoperations: AND, OR, NOT
    - Shift Operations: Logical, Arithmetic, and Circular Shifts

---

### **4. Central Processing Unit (CPU) Organization**

- **General Register Organization**
    - Register File
    - ALU (Arithmetic Logic Unit)
- **Stack Organization**
    - Stack Pointer, Operations on Stack
- **Instruction Formats and Addressing Modes**
    - Types of Instructions: Data Transfer, Control, and Manipulation
    - Addressing Modes: Immediate, Direct, Indirect, Indexed
- **Program Control**
    - Branching, Subroutine Call, and Return
- **Reduced Instruction Set Computer (RISC)**
    - RISC vs CISC
    - Characteristics and Advantages of RISC Architecture

---

### **5. Computer Arithmetic**

- **Addition and Subtraction Algorithms**
    - Ripple Carry Adder
    - Carry Lookahead Adder
    - Binary Subtraction and Borrow Logic
- **Multiplication Algorithms**
    - Booth's Algorithm
    - Array Multiplier
- **Division Algorithms**
    - Restoring and Non-Restoring Division
- **Floating-Point Arithmetic**
    - Addition, Subtraction, Multiplication, and Division of Floating-Point Numbers
- **Decimal Arithmetic Unit**
    - BCD Addition and Subtraction

---

### **6. Input-Output Organization**

- **Peripheral Devices**
    - Input-Output Interface: Keyboard, Mouse, Display
- **Asynchronous Data Transfer**
    - Handshaking, Strobe Signals
- **Modes of Transfer**
    - Programmed I/O, Interrupt-Driven I/O
- **Direct Memory Access (DMA)**
    - DMA Controller and Transfer Process
- **Input-Output Processor (IOP)**
    - Characteristics and Role of IOP

---

### **7. Memory Organization**

- **Memory Hierarchy**
    - Cache Memory, Main Memory, Secondary Storage
    - Memory Performance: Access Time, Cycle Time, Hit/Miss Ratio
- **Associative (Content Addressable) Memory**
    - Cache Organization: Direct Mapped, Associative, Set-Associative
- **Virtual Memory**
    - Paging, Segmentation, Address Translation
    - TLB (Translation Lookaside Buffer)

---

### **8. Instruction Set Architecture (ISA)**

- **MIPS Architecture**
    - MIPS Instruction Format: R-type, I-type, J-type
    - MIPS Assembly Programming Basics
- **x86 and ARM Architectures**
    - Comparison with MIPS
    - Instruction Set Differences: CISC vs RISC
- **Endianness and Data Alignment**
    - Little Endian vs Big Endian
    - Alignment Requirements in Memory

---

### **9. Pipeline and Superscalar Architectures**

- **Instruction Pipelining**
    - Basic Concepts of Pipeline: Stages, Throughput
    - Pipeline Hazards: Data, Structural, Control Hazards
    - Hazard Mitigations: Forwarding, Bypassing, Branch Prediction
- **Superscalar and Out-of-order Execution**
    - Instruction-level Parallelism
    - Register Renaming, Dynamic Scheduling

---

### **10. Memory Hierarchy and Cache Design**

- **Cache Organization and Mapping Techniques**
    - Direct-Mapped, Set-Associative, Fully Associative
    - Cache Coherence in Multiprocessor Systems
- **Prefetching Techniques**
    - Hardware Prefetching, Software Prefetching
- **Virtual Memory Systems**
    - Page Replacement Algorithms: FIFO, LRU

---

### **11. Parallel Processing**

- **Parallel Architectures**
    - SIMD, MIMD Architectures
    - Shared Memory vs Distributed Memory
- **Multicore Processors**
    - Symmetric Multiprocessing (SMP)
    - Multithreading and Hyperthreading
- **Amdahl's Law and Speedup**

---

### **12. Storage and I/O Systems**

- **Non-volatile Storage**
    - Hard Disk, Solid-State Drives (SSD)
    - Disk Scheduling Algorithms
- **RAID Levels**
    - RAID 0, 1, 5, 6: Concepts and Performance

---

### **13. System Control and Exceptions**

- **Interrupts and Exception Handling**
    - Types of Interrupts: Software, Hardware
    - Interrupt Service Routine (ISR)
    - Context Switching
- **Speculative Execution**
    - Concepts and Vulnerabilities (e.g., Spectre and Meltdown)

---

## **Labs and Practicals**

1. **Digital Circuit Design**
    
    - Implement logic gates, multiplexers, flip-flops using digital simulation tools.
    - Design of combinational and sequential circuits.
2. **Assembly Language Programming**
    
    - Simple programs in MIPS to demonstrate basic arithmetic, control flow, and loops.
    - Implement basic I/O and system call operations.
3. **Linux Operating System**
    
    - Unix/Linux installation, basic shell commands, file system management.
    - Process management, inter-process communication using pipes, signals, etc.
4. **CPU Simulation Tools**
    
    - Simulate single-cycle and multi-cycle processors using tools like Logisim.
    - Implement pipeline stages and handle pipeline hazards.
5. **Cache Simulation**
    
    - Simulate cache memory and study different mapping techniques.
    - Analyze cache performance using hit/miss rates.

---

## **Recommended Books**

### **Textbooks:**

1. **M. Morris Mano** - _Computer System Architecture_ (3rd Edition), Pearson Education.
2. **William Stallings** - _Computer Organization and Architecture_ (7th Edition), Pearson Education.

### **Reference Books:**

1. **N. Carter** - _Computer Architecture_, Schaum's Outline Series, TMH.
2. **David Patterson & John Hennessy** - _Computer Organization and Design_ (5th Edition), Morgan Kaufmann.

---

This structure covers both fundamental and advanced topics with sufficient practical labs to strengthen theoretical concepts.

4o

