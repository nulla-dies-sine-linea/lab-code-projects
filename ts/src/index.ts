const var1: string = "hey mama";
console.log(var1);

const var2: number = 6;
console.log(var2);

const var3: boolean = true;
console.log(var3);

const var4: number[] = [1, 8];
console.log(var4);

const var5: [number, string, boolean] = [3, "3", true];
// const var6: any = 9;
console.log(var5);

enum Color{
    Back,
    White, 
    Grey
} 
console.log(Color.Back);

// const errorFunction = (): never => {
//     throw new Error("Oops!...I did it again");
// }
// errorFunction();

const concat = <T>(a: string, b:string) => {
    return a + b;
}
console.log(concat<string>("we ", "are"));
console.log(concat<number>("1", "1"));

const concatLog = (a: string, b:string): void =>{
    console.log(a + b);
}

concatLog("counting ", "stars");

type WeaponType = number | null;

interface IPlayer {
    id: string,
    name?: string,
    hp: number,
    weapon: WeaponType,
    isMissing: boolean  
}

interface IBetterPlayer extends IPlayer{
    power: number  
}

const readyPlayerOne: Pick<IPlayer, 'id' | 'hp'| 'weapon'> ={
    id: "dfghfgh",
    hp: 78,
    weapon: null
}

const readyPlayerTwo: Omit<IPlayer, 'isMissing'> ={
    id: "dfghfgh",
    hp: 78,
    weapon: null
}

