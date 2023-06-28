1. class RiseToTheOccasion {
2
  constructor() {
3
    this.message = 'Rise to the Occasion!';
4  }
5
  public getMessage(): string {
6
    return this.message;
7
  }
8
  public setMessage(message: string): void {
9
    this.message = message;
10
  }
11
  public displayMessage(): void {
12
    console.log(this.message);
13
  }
14
  public addMessage(message: string): void {
15
    this.message += message;
16
  }
17
  public subMessage(message: string): void {
18
    this.message = this.message.replace(message, '');
19
  }
20
  public resetMessage(): void {
21
    this.message = 'Rise to the Occasion!';
22
  }
23
  public reverseMessage(): void {
24
    this.message = this.message
25
      .split('')
26
      .reverse()
27
      .join('');
28
  }
29
  public toUpperCase(): void {
30
    this.message = this.message.toUpperCase();
31
  }
32
  public toLowerCase(): void {
33
    this.message = this.message.toLowerCase();
34
  }
35
  public logMessageToServer(): void {
36
    fetch('https://example.com/message', {
37
      method: 'POST',
38
      body: JSON.stringify({ message: this.message }),
39
      headers: {
40
        'Content-Type': 'application/json',
41
      },
42
    }).then(() => console.log('Message logged to server!'));
43
  }
44
  public printMessage(): void {
45
    const printer = new Printer();
46
    printer.print(this.message);
47
  }
48
  public static countWords(message: string): number {
49
    return message.split(' ').length;
50
  }
51
  public static getUUID(): string {
52
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
53
      /[xy]/g,
54
      (character) => {
55
        const random = (Math.random() * 16) | 0;
56
        const value = character === 'x' ? random : (random & 0x3) | 0x8;
57
        return value.toString(16);
58
      }
59
    );
60
  }
61
  public static validateMessage(message: string): boolean {
62
    return message.length > 0 && message.length <= 255;
63
  }
64
  public static formatMessage(message: string): string {
65
    return `${message} - RISE UP!`;
66
  }
67
  public static printSuccessMessage(message: string): void {
68
    const successMessage = RiseToTheOccasion.formatMessage(message);
69
    console.log(successMessage);
70
  }
71
  public static printErrorMessage(message: string): void {
72
    const errorMessage = `ERROR: ${message}`;
73
    console.error(errorMessage);
74
  }
75  }
76
  class Printer {
77
    public print(message: string): void {
78
      console.log(`PRINTING: ${message}`);
79
    }
80
  }
81
  const instance = new RiseToTheOccasion();
82
  instance.addMessage(' - Take Action!');
83
  // Validate Message
84
  if (RiseToTheOccasion.validateMessage(instance.getMessage())) {
85
    // Print Success Message
86
    RiseToTheOccasion.printSuccessMessage(instance.getMessage());
87
  } else {
88
    // Print Error Message
89
    RiseToTheOccasion.printErrorMessage(instance.getMessage());
90
  }
91
  // Count words in Message
92
  const wordCount = RiseToTheOccasion.countWords(instance.getMessage());
93
  console.log(`Word Count: ${wordCount}`);
94
  // Log Message to Server
95
  instance.logMessageToServer();
96
  // Print Message
97
  instance.printMessage();
98
  // Reverse Message
99
  instance.reverseMessage();
100
  console.log(instance.getMessage());
101
  // Reset Message
102
  instance.resetMessage();
103
  console.log(instance.getMessage());
104
  // Generate UUID
105
  const uuid = RiseToTheOccasion.getUUID();
106
  console.log(`UUID: ${uuid}`);
107
  // To Upper Case
108
  instance.toUpperCase();
109
  console.log(instance.getMessage());
110
  // To Lower Case
111
  instance.toLowerCase();
112
  console.log(instance.getMessage());