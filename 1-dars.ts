// 1-ish
// let ism: string = 'Mirkamol'
// let yosh: number = 25
// let talaba: boolean = true

// 2-ish

// function sumNumbers(a: number, b: number): number {
//   return a + b
// }
// console.log(sumNumbers(1, 5))

// 3-ish

// interface Human {
//   ism: string
//   yosh: number
// }

// const oquvchi: Human = {
//   ism: 'Mirkamol',
//   yosh: 16,
// }

// 4-ish

// const arr: number[] = [1, 2, 3, 4, 5, 6]

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// 5-ish

// enum WeekDays {
//   Yakshanba = 'Yakshanba',
//   Dushanba = 'Dushanba',
//   Seshanba = 'Seshanba',
//   Chorshanba = 'Chorshanba',
//   Payshanba = 'Payshanba',
//   Juma = 'Juma',
//   Shanba = 'Shanba',
// }

// const bugun = WeekDays.Payshanba
// console.log(bugun)

// 6-ish

// function consoleValue(a: number | string): void {
//   console.log(a)
// }
// consoleValue(4)

// 7-ish

// function sayHello(ism: string, yosh?: number): string {
//   if (ism && yosh) {
//     return `Salom ${ism}, siz ${yosh} yoshdasiz`
//   } else {
//     return `Salom ${ism}`
//   }
// }
// console.log(sayHello('Mirkamol', 16))

// 8-ish

// function consoleType(a: any): string {
//   return typeof a
// }
// console.log(consoleType('Salom'))

// 9-ish
// class Talaba {
//   private ism: string
//   private kurs: number
//   public constructor(ism: string, kurs: number) {
//     this.ism = ism
//     this.kurs = kurs
//   }
//   public getStudentInfo(): string {
//     return `O'quvchining ismi ${this.ism}, kursi ${this.kurs}`
//   }
// }

// const oquvchi = new Talaba('Mirkamol', 2)
// console.log(oquvchi.getStudentInfo())

// 10-ish

// function getFirst<T>(arr: T[]): T | undefined {
//   return arr[0]
// }
// console.log(getFirst([12, 45, 6, 7, 4]))
